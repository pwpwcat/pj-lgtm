import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';
import { Theme } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";
type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: RootLayoutProps) => {
    return (
      <Theme>
        
        <Flex direction="column" gap="2">
          <Header />
          <Text>Hello from Radix Themes :)</Text>
          <Button color="cyan">Let's go</Button>
          <Button color="crimson" variant="soft">Edit profile</Button>
          <Main>{children}</Main>
          <Footer />
        </Flex>
      </Theme>
    )
  }
export default RootLayout