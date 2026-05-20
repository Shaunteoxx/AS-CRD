#!/usr/bin/env node
'use strict';

const fs = require('fs');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ShadingType,
  AlignmentType,
  LevelFormat,
} = require('docx');

const inputPath = process.argv[2];
const outputPath = process.argv[3];
if (!inputPath || !outputPath) {
  process.stderr.write('Usage: node md_to_docx.js <input.md> <output.docx>\n');
  process.exit(1);
}

const md = fs.readFileSync(inputPath, 'utf8');

// US Letter (8.5") minus 1" margins on each side = 6.5" = 9360 DXA
const PAGE_WIDTH = 9360;

function getColWidths(headers) {
  const n = headers.length;
  const h = headers.map((s) => s.toLowerCase().replace(/[^a-z]/g, ''));

  if (n === 2) return [2500, 6860];

  if (n === 5 && h.some((s) => s.includes('requirement') || s.includes('actor') || s.includes('action')))
    return [800, 1800, 1200, 2560, 3000];

  if (n === 3 && h.some((s) => s.includes('source') || s.includes('quote') || s.includes('reference')))
    return [1800, 1560, 6000];

  if (n === 4 && h.some((s) => s.includes('issue') || s.includes('raised') || s.includes('status')))
    return [500, 6000, 1560, 1300];

  const even = Math.floor(PAGE_WIDTH / n);
  const remainder = PAGE_WIDTH - even * n;
  return Array.from({ length: n }, (_, i) => even + (i < remainder ? 1 : 0));
}

function parseInlineRuns(text) {
  const runs = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) {
      runs.push(new TextRun({ text: text.slice(last, m.index) }));
    }
    const part = m[0];
    if (part.startsWith('**')) {
      runs.push(new TextRun({ text: part.slice(2, -2), bold: true }));
    } else {
      runs.push(new TextRun({ text: part.slice(1, -1), italics: true }));
    }
    last = regex.lastIndex;
  }
  if (last < text.length) {
    runs.push(new TextRun({ text: text.slice(last) }));
  }
  return runs.length > 0 ? runs : [new TextRun({ text })];
}

function buildTable(tableLines) {
  const parseRow = (line) =>
    line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

  const headers = parseRow(tableLines[0]);
  const dataRows = tableLines
    .slice(2)
    .filter((l) => !/^[\|\s:-]+$/.test(l.trim()))
    .map(parseRow);

  const colCount = headers.length;
  const colWidths = getColWidths(headers);

  const CELL_MARGINS = { top: 80, bottom: 80, left: 120, right: 120 };

  const makeCell = (text, isHeader, colIndex) =>
    new TableCell({
      width: { size: colWidths[colIndex], type: WidthType.DXA },
      margins: CELL_MARGINS,
      shading: {
        type: ShadingType.CLEAR,
        color: 'auto',
        fill: isHeader ? 'F3F4F6' : 'FFFFFF',
      },
      children: [
        new Paragraph({
          children: isHeader
            ? [new TextRun({ text, bold: true })]
            : parseInlineRuns(text),
        }),
      ],
    });

  const rows = [
    new TableRow({ children: headers.map((h, ci) => makeCell(h, true, ci)) }),
    ...dataRows.map(
      (row) =>
        new TableRow({
          children: row
            .slice(0, colCount)
            .map((v, ci) => makeCell(v, false, ci)),
        })
    ),
  ];

  return new Table({
    width: { size: PAGE_WIDTH, type: WidthType.DXA },
    columnWidths: colWidths,
    rows,
  });
}

const numbering = {
  config: [
    {
      reference: 'bullet-list',
      levels: [
        {
          level: 0,
          format: LevelFormat.BULLET,
          text: '‣', // triangular bullet — rendered by Word, not injected as plain text
          alignment: AlignmentType.LEFT,
          style: {
            paragraph: {
              indent: { left: 720, hanging: 360 },
            },
          },
        },
      ],
    },
    {
      reference: 'number-list',
      levels: [
        {
          level: 0,
          format: LevelFormat.DECIMAL,
          text: '%1.',
          alignment: AlignmentType.LEFT,
          style: {
            paragraph: {
              indent: { left: 720, hanging: 360 },
            },
          },
        },
      ],
    },
  ],
};

const children = [];
const lines = md.split('\n');
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  const stripped = line.trim();

  // Fenced code block — skip content
  if (stripped.startsWith('```')) {
    i++;
    while (i < lines.length && !lines[i].trim().startsWith('```')) i++;
    i++;
    continue;
  }

  // Horizontal rule — skip
  if (/^[-*_]{3,}$/.test(stripped)) {
    i++;
    continue;
  }

  // Headings: ## → Heading 1, ### → Heading 2
  const hm = stripped.match(/^(#{1,6})\s+(.*)/);
  if (hm) {
    const depth = hm[1].length;
    const text = hm[2].trim();
    const heading =
      depth === 1
        ? HeadingLevel.TITLE
        : depth === 2
        ? HeadingLevel.HEADING_1
        : depth === 3
        ? HeadingLevel.HEADING_2
        : HeadingLevel.HEADING_3;
    children.push(new Paragraph({ heading, children: [new TextRun({ text })] }));
    i++;
    continue;
  }

  // Table: current line starts with | and next line is a separator
  if (
    stripped.startsWith('|') &&
    i + 1 < lines.length &&
    /^[\|\s:-]+$/.test(lines[i + 1].trim())
  ) {
    const tableLines = [];
    while (i < lines.length && lines[i].trim().startsWith('|')) {
      tableLines.push(lines[i]);
      i++;
    }
    children.push(buildTable(tableLines));
    children.push(new Paragraph({}));
    continue;
  }

  // Unordered list item
  if (/^[-*+]\s/.test(stripped)) {
    children.push(
      new Paragraph({
        numbering: { reference: 'bullet-list', level: 0 },
        children: parseInlineRuns(stripped.slice(2)),
      })
    );
    i++;
    continue;
  }

  // Ordered list item
  const om = stripped.match(/^\d+\.\s(.*)/);
  if (om) {
    children.push(
      new Paragraph({
        numbering: { reference: 'number-list', level: 0 },
        children: parseInlineRuns(om[1]),
      })
    );
    i++;
    continue;
  }

  // Empty line — skip (Word already adds spacing between paragraphs)
  if (!stripped) {
    i++;
    continue;
  }

  // Normal paragraph
  children.push(new Paragraph({ children: parseInlineRuns(stripped) }));
  i++;
}

const doc = new Document({ numbering, sections: [{ children }] });

Packer.toBuffer(doc)
  .then((buf) => {
    fs.writeFileSync(outputPath, buf);
  })
  .catch((err) => {
    process.stderr.write(`Error: ${err.message}\n`);
    process.exit(1);
  });
