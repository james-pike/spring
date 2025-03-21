import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid } from "~/components/ui/ItemGrid";
import FAQAccordion from "./FAQAccordion";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {

  const {
    id,
    title = null,
    subtitle = null,
    highlight = null,
    items = [],
    isDark = false,
    classes = {},
  } = props;

  return (
    <section class="relative" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      {/* <img src="/images/placeholder.png" class="w-full h-24"></img> */}

      <div
        class={twMerge("relative text-default px-4 md:px-6 py-12 md:py-16 lg:py-20 mx-auto max-w-6xl", isDark ? "dark" : "")}
      >
        <Headline
          title={title}
          subtitle={subtitle}
          highlight={highlight}
          classes={{
            container: "max-w-xl sm:mx-auto lg:max-w-2xl",
            title: "sm:text-4xl text-3xl",
            ...(classes?.headline ?? {}),
          }}
        />
        <div class="sm:mx-auto hidden sm:block">
          <ItemGrid
           id="faq-grid"
            items={items}
            
            classes={{
              panel: "max-w-none",
              ...(classes?.items ?? {}),
              icon: "text-primary-800"
            }}
          />
        </div>

        <div class="block sm:hidden">
          <FAQAccordion/>
        </div>

    
      </div>
    </section>
  );
});
