import PageClient from "./page.client";
import { createHeadMetadata } from "@/utils/createHeadMetadata";

export default function Page() {
  return <PageClient />;
}

export const metadata = {
  ...createHeadMetadata("/common"),
};
