"use client";

import { TwoWayLayout as Layout } from "@/components/TwoWayLayout";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
