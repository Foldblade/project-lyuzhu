import type { StreamItem, GlyphInstance } from './types'

export function toStream(
  text: string,
  glyphsInOrder: GlyphInstance[],
  startPos = 0,
): StreamItem[] {
  const result: StreamItem[] = []
  let pos = startPos

  for (const ch of text) {
    if (ch === '、') {
      result.push({ type: 'delimiter', kind: 'comma' })
      continue
    }
    if (ch === '。') {
      result.push({ type: 'delimiter', kind: 'period' })
      continue
    }

    while (pos < glyphsInOrder.length) {
      const g = glyphsInOrder[pos]
      pos++
      if (ch === g.charArt || ch === g.glyph || ch === g.modernChar) {
        result.push({ type: 'glyph', glyphId: g.id })
        break
      }
    }
  }

  return result
}

export function readingOrder(glyphPool: Record<string, GlyphInstance>, columnIds: string[][]): GlyphInstance[] {
  return columnIds.flatMap(col => col.map(id => glyphPool[id]))
}
