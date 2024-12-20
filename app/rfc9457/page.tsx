import VanityPage from "@/components/go-vanity/vanity";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  const repoName = "rfc9457";

  return {
    title: `${repoName} - AlpineWorks`,
    other: {
      "go-import": `alpineworks.io/${repoName} git https://github.com/alpineworks/${repoName}`,
      "go-source": `alpineworks.io/${repoName} https://github.com/alpineworks/${repoName} https://github.com/alpineworks/${repoName}/tree/master{/dir} https://github.com/alpineworks/${repoName}/blob/master{/dir}/{file}#L{line}`,
    },
  };
}

export default function Rfc9457() {
  return (
    <>
      <VanityPage repoName="rfc9457" />
    </>
  );
}