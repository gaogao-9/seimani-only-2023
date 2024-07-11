import { routes } from "@/foundation/route";
import { Metadata } from "next";

export const createHeadMetadata = (pathname: string): Metadata => {
  const route = routes.find((x) => x.pathname === pathname);
  const title =
    "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント 漕ぎ出せ！ソクバイ海Ⅵ";
  const subTitle = route?.pathname === "/top" ? "" : route?.title ?? "";
  const fullTitle = subTitle ? `${title} | ${subTitle}` : title;
  const description = `${title}の公式サイトです`;
  const origin = "https://only2023.festia.moe";
  const ogpImage = `${origin}/ogp_icon.jpg`;

  return {
    title: fullTitle,
    metadataBase: new URL(origin),
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title: fullTitle,
      url: origin,
      description: description,
      images: ogpImage,
    },
    alternates: {
      canonical: `${pathname}`,
    },
  };
};
