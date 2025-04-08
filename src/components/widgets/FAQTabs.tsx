import { component$, useContextProvider, useSignal } from '@builder.io/qwik';
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
  const activeTab = useSignal(0); // Track the active tab

  useContextProvider(DarkContext, isDark);

  return (
    <div class="flex flex-col md:flex-row gap-12 mx-auto justify-center">
      <Tabs.Root class="max-w-[500px]">
        <Tabs.List class="grid w-full text-lg grid-cols-4">
          {faqData.map((section, index) => (
            <Tabs.Tab
              key={section.title}
              onClick$={() => {
                activeTab.value = index; // Update active tab on click
              }}
            >
              {section.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {faqData.map((section, index) => (
          <Tabs.Panel
            key={index}
            class={{ 'hidden': activeTab.value !== index }} // Hide inactive panels
          >
            {/* Use activeTab.value in the key to force re-mount on tab switch */}
            <FAQAccordion key={`faq-${index}-${activeTab.value}`} items={section.items} />
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </div>
  );
});