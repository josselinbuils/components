import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';

import { dependencies, peerDependencies } from './package.json';

export default {
  input: ['src/**/index.ts', '!src/doc'],
  output: {
    dir: 'dist',
    format: 'esm',
  },
  external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
  plugins: [
    multiInput({ relative: 'src' }),
    nodeResolve({ extensions: ['.js', '.ts', '.tsx'] }),
    commonjs({
      namedExports: {
        'prop-types': ['elementType'],
        'react-is': ['ForwardRef', 'Memo'],
      },
    }),
    typescript({ rootDir: './src' }),
  ],
};
