import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

/**
 * Photographic footer: an interior photograph cropped to footer height, with a
 * blurred scrim between it and the text.
 *
 * The three numbers below are the whole design. They were separated out
 * because the balance between "text is legible" and "you can still tell it is
 * a home" is a judgement made by eye, not derived. Tune them in the scrim
 * studio and paste the result here; nothing else needs to change.
 *
 *   blur       higher rescues text, and past ~10px nobody can read the photo
 *   scrimFlat  the even wash across the whole image
 *   scrimPeak  density at the base, where the text block actually sits
 *
 * Keeping peak well above flat is what lets the photograph stay legible in the
 * open upper area while the type below it still has solid ground.
 */
const blur = 6;
const scrimFlat = 0.33;
const scrimPeak = 0.72;

// Dark scrim with light text. For the light-scrim variant swap to
// "250,249,245" and set the text colour token to the ink value.
const scrimRGB = "18,16,13";

// Drop the photograph at public/footer.jpg and set this to "/footer.jpg".
// Empty falls back to the tonal placeholder below, so the layout is already
// final and swapping the image in changes nothing else.
const defaultPhoto = "";

const disciplines = [
  { label: "Interior Design", href: "/interior-design" },
  { label: "Landscaping", href: "/landscaping" },
  { label: "Architecture", href: "/architecture" },
];

const studio = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter({ photo = defaultPhoto }: { photo?: string }) {
  return (
    <footer className="relative isolate min-h-[300px] overflow-hidden text-white">
      {photo ? (
        <Image
          src={photo}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_62%]"
          aria-hidden
        />
      ) : (
        // Placeholder until the studio's own photography arrives. Carries the
        // tonal range of an interior shot so the scrim reads correctly now.
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_bottom,#cfc9bd_0%,#8e8578_55%,#3d382f_100%)]"
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          background: `linear-gradient(to bottom,
            rgba(${scrimRGB},${(scrimFlat * 0.55).toFixed(3)}) 0%,
            rgba(${scrimRGB},${(scrimFlat + (scrimPeak - scrimFlat) * 0.45).toFixed(3)}) 45%,
            rgba(${scrimRGB},${scrimPeak}) 100%)`,
        }}
      />

      <div className="relative z-[2] grid gap-8 px-6 pb-9 pt-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-12">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.015em]">{SITE_NAME}</p>
          <p className="mt-2 text-[10.5px] uppercase tracking-[0.12em] opacity-90">
            Interior Designing&thinsp;&nbsp;&bull;&nbsp;&thinsp;Landscaping&thinsp;&nbsp;&bull;&nbsp;&thinsp;Architecture
          </p>
        </div>

        <nav aria-label="Studio">
          <h2 className="mb-3 text-[9.5px] uppercase tracking-[0.18em] opacity-60">Studio</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {studio.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="opacity-90 hover:opacity-100 focus-visible:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Disciplines">
          <h2 className="mb-3 text-[9.5px] uppercase tracking-[0.18em] opacity-60">Disciplines</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {disciplines.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="opacity-90 hover:opacity-100 focus-visible:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <div className="h-px w-full bg-white/20" />
          <div className="mt-4 flex flex-wrap justify-between gap-x-7 gap-y-2 text-[10.5px] uppercase tracking-[0.07em] opacity-60">
            <span>Indore &amp; Madhya Pradesh</span>
            <span>Instagram · LinkedIn</span>
            <span>&copy; {new Date().getFullYear()} {SITE_NAME}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
