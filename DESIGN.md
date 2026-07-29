---
name: Tecnera
description: A calm, human software company made intelligent by a living network running underneath it.
colors:
  deep-pine: "#005647"
  bright-mint: "#00dba0"
  network-signal: "#00a478"
  pine-hover: "#0a3d35"
  focus-teal: "#00c2a8"
  info-link: "#0095c7"
  warm-amber: "#f47c20"
  carbon: "#1c1c1c"
  subtext-grey: "#666666"
  paper: "#f9faf8"
  card-white: "#ffffff"
  night-pine: "#0a1f1c"
typography:
  display:
    fontFamily: "Michroma, sans-serif"
    fontSize: "clamp(1.75rem, 5.2vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "wide"
  body:
    fontFamily: "Nunito, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  full: "9999px"
spacing:
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.deep-pine}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.pine-hover}"
  button-secondary:
    backgroundColor: "{colors.bright-mint}"
    textColor: "{colors.deep-pine}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.focus-teal}"
  card-surface:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.xl}"
    padding: "32px"
---

# Design System: Tecnera

## Overview

**Creative North Star: "The Connected Field Office"**

Tecnera is a calm, human workspace before it is a piece of technology. The foundation is a field office, not a control room: white floating cards, generous air, soft shadows, unhurried spacing. A visitor should feel like they've walked into a well-run, approachable company — never an intimidating enterprise dashboard, never a wall of gauges and metrics. This is deliberate: Tecnera doesn't sell monitoring software, it sells simplification, and the interface has to feel simpler than the operations it replaces.

Underneath that calm surface runs the second half of the system: a living network. A slow, softly-connecting mesh of nodes and lines drifts behind the content on nearly every page (`NeuralNetworkBackground`), quietly reinforcing that every product, page, and idea belongs to one intelligent, evolving ecosystem. It is atmosphere, not data-viz — there is no dashboard read to it, no implication of live metrics or monitoring. It should feel closer to Notion's calm productivity surfaces or Apple Intelligence's soft ambient glow than to a NOC screen.

Two current implementation choices sit in tension with this North Star and should be softened rather than replicated in new work: the homepage hero's heavy 3px text-stroke-and-glow treatment on the display headline, and the fairly heavy black-tinted card shadows (`shadow-black/30`) used across Features/FAQ/ProductRow cards. Both read as bolder and louder than "calm before flashy" calls for. See Do's and Don'ts.

**Key Characteristics:**
- Human before corporate — soft white surfaces and generous whitespace, not dense enterprise chrome.
- Intelligent before futuristic — the network is a quiet undercurrent, never a sci-fi or dashboard motif.
- Calm before flashy — restraint is the default; loud effects are the exception, not the house style.
- Connected before modular — every surface reads as one ecosystem (shared logo system, shared network, shared type/color language across Mannaz, Odal, and the corporate site).
- Premium through simplicity — quality is communicated by what's left out, not by visual density.

## Colors

Two hues carry the system: a deep, grounded pine that reads as institutional trust, and a bright mint that reads as the one moment of digital energy per screen.

### Primary
- **Deep Pine** (`#005647`): the anchor color. Dark section backgrounds (hero gradients on Nosotros/Servicios/Precios/Casos), heading text on light surfaces, primary CTA fill, footer-adjacent brand surfaces. Hover/active state deepens to **Pine Hover** (`#0a3d35`).

### Secondary
- **Bright Mint** (`#00dba0`): the system's one accent. Secondary CTA fill, active nav state, underline strokes under section headings, hover fill for primary buttons. Hover/active state shifts to **Focus Teal** (`#00c2a8`).
- **Network Signal** (`#00a478`): the default color of the living-network dots and connecting lines on the global background (`layout.tsx`). Distinct from Bright Mint — slightly deeper, closer to the original brand green — because the network reads as ambient texture, not a UI accent; it should never compete with the Bright Mint CTAs sitting on top of it.

### Tertiary
- **Warm Amber** (`#f47c20`): used sparingly, reserved for the one context where a product deliberately breaks the house pattern — the "custom development" dashed-border card (`ProductCard variant="custom"`). Not a general-purpose accent.
- **Info Link** (`#0095c7`): informational-blue, used only as one of the four feature-icon accent tiles on the home Features grid. Not used for actual hyperlinks despite the token name.

