<!--
==================================================================
CRD TEMPLATE  —  AI: read this header before filling anything.

A CRD is the faithful record of ONE client's request. It is NOT the
solution design — decomposition into deliverables happens later in BRDs.
Capture and structure the request; do not redesign it.

SINGLE-CLIENT DISCIPLINE:
  • Exactly one subject client. Other companies in the sources may be
    examples/partners/vendors — do not merge their needs in.
  • Watch for near-identical names that are different entities or
    engagements; keep them distinct.

PLATFORM MODEL & NAMING (apply in your own prose only):
  • Tiers: Platform → Workspace → Solution; with End Users and Workspace
    Admin Users (roles: Owner, Collaborator). Solutions contain workflows.
  • Do NOT use "project" or "team" as platform tiers. If a source uses
    "project" for the tier grouping workflows, render it "Solution" and
    add a Terminology Note. If "project" means a real-world construction
    site, keep it and write "project (construction site)" on first use.
  • Platform = "Allo8"; vendor/company = "Allocate Space". Do not adopt
    other product names (e.g. "Allocate Checks", "Allocate Pay") in prose;
    flag any such discrepancy in Open Issues.

FAITHFUL-CAPTURE RULE:
  • Term/name normalisation applies to YOUR prose only. In Supporting
    Evidence, preserve the client's exact wording verbatim (including
    "project" or any product name). Every normalisation and every
    inference must also be listed in Open Issues.

FORMATTING: keep a blank line between consecutive bold fields (Document
Control, §1) so Markdown does not collapse them onto one line.

GAPS: if a field is not in the sources, leave it blank and flag it in
Open Issues. No "TBD"/"N/A".
==================================================================
-->

# [Client Name]
<!-- AI: Use the subject client's full company name exactly as it appears in the sources, e.g. "SunPro Energies Pte. Ltd.","Gim Tian Civil Engineering GT Safe". This is the document title. -->

_Client Request Document (CRD)_

---

## Document Control

**Docs ID:** <!-- AI: Exact same value as this document's filename. Do not generate a new ID or a CRD-001 format. -->

**Client Name:** <!-- AI: The subject client's company name, extracted from the sources. -->

**Prepared By:** <!-- AI: Leave blank — for the team. -->

**Date Prepared:** <!-- AI: Today's date, YYYY-MM-DD. -->

**Status:** Draft

**Linked BRD:** <!-- AI: Leave blank — the team adds BRD IDs (e.g. B-03) here once BRDs are created, mapping to the BR-0N requirements below. -->

<!-- AI: Include the Terminology Note line below ONLY if you normalised a source term (e.g. mapped "project" to "Solution"); otherwise delete it. -->
**Terminology Note:** <!-- e.g. The source uses "project" for the platform tier grouping workflows; this is recorded here as "Solution". "project (construction site)" refers to a physical job site. -->

---

## 1. Client Information

<!--
AI:
- Extract all client details; blank + flag in Open Issues if absent.
- POC and Request Raised By may be the same person — note if so.
- Source: list every type of document provided (e.g. "Meeting Notes, Proposal"), not just one.
- Account Type: infer from size/headcount/revenue if not stated, and flag as inferred.
- ARR: only if explicitly stated; never estimate.
-->

**Client Name:**

**Point of Contact (POC):** _(name and role)_

**Account Type:** Enterprise / SMB / Other

**Request Raised By:** _(name and role — can be same as POC)_

**Date of Request:** YYYY-MM-DD

**Source:** _(list all document types/names that apply)_

---

## 2. Request Summary

### 2.1 Underlying Problems

<!--
AI:
- One distinct root problem per numbered point — what is actually going wrong, not what the client is asking for.
- One issue per point; plain language.
- These provide the context for the requirements in §3.
-->

1.
2.
3.

### 2.2 Desired Outcome

<!--
AI:
- 2–4 sentences on the high-level end state the client wants. Do not repeat §2.1 point by point.
- §3 requirements derive from this — ensure it captures everything the client is asking for.
- Cross-check: every problem in §2.1 must be reflected here.
-->

### 2.3 Trigger Event

<!--
AI:
- The specific event/change prompting this request now (deadline, opportunity, contract, competitive/internal driver).
- List multiple triggers separately. If none stated, infer from context and flag as inferred.
-->

### 2.4 Request Constraints

<!--
AI:
- Client-level limitations only (budget, required integrations, regulatory, preferred vendors).
- Per-requirement constraints go in §3, not here. If none, leave blank and flag.
-->

-
-

---

## 3. Business Requirements

<!--
AI:
- One entry per distinct business NEED (not per feature/sub-step); group related actions into one entry.
- If a single need clearly spans multiple distinct actors or platform tiers (e.g. end users AND admins AND workspace setup), keep it as the client expressed it but add an Open Issue noting it may decompose into several BRDs downstream.
- BR ID: BR-01, BR-02, … no letter suffixes.
- Heading: "### BR-0N  <Business Name>" — the BR ID and a short plain-English name (no acronyms; spell terms out, e.g. "Permit application management", not "PTW") on one line, separated by two spaces.
- Description: a paragraph of 2–4 sentences directly under the heading — what it should do, how it works at a high level, the client outcome. No label and no bullet list; no technical implementation. Use the platform model/naming in your wording.
- Constraints: a single line beginning with the bold label "**Constraints**" then the constraint text, specific to THIS requirement only. Omit the line entirely if there are none.
- After listing, cross-check every problem in §2.1 is addressed by at least one entry; add entries if any is uncovered.
-->

### BR-01  _(Business Name)_

_(Description — 2–4 sentences: what it should do, how it works at a high level, and the client outcome.)_

**Constraints** _(specific to this requirement only; omit this line if there are none)_

### BR-02  _(Business Name)_

_(Description)_

**Constraints** _(or omit if none)_ : 

### BR-03  _(Business Name)_

_(Description)_

**Constraints** _(or omit if none)_

---

*This document was auto-generated from unstructured source documents. All content should be reviewed and validated by the team before use.*

---

## Appendix A — Supporting Evidence

<!--
AI:
- Direct quotes that support the problems/requirements above.
- Preserve EXACT original wording — do not paraphrase or normalise terms here.
- Give the source document name and a reference (timestamp / slide / page) for each quote.
-->

**Direct Quotes**

1.
   - **Source:**
   - **Reference:** _(timestamp / slide / page)_
   - **Quote:**

2.
   - **Source:**
   - **Reference:** _(timestamp / slide / page)_
   - **Quote:**

---

## Appendix B — Internal Notes

<!-- AI: Leave this entire section blank — for the team after review. -->

**Additional Context**

_(Any additional context not captured in the source documents)_

**Linked BRD**

_(URL / BRD IDs — added once the BRD is created)_

---

## Appendix C — Open Issues & Questions

<!--
AI:
- List every field/section that could not be filled, every inference, every term/name normalisation, and any contradiction or unclear point.
- Flag requests that map mostly to "New" (future) platform capabilities with the roadmap-vs-custom question.
- Flag any requirement that may decompose into multiple BRDs downstream.
- Neutral, factual language. Number sequentially from 1.

Examples:
- "Account Type inferred as Enterprise based on headcount and project scale — team to verify."
- "Source uses 'Allocate Checks' for the platform; recorded as 'Allo8' in prose — confirm product naming."
- "BR-0X bundles end-user, solution, and workspace administration; may decompose into separate BRDs."
-->

1.
   - **Issue / Question:**
   - **Raised By:** AI-generated
   - **Status:** Open

2.
   - **Issue / Question:**
   - **Raised By:** AI-generated
   - **Status:** Open
