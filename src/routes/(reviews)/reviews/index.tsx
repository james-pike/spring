import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Reviews from "~/components/widgets/Reviews";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Reviews  
      title="What We Do"
      subtitle="Now Serving Preston, Wellington & Almonte"
      highlight="Services"
      items={[]}
      classes={{
        
    
      }}
      />
       <div class="max-w-6xl mx-auto mb-10 bg-white h-40">
      <p>Returning customer? Write a review on Google!</p>
     </div>
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