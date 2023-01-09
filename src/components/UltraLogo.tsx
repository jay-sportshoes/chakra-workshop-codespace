import { useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

export const UltraLogo: React.FC = () => {
  const ultraLogoWidthDimentions = useBreakpointValue({
    base: { width: 79, height: 13 },
    md: { width: 147, height: 25 },
  });

  return <Image src="/images/ultra-logo.png" alt="Ultra" {...ultraLogoWidthDimentions} />;
};
