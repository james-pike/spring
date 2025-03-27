import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";

import { useLocation } from "@builder.io/qwik-city";
import PriceTabs from "./PriceTabs";

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

    isDark = false,
    classes = {},
  } = props;

  const loc = useLocation();  // Get current location
  const isIndexPage = loc.url.pathname === '/';  // Check if we're on root path

  // Conditional padding classes
  const containerClasses = twMerge(
    "relative text-default mx-auto max-w-6xl",
    isIndexPage 
      ? "px-4 md:px-6 py-12 md:py-16 lg:py-20" 
      : "px-4 md:px-6 py-8 md:py-12 lg:py-16",
    isDark ? "dark" : ""
  );

  return (
    <section class="relative" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0 bg-background ", isDark ? "" : "")}></div>
        </slot>
      </div>
      {/* <img src="/images/placeholder.png" class="w-full h-24"></img> */}

      <div class={containerClasses}>
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
   

        
          <PriceTabs/>
     
      </div>
    </section>
  );
});