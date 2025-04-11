import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { twMerge } from "tailwind-merge";

interface SectionWrapperProps {
  id?: string;
  isDark?: boolean;
  bgClass?: string; // Add this line
  classes?: Record<string, string>;
}

export const SectionWrapper2 = component$((props: SectionWrapperProps) => {
  const { id, isDark, bgClass, classes = {} } = props;
  const location = useLocation();

  const isHomePage = location.url.pathname === "/";
  const paddingY = isHomePage
    ? ""
    : "";

  return (
    <section
      class={twMerge(
        "relative scroll-mt-16",
        (!isHomePage || isDark) ? "bg-background" : "bg-background",
        bgClass // Apply custom background class if passed
      )}
      {...(id ? { id } : {})}
    >
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-0 md:px-0",
          paddingY,
          classes?.container
        )}
      >
        <Slot />
      </div>
    </section>
  );
});
