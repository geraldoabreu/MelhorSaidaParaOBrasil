---
name: Melhor Saída para o Brasil
description: Dawn-ground life-route board with terminal yellow wayfinding.
colors:
  band: "#f5c400"
  band-ink: "#111111"
  open: "#9b1c2e"
  dawn-high: "#8eb4c8"
  dawn-mid: "#e7b07a"
  dawn-low: "#c45c3a"
  ink: "#14110c"
  paper: "#f4ead6"
  metal: "#c4b896"
  metal-dark: "#2a261f"
  note-ink: "#4a4034"
  focus: "#111111"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(4.2rem, 14vw, 9.5rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.4rem, 3vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0"
spacing:
  band-y: "0.85rem"
  band-x: "1.25rem"
  gutter: "5vw"
  section-y: "12vh"
  split: "4rem"
  product-gap: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    rounded: "{rounded.none}"
    padding: "0 1.2rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.band}"
    rounded: "{rounded.none}"
  nav-link:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    rounded: "{rounded.none}"
    padding: "0 1.15rem"
  nav-cta:
    backgroundColor: "{colors.band-ink}"
    textColor: "{colors.band}"
    rounded: "{rounded.none}"
    padding: "0 1.15rem"
  nav-cta-hover:
    backgroundColor: "{colors.metal-dark}"
    textColor: "{colors.band}"
    rounded: "{rounded.none}"
  board-row:
    backgroundColor: "{colors.metal-dark}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.1rem"
  board-row-open:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.1rem"
  board-row-wait:
    backgroundColor: "{colors.metal-dark}"
    textColor: "{colors.metal}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.1rem"
  hope-panel:
    backgroundColor: "rgb(244 234 214 / 0.92)"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12vh 5vw"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "3rem 5vw 4rem"
---

# Design System: Melhor Saída para o Brasil

## Overview

**Creative North Star: "The Life-Route Board"**

This world is a restart route, not a travel brochure. A saturated yellow decision band sticks to the top of every page like terminal wayfinding; under it, a cream condensed headline sits on a dawn sky, then a dark metal destination board lists possible lives. The airport is a wink in the name and in the board’s grammar (columns, statuses, split-flap motion on one verb). It is never the subject: no jets, no gates, no luggage iconography.

Surfaces are square, type is black-on-yellow or cream-on-dawn, and conversion is a yellow slab button — the same yellow as the band, inverted to ink on hover. Products are ruled listings with a cover, not a grid of equal cards. Paraguay is the only open row; other lives wait in metal type.

**Key Characteristics:**
- Sticky yellow wayfinding band with condensed uppercase identity
- Monumental cream condensed headlines on photographic dawn ground
- Dark metal destination board as the destination index
- Square slabs; no radius vocabulary
- Wine reserved for “open route” heat (status and the nav CTA hover)

## Colors

The palette is dawn air, terminal yellow, board metal, and a single wine heat.

### Primary
- **Terminal Yellow** (`band`): Sticky decision band, primary buy buttons, the open board row. Theme color in the document head. Selection invert uses this yellow with band ink.
- **Band Ink** (`band-ink`): Type and rules on yellow; inverted nav CTA fill; focus ring.

### Secondary
- **Open Wine** (`open`): The heat of an open route. Status “Aberto” on the yellow row, and the nav CTA hover that sends the visitor into the guides. Not a wash, not a second brand color.

### Neutral
- **Dawn High / Mid / Low** (`dawn-high`, `dawn-mid`, `dawn-low`): Fixed photographic ground plus a vertical wash (cool high, amber mid, clay low). Page canvas fallback is dawn high.
- **Ink** (`ink`): Body type, product rules, footer field, buy hover fill.
- **Paper** (`paper`): Headline and lead on dawn; type on the metal board; footer type; hope-panel cream.
- **Metal / Metal Dark** (`metal`, `metal-dark`): Board column labels, waiting rows, footer small print (`metal`); board chassis (`metal-dark`).
- **Note Ink** (`note-ink`): Helper line under buy on listings.
- **Focus** (`focus`): 3px solid ring, 3px offset — same value as band ink.

### Named Rules
**The One Open Heat Rule.** Wine is heat for an open route (board status and nav CTA hover). It never fills a hero, a section, or a product card.

**The Yellow Is The Route Rule.** Saturated yellow is the decision layer: band, open row, buy. It is not a decorative accent stripe on a white travel page.

## Typography

**Display Font:** Barlow Condensed (sans-serif fallback)
**Body Font:** Overpass Variable / Overpass (system-ui fallback)

**Character:** Condensed uppercase wayfinding for identity, headlines, and the board; Overpass for reading. Pairing is black/cream on yellow or dawn, never a serif editorial voice.

### Hierarchy
- **Display** (700, clamp 4.2rem–9.5rem, line-height 0.86, tracking −0.02em): Hero only. Cream on dawn, max-width 14ch, with a dusk text-shadow. Home line is a restart sentence; Paraguay page is the destination name.
- **Headline** (700, clamp 2.4rem–4.4rem, line-height 0.95, tracking −0.02em): Section titles, max-width 16ch.
- **Title** (700, clamp 1.7rem–2.4rem, line-height 1): Product listing titles.
- **Body** (Overpass, 1.0625rem, line-height 1.55): Leads, hope copy, listings. Measure 68ch on section paragraphs; hero lead 1.2rem, max-width 36rem.
- **Label** (700, clamp 1.4rem–2.1rem, tracking 0.08em, uppercase): Board rows. Column headers are the same family at 0.8rem in metal. Brand name is the same family, 700, uppercase, tracking 0.04em, clamp 1.15rem–1.7rem.
- **Nav / Buy weight:** Overpass at 650 on nav links and 750 on buy — variable-axis weights, not a third family.

### Named Rules
**The Condensed Board Rule.** Destination names, statuses, brand, and monumental headlines live in Barlow Condensed. Overpass never headlines a destination.

**The No Airport Display Face Rule.** Do not introduce a system display serif, a seven-segment numeral face, or a novelty “departures” font. The board is type + metal, not a gadget skin.

## Layout

Horizontal gutter is 5vw. The sticky band is a two-column grid (brand | nav), min-height 4.25rem; below 820px the band stacks and nav becomes a full-width row with 2px ink rules. Hero is at least the leftover viewport (`100dvh − 4.25rem`), content aligned to the end of the sky on desktop and centered on small screens. The board sits in the same 5vw inset, then sections pad 12vh 5vw. Hope copy splits 0.9fr / 1.1fr with a 4rem gap. Product listings are 140–220px cover plus copy, 2rem column gap, 1.75rem vertical padding, 2px ink rules top and bottom — a timetable of goods, not a card grid. Below 820px, split, product, and board rows collapse to one column; board column headers hide.

## Elevation & Depth

Depth is photographic ground, then a yellow band that casts a dusk umbra, then a heavier umbra under the metal board. Buttons lift slightly. Product covers use a dusk lift. There is no radius stack and no glass.

### Shadow Vocabulary
- **Band umbra** (`box-shadow: 0 18px 40px rgb(20 17 12 / 0.22)`): Sticky yellow decision band.
- **Board umbra** (`box-shadow: 0 28px 60px rgb(20 17 12 / 0.35)`): Destination board chassis.
- **Buy lift** (`box-shadow: 0 10px 18px rgb(20 17 12 / 0.16)`): Primary buy slab at rest.
- **Cover lift** (`box-shadow: 8px 16px 28px rgb(20 17 12 / 0.2)`): Ebook cover only.
- **Headline dusk** (`text-shadow: 0 10px 30px rgb(20 17 12 / 0.35)`): Display type on the photograph.

### Named Rules
**The Ground Then Board Rule.** The photograph is the sky. UI does not recede into frost or cards floating on white. Yellow and metal sit on the dawn.

## Shapes

Everything is a square slab. No border-radius token is in use. The brand mark is a 0.7 × 2.4rem ink bar. Nav cells are ruled with 2px band-ink. The board is a sharp metal rectangle with 1px metal hairlines between rows. Buy is an unrounded rectangle. Do not round the band, the board, or the button to “soften” the terminal.

## Components

### Buttons
- **Shape:** Square slab (`0` radius), min-height 3rem, padding 0 1.2rem, Overpass 750.
- **Primary (buy):** Terminal yellow on band ink, dusk lift shadow. Hover inverts to ink fill and yellow type. Disabled / `aria-disabled` at 0.55 opacity.
- **Hover / Focus:** Hover is the invert. Focus-visible is a 3px ink ring, 3px offset, global.

### Cards / Containers
Product listings are not cards. They are ruled rows: 2px ink lines, square cover, title in condensed, body, then buy. Hope panel is paper at 92% over the dawn. Footer is a full-bleed ink field.

### Navigation
Sticky yellow band. Brand: ink bar + condensed uppercase name. Links: 650 weight, 2px ink divider, hover wash `rgb(17 17 17 / 0.08)`. Nav CTA is the inverted cell (ink field, yellow type); hover is wine fill with paper type. Below 820px, links share the row equally with ink rules between them.

### Destination Board (signature)
Dark metal chassis. Three columns on desktop (1.4fr / 0.7fr / 0.9fr): destination, year or material, status. Headers in metal, 0.8rem, uppercase. Rows are condensed 700 uppercase. Open row is the full yellow band treatment; its status is wine. Waiting rows are metal type, not links. Hover on a live row is a 12% yellow veil (220ms, `--ease`).

### Split-flap verb
One inline flap, height 1.1em, cycles three stacked words over 5.6s with `--ease`. Honors `prefers-reduced-motion`. This is a board wink, not a hero animation language for every heading.

## Do's and Don'ts

### Do:
- **Do** keep the sticky yellow band as chrome on every page, with condensed uppercase identity.
- **Do** set display headlines in cream condensed type on the dawn ground, tight leading (0.86).
- **Do** index destinations on the metal board; only the open route gets the yellow row and wine status.
- **Do** sell with yellow buy slabs and ruled listings, not a grid of equal product cards.
- **Do** keep corners at 0 and type in Overpass + Barlow Condensed.

### Don't:
- **Don't** build a travel hero (jet, runway, suitcase, passport collage) or make the airport the subject.
- **Don't** give closed destinations the same visual weight as the open row.
- **Don't** use wine as a section fill or a second yellow.
- **Don't** round the band, board, or buy, or introduce a serif display face.
- **Don't** turn listings into equal-height product cards.
