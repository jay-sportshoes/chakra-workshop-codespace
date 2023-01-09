import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import { DM_Sans } from '@next/font/google';
import localFont from '@next/font/local';
import { Layout } from '../components/Layout';
import { theme } from '../theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

const dmSans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-dm-sans' });
const buenosAires = localFont({
  variable: '--font-buenos-aires',
  src: [
    { path: '/fonts/BuenosAires-Book.woff2', weight: '400', style: 'normal' },
    { path: '/fonts/BuenosAires-Book.woff', weight: '400', style: 'normal' },
    { path: '/fonts/BuenosAires-Regular.woff2', weight: '500', style: 'normal' },
    { path: '/fonts/BuenosAires-Regular.woff', weight: '500', style: 'normal' },
    { path: '/fonts/BuenosAires-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '/fonts/BuenosAires-SemiBold.woff', weight: '600', style: 'normal' },
    { path: '/fonts/BuenosAires-SemiBoldItalic.woff2', weight: '600', style: 'italic' },
    { path: '/fonts/BuenosAires-SemiBoldItalic.woff', weight: '600', style: 'italic' },
    { path: '/fonts/BuenosAires-Bold.woff2', weight: '700', style: 'normal' },
    { path: '/fonts/BuenosAires-Bold.woff', weight: '700', style: 'normal' },
    { path: '/fonts/BuenosAires-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: '/fonts/BuenosAires-BoldItalic.woff', weight: '700', style: 'italic' },
    { path: '/fonts/BuenosAires-Black.woff2', weight: '900', style: 'normal' },
    { path: '/fonts/BuenosAires-Black.woff', weight: '900', style: 'normal' },
  ],
});

export const fontVars = `${buenosAires.variable} ${dmSans.variable}`;

export default App;
