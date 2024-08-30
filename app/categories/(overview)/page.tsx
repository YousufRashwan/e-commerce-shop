import { redirect } from "next/navigation";

import { getCategoryLinks } from "@/app/lib/data";

export default function HomeAppliance() {
  const links = getCategoryLinks();
  redirect(links[0].href);
}
