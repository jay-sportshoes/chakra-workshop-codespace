import { Box } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box as="main" py={20}>
      {children}
    </Box>
  );
};
