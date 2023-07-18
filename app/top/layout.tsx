"use client";

import { useEffect } from "react";
import { TwoWayLayout as Layout } from "@/components/TwoWayLayout";
import {
  TopImageContext,
  useTopImageContextValue,
} from "@/utils/useTopImageContext";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topImageContextValue = useTopImageContextValue();

  useEffect(
    () => {
      topImageContextValue.init();

      return () => {
        topImageContextValue.dispose();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return (
    <>
      <Layout>
        <TopImageContext.Provider value={topImageContextValue}>
          {children}
        </TopImageContext.Provider>
      </Layout>
    </>
  );
}