### Neutral
- **Carbon** (`#1c1c1c`): primary text on light surfaces, footer background.
- **Subtext Grey** (`#666666`): secondary/supporting copy — descriptions, captions.
- **Paper** (`#f9faf8`): the light-mode page background.
- **Card White** (`#ffffff`): card and panel surfaces sitting on Paper.
- **Night Pine** (`#0a1f1c`): reserved dark-mode background token (defined in tokens; dark mode is not currently wired to a toggle in the shipped UI — see Do's and Don'ts).

### Named Rules
**The One Accent Rule.** Bright Mint is the only color allowed to say "act now." Warm Amber and Info Link are single-purpose exceptions for specific components, never general CTA colors.

## Typography

**Display Font:** Michroma (uppercase-feeling geometric sans, weight 400 only)
**Body Font:** Nunito (weights 400–900 available)

**Character:** A geometric, slightly futuristic display face paired with a warm, rounded, humanist body face. The pairing is the typographic version of the North Star itself: Michroma supplies the "intelligent/connected" signal in short bursts (H1s, section headings), Nunito carries everything a visitor actually reads, keeping the day-to-day experience warm and easy.

### Hierarchy
- **Display** (400, `clamp(1.75rem, 5.2vw, 4.5rem)`, line-height 1.2): Michroma. Reserved for the page's single hero headline. Currently rendered with a heavy outline-and-glow treatment — flag for softening (see Do's and Don'ts).
- **Headline** (400, `text-2xl` → `text-3xl` responsive, line-height snug): Michroma via `SectionHeader`. One per section; always paired with a short underline stroke in Bright Mint (or Deep Pine when `emphasize` is set).
- **Title** (800/extrabold, `text-xl`–`text-4xl`): Nunito. Card titles, product names, subsection headers.
- **Body** (400–600, `text-sm`–`text-lg`, line-height relaxed): Nunito. Descriptions, paragraph copy. Target ~65–75ch measure where full-width.
- **Label** (700/bold, `text-xs`, uppercase, wide tracking): Nunito. Nav links, kicker tags, footer group headings.

### Named Rules
**The One Display Moment Rule.** Michroma appears once per page as the hero/section headline generator — never in body copy, buttons, or dense UI text. Its rarity is what keeps it feeling special rather than gimmicky.

## Layout

Content sits in wide, generously-margined containers rather than a tight editorial column: most sections cap at `max-w-7xl`–`max-w-[105rem]` with `px-4 tablet:px-6 laptop:px-8` gutters. Vertical rhythm is heavy and consistent — sections use `py-20`–`py-24` regardless of content density, reinforcing the "field office," unhurried pacing over a dense dashboard feel.

Custom breakpoints replace Tailwind's defaults: `phone` (320px), `tablet` (640px), `tabletxl` (840px), `laptop` (1024px), `desktop` (1280px). Grids collapse from up to 4 columns (Features) down to 1 column below `tablet`, always mobile-first.

Product landing pages (Mannaz, Odal) use an asymmetric hero grid (`minmax(0,0.9fr)_minmax(0,1.6fr)`) — logo weighted left, message weighted right — rather than the centered hero used on the corporate home and utility pages (Nosotros/Servicios/Precios/Casos), which lean fully centered and narrower (`max-w-4xl`).

## Elevation & Depth

Cards are flat by default and lift with a soft, diffused shadow rather than hard drop shadows or borders alone — this is the physical expression of "floating" in the Field Office metaphor. In practice the current shadow value (`shadow-lg shadow-black/30`) reads heavier/darker than the calm foundation calls for; treat it as a value to soften toward a lighter, more diffused ambient shadow in future component work rather than a locked invariant.

Depth is otherwise conveyed by layering, not literal elevation: the living-network canvas sits behind everything at a fixed, low z-index, cards and content sit above it, and hero sections on product pages layer a translucent white glass panel (`bg-white/15 backdrop-blur-sm`) over the network for text legibility.

### Named Rules
**The Floating-Not-Stacked Rule.** Cards read as resting gently above the network canvas, not as a stack of opaque panels. Backdrop-blur glass panels, not solid fills, are the preferred way to place text over the network when contrast is needed.

## Shapes

