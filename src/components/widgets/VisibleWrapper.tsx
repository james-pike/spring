// src/components/VisibleWrapper.tsx
import { component$, useSignal, useVisibleTask$, $, Slot } from "@builder.io/qwik";

interface VisibleWrapperProps {
  animationClass?: string;
  threshold?: number;
  id?: string; // Add id prop
}

export const VisibleWrapper = component$((props: VisibleWrapperProps) => {
  const { animationClass = "animate-[fadeSlideLeft_0.8s_ease-out_0s_forwards]", threshold = 0.1, id } = props;
  const elementSignal = useSignal<Element | undefined>();
  const isVisible = useSignal(false);

  const setElement = $((el: Element | null) => {
    if (el) {
      elementSignal.value = el;
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => elementSignal.value);
    const element = elementSignal.value;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  });

  return (
    <div
      ref={setElement}
      id={id} // Pass the id prop to the div
      class={{
        "opacity-0": !isVisible.value,
        [animationClass]: isVisible.value,
      }}
    >
      <Slot /> {/* Render children */}
    </div>
  );
});