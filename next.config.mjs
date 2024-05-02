import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

// Convert the URL of the current module to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = dirname(__filename);

/**
 * @type {import('next').NextConfig}
 *
 * Configuration object for the Next.js application.
 *
 * @property {Object} sassOptions - Configuration options for SASS.
 * @property {Array} sassOptions.includePaths - Array of paths for SASS to look for files to @import.
 * @property {Object} images - Configuration options for handling images.
 * @property {Array} images.remotePatterns - Array of patterns for matching remote images.
 */
const nextConfig = {
    // include custom SASS paths
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;