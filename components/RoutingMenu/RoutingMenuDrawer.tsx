"use client";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import type { DrawerProps } from "@chakra-ui/react";

export interface RoutingMenuDrawerProps extends DrawerProps {
  children: React.ReactNode;
}

export const RoutingMenuDrawer: React.FC<RoutingMenuDrawerProps> = ({
  children,
  ...props
}) => {
  return (
    <Drawer {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader />
        <DrawerBody p={0}>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
