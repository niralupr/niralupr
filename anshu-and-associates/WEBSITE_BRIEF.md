# ANSHU & Associates — Website Build Brief

A self-contained specification for generating the studio website. Everything
needed is in this document; no prior conversation context is required.

**Read section 14 before generating anything.** Four decisions are unresolved.
Do not invent answers to them. Flag them and ask, or state the assumption you
made at the top of your output.

---

## 1. The firm

| | |
|---|---|
| Name | ANSHU & Associates |
| Led by | Anshu Sharma, founder and principal designer |
| Discipline | Interior design studio, expanding into landscaping and architecture |
| Base | Indore, Madhya Pradesh, India |
| Coverage | Indore and Madhya Pradesh only |
| Credential | INIFD Indore topper and gold medallist, Bachelor of Interior Design |
| Language | English only |

### Deliberately not shown on the site

Founding year. Team size. Project count. Pricing, in any form, at any point.
Client personas.

These are intentional omissions, not missing data. Do not add them, do not
invent placeholder numbers, and do not write copy that implies them
("hundreds of happy clients", "since 2004", "our team of designers").

**Consequence:** with no year, team, count, pricing or persona, the site's
entire credibility rests on two things — the photographs and the gold medal.
Design accordingly. The work must be the loudest element on every page.

---

## 2. Brand and signage

**Wordmark:** `ANSHU & Associates`

**Byline:** `Interior Designing  •  Landscaping  •  Architecture`

Typographic rules for the byline, which are exact:

- Separator is **U+2022 BULLET** ( • ). Not a middle dot ( · ), not a hyphen,
  not an asterisk, never commas.
- A thin space either side of each bullet, so the three terms read as equals
  rather than as a list.
- Order is fixed: Interior Designing, then Landscaping, then Architecture.
  The order is a hierarchy statement — interiors lead.

**Logo:** not yet designed. Set the wordmark as type for now, in a way that a
real logo file can replace later without a redesign.

**Domain:** `anshuandassociates.com` (available, unpurchased). Spelled-out
"and" in the URL, ampersand in the mark. This is intentional.

---

## 3. Disciplines

The site is structured as **one page per discipline**, not a single services
page. This gives landscaping and architecture somewhere to live and grow into.

### 3a. Interior design — confirmed, build in full

Group the services into four clusters. Do not present them as a flat list of
fourteen items; a flat list reads as a studio that will take anything.

**Design and planning**
- Full-service interior design
- Design-only package (client executes)
- Space planning and layout consultancy
- Interior architecture (walls, ceilings, flooring, structural changes)
- 3D visualisation and walkthroughs

**Built-in and bespoke**
- Modular kitchens and wardrobes
- Lighting design
- Bespoke furniture and joinery — UNDECIDED, see section 14

**Furnishing and styling**
- Furniture, fixtures and equipment (FF&E) sourcing
- Soft furnishings and styling
- Art curation and accessorising

**Renovation**
- Renovation and remodelling
- Single-room makeovers

**Explicitly excluded — the site must never imply these:**
turnkey execution · site supervision · Vastu-compliant design · remote or
online-only design · home automation · developer and builder-floor projects ·
projects above 10,000 sqft

### 3b. Landscaping — offerings not yet selected

The discipline is named in the signage but the specific offerings have not
been chosen. Candidate list below. **Do not pick for the studio.** Either ask,
or build the page structure with the offerings as a clearly marked TODO.

Landscape master planning · terrace and rooftop gardens · balcony gardens ·
courtyard and atrium landscaping · residential garden design · vertical
gardens and green walls · planting design and plant selection · hardscaping
(paving, decks, pathways, retaining walls) · water features · outdoor and
garden lighting · outdoor furniture and styling · pool surrounds and decks ·
kitchen and herb gardens · commercial and hospitality landscaping · indoor
plantscaping and biophilic interiors · irrigation planning · maintenance
planning · farmhouse landscaping · entrance and driveway landscaping ·
rainwater harvesting and sustainable features

### 3c. Architecture — named, no work to show

The byline claims architecture. There is no architecture portfolio and no
defined offerings. How this is presented is an open decision (section 14).

---

## 4. Spaces served

**Residential — all of these:**
full apartments (2/3/4 BHK), villas and bungalows, duplexes and penthouses,
farmhouses and weekend homes, living and dining, master bedrooms, kids' rooms,
guest rooms, kitchens, bathrooms and powder rooms, home offices and studies,
pooja rooms, entrance foyers, walk-in wardrobes, home theatres, balconies and
terraces, staircases and circulation, bars and lounges, utility and storage,
home gyms.

