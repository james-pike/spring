import { component$, Slot } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface SectionWrapperProps {
  id?: string;
  isDark?: boolean;
  classes?: Record<string, string>;
}

export const SectionWrapper = component$((props: SectionWrapperProps) => {
  const { id, isDark, classes = {} } = props;

  return (
    <section
      class={twMerge(
        "relative scroll-mt-16",
        isDark ? "bg-muted" : "" // Apply background color directly to the section
      )}
      {...(id ? { id } : {})}
    >
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
          classes?.container
        )}
      >
        <Slot />
      </div>
    </section>
  );
});
