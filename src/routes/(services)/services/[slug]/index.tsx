import { component$ } from "@builder.io/qwik";
import { routeLoader$, StaticGenerateHandler } from "@builder.io/qwik-city";

interface Service {
  title: string;
  description: string;
  details: string;
  image: string;
  alt: string;
  delay: number;
  slug: string;
}

const services: Service[] = [
  {
    title: "Exhibit Photography",
    description: "Professional photography services tailored for exhibitions and galleries.",
    details: "Showcase your artwork or exhibits with high-quality, detailed photography.",
    image: "/images/hero1.webp",
    alt: "Exhibit Photography",
    delay: 0,
    slug: "exhibit-photography"
  },
  {
    title: "Reproduction Services",
    description: "Accurate reproductions for prints, publications, and digital archives.",
    details: "Ensure every detail is captured for stunning, true-to-life reproductions.",
    image: "/images/hero1.webp",
    alt: "Reproduction Services",
    delay: 100,
    slug: "reproduction-services"
  },
];

export const useService = routeLoader$<Service | null>(({ params }) => {
  const service = services.find(s => s.slug === params.slug);
  return service || null;
});

export default component$(() => {
  const service = useService();
  if (!service.value) {
    return <div>Service not found</div>;
  }
  return (
    <div class="max-w-screen-xl mx-auto mt-8 mb-16">
      <h1 class="text-3xl font-bold mb-4">{service.value.title}</h1>
      <img src={service.value.image} alt={service.value.alt} class="w-full max-w-md mb-4" />
      <p class="text-lg mb-4">{service.value.description}</p>
      <p>{service.value.details}</p>
    </div>
  );
});

// Add this to pre-render all slugs
export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: services.map(service => ({ slug: service.slug })),
  };
};