import type { ColorMode, ThemeConfig, ThemingProps } from '@chakra-ui/react';
import type { Pseudos, SemanticValue, StyleObjectOrFn } from '@chakra-ui/styled-system';
import type { PartsStyleInterpolation, Styles, SystemStyleInterpolation } from '@chakra-ui/theme-tools';
import type { Dict } from '@chakra-ui/utils';

export type RecursiveProperty<T = string | number> = RecursiveObject<T> | T;

export interface RecursiveObject<T = string | number> {
  [property: string]: RecursiveProperty<T>;
}

export type ThemeTransitions = RecursiveObject & {
  property: RecursiveObject;
  easing: RecursiveObject;
  duration: RecursiveObject;
};

export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type Colors = RecursiveObject<Record<string, Partial<ColorHues>> | string>;

export type ThemeDirection = 'ltr' | 'rtl';

export interface ComponentDefaultProps extends Omit<ThemingProps, 'styleConfig'>, Dict {}

export interface SystemStyleObjectRecord {
  [key: string]: StyleObjectOrFn;
}

export interface ComponentSingleStyleConfig {
  parts?: never;
  baseStyle?: SystemStyleInterpolation;
  sizes?: Record<string, SystemStyleInterpolation>;
  variants?: Record<string, SystemStyleInterpolation>;
  defaultProps?: ComponentDefaultProps;
}

export interface ComponentMultiStyleConfig {
  parts: string[];
  baseStyle?: PartsStyleInterpolation;
  sizes?: Record<string, PartsStyleInterpolation>;
  variants?: Record<string, PartsStyleInterpolation>;
  defaultProps?: ComponentDefaultProps;
  colorScheme: string;
}

export type ComponentStyleConfig = ComponentSingleStyleConfig | ComponentMultiStyleConfig;

export interface ThemeComponents {
  [componentName: string]: ComponentStyleConfig;
}

interface Typography {
  fonts: RecursiveObject<string>;
  fontSizes: RecursiveObject;
  fontWeights: RecursiveObject;
  letterSpacings: RecursiveObject;
  lineHeights: RecursiveObject;
}

interface Foundations extends Typography {
  borders: RecursiveObject;
  breakpoints: Dict;
  colors: Colors;
  radii: RecursiveObject;
  shadows: RecursiveObject<string>;
  sizes: RecursiveObject;
  space: RecursiveObject;
  transition: ThemeTransitions;
  zIndices: RecursiveObject;
}

export interface ChakraTheme extends Foundations {
  semanticTokens?: Partial<Record<keyof Foundations, Record<string, SemanticValue<keyof Pseudos>>>>;
  components: ThemeComponents;
  config: ThemeConfig;
  direction: ThemeDirection;
  styles: Styles;
  layerStyles?: SystemStyleObjectRecord;
  textStyles?: SystemStyleObjectRecord;
}

export const ColorSchemeColors = ['black', 'white'];

export type ColorScheme = typeof ColorSchemeColors[number];

export interface ThemeComponentProps<T extends ChakraTheme = ChakraTheme> extends Omit<ThemingProps, 'styleConfig'> {
  colorMode: ColorMode;
  theme: T;
  colorScheme: ColorScheme;
  [x: string]: any;
}

export type ThemeComponentFunction<S, T extends ChakraTheme = ChakraTheme> = (props: ThemeComponentProps<T>) => S;

export type ThemingPropsThunk<S, T extends ChakraTheme = ChakraTheme> = S | ThemeComponentFunction<S, T>;
