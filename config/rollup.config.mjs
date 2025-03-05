import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { visualizer } from "rollup-plugin-visualizer";

// rollup.config.js
export default {
    plugins: [
        commonjs(),
        resolve(),
        replace({
            preventAssignment: true,
            values: {
                "typeof CANVAS_RENDERER": JSON.stringify(false),
                "typeof WEBGL_RENDERER": JSON.stringify(true),
                "typeof WEBGL_DEBUG": JSON.stringify(false),
                "typeof EXPERIMENTAL": JSON.stringify(false),
                "typeof FEATURE_SOUND": JSON.stringify(true),
                "typeof PLUGIN_CAMERA3D": JSON.stringify(false),
                "typeof PLUGIN_FBINSTANT": JSON.stringify(false),
                "CUSTOM_BUILD_ID": JSON.stringify(new Date().toISOString()),
            }
        }),
        visualizer({filename: './dist/phaser-custom.stats.html'}),
    ],
    input: './src/phaser-custom.js',
    external: [
        "eventemitter3",
        // "phaser3spectorjs",
    ],
    output: {
        name: 'phaser',
        // dir: './dist/',
        file: './dist/phaser-custom.js',
        format: 'es',
        manualChunks: {}
    },
    logLevel: 'info',
}
