import { component$ } from "@builder.io/qwik";
import Carousel from "../ui/Carousel";
import LogoClouds from "./LogoClouds";
import { Button } from "../ui/Button";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="relative overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] md:grid-rows-[85%_15%] min-h-[calc(100vh-89px)]">
        {/* Text Content */}
        <div class="relative z-10 flex items-center justify-center bg-gradient-to-r from-muted to-background dark:from-background dark:to-muted px-4 py-8 md:px-8 md:py-0 order-1 md:order-1">
          <div class="text-center md:text-left">
            <h1 class="text-5xl font-bold tracking-tighter text-balance sm:text-6xl md:text-6xl lg:text-7xl mb-4 animate-hero-text">
              Premium <span class="text-primary">Web Design</span> Solutions
            </h1>
            <p class="text-xl sm:text-xl md:text-2xl text-muted-foreground mb-6 animate-hero-subtitle max-w-2xl mx-auto md:mx-0">
              Transform your online presence with custom web design and development services—stunning, fast, and secure websites for your business.
            </p>
            <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start animate-hero-buttons">
              <Link href="/quote" class="w-full sm:w-auto">
                <Button size="lg" class="w-full">Get A Quote</Button>
              </Link>
              <Link href="/quote" class="w-full sm:w-auto">
                <Button look="secondary" size="lg" class="w-full">Book A Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Carousel */}
        <div class="relative order-2 md:order-2 h-64 sm:h-80 md:h-full">
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