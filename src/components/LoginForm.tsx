import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  FormControl,
  Link,
  Text,
  Box,
  VStack,
  FormLabel,
  Heading,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';
import { Apple, Facebook, Google } from './icons';

export const LoginForm: React.FC = () => {
  return (
    <Box maxW="34.5rem" px={10}>
      <Heading as="h2">Sign In</Heading>
      <Text>Welcome back! Don’t miss out on your member benefits.</Text>
      <form>
        <VStack spacing={5} mb={{ base: 4, md: 8 }}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="you@example.com" autoComplete="username" />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" autoComplete="current-password" />
          </FormControl>

          <CheckboxGroup>
            <Checkbox>Remember me</Checkbox>
          </CheckboxGroup>
          <Link href="/forgot">
            <Text>I forgot my password</Text>
          </Link>

          <Button type="submit" w="100%">
            Sign in
          </Button>
        </VStack>
      </form>
      <VStack spacing={4} alignItems="flex-start">
        <Text textAlign="center" textStyle="md">
          Or sign in with...
        </Text>

        <SocialButton icon={<Google />}>Google</SocialButton>
        <SocialButton icon={<Apple />}>Apple</SocialButton>
        <SocialButton icon={<Facebook />}>Facebook</SocialButton>
      </VStack>
    </Box>
  );
};

interface SocialButtonProps {
  children: React.ReactNode;
  icon: ReactElement<SVGSVGElement>;
}

const SocialButton: React.FC<SocialButtonProps> = ({ children, icon }) => (
  <Button w="100%" leftIcon={icon} iconSpacing={2} mb={2}>
    {children}
  </Button>
);
