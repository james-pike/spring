import { component$ } from "@builder.io/qwik";
import HeroCarousel from "./HeroCarousel";
import IconBrandTailwind from "../icons/IconBrandTailwind";
import IconBrandGoogle from "../icons/IconBrandGoogle";



export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose ">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-8 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8 px-4 md:px-6 bg-gray-200 dark:bg-gray-800 rounded-lg">
          <div class="basis-1/2 text-center lg:text-left pb-8 md:pb-16 mx-auto">
            <h1 class="text-4.5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Trusted Locksmith & Security Solutions <br class="hidden lg:block" />{" "}
              {/* <span class="hidden lg:inline">create a website using </span> <span class="text-[#039de1]">Qwik</span> +{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">Tailwind CSS</span> */}
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-5 dark:text-slate-300">

                TestLock provides expert locksmith services for homes, businesses, and vehicles.
                From emergency lockouts to advanced security installations, we ensure your safety with precision and care.


              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-3 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="https://github.com/onwidget/qwind"
                    target="_blank"
                    rel="noopener"
                  >
                     <IconBrandTailwind class="mr-1"/> {" "} Call - (613) 218-8063
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn w-full bg-gray-50 dark:bg-transparent"> <IconBrandGoogle class="mr-1"/> Get A Free Estimate</button>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            {/* <Image
              src={coverImage}
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            /> */}
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
});
