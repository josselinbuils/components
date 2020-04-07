import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import multiInput from 'rollup-plugin-multi-input';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['src/**/index.ts', '!src/doc'],
  output: {
    dir: 'dist',
    format: 'esm',
  },
  external: ['react', 'react-dom'],
  plugins: [
    multiInput({ relative: 'src/components' }),
    nodeResolve({ extensions: ['.js', '.ts', '.tsx'] }),
    commonjs({
      namedExports: {
        'react-is': ['isElement', 'isValidElementType', 'typeOf'],
      },
    }),
    typescript({ tsconfig: './tsconfig.rollup.json' }),
    postcss({
      autoModules: true,
      plugins: [autoprefixer()],
      use: ['sass'],
      extensions: ['.scss', '.css'],
    }),
  ],
};
