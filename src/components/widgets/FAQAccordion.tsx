import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';

export default component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the accordion is visible
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
    <Accordion.Root id="accordion-root" class="w-full -mt-2 px-1 rounded-sm">
      {accordionItems.map(({ trigger, content }, index) => (
        <Accordion.Item
          key={index}
          class={`
            transition-all duration-500
            ${isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{
            transitionDelay: `${index * 100}ms`, // Stagger by 100ms per item
          }}
        >
          <Accordion.Trigger class="text-md">
            {trigger}
          </Accordion.Trigger>
          <Accordion.Content>
            {content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
});