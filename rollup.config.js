import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import multiInput from 'rollup-plugin-multi-input';
import postcss from 'rollup-plugin-postcss';

export default {
  input: ['src/**/index.js'],
  output: {
    dir: 'dist',
    format: 'es'
  },
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    multiInput({ relative: 'src/components' }),
    resolve({ extensions: ['.js', '.jsx'] }),
    commonjs(),
    babel(),
    postcss({
      autoModules: true,
      plugins: [autoprefixer()],
      extract: false,
      use: ['sass'],
      extensions: ['.scss', '.css']
    })
  ]
};
