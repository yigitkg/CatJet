/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/cat',
        destination: 'https://api.thecatapi.com/v1/images/search',
      },
    ];
  },
  env: {
    NEW_PUBLIC_CAT_API_KEY:
      'live_B1drlLYuaMg7DTDdljGE7Ftb7yk1gi47UArF3ZaL8HzYphKzsdS6mDjFZeInGtgJ',
  },
};
