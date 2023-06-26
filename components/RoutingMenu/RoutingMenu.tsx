"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import { Center } from "@chakra-ui/layout";
import { routes } from "@/foundation/route";
import { createNavigationCallback } from "@/utils/createNavigationCallback";

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
  font-family: "Kaisei Opti", cursive;

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

  &:hover::after,
  &[data-selected]::after {
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
  const router = useRouter();
  const navigationCallback = useMemo(
    () => createNavigationCallback(router.push),
    [router.push],
  );
  const onNavigateToContents = useMemo(
    () => navigationCallback(),
    [navigationCallback],
  );

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
                {isSamePathname ? (
                  <StyledLink data-selected>
                    <span>{route.title}</span>
                  </StyledLink>
                ) : (
                  <Link
                    href={route.pathname}
                    onClick={
                      route.name !== "top" ? onNavigateToContents : undefined
                    }
                  >
                    <StyledLink>
                      <span className={`menuHeaderTransition ${route.name}`}>
                        {route.title}
                      </span>
                    </StyledLink>
                  </Link>
                )}
              </Center>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};
