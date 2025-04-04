import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';
import { twMerge } from "tailwind-merge";
import { Card } from '../ui/Card';

interface Props {
  isDark?: boolean;
}

export default component$(({ isDark }: Props) => {
  const isVisible = useSignal(false);
  const shouldPulse = useSignal(false); // Toggles pulse animation

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    const element = document.querySelector('#accordion-root');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  const accordionItems = [
    {
      trigger: "Do you offer emergency locksmith services?",
      content: "Yes! We provide 24/7 emergency lockout assistance for homes, businesses, and vehicles."
    },
    {
      trigger: "Can you replace lost or broken keys?",
      content: "Absolutely! We offer key duplication, cutting, and replacement services for all types of locks."
    },
    {
      trigger: "Do you install smart locks and security systems?",
      content: "Yes, we specialize in smart lock installation and advanced security systems for added protection."
    },
    {
      trigger: "Can you repair or replace damaged locks?",
      content: "Of course! We repair, rekey, and replace locks to enhance security and restore functionality."
    },
    {
      trigger: "Do you provide car key programming and replacement?",
      content: "Yes! We offer car key programming, key fob replacement, and ignition repair for most vehicle models."
    },
    {
      trigger: "Can you open safes and vaults?",
      content: "Yes, we offer professional safe opening and installation services while ensuring your valuables remain secure."
    },
  ];

  return (
    <Card.Root>
      <style>
        {`
          #accordion-root {
            border: var(--border-width) solid hsl(var(--primary)); /* Static border */
            outline: 2px solid hsl(var(--primary) / 50%); /* Base outline */
            outline-offset: 0; /* No gap initially */
            transition: outline-width 0.3s ease, outline-offset 0.3s ease; /* Smooth transitions */
          }

          #accordion-root.pulse {
            animation: pulse-outline 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1; /* Breathing effect */
          }

          @keyframes pulse-outline {
            0% {
              outline-width: 2px;
              outline-offset: 0;
            }
            50% {
              outline-width: 4px; /* Grow outward */
              outline-offset: 2px; /* Move further out */
            }
            100% {
              outline-width: 2px;
              outline-offset: 0;
            }
          }
        `}
      </style>
      <Accordion.Root
        id="accordion-root"
        class={twMerge(
          "w-full rounded-base px-5 py-2 sm:p-6 md:p-8",
          isDark ? "bg-background" : "bg-muted",
          shouldPulse.value && 'pulse' // Apply pulse class when true
        )}
      >
        {accordionItems.map(({ trigger, content }, index) => (
          <Accordion.Item
            key={index}
            class={twMerge(
              "transition-all duration-500 border-b last:border-none",
              isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{
              transitionDelay: `${index * 100}ms`, // Staggered fade-in
            }}
          >
            <Accordion.Trigger
              class="text-md font-medium"
              onClick$={async () => {
                shouldPulse.value = true; // Trigger pulse
                await new Promise(resolve => setTimeout(resolve, 1200)); // Match new animation duration
                shouldPulse.value = false; // Reset to allow retriggering
              }}
            >
              {trigger}
            </Accordion.Trigger>
            <Accordion.Content class="text-sm text-muted-foreground">
              {content}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Card.Root>
  );
});