"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createNavigationCallback } from "@/utils/createNavigationCallback";

const Page: React.FC = () => {
  const router = useRouter();
  const navigationCallback = useMemo(
    () => createNavigationCallback(router.push),
    [router.push],
  );
  const onNavigateToContents = useMemo(
    () => navigationCallback(),
    [navigationCallback],
  );

  return (
    <>
      <p>hello</p>
      <p>
        <span className="menuHeaderTransition">hoge</span>
      </p>
      <p>
        <Link href="/top" onClick={onNavigateToContents}>
          goto
        </Link>
      </p>
    </>
  );
};

export default Page;
