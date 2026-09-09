import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://www.bjr.ai/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.bjr.ai/work/bank-resources",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
