/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["secure.gravatar.com", "cdn.ko-fi.com", "codebysamgan.com"]
    },
    env: {
        API_BASE_URL: "http://127.0.0.1:5100/",
        BACKEND_BASE_URL: "https://codebysamgan.com"
    }
}

module.exports = nextConfig
