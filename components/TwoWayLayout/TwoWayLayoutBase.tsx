"use client";

import styled from "@emotion/styled";
import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { RoutingMenu } from "@/components/RoutingMenu/RoutingMenu";
import { RoutingMenuDrawer } from "@/components/RoutingMenu/RoutingMenuDrawer";
import { Footer } from "@/components/Footer";

const Wrapper = styled.div`
  display: grid;
  grid-template: "contents menu  " 1fr / 1fr auto;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  isolation: isolate;
`;

interface GridItemProps {
  gridArea: string;
  overflow?: "visible" | "hidden" | "auto";
}

const GridItem = styled.div<GridItemProps>`
  grid-area: ${({ gridArea }) => gridArea};
  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  overflow-x: hidden;
  isolation: isolate;
`;

export interface TwoWayLayoutBaseProps {
  children: React.ReactNode;
}

export const TwoWayLayoutBase: React.FC<TwoWayLayoutBaseProps> = ({
  children,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Wrapper {...props}>
        <GridItem gridArea="contents" overflow-y="visible">
          <Box isolation="isolate">{children}</Box>
          <Box isolation="isolate">
            <Footer />
          </Box>
        </GridItem>
        <GridItem
          gridArea="menu"
          overflow-y="auto"
          style={{
            backgroundColor: "var(--chakra-colors-white-full)",
          }}
        >
          <Box
            display={{ base: "none", lg: "block" }}
            w="200px"
            h="100%"
            pt={6}
            overflowY="auto"
          >
            <RoutingMenu />
          </Box>
          <Box display={{ base: "block", lg: "none" }}>
            <RoutingMenuDrawer size="xs" isOpen={isOpen} onClose={onClose}>
              <RoutingMenu />
            </RoutingMenuDrawer>
          </Box>
        </GridItem>
      </Wrapper>
      <Box
        display={{ base: "block", lg: "none" }}
        position="absolute"
        top="5px"
        right="20px"
      >
        <IconButton
          aria-label="ページ内リンクメニューを表示"
          icon={<HamburgerIcon color="gray.700" />}
          onClick={onOpen}
        />
      </Box>
    </>
  );
};
