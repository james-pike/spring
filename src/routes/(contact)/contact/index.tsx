import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/widgets/Contact";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Contact  
      title="Contact Us"
      subtitle="Now Serving Preston, Wellington & Almonte"
      highlight="Get In Touch"
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