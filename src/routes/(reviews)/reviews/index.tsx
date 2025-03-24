import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Reviews2 from "~/components/widgets/Reviews2";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Reviews2  
 isDark
      title="What Our Clients Say"
      subtitle="These reviews are pulled from Google Reviews are filtered to only display 4-5 star ratings."
      highlight="Reviews"
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