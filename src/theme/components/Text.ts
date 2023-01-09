export const Text = {
  baseStyle: {
    fontFamily: 'body',
  },
  variants: {
    body: {
      textStyle: { base: 'sm', md: 'base' },
    },
    bodySmall: {
      textStyle: { base: 'xs', md: 'sm' },
    },
    caption: {
      textStyle: { base: 'xxs', md: 'xs' },
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 600,
    },
  },
  defaultProps: {
    variant: 'body',
    as: 'p',
  },
};
