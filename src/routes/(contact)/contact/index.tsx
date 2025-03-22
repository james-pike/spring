import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/widgets/Contact";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Contact  
      title="Get A Free Estimate"
      subtitle="Get in touch for a service call or free estimate."
      highlight="Contact Us"
      classes={{
        
    
      }}
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