import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

import { components } from './components';
import { foundations } from './foundations';

import { styles } from './styles';

const config: ThemeConfig = {
  cssVarPrefix: 'chakra',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  direction: 'ltr',
  components,
  ...foundations,
  styles,
  config,
});

export type Theme = typeof theme;

export default theme;
