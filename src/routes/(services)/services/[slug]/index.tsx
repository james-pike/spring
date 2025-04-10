import { component$ } from "@builder.io/qwik";
import { routeLoader$, StaticGenerateHandler } from "@builder.io/qwik-city";
import { Breadcrumb } from "~/components/ui/Breadcrumb";

interface Service {
  title: string;
  description: string;
  details: string;
  image: string;
  alt: string;
  slug: string;
}

const services: Service[] = [
  {
    title: "Web Design",
    description: "Beautiful, responsive designs that engage and convert.",
    details: `Our web design service focuses on creating stunning, user-friendly interfaces tailored to your brand and goals. From wireframes to final designs, we prioritize clarity, accessibility, and modern aesthetics. Whether you're starting from scratch or need a redesign, we’ll deliver an intuitive experience that works on every screen size.`,
    image: "/images/placeholder.png",
    alt: "Web Design service preview",
    slug: "web-design",
  },
  {
    title: "Web Development",
    description: "High-performance code that brings your ideas to life.",
    details: `We specialize in custom web development using modern frameworks and best practices. From static sites to dynamic web applications, our code is scalable, secure, and optimized for speed. Whether it’s integrating APIs or building from the ground up, we turn complex functionality into seamless digital experiences.`,
    image: "/images/placeholder.png",
    alt: "Web Development service preview",
    slug: "web-development",
  },
  {
    title: "Branding",
    description: "Crafting a memorable identity that tells your story.",
    details: `Our branding service helps you stand out in a crowded market. We develop visual identities that include logos, typography, color palettes, and brand guidelines — all rooted in your unique mission and values. A strong brand builds trust and recognition, and we’re here to shape one you’ll be proud of.`,
    image: "/images/placeholder.png",
    alt: "Branding service preview",
    slug: "branding",
  },
  {
    title: "Marketing",
    description: "Strategies that attract, engage, and convert your audience.",
    details: `Our marketing services are data-driven and audience-focused. We help you grow through SEO, content marketing, email campaigns, and social media strategy. Whether you’re looking to increase traffic, leads, or sales, we tailor a plan that delivers measurable results and long-term value.`,
    image: "/images/placeholder.png",
    alt: "Marketing service preview",
    slug: "marketing",
  },
];

export const useService = routeLoader$<Service | null>(({ params }) => {
  const service = services.find(s => s.slug === params.slug);
  return service || null;
});

export default component$(() => {
  const service = useService();

  if (!service.value) {
    return (
      <div class="max-w-screen-xl mx-auto px-4 py-16 text-center">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Service Not Found</h1>
        <p class="text-gray-600 dark:text-gray-400">The requested service could not be found.</p>
      </div>
    );
  }

  return (
    <div class="max-w-7xl bg-gray-100 dark:bg-gray-800">
      <section class="max-w-6xl mx-auto px-4 pb-8 md:py-16 bg-gray-100 dark:bg-gray-800">
        {/* Breadcrumb Navigation */}
    

        {/* Main Grid Content */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 items-start">
          {/* Image Section */}
          <div class="flex justify-center md:justify-start">
            <img
              src={service.value.image}
              alt={service.value.alt}
              width={500}
              height={300}
              class="w-full max-w-md rounded-none shadow-md object-cover"
            />
          </div>

        
          {/* Text Section */}
          <div class="space-y-6">
          <Breadcrumb.Root class="sticky top-[74px] z-40 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm px-4 py-2">
        <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/services">Services</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>{service.value.title}</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {service.value.title}
            </h1>
            <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {service.value.description}
            </p>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-400">
              {service.value.details}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});

// Pre-render all slugs
export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: services.map(service => ({ slug: service.slug })),
  };
};