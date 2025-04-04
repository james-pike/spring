import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import { SectionWrapper } from "./SectionWrapper";
import { twMerge } from "tailwind-merge";
import { Card } from "../ui/Card";
import FAQTabs from "./FAQTabs";
import FAQTabs2 from "./FAQTabs2";
import { qwikSerialized } from "~/utils/qwikSerialized";

const IconArrowDownRight = qwikSerialized(() => import("~/components/icons/IconArrowDownRight"));

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark } = props;

  const faqData = [
    {
      title: "Design",
      items: [
        {
          icon: IconArrowDownRight,
          title: "What design tools do you use?",
          description: "We primarily use Figma, Adobe XD, and Sketch depending on the project scope.",
        },
        {
          icon: IconArrowDownRight,
          title: "Can I request revisions?",
          description: "Absolutely, we offer 2-3 rounds of revisions based on the plan you choose.",
        },
      ],
    },
    {
      title: "Development",
      items: [
        {
          icon: IconArrowDownRight,
          title: "What tech stack do you use?",
          description: "We work with React, Qwik, Next.js, Tailwind, Node.js, and more.",
        },
        {
          icon: IconArrowDownRight,
          title: "Do you provide API development?",
          description: "Yes, we build scalable and secure REST and GraphQL APIs.",
        },
      ],
    },
    {
      title: "SEO",
      items: [
        {
          icon: IconArrowDownRight,
          title: "Do you optimize for search engines?",
          description: "Yes, all websites come with basic on-page SEO included.",
        },
        {
          icon: IconArrowDownRight,
          title: "Can you help with content?",
          description: "We provide keyword research and content recommendations if needed.",
        },
      ],
    },
    {
      title: "Pricing",
      items: [
        {
          icon: IconArrowDownRight,
          title: "How do you price your services?",
          description: "We offer tiered pricing depending on the complexity and timeline of your project.",
        },
        {
          icon: IconArrowDownRight,
          title: "Do you offer ongoing support?",
          description: "Yes, we have monthly support packages available.",
        },
      ],
    },
  ];

  return (
    <SectionWrapper id={id} isDark={isDark} classes={classes}>
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />

      <div class="hidden sm:block">
        <Card.Root>
          <FAQTabs2
            faqData={faqData}
    
          />
        </Card.Root>
      </div>

      <div class="block sm:hidden">
        <FAQTabs faqData={faqData} isDark={isDark} />
      </div>
    </SectionWrapper>
  );
});
