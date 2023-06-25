"use client";

import { TwoWayLayoutBase } from "@/components/TwoWayLayout/TwoWayLayoutBase";
import { Background } from "@/components/TwoWayLayout/Background";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const TwoWayLayout: React.FC<DefaultLayoutProps> = ({
  children,
  ...props
}) => (
  <TwoWayLayoutBase {...props}>
    <Background>{children}</Background>
  </TwoWayLayoutBase>
);