**Commercial — all of these except developer and builder-floor projects:**
corporate offices, co-working spaces, retail stores and showrooms, restaurants
cafés and bars, cloud kitchens, hotels and resorts, banquet and event spaces,
clinics and diagnostics, healthcare, salons and spas, gyms and fitness studios,
schools and coaching centres, banks and financial offices, sample and show
flats, brand experience centres, photo/dance/music studios, religious and
community spaces, auto showrooms, factory and industrial offices.

**Note on the commercial list:** nineteen typologies is a very broad claim on a
site with few commercial photographs. Present breadth in one quiet line rather
than as a prominent grid of nineteen items, and lead with what is actually
photographed.

**Residential and commercial are held in deliberate balance.** Neither leads.

---

## 5. Engagement models

Offered: single consultation · concept package (mood board plus layout) ·
full design package (drawings, client executes) · design plus procurement
support · per-room à la carte · per-square-foot basis.

Not offered: full turnkey · developer retainers · renovation-only engagements ·
fast-track or express service.

Present these as a four-step ladder, from consultation up to design plus
procurement. It is genuinely sequential, so numbering it is honest.

**Project scale:** under 500 sqft up to 10,000 sqft. Nothing above 10,000.

---

## 6. Hard constraints

1. **No pricing anywhere.** No rate cards, no "starting from", no ranges, no
   per-sqft figures. Pricing is discussed only after an enquiry.
2. **No invented facts.** No project counts, no years in business, no team
   member names, no fabricated testimonials, no stock client logos.
3. **No stock photography.** Every image position is a typed placeholder until
   the studio's own photographs arrive.
4. **Light theme.** The previous site was dark; that is being deliberately
   left behind.
5. **No video.** Decided. The site is photography and typography only.
6. **English only.** No Hindi, despite the Indore market.
7. **Primary calls to action are phone call and WhatsApp.** Not a form-first
   site. A form may exist on Contact as a secondary path.

---

## 7. Site architecture

| Page | Route | Job |
|---|---|---|
| Home | `/` | Establish the studio across three disciplines, show the best work, drive a call |
| Work | `/work` | Full portfolio, filterable by discipline and by residential/commercial |
| Project | `/work/[slug]` | One project in depth, image-led |
| Interior design | `/interior-design` | The discipline in full, four service groups |
| Landscaping | `/landscaping` | The discipline in full, once offerings are picked |
| Architecture | `/architecture` | Depends on open decision 1 |
| About | `/about` | Anshu, the credential, the approach |
| Contact | `/contact` | Call, WhatsApp, enquiry |

No blog, no journal, nothing requiring weekly content.

---

## 8. Homepage, in scroll order

**00 · Navigation**
Wordmark left, links right, call button at the end. Transparent over the hero,
solid on scroll. Three disciplines may need a dropdown. Mobile collapses to a
full-screen overlay.

**01 · Hero**
One full-bleed photograph at full viewport height. Short headline over it
(six to ten words), one supporting line, a quiet scroll cue. The image scales
slowly as the user scrolls away from it. No carousel, no video, no slider.

**02 · Positioning statement**
A single large line on a clean ground, no image. What the studio is, across
which disciplines, and where its involvement ends.

**03 · Three disciplines**
Interior design, landscaping, architecture, given equal visual weight in the
byline's order. Each links to its own page.

**04 · Selected work**
Four to six projects, alternating full-width and paired. Each image reveals
with a scroll-linked scale. Name, location, discipline and typology beneath.

**05 · How we work**
The engagement ladder as four steps. Ends on the call to action, never on
pricing.

**06 · Anshu**
Portrait one side, short first-person paragraph the other. Gold medal and
INIFD Indore stated once, plainly, without inflation.

**07 · Spaces we design**
Residential and commercial breadth without a wall of text.

**08 · In their words**
Two or three testimonials, set large, attributed with name and project type.
Hide the entire section if quotes are not available — an empty testimonial
block is worse than none.

**09 · Start a conversation**
Full-width closing block. Call and WhatsApp as two large tap targets. Studio
location and service area. No form here.

**10 · Footer**
Wordmark with full byline, navigation repeated, Instagram and two LinkedIn
profiles, service area, copyright.

---

## 9. Project page template

One template repeated per project, built so that a project with four
photographs and one with twenty both look intentional.

- Cover image, landscape, full-bleed
- Title block: name, location, discipline, typology, area band, year if shown
- The brief: two to three sentences on what the client wanted
- The approach: two to three sentences on what the studio did about it
- Image sequence: four to twenty photographs, scroll-revealed, mixed crops
- Detail shots: optional, two to four close-ups of materials, joinery, planting
- Next project link, automatic

