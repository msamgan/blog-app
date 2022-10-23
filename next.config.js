/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["secure.gravatar.com", "cdn.ko-fi.com", "codebysamgan.com"]
    },
    env: {
        APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
        APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
        BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL
    }
}

module.exports = nextConfig
