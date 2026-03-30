import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samaan Suites – Luxury Hotel in Mogadishu Airport Area",
    short_name: "Samaan Suites",
    description:
      "Modern luxury hotel near Mogadishu Airport. 60 suites, conference venue, restaurant, gym, masjid & 24/7 security. The best hotel in Mogadishu.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E6",
    theme_color: "#2D4A54",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
