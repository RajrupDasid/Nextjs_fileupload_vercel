/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '8ceksytfrday3zbk.public.blob.vercel-storage.com',
            port: '',
          },
        ],
      },
};
 

export default nextConfig;
