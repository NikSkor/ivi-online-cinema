/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
  images: {
    loader: 'cloudinary',
  },
};

module.exports = nextConfig
