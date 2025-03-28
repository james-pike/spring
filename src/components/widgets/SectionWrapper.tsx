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
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <Slot name="bg">
          <div
            class={twMerge(
              "absolute inset-0",
              isDark ? "bg-muted" : ""
            )}
          ></div>
        </Slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Slot />
      </div>
    </section>
  );
});