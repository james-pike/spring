import { component$, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { cn } from "@qwik-ui/utils";
import { LuChevronDown } from "@qwikest/icons/lucide";

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
                  location.url.pathname.startsWith("/services/") && "bg-white dark:bg-gray-700"
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

// Use CustomAccordion instead of NavAccordion in the main component