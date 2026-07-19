---
name: Bamboo Inscription
description: A communal farewell gift explained through ancient bronze script
colors:
  bg-dark: "#1a1a1a"
  havana-brown: "#5C3317"
  inscription-gold: "#C8A96E"
  accent-red: "#A83232"
  text-warm: "#E8DCC8"
typography:
  display:
    fontFamily: "'Noto Serif SC', 'Noto Serif TC', Georgia, 'Times New Roman', serif"
    fontWeight: 400
  body:
    fontFamily: "'Noto Serif TC', 'Noto Serif SC', Georgia, 'Times New Roman', serif"
    fontWeight: 300
    lineHeight: 1.75
---

# Design System: Bamboo Inscription

## 1. Overview

**Creative North Star: "A Gift"**

A single bamboo stands in a community space. On it, ancient bronze script — a language of farewell and blessing — meets a modern community finding its own meanings. The page is that bamboo's companion: dark, quiet, warm-lit. The inscription is the gift.

This is not a museum display. It is a personal artifact shared in a community space. The design is restrained and warm — it lets the characters speak, frames them with quiet dignity, and trusts the visitor to feel the weight of a 3000-year-old script offered as a goodbye.

**Key Characteristics:**
- Dark, grounded, warm — not cold or academic
- Characters as primary visual element — layout serves the text
- Warm gold and deep red accents against near-black backdrop
- Calm confidence — nothing flashing, nothing excessive

## 2. Colors

A restrained palette built around the bamboo's Havana brown warmth and the inscription's gold.

### Primary
- **Inscription Gold** (`#C8A96E` / `oklch(0.72 0.14 85)`): The primary accent. Used for the inscription characters themselves, and sparingly for interactive highlights (hover states, borders on key UI). Its rarity defines its value.

### Secondary
- **Accent Red** (`#A83232` / `oklch(0.45 0.16 25)`): A warm, muted red. Used as a secondary accent for seals, stamps, or highlight elements. Not aggressive — aged cinnabar rather than fresh blood.

### Neutral
- **Dark Wall** (`#1a1a1a` / `oklch(0.18 0.005 0)`): The page background. Near-black, slightly warm.
- **Havana Brown** (`#5C3317` / `oklch(0.37 0.07 50)`): Frame, section dividers, or container backgrounds where warmth is needed below the gold level. Tuned warm-reddish to match the bamboo's natural tone.
- **Warm Text** (`#E8DCC8` / `oklch(0.88 0.025 80)`): Body text on dark. A warm off-white that reads clearly without being stark.

### Named Rules
**The One Voice Rule.** Gold is the single primary accent. Red is reserved for secondary/seal moments. Havana brown provides warmth at the container level. White/gray text is explicitly forbidden — all text carries a warm cast.

## 3. Typography

**Display Font:** Noto Serif SC (with Noto Serif TC, Georgia, Times New Roman serif fallback)
**Body Font:** Noto Serif TC (with Noto Serif SC, Georgia, Times New Roman serif fallback)

**Character:** A single serif voice throughout — the warmth of Songti (宋体) carries both the inscription context and explanatory text. A lighter weight (300) for body copy lets the gold inscription characters dominate, while the serif keeps the entire page grounded in literary warmth. Chinese serif at light weight retains legibility where a Latin sans would feel too cold for the subject.

### Hierarchy
- **Display** (400, `clamp(1.75rem, 4vw, 3rem)`, 1.2): The bamboo title. Treated with restraint — capital letters, loose tracking.
- **Body** (300, `clamp(0.9375rem, 2vw, 1.125rem)`, 1.75): Description and explanation text. Max line length 70ch for English, 35ch for Chinese. Set in warm off-white.

### Named Rules
**The Quiet Serif Rule.** Body text is Noto Serif Light (300 weight). Never heavier than 400 for running text. The typography recedes so the inscription dominates. The serif keeps the page warm and grounded — a Songti companion to the ancient script rather than a clinical sans.

## 4. Elevation

Flat by default. The page is a wall — no drop shadows, no floating elements. Depth is conveyed through tonal contrast (near-black wall vs warm text vs gold accent), not through shadow.

Should cards or containers ever be needed, they use a Havana brown tint rather than a shadow.

## 5. Components

### Inscription Layout
- **Shape:** Grid of character cells, gold characters on dark, zero gaps between cells
- **Background:** Transparent — sits directly on the dark wall
- **Character treatment:** SVG display, full cell width, object-fit contain, warm gold tint
- **Container:** Centered on page, responsive, scales to viewport height on mobile when feasible

### Navigation (future: multiple bamboos)
- **Style:** Minimal — a small back/list link at top, Havana brown text on dark, underline on hover
- **State:** Plain link at rest, gold underline + shift on hover

## 6. Do's and Don'ts

### Do:
- **Do** let the inscription characters occupy the full visual weight of the page.
- **Do** use gold sparingly — it's the accent, not the surface.
- **Do** keep text warm-toned on the dark background.
- **Do** treat the page as a wall the bamboo leans against — flat, grounded, dark.

### Don't:
- **Don't** use white (`#FFFFFF`) or pure gray text.
- **Don't** add decorative flourishes, borders, or card shadows.
- **Don't** make the inscription compete with navigation, headers, or chrome.
- **Don't** use the Havana brown as a main page background — it belongs in containers and frames.
- **Don't** use the accent red as a primary action color; it's for secondary moments and seals.
