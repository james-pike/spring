// src/components/common/ObserverProvider.tsx
import { component$, useVisibleTask$, Slot } from "@builder.io/qwik";
import { Observer } from "tailwindcss-intersect";

export const ObserverProvider = component$(() => {
  useVisibleTask$(() => {
    Observer.start();
  });

  return (
    <>
      <Slot />
    </>
  );
});