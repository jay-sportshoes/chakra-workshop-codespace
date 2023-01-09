import { Box, Button, Flex, Heading, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import { LoginForm } from '../components/LoginForm';
import { UltraLogo } from '../components/UltraLogo';

function Login() {
  return (
    <Stack>
      <LoginForm />

      <Box>
        <Box>
          <Heading as="h2">NOT A MEMBER?</Heading>
          <UltraLogo />

          <List mb={6}>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={FiCheckCircle} boxSize="6" />
                <Text>Priority order processing for ultra fast service.</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={FiCheckCircle} boxSize="6" />
                <Text>Exclusive special offers on selected items.</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={FiCheckCircle} boxSize="6" />
                <Text>First access to product launches, sale items & save more.</Text>
              </Flex>
            </ListItem>
          </List>

          <Button>Create a Free Ultra Account</Button>
        </Box>
        <Image
          src="https://images.prismic.io/sportsshoes-dev/8fa8b475-033d-4580-b582-9dadc7b8e7af_Ultra+membership.png?auto=compress%2Cformat&rect=0%2C11%2C709%2C709&w=750&fit=max"
          alt="Ultra"
          width={709}
          height={731}
        />
      </Box>
    </Stack>
  );
}

export default Login;
