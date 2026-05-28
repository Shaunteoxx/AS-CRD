export function extractBrdTitle(markdown) {
  const h1 = markdown.match(/^#\s+(.+)$/m)
  if (h1) return h1[1].trim()
  return 'Business Requirement'
}
