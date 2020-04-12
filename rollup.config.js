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
  plugins: [multiInput({ relative: 'src' }), typescript({ rootDir: './src' })],
};
