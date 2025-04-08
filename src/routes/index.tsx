import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Stats from "~/components/widgets/Stats";
import { qwikSerialized } from "~/utils/qwikSerialized";
import { SITE } from "~/config.mjs";
import Pricing from "~/components/widgets/Pricing";
import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import FAQ from "~/components/widgets/FAQ";
import Steps from "~/components/widgets/Steps";
import Contact from "~/components/widgets/Contact";
import Portfolio from "~/components/widgets/Portfolio";
import Services from "~/components/widgets/Services";

import Reviews from "~/components/widgets/Reviews";


const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));

export default component$(() => {
  return (
    <>
      <Hero />

      <Services
        id="services"
        highlight="Portfolio"
        title="Discover Past Projects We've Done"
        subtitle="We provide fast, professional, and secure locksmith services tailored to your needs."
        items={[]} />

<Features
id="features-grid"
  isDark
  highlight="Core Competencies"
  title="Expert Front-End Development You Can Rely On"
  subtitle="Delivering high-performance, user-centric web applications with advanced JavaScript frameworks and modern web technologies."
  items={[
    {
      title: "Advanced State Management",
      description:
        "Proficient in managing complex states across applications using React's Context API, Redux, and Qwik's signals, ensuring seamless, performant user interactions.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "Optimized Web Performance",
      description:
        "Skilled in optimizing web performance with code-splitting, lazy loading, and caching strategies, ensuring lightning-fast page loads and minimal render times.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "Responsive Design & UI/UX",
      description:
        "Expert in crafting responsive, mobile-first designs using CSS Grid, Flexbox, Tailwind CSS, and advanced media queries to create fluid layouts across all device sizes.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "Progressive Web Apps (PWAs)",
      description:
        "Experience in developing Progressive Web Apps, leveraging Service Workers and Web APIs for offline functionality and push notifications to enhance user engagement.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "JavaScript Frameworks Mastery",
      description:
        "Extensive expertise in ReactJS and QwikJS for building scalable, high-performance applications with optimal state management and reactivity.",
      icon: IconRocket, // Replace with a relevant icon
    },
    {
      title: "Web Browser APIs & Client-Side Integration",
      description:
        "In-depth understanding of web browser APIs (e.g., Geolocation, WebSockets, IndexedDB) to enable rich, interactive experiences with seamless back-end communication.",
      icon: IconRocket, // Replace with a relevant icon
    },
  ]}
/>


<Portfolio
        id="portfolio"
        highlight="Portfolio"
        title="Discover Past Projects We've Done"
        subtitle="We provide fast, professional, and secure locksmith services tailored to your needs."
        items={[]} />

      <Pricing id="pricing"
      isDark
        highlight="pricing"
        title="Flexible Pricing Options"
        subtitle="Choose a one time payment or monthly plan."
        items={[]} />


      <Reviews
    
        highlight="Reviews"
        title="What Our Clients Say"
        subtitle="These reviews are pulled from Google Reviews and filtered to only display 4-5 star ratings."
        items={[]} />
      <Steps      
      isDark 
      id="steps"
      highlight="Our Process"
  title="How We Bring Your Website to Life"
  subtitle="From first contact to final launch, our streamlined process ensures every website is strategic, beautifully designed, and built to perform."
        items={[]} />
      <FAQ
isDark
        title="Frequently Asked Questions"
        subtitle="Find common inquiries about our services."
        highlight="FAQs"
  
      />
           <FAQ

        title="Frequently Asked Questions"
        subtitle="Find common inquiries about our services."
        highlight="FAQs"
  
      />
      <Stats />
      <Contact
      isDark
      id="services"
      highlight="Contact Us"
      title="Get In Touch"
      subtitle="Request a quote or book a free consultations today!."
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
