import { createContext, useContext, useState } from "react";

export type ImageContext<T extends string> = {
  loaded: boolean;
  images: { [k in T]: string };
  init: () => void;
  dispose: () => void;
};

export const createImageContext = <T extends string>(
  imageNames: readonly T[],
  computeResourcePath: (path: string) => string,
) => {
  const ImageContext = createContext<ImageContext<T> | null>(null);

  return {
    ImageContext,
    useImageContext: (): ImageContext<T> =>
      useContext(ImageContext) as ImageContext<T>,
    useImageContextValue: (): ImageContext<T> => {
      const [state, setState] = useState<ImageContext<T>>({
        loaded: false,
        images: {} as ImageContext<T>["images"],
        async init() {
          const loadImages = async () => {
            const images = {} as { [k in T]: string };

            for (const imageName of imageNames) {
              const arrayBuffer = await fetch(
                computeResourcePath(imageName),
              ).then((res) => res.arrayBuffer());
              const blob = new Blob([arrayBuffer], { type: "image/png" });
              const url = URL.createObjectURL(blob);

              images[imageName] = url;
            }

            return images;
          };

          const imagesPromise = loadImages();
          const delayPromise = new Promise((resolve) =>
            setTimeout(resolve, 1000),
          );
          const [images] = await Promise.all([imagesPromise, delayPromise]);

          setState({
            ...state,
            loaded: true,
            images,
          });
        },
        dispose() {
          for (const imageURL of Object.values<string>(state.images)) {
            URL.revokeObjectURL(imageURL);
          }

          setState({
            ...state,
            loaded: false,
            images: {} as ImageContext<T>["images"],
          });
        },
      });

      return state;
    },
  };
};
