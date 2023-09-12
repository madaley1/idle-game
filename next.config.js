/** @type {import('next').NextConfig} */
//library imports

const nextConfig = (phase, { defaultConfig }) => {
  return {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    env: {
    },
  };
};

module.exports = nextConfig;
