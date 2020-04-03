import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import multiInput from 'rollup-plugin-multi-input';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['src/**/index.js', 'src/**/index.ts'],
  output: {
    dir: 'dist',
    format: 'esm'
  },
  external: ['react', 'react-dom', 'react-spring', 'prop-types'],
  plugins: [
    multiInput({ relative: 'src/components' }),
    nodeResolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs(),
    babel({ runtimeHelpers: true }),
    typescript(),
    postcss({
      autoModules: true,
      plugins: [autoprefixer()],
      use: ['sass'],
      extensions: ['.scss', '.css']
    })
  ]
};
