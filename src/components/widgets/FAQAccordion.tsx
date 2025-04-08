import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';

interface AccordionItem {
  icon: any;
  title: string;
  description: string;
}

interface FAQAccordionProps {
  items: AccordionItem[]; // Declare the items prop here
}

export default component$(({ items }: FAQAccordionProps) => {
  return (
   
      <Accordion.Root>
        {items.map(({ title, description }, index) => (
          <Accordion.Item
            key={index}
            class="transition-all px-5 duration-500 border-b last:border-none last:rounded-b-base"
          >
            <Accordion.Trigger class="text-md font-medium">{title}</Accordion.Trigger>
            <Accordion.Content class="text-sm text-muted-foreground">
              {description}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
   
  );
});
