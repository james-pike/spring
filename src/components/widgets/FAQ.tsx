import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "../ui/Card";
import FAQTabs from "./FAQTabs";
import FAQTabs2 from "./FAQTabs2";
import { qwikSerialized } from "~/utils/qwikSerialized";
import { VisibleWrapper } from "./VisibleWrapper";
import { Link, useLocation } from "@builder.io/qwik-city"; // Add useLocation import
import { Button } from "../ui/Button";

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

  const location = useLocation(); // Get the current location
  const isLandingPage = location.url.pathname === "/"; // Check if on landing page

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
      title: "Branding",
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
    // {
    //   title: "Pricing",
    //   items: [
    //     {
    //       icon: IconArrowDownRight,
    //       title: "How do you price your services?",
    //       description: "We offer tiered pricing depending on the complexity and timeline of your project.",
    //     },
    //     {
    //       icon: IconArrowDownRight,
    //       title: "Do you offer ongoing support?",
    //       description: "Yes, we have monthly support packages available.",
    //     },
    //   ],
    // },
  ];

  return (
    <>
    <SectionWrapper id={id} isDark={isDark} classes={{classes}} bgClass="inset-0 max-w-7xl h-full  bg-gray-80 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
  

      <Headline  title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      <VisibleWrapper id={`${id}-faq`}>
        <div class="hidden sm:block">
          <Card.Root>
            <FAQTabs2 faqData={faqData} isDark={isDark} />
          </Card.Root>
        </div>

        <div class="block sm:hidden">
          <FAQTabs faqData={faqData} isDark={isDark} />
        </div>
      </VisibleWrapper>

      {/* Conditionally render the card only if not on the landing page */}
      {!isLandingPage && (
        <Card.Root class="bg-gradient-to-r z-10 from-primary to-primary/50 mx-auto mt-4 pt-8 max-w-5xl ">
          <Card.Content>
            <Headline title={"Any other questions about our services?"} subtitle={"Get in touch and we'll gladly answer them"} />
            <Link href="/contact" class="w-full sm:w-auto">
              <Button look="secondary" size="md" class="w-full">Get Started</Button>
            </Link>
          </Card.Content>
        </Card.Root>
      )}
    </SectionWrapper>

  
    </>
  );
});