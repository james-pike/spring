import { component$ } from "@builder.io/qwik";
 // Your Popover component
import { cn } from "@qwik-ui/utils";
import {
  LuChevronDown,
  LuPhone,
  LuPlayCircle,
  LuPieChart,
  LuMousePointerClick,
  LuFingerprint,

  LuRepeat,
} from "@qwikest/icons/lucide";
import { Popover } from "./ui/Popover";

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: LuPieChart,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: LuMousePointerClick,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: LuFingerprint,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: LuFingerprint,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: LuRepeat,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: LuPlayCircle },
  { name: "Contact sales", href: "#", icon: LuPhone },
];

export default component$(() => {
  return (
    <Popover.Root class="relative">
      <Popover.Trigger class="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <span>Solutions</span>
        <LuChevronDown class="h-5 w-5" aria-hidden="true" />
      </Popover.Trigger>

      <Popover.Panel
        class={cn(
          "absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 px-4", // Positioning adjustments
          "rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" // Override default styling to match React example
        )}
      >
        <div class="p-4">
          {solutions.map((item) => (
            <div
              key={item.name}
              class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
            >
              <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div>
                <a href={item.href} class="font-semibold text-gray-900">
                  {item.name}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <item.icon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              {item.name}
            </a>
          ))}
        </div>
      </Popover.Panel>
    </Popover.Root>
  );
});