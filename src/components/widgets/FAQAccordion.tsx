import { component$, useSignal } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';

interface AccordionItem {
  icon: any;
  title: string;
  description: string;
}

interface FAQAccordionProps {
  items: AccordionItem[];
}

export default component$(({ items }: FAQAccordionProps) => {
  // Use a signal to force re-render and reset state
  const resetSignal = useSignal(0);

  return (
    <Accordion.Root key={`accordion-${resetSignal.value}`}>
      {items.map(({ title, description }, index) => (
        <Accordion.Item
          key={index}
          class="transition-all px-5 duration-500 ease-in-out border-b last:border-none last:rounded-b-base"
        >
          <Accordion.Trigger class="text-md font-medium">{title}</Accordion.Trigger>
          <Accordion.Content class="text-sm text-muted-foreground transition-all duration-500 ease-in-out max-h-0 data-[open]:max-h-96 overflow-hidden">
            {description}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
});