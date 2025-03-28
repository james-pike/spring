import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Card } from "../ui/Card";

const services = [
  {
    title: "Emergency Lockout Assistance",
    description: "Fast and reliable 24/7 lockout services for homes, offices, and vehicles.",
    details: "Regain access to your property quickly with our professional lockout solutions.",
    image: "/images/hero1.png",
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
    title: "Smart Lock & Security System",
    description: "Upgrade your security with the latest smart locks and access control systems.",
    details: "We install high-tech security solutions for homes and businesses.",
    image: "/images/placeholder.png",
    alt: "Smart Lock & Security Systems",
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
  }
];

export default component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    const element = document.querySelector("#services-grid");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  return (
      <div id="services-grid" 
      class="grid mx-auto max-w-screen-xl mt-2 mb-2 md:mb-16 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, image, alt, slug }, index) => (
          <Link href={`/services/${slug}`} key={index} class="no-underline">
            <Card.Root
              class={`
                relative block h-full shadow-lg outline-1 
                 transform transition-all duration-500 ease-out
                hover:scale-[1.025] focus:scale-[1.025]
                ${isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 100}ms`}}>
              <Card.Image
                src={image}
                width="700"
                height="350"
                alt={alt}
                class="w-full object-cover rounded-t-sm"/>
              <Card.Header>
                <Card.Title class="text-lg">{title}</Card.Title>
                <Card.Description class="text-sm">{description}</Card.Description>
              </Card.Header>
            </Card.Root>
          </Link>
        ))}
      </div>
  );
});
