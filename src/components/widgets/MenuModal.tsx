import { component$, useSignal, $ } from "@builder.io/qwik";
import { LuX, LuChevronDown } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { LogoStatic } from "../common/Logo3";
import { useLocation } from "@builder.io/qwik-city";
import { Modal } from "../ui/Modal";
import IconHamburger from "../icons/IconHamburger";
import { buttonVariants } from "../ui/Button";
import IconBrandTailwind from "../icons/IconBrandTailwind";
import IconBrandGoogle from "../icons/IconBrandGoogle";

// Custom Accordion Component
const CustomAccordion = component$(({ items, closeModal }: { items: any[], closeModal: () => void }) => {
  const openIndex = useSignal<number | null>(null);
  const location = useLocation();

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} class="border-b last:border-none last:rounded-b-base">
          {item.hasSubmenu ? (
            <>
              <button
                class={cn(
                  "text-xl font-medium text-gray-700 dark:text-gray-200 flex items-center justify-between w-full p-2 px-8 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200",
                  location.url.pathname.startsWith(item.href) && "bg-white dark:bg-gray-700"
                )}
                onClick$={() => (openIndex.value = openIndex.value === index ? null : index)}
              >
                <span>{item.title}</span>
                <LuChevronDown
                  class={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-200",
                    openIndex.value === index && "rotate-180"
                  )}
                />
              </button>
              <div
                class={cn(
                  "text-lg text-muted-foreground transition-all duration-500 ease-in-out max-h-0 overflow-hidden",
                  openIndex.value === index && "max-h-96"
                )}
              >
                <ul class="flex flex-col gap-0">
                  {item.subitems!.map((subitem: any) => (
                    <li key={subitem.title}>
                      <a
                        href={subitem.href}
                        class={cn(
                          "block text-gray-700 dark:text-gray-200 p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200",
                          location.url.pathname === subitem.href && "bg-gray-200 dark:bg-gray-700"
                        )}
                        onClick$={closeModal}
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <a
              href={item.href}
              class={cn(
                "block text-xl text-gray-700 dark:text-gray-200 p-2 px-8 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200",
                location.url.pathname === item.href && "bg-white dark:bg-gray-700"
              )}
              onClick$={closeModal}
            >
              {item.title}
              {item.badge}
            </a>
          )}
        </div>
      ))}
    </div>
  );
});

export default component$(() => {
  const show = useSignal(false);
  const location = useLocation();

  const menuItems = [
    { title: "Home", href: "/", badge: null },
    {
      title: "About",
      href: "/about/",
      hasSubmenu: true,
      subitems: [
        { title: "About Us", href: "/about/us" },
        { title: "Reviews", href: "/about/reviews" },
        { title: "FAQ", href: "/about/faq" },
      ],
    },
    {
      title: "Services",
      href: "/services/",
      hasSubmenu: true,
      subitems: [
        { title: "Web Design", href: "/services/web-design" },
        { title: "Web Development", href: "/services/web-development" },
        { title: "Branding", href: "/services/branding" },
        { title: "Marketing", href: "/services/marketing" },
      ],
    },
    {
      title: "Components",
      href: "/components/",
      hasSubmenu: true,
      subitems: [
        { title: "UI Elements", href: "/components/ui-elements" },
        { title: "Widgets", href: "/components/widgets" },
        { title: "Templates", href: "/components/templates" },
      ],
    },
    { title: "Blog", href: "/blog/", badge: null },
    { title: "Pricing", href: "/pricing/", badge: null },
    { title: "Contact Us", href: "/contact/", badge: null },
  ];

  const closeModal = $(() => (show.value = false));

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="flex items-center hover:bg-primary-100 dark:hover:bg-gray-700">
          <Modal.Trigger class="rounded-sm p-2 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-900">
            <IconHamburger class="w-8 h-8 md:w-5 md:h-5 md:inline-block" />
          </Modal.Trigger>
        </div>
        <Modal.Panel position={"left"} class="dark:bg-gray-950 border-0">
          <div class="border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 p-1">
            <Modal.Title class="pt-1">
              <a href="/" class="focus:outline-none">
                <LogoStatic />
              </a>
            </Modal.Title>
            <Modal.Description class="text-lg font-medium px-2 py-1 text-gray-700 dark:text-gray-200">
              Transform your online presence
            </Modal.Description>
          </div>

          <nav class="mt-0 space-y-4 border border-t-0 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
            <CustomAccordion items={menuItems} closeModal={closeModal} />
          </nav>

          <div class="border border-t-0 pb-3 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
            <div class="sm:max-w-md mx-3 pt-3 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-3 lg:justify-start lg:max-w-7xl">
              <div class="flex w-full sm:w-auto">
                <a class="btn btn-primary sm:mb-0 w-full" href="tel:+16132188063">
                  <IconBrandTailwind class="mr-1" /> Call - (613) 218-8063
                </a>
              </div>
              <div class="flex w-full sm:w-auto">
                <a class="btn btn-primary btn-secondary sm:mb-0 w-full" href="/contact">
                  <IconBrandGoogle class="mr-1" /> Get A Free Estimate
                </a>
              </div>
            </div>
          </div>

          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-4 top-4 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900"
            )}
            type="submit"
          >
            <LuX class="h-6 w-6" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});