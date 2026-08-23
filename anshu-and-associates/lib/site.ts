// Single source of truth for the site's absolute URL.
// Swap NEXT_PUBLIC_SITE_URL in Vercel when the custom domain is attached.
// Nothing else in the codebase should hardcode a domain.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Anshu and Associates";

// Flip to false once the custom domain is live, so search engines index
// the real domain rather than the temporary vercel.app one.
export const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX !== "false";
