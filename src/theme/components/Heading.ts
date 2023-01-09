export const Heading = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'semibold',
    margin: 0,
  },
  sizes: {
    h1: {
      fontSize: { base: '4xl', sm: '5xl', md: '6xl', xl: '7xl' },
      lineHeight: { base: '3xl', sm: '4xl', md: '5xl', xl: '6xl' },
    },
    h2: {
      fontSize: { base: '3xl', sm: '4xl', md: '5xl', xl: '6xl' },
      lineHeight: { base: '2xl', sm: '3xl', md: '4xl', xl: '5xl' },
    },
    h3: {
      fontSize: { base: '2xl', sm: '3xl', md: '4xl', xl: '5xl' },
      lineHeight: { base: 'xl', sm: '2xl', md: '3xl', xl: '4xl' },
    },
    h4: {
      fontSize: { base: 'xl', md: '2xl', xl: '4xl' },
      lineHeight: { base: 'lg', md: 'xl', xl: '3xl' },
    },
    h5: {
      fontSize: { base: 'lg', md: 'xl', xl: '2xl' },
      lineHeight: { base: 'md', md: 'lg', xl: 'xl' },
    },
    h6: {
      fontSize: { base: 'base', md: 'lg', xl: 'xl' },
      lineHeight: { base: 'md', md: 'md', xl: 'lg' },
      textTransform: 'uppercase',
    },
  },
  defaultProps: {
    as: 'h2',
  },
};
