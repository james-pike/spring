import { component$, useStore } from "@builder.io/qwik";
import { Link, useContent, useLocation } from "@builder.io/qwik-city";
import IconChevronDown from "../icons/IconChevronDown";

import Settings from "./settings";
import { Button } from "../ui/Button";
import MenuModal from "./MenuModal";
import Logo3 from "../common/Logo3";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();
  const location = useLocation();

  // Determine if we're on the landing page
  const isLandingPage = location.url.pathname === "/";

  return (
    <header
      id="header"
      class={`sticky top-0 z-40 flex-none mx-auto transition-[opacity] ease-in-out ${
        isLandingPage
          ? store.isScrolling
            ? "border-b bg-background"
            : "texture"
          : "bg-black border-b" // Always bg-background when not on landing page
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="relative text-default py-3 md:p-1 px-2 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <a class="flex items-center" href={"/"}>
            <Logo3 />
          </a>
          <div class="flex items-center md:hidden gap-1">
            <Settings />
            <Link href="/quote" class="w-full sm:w-auto">
              <Button size="md" class="w-full px-0">Get Quote</Button>
            </Link>
            <MenuModal />
          </div>
        </div>
        <nav
          class="items-center w-full md:w-auto hidden md:flex dark:text-white overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5 group"
          aria-label="Main navigation"
        >
          {menu && menu.items ? (
            <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
              {menu.items.map(({ text, href, items }, key) => {
                const isActive = location.url.pathname === href;
                return (
                  <li key={key} class={items?.length ? "dropdown" : ""}>
                    {items?.length ? (
                      <>
                        <button
                          class={`
              hover:bg-muted
              hover:text-primary
              px-4 py-3
              flex items-center
              transition-all duration-200
              relative
              rounded-base
              after:content-['']
              after:absolute
              after:bottom-[6px]
              after:left-1/2
              after:h-[2px]
              after:bg-primary
              after:transition-all
              after:duration-200
              ${isActive
                              ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                              : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                            }
            `}
                          onClick$={() => {
                            if (location.url.pathname !== "/") {
                              window.location.href = "/#services";
                            } else {
                              const servicesSection = document.getElementById("services");
                              if (servicesSection) {
                                servicesSection.scrollIntoView({ behavior: "smooth" });
                              }
                            }
                          }}
                        >
                          {text}
                          <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                        </button>
                        <ul
                          class={`
    dropdown-menu
    md:backdrop-blur-md
    dark:md:bg-muted
    rounded
    md:absolute
    pl-4 md:pl-0
    md:hidden
    font-medium
    md:bg-white/90
    md:min-w-[200px]
    drop-shadow-xl
    py-2
  `}
                        >
                          {items.map(({ text: text2, href: href2 }, key2) => {
                            const isDropdownActive = location.url.pathname === href2;
                            const isFirst = key2 === 0;
                            const isLast = key2 === items.length - 1;

                            return (
                              <li key={key2}>
                                <a
                                  class={`hover:bg-muted hover:text-primary
            py-2 px-5 block whitespace-no-wrap transition-all duration-200 relative
            after:content-[''] after:absolute after:bottom-[4px] after:left-1/2 after:h-[2px] after:bg-primary after:transition-all after:duration-200
            ${isDropdownActive
                                      ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                                      : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                                    }
            ${isFirst ? "hover:rounded-t-base" : ""}
            ${isLast ? "hover:rounded-b-base" : ""}
            ${!isFirst && !isLast ? "hover:rounded-none" : ""}
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
            hover:bg-muted
            hover:text-primary
            px-4 py-3
            flex items-center
            relative
            transition-all duration-200
            after:content-['']
            after:absolute
            after:bottom-[6px]
            after:left-1/2
            after:h-[2px]
            after:bg-primary
            after:transition-all
            after:duration-200
            rounded-base
            ${isActive
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
            <Settings />
            <Link href="/quote" class="w-full sm:w-auto">
              <Button size="md" class="w-full bg-primary">Get A Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
});