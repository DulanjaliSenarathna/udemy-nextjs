/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs-demo-users-image-dul.s3.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
