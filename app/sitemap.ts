import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/aivs`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/gallery`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
