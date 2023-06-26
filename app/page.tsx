"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/top");
  }, [router]);

  return <></>;
};

export default Page;
