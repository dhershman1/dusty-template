import babel from '@rollup/plugin-babel'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './src/index.js',
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      terser(),
      filesize({
        showMinifiedSize: false
      })
    ],
    output: {
      file: 'dist/libName.min.js',
      format: 'umd',
      name: 'libName',
      exports: 'named'
    }
  }, {
    input: './src/index.js',
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      filesize({
        showMinifiedSize: false
      })
    ],
    output: {
      file: 'dist/libName.js',
      format: 'umd',
      name: 'libName',
      exports: 'named'
    }
  }
]
