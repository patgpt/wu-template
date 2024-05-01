import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // include custom SASS paths
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

export default nextConfig;
