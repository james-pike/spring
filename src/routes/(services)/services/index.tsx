import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Services from "~/components/widgets/Services";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Services  
      title="What We Do"
      subtitle="Now Serving Preston, Wellington & Almonte"
      highlight="Services"
      items={[]}
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