"use client";

import { Providers } from "./providers";
import "./global.css";
import { GlobalStyle } from "./GlobalStyle";
import { Head } from "./Head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="ja">
        <head>
          <Head />
        </head>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
      <GlobalStyle />
    </>
  );
}
