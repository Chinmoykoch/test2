/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"], // Optimized for modern browsers
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com'
      },
      {
        protocol: 'https',
        hostname: 's3files.core77.com'
      },
      {
        protocol: 'https',
        hostname: 'buffer.com'
      },
      {
        protocol: 'https',
        hostname: 'weandthecolor.com'
      },
      {
        protocol: 'https',
        hostname: 'image.cnbcfm.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'inframecollege.org'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com'
      },
      {
        protocol: 'https',
        hostname: 'venturebeat.com'
      },
      {
        protocol: 'https',
        hostname: 'live-production.wcms.abc-cdn.net.au'
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      },
      {
        protocol: 'https',
        hostname: 's.yimg.com'
      },
      {
        protocol: 'https',
        hostname: 'www.livemint.com'
      },
      {
        protocol: 'https',
        hostname: 'img.etimg.com'
      },
      {
        protocol: 'https',
        hostname: 'graphicdesignjunction.com'
      },
      {
        protocol: 'https',
        hostname: 'statetimes.in'
      },
      {
        protocol: 'https',
        hostname: 'example.com'
      },
      {
        protocol: 'https',
        hostname: 'productside.com'
      },
      {
        protocol: 'https',
        hostname: 'd15shllkswkct0.cloudfront.net'
      },
      {
        protocol: 'https',
        hostname: 'images-prod.dazeddigital.com'
      },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data:; media-src 'none'; frame-src 'none';",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
