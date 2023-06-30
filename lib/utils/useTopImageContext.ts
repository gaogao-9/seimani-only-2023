import { createImageContext } from "@/utils/useImageContext";

const imageNames = ["haikei.png", "haikei_m.png"] as const;

const { ImageContext, useImageContext, useImageContextValue } =
  createImageContext(imageNames, (imageName) => `/assets/img/top/${imageName}`);

export {
  ImageContext as TopImageContext,
  useImageContext as useTopImageContext,
  useImageContextValue as useTopImageContextValue,
};
