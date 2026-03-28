import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samaan Suites – Luxury Serviced Hotel in Mogadishu, Somalia",
    short_name: "Samaan Suites",
    description:
      "Brand-new luxury serviced hotel near Mogadishu Airport. 60 suites, conference venue, restaurant, gym, masjid & 24/7 security. Opening soon.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#0b1120",
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
