import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "images.pexels.com",
      "logolook.net",
      "res.cloudinary.com"
    ],
  },
};

export default nextConfig;
