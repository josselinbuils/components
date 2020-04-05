export default {
  docgenConfig: {
    propFilter: ({ parent }) =>
      // Filters HTMLAttributes
      !parent || !parent.fileName.includes('node_modules'),
  },
  src: './src',
  typescript: true,
};