---

## 10. Design direction

No brand palette or typeface has been chosen yet. What is decided:

- **Light theme**, warm rather than clinical
- **Photography-led.** Type and whitespace carry everything else.
- **Reference genre:** contemporary Indian architecture and interior studio
  sites. Large type, generous whitespace, full-bleed imagery, restrained
  palette, scroll-driven motion.
- **Explicitly avoid:** the dark, purple-accented look of the previous site.

Motion specification, which is a deliberate part of the brief:

- **Inertial smooth scroll** via Lenis. This is the single biggest contributor
  to the intended feel. Respect `prefers-reduced-motion`.
- **Scroll-scrubbed scale** on project images, tied to scroll position rather
  than time. GSAP ScrollTrigger with `scrub: 1` (the one-second catch-up lag
  is what produces the quality), or native CSS `animation-timeline: view()`.
- **Masked line-by-line text reveals** on headlines, staggered.
- No page-load animation longer than the content takes to read.

---

## 11. Technical requirements

- **Next.js** App Router, **Tailwind**, **Lenis**, **GSAP ScrollTrigger**
- Deployed on **Vercel**, starting on a `.vercel.app` subdomain before the
  custom domain is purchased
- Ships with **`noindex`** until the real domain is attached, so search
  authority is not built on a temporary hostname
- **No component hardcodes a colour.** Every colour comes from a CSS custom
  property token, so the palette can be swapped wholesale when the brand is
  decided.
- **No file hardcodes the domain.** A single `lib/site.ts` exports `SITE_URL`
  from `NEXT_PUBLIC_SITE_URL`. Metadata, canonical tags, sitemap and OG tags
  all derive from it, so attaching the custom domain is one environment
  variable rather than a search-and-replace.
- Every image position is a typed placeholder component with correct aspect
  ratio, so layout is final before photography arrives.
- Mobile-first. The audience is largely on mid-range Android over 4G.

---

## 12. Content status

| Asset | Status |
|---|---|
| Project photography | Professional, exists, not yet supplied |
| Anshu's portrait | Not yet supplied |
| Project metadata | Not yet written (name, location, typology, area, brief, approach) |
| Testimonials | Obtainable, not yet collected |
| Logo | Not yet designed |
| Phone, WhatsApp, email | Not yet supplied |
| Instagram | Account not yet created |
| LinkedIn | Personal and company profiles to be supplied |
| Studio address | Undecided whether published |

Build every one of these as a placeholder that can be filled without layout
changes.

---

## 13. Copy guidance

- Write from the visitor's side of the screen. Name things as a homeowner or
  business owner would.
- Active voice. Specific over clever.
- No superlatives the site cannot evidence. No "award-winning" unless an award
  is named. No "trusted by hundreds".
- The gold medal is the one credential; state it once, plainly, and let it sit.
- Do not write copy that promises execution or site supervision. See below.

---

## 14. Unresolved decisions — do not invent answers

These four are genuinely open. Generating around them silently will produce a
site that misrepresents the studio.

**1. How is architecture presented, given the byline names it and there is no
architecture work to show?**
Options: a discipline page describing capability with work stated as
forthcoming; a weighted presentation where interiors lead and the other two
sit as capability; or the byline appearing on signage only while the site
speaks to what it can show.

**2. Where does the engagement actually end?**
This is a real contradiction in the brief. The studio offers "full-service
interior design, concept to handover" while excluding turnkey execution, site
supervision and full turnkey engagement. Those cannot all be true.
Options: design only, client executes · design plus sourcing, client executes ·
design, sourcing and coordination without holding the build contract.
Whatever is chosen must hold for landscaping too, which is more
execution-heavy than interiors.

**3. Which landscaping offerings are actually provided?**
See the candidate list in section 3b. Not yet chosen.

**4. Phone number, WhatsApp number and email.**
Both primary calls to action are non-functional without these.

Secondary open items: whether bespoke furniture and joinery is offered ·
"Interior Designing" versus "Interior Design" in the byline · whether the site
may say "over 20 years" without naming a founding year · whether the studio
address and a map are published · whether per-room and per-square-foot bases
are named on a site that never shows pricing (recommendation: no) · how many
projects will have publishable photography at launch · whether an enquiry form
appears on Contact.

---

## 15. The one risk to hold in mind

The byline claims three disciplines. The portfolio can currently evidence one.
A single landscape project, even a small one, would make the second discipline
real rather than asserted. Until then, the site should describe landscaping and
architecture as capability rather than showcase them as proven work.
