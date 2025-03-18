import { component$ } from "@builder.io/qwik";
import { routeLoader$, StaticGenerateHandler } from "@builder.io/qwik-city";

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
    title: "Emergency Lockout Assistance",
    description: "Fast and reliable 24/7 lockout services for homes, offices, and vehicles.",
    details: "Regain access to your property quickly with our professional lockout solutions.",
    image: "/images/placeholder.png",
    alt: "Emergency Lockout Assistance",
    slug: "emergency-lockout"
  },
  {
    title: "Key Duplication & Replacement",
    description: "Precision key cutting and duplication for all types of locks.",
    details: "Get spare keys for your home, office, or vehicle with accuracy and efficiency.",
    image: "/images/placeholder.png",
    alt: "Key Duplication & Replacement",
    slug: "key-duplication"
  },
  {
    title: "Lock Installation & Repair",
    description: "Enhance security with professional lock installation and repair services.",
    details: "We install and fix all types of locks to keep your property secure.",
    image: "/images/placeholder.png",
    alt: "Lock Installation & Repair",
    slug: "lock-installation"
  },
  {
    title: "Smart Lock & Security System Installation",
    description: "Upgrade your security with the latest smart locks and access control systems.",
    details: "We install high-tech security solutions for homes and businesses.",
    image: "/images/placeholder.png",
    alt: "Smart Lock & Security System Installation",
    slug: "smart-locks"
  },
  {
    title: "Automotive Locksmith Services",
    description: "Key programming, lock repairs, and ignition services for all vehicle models.",
    details: "We provide expert automotive locksmith solutions, including key fob replacement.",
    image: "/images/placeholder.png",
    alt: "Automotive Locksmith Services",
    slug: "automotive-locksmith"
  },
  {
    title: "Safe Opening & Installation",
    description: "Secure storage solutions and expert safe opening services.",
    details: "We install, repair, and unlock safes while maintaining their integrity.",
    image: "/images/placeholder.png",
    alt: "Safe Opening & Installation",
    slug: "safe-services"
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
    <div class="max-w-screen-xl mx-auto mt-0 mb-16 px-4">
            <img src={service.value.image} alt={service.value.alt} class="w-full max-w-md mb-4" />

      <h1 class="text-3xl font-bold mb-4">{service.value.title}</h1>
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