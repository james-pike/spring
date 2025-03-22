import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Reviews from "~/components/widgets/Reviews";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Reviews  
 isDark
      title="What We Do"
      subtitle="These reviews are pulled automatically from Google Reviews are filtered to only display 4-5 star ratings."
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