/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Adding the external image domain to the configuration
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com'],
  },
  // Other configurations...
};

export default nextConfig;
