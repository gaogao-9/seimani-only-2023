"use client";

import { ResponsiveImage } from "@/components/ResponsiveImage";
import { TwoWayLayout as Layout } from "@/components/TwoWayLayout";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

const animationStartDelay = 0.5;
const imageSize = {
  w: 411,
  h: 604,
} as const;

const CharaInAnimation = keyframes`
  0% {
    transform: translateY(-120%) scale(0.8, 1.2);
  }
  50% {
    transform: scale(1.2, 0.8);
  }
  100% {
    transform: translateY(0%) scale(1, 1);
  }
`;

const CharaImage = styled(Image)`
  animation: 0.5s ease ${animationStartDelay}s 1 running both
    ${CharaInAnimation};
  transform-origin: center bottom;
`;

const Page: React.FC = () => {
  return (
    <Layout>
      <ResponsiveImage
        rectWidth="100%"
        rectHeight={["calc(100vh - 60px)", "calc(100dvh - 60px)"]}
        landscapePositionX="center"
        landscapePositionY={0.2}
        portraitPositionX="center"
        portraitPositionY="center"
        imageWidth={imageSize.w}
        imageHeight={imageSize.h}
        minimumHeightThretholdRate={200 / 100}
        minimumWidthThretholdRate={50 / 100}
      >
        <CharaImage
          src="/top/top.png"
          width={imageSize.w}
          height={imageSize.h}
          alt="カルチェとジーンのツーショット"
        />
      </ResponsiveImage>
    </Layout>
  );
};

export default Page;
