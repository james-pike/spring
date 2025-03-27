import { component$ } from "@builder.io/qwik";
import IconBrandTailwind from "../icons/IconBrandTailwind";
import IconBrandGoogle from "../icons/IconBrandGoogle";
import Carousel from "../ui/Carousel";
import LogoClouds from "./LogoClouds";
import { Button } from "../ui/Button";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section>
      <div class="grid grid-cols-2 grid-rows-[84%_16%] h-[calc(100vh-90.66667px)] ">
        <div class="bg-gradient-to-r  from-muted to-background dark:from-background dark:to-muted flex items-center px-8">
          <div>
            <h1 class="text-4.5xl md:text-7xl font-bold  tracking-tighter leading-tighter mb-4  animate-hero-text">
              Premium 
              <br class="hidden md:block" /> <span class="text-primary">Web Design</span>
              <br class="hidden md:block" />Solutions <br class="hidden lg:block" />{" "}
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl mb-6 animate-hero-subtitle text-muted-foreground">
              Transform your online presence with our custom web design and development services. We help business create stunning, fast, and secure websites.
              </p>
              <div class="max-w-xs sm:max-w-md animate-hero-buttons m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-3 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full gap-3 sm:w-auto">
                <Link href="/quote">
                <Button>
                  Get A Quote
                </Button>
                </Link>
                <Link href="/quote">
                <Button look="secondary">
                  Book A Free Consultation
                </Button>
                </Link>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div class="bg-red-400 h-full w-full">
          <Carousel />
        </div>
        <div class="bg-gradient-to-r from-gray-200 to-gray-50 dark:from-gray-900 dark:to-gray-700 col-span-2 flex items-center">
            <LogoClouds/>
        </div>
      </div>
    </section>
  );
});