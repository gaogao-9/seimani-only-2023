"use client";

import { Providers } from "./providers";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}