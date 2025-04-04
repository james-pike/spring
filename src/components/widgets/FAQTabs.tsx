import { component$, useContextProvider } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs';
import { DarkContext } from '~/DarkContext';
import FAQAccordion from './FAQAccordion';

interface Props {
  isDark?: boolean;
  faqData: {
    title: string;
    items: {
      icon: any;
      title: string;
      description: string;
    }[];
  }[];
}

export default component$((props: Props) => {
  const { isDark = false, faqData } = props;

  useContextProvider(DarkContext, isDark);

  return (
    <div class="flex flex-col md:flex-row gap-12 mx-auto justify-center">
      <Tabs.Root class="max-w-[500px]">
        <Tabs.List class="grid w-full grid-cols-4">
          {faqData.map((section) => (
            <Tabs.Tab key={section.title}>{section.title}</Tabs.Tab>
          ))}
        </Tabs.List>

        {faqData.map((section, index) => (
          <Tabs.Panel key={index}>
            <FAQAccordion items={section.items} /> {/* Passing items as a prop */}
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </div>
  );
});
