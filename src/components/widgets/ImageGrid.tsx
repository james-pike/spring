import { component$, useVisibleTask$, useSignal, useId } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface Item {
  title?: string;
  description?: string;
  image?: string;
  classes?: Record<string, string>;
}

interface Props {
  items?: Array<Item>;
  classes?: Record<string, string>;
  id?: string;
}

export const ImageGrid = component$((props: Props) => {
  const { items = [], classes = {}, id: customId } = props;

  const uniqueId = useId();
  const gridId = customId || `item-grid-${uniqueId}`;

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

    const element = document.querySelector(`#${gridId}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  const {
    container: containerClass = "md:grid-cols-2",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    image: imageClass = "w-full h-auto object-cover", // Changed to h-auto
  } = classes as Record<string, string>;

  return (
    items.length > 0 && (
      <div id={gridId} class={twMerge("grid mx-auto gap-2", containerClass)}>
        {items.map(({ title, description, image, classes: itemClasses = {} }, index) => (
          <div
            key={`${title}${index}`}
            class={twMerge(
              "flex flex-row max-w-lg items-stretch", // Added items-stretch
              panelClass,
              itemClasses?.panel,
              "transition-all duration-500 ease-out rounded-base p-4"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {image && (
              <div class="w-1/4 flex-shrink-0 pr-4">
                <img
                  src={image}
                  alt={title || "Item image"}
                  class={twMerge(imageClass, itemClasses?.image)}
                />
              </div>
            )}
            <div class={image ? "w-3/4" : "w-full"}>
              <h3 class={twMerge("text-xl font-bold text-balance", titleClass, itemClasses?.title)}>
                {title}
              </h3>
              {description && (
                <p
                  class={twMerge(
                    "text-gray-600 dark:text-slate-400 mt-3 text-balance",
                    descriptionClass,
                    itemClasses?.description
                  )}
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