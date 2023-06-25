"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Center } from "@chakra-ui/layout";
import { routes } from "@/foundation/route";

const Wrapper = styled.div`
  min-height: 100%;
`;

const List = styled.ul`
  overflow: auto;
  list-style: none;
`;

const ListItem = styled.li``;

const StyledLink = styled.span`
  position: relative;
  padding: 3px 5px;
  font-size: var(--chakra-fontSizes-lg);
  text-decoration: none;
  color: var(--chakra-colors-orange-400);
  font-family: "Hachi Maru Pop", cursive;

  &::after {
    position: absolute;
    bottom: -1px;
    left: 50%;
    content: "";
    width: calc(100% - 10px);
    height: 1px;
    background: var(--chakra-colors-orange-400);
    transform: translateX(calc(-50% + 2.5px)) scaleX(0);
    transform-origin: center top;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: translateX(calc(-50% + 2.5px)) scaleX(1);
  }

  &[aria-disabled] {
    pointer-events: none;
    font-weight: 600;

    &::after {
      transform: translateX(calc(-50% + 2.5px)) scaleX(1);
    }
  }
`;

export const RoutingMenu: React.FC = () => {
  const [currentPathName, setCurrentPathName] = useState<string | null>(null);
  useEffect(() => {
    setCurrentPathName(window.location.pathname);
  }, []);
  return (
    <Wrapper>
      <List>
        {routes.map((route) => {
          const isSamePathname = route.pathname === currentPathName;

          return (
            <ListItem key={route.title}>
              <Center my={4} as="span">
                <Link href={route.pathname}>
                  <StyledLink
                    aria-disabled={
                      isSamePathname || (undefined as unknown as boolean)
                    }
                    tabIndex={isSamePathname ? -1 : 0}
                  >
                    {route.title}
                  </StyledLink>
                </Link>
              </Center>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};
