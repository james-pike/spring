import { component$ } from "@builder.io/qwik";
import { Tabs } from "../ui/Tabs";
import { Card } from "../ui/Card";
import { ItemGrid } from "../ui/ItemGrid";
import { twMerge } from "tailwind-merge";

interface FAQItem {
  icon: any;
  title: string;
  description: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

interface Props {
  isDark?: boolean;
  classes?: any;
  faqData: FAQSection[]; // <-- declare faqData here
}

export default component$((props: Props) => {
  const { isDark = false, classes, faqData } = props; // destructure faqData

  return (
    <Tabs.Root class="max-w-6xl">
      <Tabs.List class="grid w-full grid-cols-4">
        {faqData.map((section) => (
          <Tabs.Tab key={section.title}>{section.title}</Tabs.Tab>
        ))}
      </Tabs.List>

      {faqData.map((section, index) => (
        <Tabs.Panel key={index}>
          <Card.Root>
            <ItemGrid
              id={`faq-grid-${index}`}
              items={section.items}
              classes={{
                container: twMerge(
                  "md:grid-cols-2 px-2 py-2 rounded-base",
                  isDark ? "bg-background" : "bg-muted"
                ),
                panel: "bg-primary/10",
                title: "md:text-[1.3rem]",
                icon:
                  "text-primary dark:bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
                ...(classes?.items ?? {}),
              }}
            />
          </Card.Root>
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
});
