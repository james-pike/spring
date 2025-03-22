import { component$ } from "@builder.io/qwik";  // Add useLocation import
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid } from "../ui/ItemGrid";
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
  const { id, title = "", subtitle = "", highlight = "",   items = [], classes = {}, isDark = false } = props;


  return (
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0 bg-gray-100 dark:bg-gray-800")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
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