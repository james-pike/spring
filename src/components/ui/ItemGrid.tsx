import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  items?: Array<Item>;
  classes?: Record<string, string>;
}

export const ItemGrid = component$((props: Props) => {
  const { items = [], classes = {} } = props;

  const isVisible = useSignal(false);

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#item-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  const {
    container: containerClass = "md:grid-cols-2",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: iconClass = "text-secondary-500 dark:text-secondary-700",
  } = classes as Record<string, string>;

  return (
    items.length && (
      <div id="item-grid" class={twMerge("grid mx-auto gap-8", containerClass)}>
        {items.map(({ title, description, icon: Icon, classes: itemClasses = {} }, index) => (
          <div
            key={`${title}${index}`}
            class={twMerge(
              "flex flex-row max-w-md",
              panelClass,
              itemClasses?.panel,
              "transition-all duration-500",
              isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {Icon && (
              <div class="flex justify-center">
                <Icon class={twMerge("w-7 h-7 mr-2", iconClass, itemClasses?.icon)} />
              </div>
            )}
            <div>
              <h3 class={twMerge("text-xl font-bold", titleClass, itemClasses?.title)}>{title}</h3>
              {description && (
                <p
                  class={twMerge("text-gray-600 dark:text-slate-400 mt-3", descriptionClass, itemClasses?.description)}
                  dangerouslySetInnerHTML={description}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    )
  );
});