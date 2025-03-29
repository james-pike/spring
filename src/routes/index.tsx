import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Stats from "~/components/widgets/Stats";
import { qwikSerialized } from "~/utils/qwikSerialized";
import { SITE } from "~/config.mjs";
import Reviews from "~/components/widgets/Reviews";
import Pricing from "~/components/widgets/Pricing";
import Services from "~/components/widgets/Services";
import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import FAQ from "~/components/widgets/FAQ";
import Steps from "~/components/widgets/Steps";
import Contact2 from "~/components/widgets/Contact2";


const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconArrowDownRight = qwikSerialized(() => import("../components/icons/IconArrowDownRight"));

export default component$(() => {
  return (
    <>
      <Hero />

      <Services
        id="services"
        highlight="Services"
        title="Reliable Locksmith Services You Can Trust"
        subtitle="We provide fast, professional, and secure locksmith services tailored to your needs."
        items={[]} />


      <Features
        isDark
        highlight="Features"
        title="Reliable Locksmith Services You Can Trust"
        subtitle="We provide fast, professional, and secure locksmith services tailored to your needs."
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

      <Pricing id="services"
        highlight="Services"
        title="Reliable Locksmith Services You Can Trust"
        subtitle="We provide fast, professional, and secure locksmith services tailored to your needs."
        items={[]} />


      <Reviews
      isDark
        highlight="Reviews"
        title="What Our Clients Say"
        subtitle="These reviews are pulled from Google Reviews and filtered to only display 4-5 star ratings."
        items={[]} />
      <Steps       
      id="steps"
      highlight="Reviews"
        title="What Our Clients Say"
        subtitle="These reviews are pulled from Google Reviews and filtered to only display 4-5 star ratings."
        items={[]} />
      <FAQ
isDark
        title="Frequently Asked Questions"
        subtitle="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque."
        highlight="FAQs"
        items={[
          {
            icon: IconArrowDownRight,
            title: "Do you offer emergency locksmith services?",
            description:
              "Yes! We provide 24/7 emergency lockout assistance for homes, businesses, and vehicles.",
          },
          {
            icon: IconArrowDownRight,
            title: "Can you replace lost or broken keys?",
            description:
              "Absolutely! We offer key duplication, cutting, and replacement services for all types of locks.",
          },
          {
            icon: IconArrowDownRight,
            title: "Do you install smart locks and security systems?",
            description:
              "Yes, we specialize in smart lock installation and advanced security systems for added protection.",
          },
          {
            icon: IconArrowDownRight,
            title: "Can you repair or replace damaged locks?",
            description:
              "Of course! We repair, rekey, and replace locks to enhance security and restore functionality.",
          },
          {
            icon: IconArrowDownRight,
            title: "Do you provide car key programming and replacement?",
            description:
              "Yes! We offer car key programming, key fob replacement, and ignition repair for most vehicle models.",
          },
          {
            icon: IconArrowDownRight,
            title: "Can you open safes and vaults?",
            description:
              "Yes, we offer professional safe opening and installation services while ensuring your valuables remain secure.",
          },
        ]}
      />
      <Stats />
      <Contact2
      id="services"
      highlight="Services"
      title="Reliable Locksmith Services You Can Trust"
      subtitle="We provide fast, professional, and secure locksmith services tailored to your needs."
      items={[]} />
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
