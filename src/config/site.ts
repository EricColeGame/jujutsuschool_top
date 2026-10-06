export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Jujutsu School Anomaly Wiki",
  shortName: "Jujutsu School Anomaly",
  logoText: "JSA",
  tagline: "Anomaly Guides, Walkthroughs, Endings & Tips",
  description: "Fan-made Jujutsu School Anomaly wiki for Roblox. Survive the night shift by inspecting visitors, checking IDs, stamping permits and detecting anomalies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://myseafoodstand.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://myseafoodstand.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/120468139832999/Jujutsu-School",
  heroVideoId: "qj5QLgvTJUM", // Jujutsu School Anomaly full gameplay walkthrough
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
