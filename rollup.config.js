import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import pkg from './package.json';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [
      typescript(),
      sass({ insert: true })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  }
];