import { component$ } from "@builder.io/qwik";
import { Tabs } from "../ui/Tabs";
import { qwikSerialized } from "~/utils/qwikSerialized";
import { Card } from "../ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

// Dynamically import IconRocket
const IconRocket = qwikSerialized(() => import("~/components/icons/IconRocket"));

// Updated service data with additional fields
const serviceData = [
  {
    title: "Design",
    subtitle: "Creative Solutions Creative Solution Creative Solutions",
    icon: IconRocket,
    description: "Innovative design services to bring your vision to life with creativity and precision.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png",
    features: [
      "Custom UI/UX Design",
      "Brand Identity Creation",
      "Prototyping & Wireframing"
    ],
    projectDetails: {
      startingPrice: "$3,500",
      timeline: "4-6 weeks"
    },
    ctaText: "Begin Design"
  },
  {
    title: "Development",
    subtitle: "Custom Software Custom Custom Software tom Software",
    icon: IconRocket,
    description: "Robust and scalable web development solutions.",
    image: "https://via.placeholder.com/400x200?text=Development",
    features: [
      "Full-stack Development",
      "API Integrations",
      "Performance Optimization"
    ],
    projectDetails: {
      startingPrice: "$4,000",
      timeline: "6-8 weeks"
    },
    ctaText: "Begin Development"
  },
  {
    title: "Consulting",
    subtitle: "Strategic Advice Strategic Strategic Advice Strategic",
    icon: IconRocket,
    description: "Expert consulting to optimize your processes and achieve your strategic goals.",
    image: "https://via.placeholder.com/400x200?text=Consulting",
    features: [
      "Business Strategy",
      "Process Optimization",
      "Tech Advisory"
    ],
    projectDetails: {
      startingPrice: "$2,500",
      timeline: "3-5 weeks"
    },
    ctaText: "Begin Consulting"
  }
];

export default component$(() => {
  return (
    <Tabs.Root class={{ container: "max-w-6xl" }}>
      <Tabs.List class="grid w-full text-lg grid-cols-3">
        {serviceData.map((service) => (
          <Tabs.Tab
            key={service.title}
            class="flex md:flex-row flex-col items-center gap-2 py-2 md:whitespace-normal"
          >
            {service.icon && (
              <span class="inline-block md:w-1/4 w-8 h-8 flex-shrink-0">
                <service.icon />
              </span>
            )}
            <div class="flex flex-col md:w-3/4 w-full text-center md:text-left overflow-hidden">
              <span class="font-semibold">{service.title}</span>
              <span class="text-sm text-muted-foreground md:block hidden">
                {service.subtitle}
              </span>
            </div>
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {serviceData.map((service, index) => (
        <Tabs.Panel key={index} class="w-full md:mt-0 rounded-t-none">
          <div class="pb-8 h-full">
            <Card.Header>
              <Card.Title class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {service.title} Services
              </Card.Title>
              <Card.Description class="text-gray-600 dark:text-gray-300">
                {service.description}
              </Card.Description>
            </Card.Header>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Image */}
              <div class="w-full h-24 md:h-64">
                <img
                  src={service.image}
                  alt={`${service.title} illustration`}
                  class="w-full h-full rounded-lg shadow-md object-cover"
                />
              </div>
              {/* Right Column: Features, Project Details, CTA */}
              <div class="w-full space-y-6">
                <div class="space-y-2">
                  <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Key Features
                  </Label>
                  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} class="flex items-center gap-2">
                        <span class="text-green-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="space-y-2">
                  <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Project Details
                  </Label>
                  <div class="grid grid-cols-2 gap-2">
                    <Input
                      value={service.projectDetails.startingPrice}
                      readOnly
                      class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                      placeholder="Starting Price"
                    />
                    <Input
                      value={service.projectDetails.timeline}
                      readOnly
                      class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                      placeholder="Timeline"
                    />
                  </div>
                </div>
                <Button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
                  {service.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
});