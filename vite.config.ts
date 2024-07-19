import path from 'path';
import { UserConfig, defineConfig } from 'vite';
import { PreRenderedAsset } from 'rollup';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

function assetFileNames(assetInfo: PreRenderedAsset) {
    let extType = assetInfo.name?.split('.').pop() || '';
    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
        extType = 'img/';
    }
    return `assets/${extType}[name]-[hash][extname]`;
}

function manualChunks(id: string) {
    if (id.includes('react-dom')) {
        return 'react';
    }
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const rv: UserConfig = {
        plugins: [
            react(),
            visualizer({
                filename: 'visualizer.html',
                template: 'sunburst',
                gzipSize: true,
                brotliSize: true,
            }),
        ],
        build: {
            rollupOptions: {
                output: {
                    assetFileNames,
                    manualChunks,
                    // chunkFileNames: 'assets/js/[name]-[hash].js',
                    // entryFileNames: 'assets/js/[name]-[hash].js',
                },
            },
            //minify: false,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            }
        }
    };
    return rv;
});
