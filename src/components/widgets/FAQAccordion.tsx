import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';
import { Card } from '../ui/Card';

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
    <Card.Root class=" rounded-t-none border-background border-4">
      <Accordion.Root>
        {items.map(({ title, description }, index) => (
          <Accordion.Item
            key={index}
            class="transition-all px-5 duration-500 border-b last:border-none"
          >
            <Accordion.Trigger class="text-md font-medium">{title}</Accordion.Trigger>
            <Accordion.Content class="text-sm text-muted-foreground">
              {description}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Card.Root>
  );
});
