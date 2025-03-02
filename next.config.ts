import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: 'standalone',

  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }

    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' }, // prevent click-jacking
          { key: 'X-XSS-Protection', value: '1; mode=block' }, // prevent XSS
          { key: 'X-Content-Type-Options', value: 'nosniff' }, // prevent sniffing MIME types
        ],
      },
    ];
  },

  experimental: {
    serverActions: {
      allowedOrigins: [''],
    },

    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.ts',
        },
      },
    },

    authInterrupts: true,

    optimizePackageImports: ['antd'],
  },

  reactStrictMode: false,
};

export default withBundleAnalyzer({ ...nextConfig });
