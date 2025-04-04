import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import FAQ from "~/components/widgets/FAQ";
import { SITE } from "~/config.mjs";
import { qwikSerialized } from "~/utils/qwikSerialized";


export default component$(() => {
  return (
    <>
    <FAQ
    isDark
      title="Frequently Asked Questions"
      subtitle="Find answers to common inquiries about our cafe."
      highlight="FAQs"
     
    />


    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};