Corners are consistently generous and soft: `rounded-2xl` (1rem) for small cards and icon tiles, `rounded-[2rem]` (2rem) for large content cards, panels, and the product-row banners, and full pill (`rounded-full`) for every button and badge. There are no sharp-cornered surfaces anywhere in the shipped UI — squareness would read as "control room," which the system explicitly avoids.

Borders are thin and low-contrast (`border-primary/10`, brightening to `border-secondary/40` on hover) rather than heavy outlines — they exist to hint a surface's edge, not to frame it.

## Components

### Buttons
- **Shape:** full pill (`rounded-full`, 9999px).
- **Primary:** Deep Pine fill, white text, bold weight, `px-7 py-3.5`. Hover deepens to Pine Hover and the button scales to 1.03; press returns to 1.0.
- **Secondary:** Bright Mint fill, Deep Pine text; hover shifts to Focus Teal.
- **Ghost/WhatsApp:** translucent white (`bg-white/10`, `border-white/30`) for use over dark or photographic surfaces — hover brightens to `bg-white/20`.
- **Icon inside every CTA:** a small leading icon (calendar or WhatsApp glyph) is the house convention — a bare text button is the exception, not the norm.

### Cards
- **Corner style:** `rounded-2xl` (feature/service/product cards) or `rounded-[2rem]` (FAQ panel, feature grid tiles, product-row banners).
- **Background:** Card White on Paper, or Deep Pine fill for the dark "product row" banner variant (white text on Deep Pine, not the other way around).
- **Shadow strategy:** see Elevation & Depth — soft ambient lift, flag for lightening.
- **Border:** hairline `border-primary/10`, brightens to `border-secondary/40` on hover as the primary hover signal (alongside shadow growth).
- **Internal padding:** generous, `p-6`–`p-10` depending on card size.

### Inputs / Fields
- **Style:** `rounded-xl`, hairline `border-primary/15`, Paper-colored fill.
- **Focus:** border shifts solid to Deep Pine; no glow/ring effect.
- **Placeholder:** Subtext Grey.

### Navigation
- Sticky header, translucent Paper background with backdrop blur (`bg-light/90 backdrop-blur`). Nav labels are uppercase, bold, extra-small, wide-tracked; active route highlights in Deep Pine, inactive in `neutral/60`. Mobile collapses to a full-width dropdown panel triggered by a bordered circular menu button.

### Living Network (signature component)
`NeuralNetworkBackground` — a canvas of small drifting, connecting nodes, rendered fixed and full-bleed behind the entire site (opacity 0.65) using Network Signal green by default. Product pages (Mannaz, Odal) swap the palette to a near-black neutral (`rgb(28,28,28)`) at a denser node count for their hero section specifically, to keep hero text legible without losing the motif. Respects `prefers-reduced-motion` by freezing on the first frame. This is the one component every page shares — it is the literal visual expression of "Connected," and should not be treated as decorative filler when composing new surfaces.

## Do's and Don'ts

### Do:
- **Do** keep the living network present and continuous across pages — it's the connective tissue of the brand, not a homepage-only flourish.
- **Do** use full-pill shape for every clickable CTA; reserve square/rounded-xl corners for input fields and small icon tiles only.
- **Do** use Bright Mint as the only "go" signal color; keep Warm Amber and Info Link scoped to their single existing contexts.
- **Do** pair Michroma sparingly (one display/headline moment per section) with Nunito for everything readable.
- **Do** favor backdrop-blur glass panels over solid fills when placing text on top of the network canvas.

### Don't:
- **Don't** introduce dashboard/control-room visual language (gauges, live-metric tickers, dense data grids as decoration) — the network is atmosphere, not a data visualization, and Tecnera's positioning is explicitly not "monitoring software."
- **Don't** extend the current heavy 3px text-stroke-and-glow hero treatment to new headlines; new display type should read closer to the calm Field Office foundation than to the current homepage hero.
- **Don't** carry the current `shadow-black/30` heavy card shadow forward as the standard; new elevated surfaces should use a lighter, more diffused ambient shadow consistent with "floating," not "stacked."
- **Don't** use sharp/square corners anywhere in the primary UI — it reads as the control-room aesthetic this system deliberately avoids.
- **Don't** fabricate metrics, client counts, or case studies to fill empty sections (`/casos`, `/nosotros` stats) — see PRODUCT.md's Evidence on Hand; those numbers are placeholder, not fact.
