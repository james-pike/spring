import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ServicesX from "~/components/widgets/ServicesX";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
  <ServicesX
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