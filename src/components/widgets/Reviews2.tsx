import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import ReviewGrid from "./ReviewGrid";
import ReviewsCarousel from "./ReviewsCarousel";
import { useLocation } from "@builder.io/qwik-city";
import { HeadlineImage } from "../ui/HeadlineImage";

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
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark = false } = props;
  const loc = useLocation();
  const isIndexPage = loc.url.pathname === '/';
  
  // Container classes without padding
  const containerClasses = twMerge(
    "relative mx-auto max-w-5xl text-default",
    classes?.container,
    isDark ? "dark" : ""
  );

  // Padding classes for content below HeadlineImage
  const contentClasses = twMerge(
    isIndexPage 
      ? "px-4 md:px-6 py-12 md:py-16 lg:py-20" 
      : "px-4 md:px-6 pb-8 md:pb-12 lg:pb-16"
  );

  return (
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0 bg-gray-100 dark:bg-gray-900", isDark ? " dark:bg-gray-800" : "")}></div>
        </slot>
      </div>
      <div class={containerClasses}>
        {/* HeadlineImage without padding */}
        <HeadlineImage 
          title={title} 
          subtitle={subtitle} 
          highlight={highlight} 
          classes={classes?.headline} 
          backgroundImage="/images/contact.jpg"
        />
        
        {/* Content below with padding */}
        <div class={contentClasses}>
          <div class="block sm:hidden">
            {isIndexPage ? <ReviewsCarousel/> : <ReviewGrid/>}
          </div>
          <div class="hidden sm:block">
            {<ReviewGrid/>}
          </div>
        </div>
      </div>
    </section>
  );
});