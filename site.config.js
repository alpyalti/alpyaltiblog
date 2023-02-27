const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Alp Yaltı",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Game Designer",
    bio: "I develop everything using node.",
    email: "kadiralpyalti@gmail.com",
    linkedin: "alpyalti",
    github: "alpyalti",
    instagram: "alpyalti",
  },
  projects: [
    {
      name: `Game Portfolio`,
      href: "https://alpyalti.itch.io/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Alp Yaltı",
    description: "Keşif notlarıma hoşgeldin!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://alpyaltiblog.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Alp Yaltı", "Game", "Blog"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "alpyalti/alpyaltiblog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
