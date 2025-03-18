import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Services from "~/components/widgets/Services";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
  <Services
  highlight="Services"
  title="Reliable Locksmith Services You Can Trust"
  subtitle="From emergency lockouts to advanced security solutions, we provide fast, professional, and secure locksmith services tailored to your needs."
  items={[]}/>
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