"use client";

import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div<{
  width:
    | CSSProperties["width"]
    | [CSSProperties["width"], CSSProperties["width"]];
  height:
    | CSSProperties["height"]
    | [CSSProperties["height"], CSSProperties["height"]];
}>`
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  width: ${({ width }) => (Array.isArray(width) ? width[0] : width)};
  width: ${({ width }) => (Array.isArray(width) ? width[1] : width)};
  height: ${({ height }) => (Array.isArray(height) ? height[0] : height)};
  height: ${({ height }) => (Array.isArray(height) ? height[1] : height)};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: left top;
  transform-style: inherit;
  backface-visibility: hidden;
`;

const computePositionXRate = (positionX: PositionX) => {
  switch (positionX) {
    case "left":
      return 0;
    case "center":
      return 0.5;
    case "right":
      return 1;
    default:
      return positionX;
  }
};

const computePositionYRate = (positionY: PositionY) => {
  switch (positionY) {
    case "top":
      return 0;
    case "center":
      return 0.5;
    case "bottom":
      return 1;
    default:
      return positionY;
  }
};

type PositionX = "left" | "center" | "right" | number;
type PositionY = "top" | "center" | "bottom" | number;
type Size = { w: number; h: number };

export type ResponsiveImageProps = {
  rectWidth:
    | NonNullable<CSSProperties["width"]>
    | [
        NonNullable<CSSProperties["width"]>,
        NonNullable<CSSProperties["width"]>,
      ];
  rectHeight:
    | NonNullable<CSSProperties["height"]>
    | [
        NonNullable<CSSProperties["height"]>,
        NonNullable<CSSProperties["height"]>,
      ];
  imageWidth: number;
  imageHeight: number;
  minimumHeightThretholdRate: number;
  minimumWidthThretholdRate: number;
  landscapePositionX: PositionX;
  landscapePositionY: PositionY;
  portraitPositionX: PositionX;
  portraitPositionY: PositionY;
  children?: React.ReactNode;
  onResize?: (canvasSize: Size) => void;
};

export const ResponsiveImage: React.VFC<ResponsiveImageProps> = ({
  rectWidth,
  rectHeight,
  imageWidth,
  imageHeight,
  minimumHeightThretholdRate,
  minimumWidthThretholdRate,
  landscapePositionX,
  landscapePositionY,
  portraitPositionX,
  portraitPositionY,
  children,
  onResize,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState<Size>({
    w: 0,
    h: 0,
  });
  const imageSize = useMemo<Size>(
    () => ({ w: imageWidth, h: imageHeight }),
    [imageWidth, imageHeight],
  );

  useEffect(() => {
    if (wrapperRef.current === null) return;

    const target = wrapperRef.current;

    const resizeObserver = new ResizeObserver((entry) => {
      const [{ contentRect }] = entry;
      setCanvasSize({ w: contentRect.width, h: contentRect.height });
      onResize?.({ w: contentRect.width, h: contentRect.height });
    });

    const contentRect = target.getBoundingClientRect();
    setCanvasSize({ w: contentRect.width, h: contentRect.height });
    onResize?.({ w: contentRect.width, h: contentRect.height });

    resizeObserver.observe(target);

    return () => {
      resizeObserver.unobserve(target);
    };
  }, [onResize]);

  const scale = useMemo(() => {
    const imageRatio = imageSize.w / imageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;

    if (canvasRatio > imageRatio) {
      // 横長
      return {
        x:
          (canvasSize.h * Math.min(canvasRatio, minimumHeightThretholdRate)) /
          imageRatio /
          imageSize.h,
        y:
          (canvasSize.h * Math.min(canvasRatio, minimumHeightThretholdRate)) /
          imageSize.w,
      };
    } else {
      // 縦長
      return {
        x:
          canvasSize.w /
          Math.max(canvasRatio, minimumWidthThretholdRate) /
          imageSize.h,
        y:
          ((canvasSize.w / Math.max(canvasRatio, minimumWidthThretholdRate)) *
            imageRatio) /
          imageSize.w,
      };
    }
  }, [
    canvasSize.w,
    canvasSize.h,
    imageSize.h,
    imageSize.w,
    minimumHeightThretholdRate,
    minimumWidthThretholdRate,
  ]);

  const landscapeRateX = useMemo(
    () => computePositionXRate(landscapePositionX),
    [landscapePositionX],
  );
  const landscapeRateY = useMemo(
    () => computePositionYRate(landscapePositionY),
    [landscapePositionY],
  );
  const portraitRateX = useMemo(
    () => computePositionXRate(portraitPositionX),
    [portraitPositionX],
  );
  const portraitRateY = useMemo(
    () => computePositionYRate(portraitPositionY),
    [portraitPositionY],
  );

  const translate = useMemo(() => {
    const imageRatio = imageSize.w / imageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;

    if (canvasRatio > imageRatio) {
      // 横長
      return {
        x:
          canvasSize.w *
          (1 -
            Math.min(canvasRatio, minimumHeightThretholdRate) / canvasRatio) *
          landscapeRateX,
        y:
          canvasSize.h *
          (1 - Math.min(canvasRatio, minimumHeightThretholdRate) / imageRatio) *
          landscapeRateY,
      };
    } else {
      // 縦長
      return {
        x:
          canvasSize.w *
          (1 - imageRatio / Math.max(canvasRatio, minimumWidthThretholdRate)) *
          portraitRateX,
        y:
          canvasSize.h *
          (1 - canvasRatio / Math.max(canvasRatio, minimumWidthThretholdRate)) *
          portraitRateY,
      };
    }
  }, [
    canvasSize.w,
    canvasSize.h,
    imageSize.h,
    imageSize.w,
    minimumHeightThretholdRate,
    minimumWidthThretholdRate,
    landscapeRateX,
    landscapeRateY,
    portraitRateX,
    portraitRateY,
  ]);

  return (
    <Wrapper ref={wrapperRef} width={rectWidth} height={rectHeight} {...props}>
      <ImageContainer
        style={{
          transform: `translate(${
            !Number.isNaN(translate.x) ? translate.x : 0
          }px, ${!Number.isNaN(translate.y) ? translate.y : 0}px) scale(${
            !Number.isNaN(scale.x) ? scale.x : 0
          }, ${!Number.isNaN(scale.y) ? scale.y : 0})`,
        }}
      >
        {children}
      </ImageContainer>
    </Wrapper>
  );
};

export const isSmallSize = (): boolean => {
  if (typeof window === "undefined") return false;
  if (!window.matchMedia) return false;

  return (
    window.matchMedia("(min-aspect-ratio: 1/1) and (max-height: 720px)")
      .matches ||
    window.matchMedia("(max-aspect-ratio: 1/1) and (max-width: 720px)").matches
  );
};

export const Image = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  backface-visibility: hidden;

  @media (min-aspect-ratio: 1/1) and (max-height: 720px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 720px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;
