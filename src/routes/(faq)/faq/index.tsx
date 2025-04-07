import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Headline } from "~/components/ui/Headline";
import FAQ from "~/components/widgets/FAQ";
import { SITE } from "~/config.mjs";


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