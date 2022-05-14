const path = require('path')
const fs = require('fs')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.experiments = Object.assign(config.experiments || {}, {
            asyncWebAssembly: true
        });
        // config.images = Object.assign(config.images || {}, {
        //     loader: 'custom'
        // })

        // https://github.com/vercel/next.js/issues/25852
        config.plugins.push(
            new (class {
                apply(compiler) {
                    compiler.hooks.assetEmitted.tap('webpack-workaround',
                        async (file, {content, source, outputPath, compilation, targetPath}) => {
                            if (options.isServer && targetPath.endsWith('wasm')) {
                                const placement = path.join(outputPath, '../../static/wasm', path.basename(targetPath))
                                console.log(`Copying ${targetPath} to ${placement}`);
                                fs.copyFileSync(targetPath, placement, fs.constants.COPYFILE_FICLONE)
                            }
                        });
                }
            })(),
        );

        if (options.isServer) {
            config.output.webassemblyModuleFilename =
                '../static/wasm/[modulehash].wasm';
        } else {
            config.output.webassemblyModuleFilename =
                './static/wasm/[modulehash].wasm';
        }
        return config;
    },
}

module.exports = nextConfig
