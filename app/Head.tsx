"use client";

import NextHead from "next/head";
import { routes } from "@/foundation/route";

export const Head: React.FC = (props) => {
  const route = routes.find((x) => x.pathname === window.location.pathname);
  const title =
    "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント 漕ぎ出せ！ソクバイ海Ⅵ";
  const subTitle = route?.pathname === "/top" ? "" : route?.title ?? "";
  const fullTitle = subTitle ? `${title} | ${subTitle}` : title;
  const description = `${title}の公式サイトです`;
  const origin = "https://festia.moe";
  const ogpImage = `${origin}/ogp_icon.jpg`;

  return (
    <>
      <title key="title">{fullTitle}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta name="google" content="notranslate" />
      <meta name="view-transition" content="same-origin" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:url" content={origin} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogpImage} />
      <meta name="twitter:card" content="summary" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={`${origin}${window.location.pathname}`} />
    </>
  );
};
