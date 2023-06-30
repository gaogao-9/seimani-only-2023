"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ResponsiveImage, isSmallSize } from "@/components/ResponsiveImage";
import { useTopImageContext } from "@/utils/useTopImageContext";

const isMobileMac = (): boolean => {
  if (typeof window === "undefined") return false;

  const ua = window.navigator.userAgent.toLowerCase();

  return (
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document)
  );
};

const animationStartDelay = 0.5;

const BackgroundInAnimation = keyframes`
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

const ImageWrapper = styled.div<{
  width: number;
  height: number;
  playstate?: "running" | "paused";
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  transform-origin: center center;
  transform-style: preserve-3d;
  animation-play-state: ${({ playstate = "running" }) => playstate};
`;

const BackgroundImageWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay + 0.1}s 1 running both
    ${BackgroundInAnimation};
  transform-origin: center bottom;
`;

const Page: React.FC = () => {
  const topImageContext = useTopImageContext();
  const [imageSize, setImageSize] = useState(() => {
    return isMobileMac() || isSmallSize()
      ? ({
          w: 941,
          h: 750,
        } as const)
      : ({
          w: 1881,
          h: 1500,
        } as const);
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entry) => {
      setImageSize(
        isMobileMac() || isSmallSize()
          ? ({
              w: 941,
              h: 750,
            } as const)
          : ({
              w: 1881,
              h: 1500,
            } as const),
      );
    });

    resizeObserver.observe(window.document.body);

    return () => {
      resizeObserver.unobserve(window.document.body);
    };
  }, []);

  if (!topImageContext.loaded) return <></>;

  return (
    <>
      <ResponsiveImage
        rectWidth="100%"
        rectHeight={["calc(100vh - 60px)", "calc(100dvh - 60px)"]}
        landscapePositionX="center"
        landscapePositionY={0.27}
        portraitPositionX={0.58}
        portraitPositionY="center"
        imageWidth={imageSize.w}
        imageHeight={imageSize.h}
        minimumHeightThretholdRate={400 / 100}
        minimumWidthThretholdRate={30 / 100}
      >
        <BackgroundImageWrapper width={imageSize.w} height={imageSize.h}>
          <Image
            src={
              isMobileMac() || isSmallSize()
                ? topImageContext.images["haikei_m.png"]
                : topImageContext.images["haikei.png"]
            }
            width={imageSize.w}
            height={imageSize.h}
            alt="背景画像"
          />
        </BackgroundImageWrapper>
      </ResponsiveImage>
    </>
  );
};

export default Page;
