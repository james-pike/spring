import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";

import { qwikSerialized } from "~/utils/qwikSerialized";


const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconArrowDownRight = qwikSerialized(() => import("../components/icons/IconArrowDownRight"));



import { SITE } from "~/config.mjs";
import Services from "~/components/widgets/Services";
import Reviews from "~/components/widgets/Reviews";
import Contact from "~/components/widgets/Contact";

export default component$(() => {
  return (
    <>
      <Hero />
      <Services
      id="services"
  highlight="Services"
  title="Reliable Locksmith Services You Can Trust"
  subtitle="From emergency lockouts to advanced security solutions, we provide fast, professional, and secure locksmith services tailored to your needs."
  items={[]}/>

      <Features
  highlight="Features"
  title="Reliable Locksmith Services You Can Trust"
  subtitle="From emergency lockouts to advanced security solutions, we provide fast, professional, and secure locksmith services tailored to your needs."
  items={[
    {
      title: "24/7 Emergency Services",
      description:
        "Locked out of your home, office, or car? Our team is available around the clock to assist you anytime, anywhere.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "Residential & Commercial Security",
      description:
        "We offer expert lock installation, repair, and key duplication services to keep your home and business secure.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "Automotive Locksmithing",
      description:
        "Lost your car keys? Need a key fob replacement? We provide fast and reliable car key programming and lockout services.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "High-Security Locks & Safes",
      description:
        "Upgrade your security with high-quality locks, access control systems, and safe installations for added protection.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "Fast Response Time",
      description:
        "We prioritize quick service to get you back inside and secure your property with minimal wait time.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "Licensed & Trusted Professionals",
      description:
        "Our experienced locksmiths are fully licensed, insured, and dedicated to providing top-notch security solutions.",
      icon: IconRocket, // Replace with a relevant icon
    },
  ]}
/>


<Reviews
  highlight="Reviews"
  title="Hear What Our Clients Say"
  subtitle="These reviews are pulled automatically from Google Reviews and can be filtered to only display 4-5 star ratings."
  items={[]}/>
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar."
        highlight="FAQs"
        items={[
          {
            title: "What do I need to start?",
            description:
              "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
              icon: IconArrowDownRight,
          },
          {
            icon: IconArrowDownRight,
            title: "How to install the Qwik + Tailwind CSS template?",
            description:
              "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
          },
          {
            icon: IconArrowDownRight,
            title: "What's something that you don't understand?",
            description:
              "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
          },
          {
            icon: IconArrowDownRight,
            title: "What's an example of when you changed your mind?",
            description:
              "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
          },
          {
            icon: IconArrowDownRight,
            title: "What is something that you would like to try again?",
            description:
              "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
          },
          {
            icon: IconArrowDownRight,
            title: "If you could only ask one question to each person you meet, what would that question be?",
            description:
              "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
          },
        ]}
      />

      <Stats />
      <Contact/>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
