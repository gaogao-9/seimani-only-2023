"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createNavigationCallback } from "@/utils/createNavigationCallback";
import { TwoWayLayout as Layout } from "@/components/TwoWayLayout";

const Page: React.FC = () => {
  const router = useRouter();
  const navigationCallback = useMemo(
    () => createNavigationCallback(router.push),
    [router.push],
  );
  const onNavigateToTop = useMemo(
    () => navigationCallback(),
    [navigationCallback],
  );
  return (
    <Layout>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        <span className="menuHeaderTransition">hoge</span>
      </p>
      <p>
        <Link href="/" onClick={onNavigateToTop}>
          goto index
        </Link>
      </p>
    </Layout>
  );
};

export default Page;
