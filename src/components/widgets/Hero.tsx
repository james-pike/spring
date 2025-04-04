import { component$ } from "@builder.io/qwik";
import Carousel from "../ui/Carousel";
import LogoClouds from "./LogoClouds";
import { Button } from "../ui/Button";
import { Link } from "@builder.io/qwik-city";
import { Typewriter } from "./Typewriter";

// 

export default component$(() => {
  return (
    <section class="relative overflow-hidden">
      <div class="grid bg-gradient-to-r from-border via-background to-muted dark:from-background dark:to-muted grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] md:grid-rows-[85%_15%] min-h-[calc(100vh-89px)]">
        {/* Text Content */}
        <div class="relative z-10  order-1 md:order-1 flex items-center justify-center  px-4 py-8 md:px-8 md:py-0">
          <div class="text-center md:text-left">
            {/* /
          <a href="#" class="inline-flex justify-between items-center py-1 -mt-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Free Web Audit & SEO Report</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
           </a> */}
            <h1 class="text-5xl font-bold tracking-tighter text-balance sm:text-6xl md:text-6xl lg:text-7xl mb-4 animate-hero-text">
              Custom <br/> <Typewriter /> <br/> Solutions
            </h1>
            <p class="text-xl sm:text-xl md:text-2xl text-muted-foreground text-balance mb-6 animate-hero-subtitle max-w-2xl mx-auto md:mx-0">
              Transform your online presence with custom web design and development services—stunning, fast, and secure websites for your business.
            </p>
            <div class="flex flex-col items-center gap-4 px-2 md:px-0 sm:flex-row sm:justify-center md:justify-start animate-hero-buttons">
              <Link href="/contact" class="w-full sm:w-auto">
              <Button
  size="md"
  class="w-full relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:animate-shimmer"
>
  Get A Quote
</Button>              </Link>
              <Link href="/contact" class="w-full sm:w-auto">
                <Button look="secondary" size="md" class="w-full">Book A Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Carousel */}
        <div class="relative order-2 px-4 md:order-2 h-52 sm:h-80 md:h-full">
          <Carousel />
        </div>
        {/* LogoClouds */}
        <div class="bg-gradient-to-r from-gray-200 to-gray-50 dark:from-gray-900 dark:to-gray-700 col-span-1 md:col-span-2 flex items-center justify-center py-4 order-3">
          <LogoClouds />
        </div>
      </div>
    </section>
  );
});