import { component$ } from "@builder.io/qwik";
import Carousel from "../ui/Carousel"; // Make sure this points to your optimized Carousel component
import { Button } from "../ui/Button";
import { Link } from "@builder.io/qwik-city";
import { Typewriter } from "./Typewriter";

export default component$(() => {
  return (
    <div class="bg-white">
      <div class="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20">
        <div class="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div class="px-6 lg:px-0 lg:pt-0">
            <div class="mx-auto max-w-2xl">
              <div class="max-w-lg">
                <div class="mt-24 sm:mt-32 lg:mt-0">
                  <a href="#" class="inline-flex space-x-6">
                    <span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/10 ring-inset">What's new</span>
                    <span class="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                      <span>Just shipped v0.1.0</span>
                      <svg class="size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </a>
                </div>
                <h1 class="text-5xl mt-10 font-bold tracking-tighter text-balance sm:text-6xl md:text-6xl lg:text-7xl mb-4 opacity-0 animate-[fadeSlideLeft_0.8s_ease-out_0.2s_forwards]">
                  Custom <br /> <Typewriter /> <br /> Solutions
                </h1>                  
                <p class="text-xl mt-8 sm:text-xl md:text-2xl text-muted-foreground text-balance mb-6 max-w-2xl mx-auto md:mx-0 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
                  Transform your online presence with custom web design and development services—stunning, fast, and secure websites for your business.
                </p>
                <div class="mt-10 flex items-center gap-x-6">
                  <Link href="/contact">
                    <Button
                      size="md"
                      class="relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:animate-shimmer"
                    >
                      Get A Quote
                    </Button>
                  </Link>
                  <Link href="/contact" class="text-sm/6 font-semibold text-gray-900">
                    Book A Free Consultation <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div>
            <div class="shadow-lg md:rounded-3xl">
              <div class="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                <div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36" aria-hidden="true"></div>
                <div class="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                  <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div class="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">NotificationSetting.jsx</div>
                          <div class="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                        </div>
                      </div>
                      <div class="px-6 pt-6 pb-14">
                        <Carousel />
                      </div>
                    </div>
                  </div>
                  <div class="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32"></div>
      </div>
    </div>
  );
});