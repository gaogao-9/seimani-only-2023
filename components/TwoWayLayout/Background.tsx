"use client";

import styled from "@emotion/styled";

const BackgroundWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 60px);
  min-height: calc(100dvh - 60px);
  background-color: var(--chakra-colors-white-full);
  background-image: linear-gradient(
      90deg,
      rgba(255, 220, 165, 0.3) 50%,
      transparent 50%
    ),
    linear-gradient(rgba(255, 220, 165, 0.3) 50%, transparent 50%);
  background-size: 80px 80px;
  background-position: 20px 20px;
  background-attachment: fixed;
`;

const BottomGradient = styled.div`
  position: absolute;
  top: auto;
  left: auto;
  right: auto;
  bottom: 0;
  width: 100%;
  height: 50vh;
  height: 50dvh;
  overflow: hidden;
  background-image: linear-gradient(
    0deg,
    rgba(200, 160, 135, 0.7),
    transparent
  );
  mix-blend-mode: multiply;
`;

const Contents = styled.div`
  position: relative;
  z-index: 1;
`;

export type SkyBackgroundProps = {
  children: React.ReactNode;
};

export const Background: React.FC<SkyBackgroundProps> = ({ children }) => (
  <BackgroundWrapper>
    <BottomGradient />
    <Contents>{children}</Contents>
  </BackgroundWrapper>
);
