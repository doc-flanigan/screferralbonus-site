/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // SUNSET 2026-07-18: site retired (zero clicks/impressions on every
    // engine since launch — GSC, Bing, click Sheet). The whole domain now
    // 301s to the hub's referral authority page, which owns the
    // "star citizen referral code" query. Domain registration retained.
    return [
      {
        source: '/:path*',
        destination: 'https://dayonecitizen.com/referral-code',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
