import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    allowedDevOrigins: [
      '9000-firebase-studio-1772786752514.cluster-c36dgv2kibakqwbbbsgmia3fny.cloudworkstations.dev',
      '9001-firebase-studio-1772786752514.cluster-c36dgv2kibakqwbbbsgmia3fny.cloudworkstations.dev',
      '9002-firebase-studio-1772786752514.cluster-c36dgv2kibakqwbbbsgmia3fny.cloudworkstations.dev',
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
