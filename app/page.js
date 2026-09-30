import PersonalPortfolio from "./personal-portfolio/page";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { buildHomeGraphJsonLd } from "@/lib/jsonLd";
import { defaultMetadata } from "./metadata";

export const metadata = defaultMetadata;

export default function Home() {
  return (
    <>
      <JsonLdScript data={buildHomeGraphJsonLd()} />
      <PersonalPortfolio />
    </>
  );
}
