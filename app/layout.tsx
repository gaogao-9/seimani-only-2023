"use client";

import { Providers } from "./providers";
import "./global.css";
import { GlobalStyle } from "./GlobalStyle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="ja">
        <head>
          <meta key="googletranslate" name="google" content="notranslate" />
          <meta
            key="viewtransition"
            name="view-transition"
            content="same-origin"
          />
          <link key="icon" rel="icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
      <GlobalStyle />
    </>
  );
}
