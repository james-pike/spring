import { component$ } from "@builder.io/qwik";
import Carousel from "../ui/Carousel";
import { Button } from "../ui/Button";
import { Link } from "@builder.io/qwik-city";
import { Typewriter } from "./Typewriter";
import LogoClouds from "./LogoClouds";

export default component$(() => {
  return (
    <section class="relative overflow-hidden">
      <div class="grid bg-gradient-to-r from-border via-background to-muted dark:from-background dark:to-muted grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] md:grid-rows-[85%_15%] min-h-[calc(100vh-89px)]">
        {/* Text Content */}
        <div class="relative z-10 order-1 md:order-1 flex items-center justify-center px-4 py-8 md:px-8 md:py-0">
          <div class="text-center md:text-left">
            <h1 class="text-5xl font-bold tracking-tighter text-balance sm:text-6xl md:text-6xl lg:text-7xl mb-4 opacity-0 animate-[fadeSlideLeft_0.8s_ease-out_0.2s_forwards]">
              Custom <br /> <Typewriter /> <br /> Solutions
            </h1>
            <p class="text-xl sm:text-xl md:text-2xl text-muted-foreground text-balance mb-6 max-w-2xl mx-auto md:mx-0 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
              Transform your online presence with custom web design and development services—stunning, fast, and secure websites for your business.
            </p>
            <div class="flex flex-col items-center gap-4 px-2 md:px-0 sm:flex-row sm:justify-center md:justify-start opacity-0 animate-[fadeSlideLeft_0.8s_ease-out_0.6s_forwards]">
              <Link href="/contact" class="w-full sm:w-auto">
                <Button
                  size="md"
                  class="w-full relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:animate-shimmer"
                >
                  Get A Quote
                </Button>
              </Link>
              <Link href="/contact" class="w-full sm:w-auto">
                <Button look="secondary" size="md" class="w-full">Book A Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Carousel */}
        <div class="relative order-2 px-4 md:order-2 h-52 sm:h-80 md:h-full opacity-0 animate-[fadeSlideRight_1s_ease-out_0.8s_forwards]">
          <Carousel />
        </div>
        {/* LogoClouds */}
        <div class="bg-gradient-to-r from-gray-200 to-gray-50 dark:from-gray-900 dark:to-gray-700 col-span-1 md:col-span-2 flex items-center justify-center py-4 order-3 overflow-hidden">
          <div class="animate-scroll flex">
            <div class="flex shrink-0 px-4">
              <LogoClouds />
            </div>
            <div class="flex shrink-0 px-4">
              <LogoClouds />
            </div>
            <div class="flex shrink-0 px-4">
              <LogoClouds />
            </div>
ទ

            <div class="flex shrink-0 px-4">
              <LogoClouds />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});