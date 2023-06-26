"use client";

import { ResponsiveImage } from "@/components/ResponsiveImage";
import { TwoWayLayout as Layout } from "@/components/TwoWayLayout";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useCallback, useState } from "react";

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

const CharaImage = styled(Image)<{ playstate: "running" | "paused" }>`
  animation: 0.5s ease ${animationStartDelay}s 1 running both
    ${CharaInAnimation};
  animation-play-state: ${({ playstate }) => playstate};
  transform-origin: center bottom;
`;

const Page: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const onCharaImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);
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
          playstate={isLoaded ? "running" : "paused"}
          src="/assets/img/top.png"
          width={imageSize.w}
          height={imageSize.h}
          loading="eager"
          alt="カルチェとジーンのツーショット"
          onLoad={onCharaImageLoad}
        />
      </ResponsiveImage>
    </Layout>
  );
};

export default Page;
