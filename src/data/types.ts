export interface GlyphInstance {
  id: string;
  charArt: string;
  glyph: string;
  modernChar?: string;
  height: number;
}

export type StreamItem =
  | { type: "glyph"; glyphId: string }
  | { type: "delimiter"; kind: "comma" | "period" };

export interface SentenceSegment {
  streamSlice: StreamItem[];
  translation: {
    zhHant: string;
    zhHans: string;
    en: string;
  };
}

export interface ColumnLayout {
  columnIndex: number;
  glyphIds: string[];
}

export interface Annotation {
  glyphIds: string[];
  lemma: string;
  /** 可包含 HTML 标签（如 <br>），渲染时作为 innerHTML */
  body: string;
}

export interface BambooData {
  id: number;
  name: {
    zhHant: string;
    zhHans: string;
    en: string;
  };
  glyphPool: Record<string, GlyphInstance>;
  layout: ColumnLayout[];
  sentences: SentenceSegment[];
  horizontalStreams: StreamItem[][];
  annotations: {
    zhHans: Annotation[];
    zhHant: Annotation[];
    en: Annotation[];
  };
}
