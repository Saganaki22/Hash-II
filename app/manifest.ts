import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hash - Base64 & AES Encoder/Decoder",
    short_name: "Hash",
    description: "Encode and decode text using Base64 and AES-256 encryption",
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#00FF41",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

