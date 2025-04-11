import { component$ } from "@builder.io/qwik";
import { Headline } from "../ui/Headline";

export default component$(() => {
  return (
    <div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl bg-background">
      <div class="flex max-w-5xl mx-auto">
        <div class="w-1/2">
          <Headline
            align="left"
            title={"Performance"}
            subtitle={"When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site."}
            highlight={"We Build Better Websites That Perform"}

          />
        </div>
        <div class="w-1/2">
          <img
            src="/images/contact.jpg"
            alt="Descriptive alt text"
            class="w-full h-full object-cover md:max-h-60"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4 py-t lg:pt-20 md:pt-16">
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary font-heading">
            100%
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Page Speed Scores <br /> Faster load times lead to more conversions
          </p>

        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary font-heading">
            24.8K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Stars
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 font-heading">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary">
            10.3K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Forks
          </p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary font-heading">
            100%
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </div>
  );
});
