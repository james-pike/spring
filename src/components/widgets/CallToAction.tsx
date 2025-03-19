import { component$ } from "@builder.io/qwik";
import ContactForm from "./ContactForm";

export default component$(() => {
  return (
    <section class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="max-w-3xl mx-auto  p-6 rounded-md shadow-xl dark:shadow-none">
            <h2 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              <span class="text-[#039de1]">Qwik</span> +{" "}
              <br class="block sm:hidden" />
              <span class="text-[#039de1] sm:whitespace-nowrap">
                Tailwind CSS
              </span>
            </h2>
            <p class="text-xl text-gray-600 dark:text-slate-400">
              Be very surprised by these huge fake numbers you are seeing on
              this page. <br class="hidden md:inline" />
              Don't waste more time!
            </p>

           <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
});
