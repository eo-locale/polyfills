import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/index.js',
        format: 'cjs',
      },
    ],
    external: ['intl-locales-supported', 'intl', 'intl-pluralrules'],
    plugins: [typescript()],
  },
];
