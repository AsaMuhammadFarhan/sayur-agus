/** @type {import('next').NextConfig} */

const redirectConfig = {
  async redirects() {
    return [
      {
        source: "/f",
        destination: "/f/404",
        permanent: false,
      },
      {
        source: "/st",
        destination: "/st/404",
        permanent: false,
      },
    ];
  },
};

const imageConfig = {
  images: {
    domains: [
      "img.freepik.com",
      "drive.google.com",
      "landing-page-dibimbing.s3.ap-southeast-1.amazonaws.com",
      "cdn.pixabay.com",
      "dibimbing-lms-dev.s3.ap-southeast-1.amazonaws.com",
      "images.unsplash.com",
      "dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com",
      "dibimbing-cdn.sgp1.digitaloceanspaces.com",
      "www.pngkey.com",
      "lh3.googleusercontent.com",
      "dibimbing.id",
      "picsum.photos",
      "scontent.cdninstagram.com",
    ],
  },
};

const nextConfig = {
  reactStrictMode: true,
  ...imageConfig,
  ...redirectConfig,
};

module.exports = nextConfig;
