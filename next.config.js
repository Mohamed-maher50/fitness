/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.exercisedb.io",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],

    // sets the Content-Disposition header (inline or attachment)

    domains: ["edb-4rme8.ondigitalocean.app", "localhost"],
  },
};

module.exports = nextConfig;
