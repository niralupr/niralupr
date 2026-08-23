import ScrollProof from "@/components/ScrollProof";
import { SITE_NAME } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen flex-col justify-between px-6 py-10 md:px-14 md:py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
          In progress
        </p>

        <h1
          className="max-w-5xl text-[clamp(2.75rem,9vw,8rem)] leading-[0.92] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {SITE_NAME}
        </h1>

        <p className="max-w-md text-sm leading-relaxed text-(--color-ink-soft)">
          Deployment pipeline is live. Design system, typography and content
          land once the brief is in.
        </p>
      </section>

      <ScrollProof />

      <footer className="border-t border-(--color-border) px-6 py-8 md:px-14">
        <p className="text-xs text-(--color-muted)">
          Scaffold only. Not indexed.
        </p>
      </footer>
    </main>
  );
}
