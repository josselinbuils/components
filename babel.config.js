module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/proposal-class-properties',
    ['@babel/transform-runtime', { regenerator: true }]
  ],
  exclude: 'node_modules/*'
};
