import {  component$, useStore } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";

import IconChevronDown from "../icons/IconChevronDown";
import { Logo2 } from "../common/Logo2";
import MenuModal from "./MenuModal";
import IconBrandTailwind from "../icons/IconBrandTailwind";
import IconBrandGoogle from "../icons/IconBrandGoogle";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();
  const location = useLocation();


  return (
    <header
      id="header"
      class={`sticky top-0 z-40 flex-none mx-auto    md:border-0 w-full border-b border-gray-700 transition-[opacity] ease-in-out ${
        store.isScrolling
          ? " md:bg-white/90 md:backdrop-blur-sm   bg-white dark:bg-gray-950"
          : "bg-white dark:bg-gray-950"
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="absolute inset-0"></div>



    

    <div class="w-full h-7 px-2 md:px-7 border-b border-gray-700 mx-auto bg-gray-200 dark:bg-gray-800 flex justify-between items-center max-w-7xl relative">
      <div>
        <p>Safe & Auto Inc.</p>
      </div>
      <div id="test" class="flex md:gap-4 gap-2 sm:flex">
        <a
          class=" md:px-3 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-none text-sm inline-flex items-center"
          href="tel:+16132188063"
         // Prevent link from triggering modal
        >
          <p class="pl-1">(613) 218-8063</p>
        </a>
        <p class="">|</p>
        <a
          class=" md:px-3 hover:bg-gray-100 focus:outline-none  dark:hover:bg-gray-700  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-none text-sm inline-flex items-center"
          href="mailto:info@webdev.ca"
        // Prevent link from triggering modal
        >
          <p class="pl-1">info@webdev.ca</p>
        </a>
      </div>
    
    </div>
 



      <div class="relative text-default py-2 px-2 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <a class="flex items-center" href={"/"}>
            {/* <Logo /> */}
            <Logo2/>
          </a>
          <div class="flex items-center md:hidden">
            <a
                href="/contact"
                class="btn btn-secondary rounded-sm ml-2 mr-1.5 h-12 py-2.5 px-4 md:px-4 font-semibold shadow-none text-md w-auto"
              >
                Contact Us
              </a>
            

            <MenuModal/>
          </div>
        </div>
        <nav
  class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5 group"
  aria-label="Main navigation"
>
  {menu && menu.items ? (
    <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
      {menu.items.map(({ text, href, items }, key) => {
        const isActive = location.url.pathname === href; // Assuming `location` is available for active state
        return (
          <li key={key} class={items?.length ? "dropdown" : ""}>
            {items?.length ? (
              <>
                <button
                  class={`
                    hover:text-primary-800
                    px-4 py-3 
                    flex items-center 
                    transition-all duration-200
                    relative
                    after:content-[''] 
                    after:absolute 
                    after:bottom-[6px] 
                    after:left-1/2 
                    after:h-[2px] 
                    after:bg-primary-800 
                    after:transition-all 
                    after:duration-200 
                    ${
                      isActive
                        ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                        : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                    }
                  `}
                  onClick$={() => {
                    if (location.url.pathname !== "/") {
                      // Navigate to root and scroll to #services
                      window.location.href = "/#services";
                    } else {
                      // Already on root, just scroll to #services
                      const servicesSection = document.getElementById("services");
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {text}{" "}
                  <IconChevronDown
                    class="
                      w-3.5 h-3.5 
                      ml-0.5 rtl:ml-0 rtl:mr-0.5 
                      hidden md:inline 
                    "
                  />
                </button>
                <ul
                  class="
                    dropdown-menu 
                    md:backdrop-blur-md 
                    dark:md:bg-slate-800 
                    rounded md:absolute 
                    pl-4 md:pl-0 
                    md:hidden 
                    font-medium 
                    md:bg-white/90 
                    md:min-w-[200px] 
                    drop-shadow-xl
                    py-2
                  "
                >
                  {items.map(({ text: text2, href: href2 }, key2) => {
                    const isDropdownActive = location.url.pathname === href2;
                    return (
                      <li key={key2}>
                        <a
                          class={`
                            first:rounded-t last:rounded-b 
                            hover:text-primary-800 dark:hover:text-primary-800 
                            py-2 px-5 
                            block whitespace-no-wrap 
                            transition-all duration-200 
                            relative
                            after:content-[''] 
                            after:absolute 
                            after:bottom-[4px] 
                            after:left-1/2 
                            after:h-[2px] 
                            after:bg-primary-800 
                            after:transition-all 
                            after:duration-200 
                            ${
                              isDropdownActive
                                ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                                : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                            }
                          `}
                          href={href2}
                        >
                          {text2}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <a
                class={`
                  hover:text-primary-800 dark:hover:text-primary-800 
                  px-4 py-3 
                  flex items-center 
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  relative 
                  transition-all duration-200 
                  after:content-[''] 
                  after:absolute 
                  after:bottom-[6px] 
                  after:left-1/2 
                  after:h-[2px] 
                  after:bg-primary-800 
                  after:transition-all 
                  after:duration-200 
                  ${
                    isActive
                      ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                      : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                  }
                `}
                href={href}
              >
                {text}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  ) : null}
</nav>
        <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div class="items-center flex justify-between w-full md:w-auto">
            <div class="flex">
            </div>
            <span class="ml-4 rtl:ml-0 rtl:mr-4">
            <a
                href="tel:+16132188063"
                class="btn btn-secondary ml-2 py-2.5 px-5.5 md:px-4 font-semibold shadow-none text-sm w-auto"
              >
               <IconBrandGoogle class="mr-1"/> Free Estimate
              </a>
              <a
                href="tel:+16132188063"
                class="btn btn-primary ml-2 py-2.5 px-5.5 md:px-4 font-semibold shadow-none text-sm w-auto"
              >
               <IconBrandTailwind class="mr-1"/> Call Now
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});
