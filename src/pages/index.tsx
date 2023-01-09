import { Heading, Flex, Text, UnorderedList, Link, ListItem, Button } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

import { Layout } from '../components/Layout';

function Index() {
  return (
    <Layout>
      <Flex flexDir="column" alignItems="center" width="100%">
        <Heading as="h1" mb={4}>
          Welcome to the Chakra Workshop!
        </Heading>

        <Text mb={4}>By the end of this workshop you should have and understanding of:</Text>

        <UnorderedList mb={4}>
          <ListItem>
            <Text>
              What is{' '}
              <Link href="https://chakra-ui.com/" target="_blank" color="teal">
                Chakra UI?
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              What are{' '}
              <Link href="https://chakra-ui.com/docs/styled-system/theme" target="_blank" color="teal">
                Chakra tokens
              </Link>{' '}
              and how do you use them?
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              How would you build a{' '}
              <Link href="https://chakra-ui.com/docs/components/stack" target="_blank" color="teal">
                responsive layout
              </Link>{' '}
              using Chakra components?
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              How to{' '}
              <Link href="https://chakra-ui.com/docs/styled-system/customize-theme" target="_blank" color="teal">
                extend the Chakra Theme
              </Link>{' '}
              for our own design system?
            </Text>
          </ListItem>
        </UnorderedList>

        <Link as={NextLink} href="/login">
          <Button>Start the workshop</Button>
        </Link>
      </Flex>
    </Layout>
  );
}

export default Index;
