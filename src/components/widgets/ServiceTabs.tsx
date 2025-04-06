import { component$, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Tabs } from '../ui/Tabs';
import { DarkContext } from '~/DarkContext';
import { qwikSerialized } from '~/utils/qwikSerialized';

// Dynamic icon import (assuming this is your setup)
const IconBrandTailwind = qwikSerialized(() => import("~/components/icons/IconBrandTailwind"));

interface Props {
  isDark?: boolean;
}

export default component$((props: Props) => {
  const { isDark = false } = props;
  const activeTab = useSignal(0); // Track active tab index

  useContextProvider(DarkContext, isDark);

  // Sync activeTab with tab changes (assuming Tabs emits an event or index tracking)
  useTask$(({ track }) => {
    track(() => activeTab.value); // Trigger animations on tab change
  });

  return (
    <div class="w-full min-h-[600px] px-0 ">
      <Tabs.Root class="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
        {/* Tabs List */}
        <Tabs.List class="grid grid-cols-2 md:flex md:flex-col w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 border-b md:border-b-0 md:border-r">
          <Tabs.Tab class="flex items-center gap-3 py-4 px-6 md:py-6 md:px-8 text-base md:text-lg font-medium text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer border-b md:border-b-0">
            <IconBrandTailwind class="w-6 h-6 text-gray-600 dark:text-gray-300" />
            Design
          </Tabs.Tab>
          <Tabs.Tab class="flex items-center gap-3 py-4 px-6 md:py-6 md:px-8 text-base md:text-lg font-medium text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer border-b md:border-b-0">
            <IconBrandTailwind class="w-6 h-6 text-gray-600 dark:text-gray-300" />
            Development
          </Tabs.Tab>
          <Tabs.Tab class="flex items-center gap-3 py-4 px-6 md:py-6 md:px-8 text-base md:text-lg font-medium text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer border-b md:border-b-0">
            <IconBrandTailwind class="w-6 h-6 text-gray-600 dark:text-gray-300" />
            Branding
          </Tabs.Tab>
          <Tabs.Tab class="flex items-center gap-3 py-4 px-6 md:py-6 md:px-8 text-base md:text-lg font-medium text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer border-b md:border-b-0">
            <IconBrandTailwind class="w-6 h-6 text-gray-600 dark:text-gray-300" />
            Marketing
          </Tabs.Tab>
        </Tabs.List>

        {/* Panels - All using Design layout with animations */}
        <Tabs.Panel class="w-full md:w-3/4">
          <div class="pb-8 h-full">
            <Card.Root class="bg-white dark:bg-gray-900 shadow-lg">
              <Card.Header class="animate-fade-in-down">
                <Card.Title class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Design Services</Card.Title>
                <Card.Description class="text-gray-600 dark:text-gray-300">
                  Professional design solutions to make your brand stand out visually.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-6 animate-fade-in-up">
                <div class="flex flex-col md:flex-row gap-6">
                  <div class="md:w-1/2">
                    <img
                      src="https://placehold.co/400x250"
                      alt="Design mockup"
                      class="w-full rounded-lg shadow-md object-cover animate-slide-in-left"
                    />
                  </div>
                  <div class="md:w-1/2 space-y-4">
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">Key Features</Label>
                      <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Custom UI/UX design
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Wireframes & prototypes
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Responsive layouts
                        </li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Details</Label>
                      <div class="grid grid-cols-2 gap-2">
                        <Input value="$2,500" readOnly class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200" placeholder="Starting Price" />
                        <Input value="3-5 weeks" readOnly class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200" placeholder="Timeline" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer class="animate-fade-in-up-delay">
                <Button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Start Designing</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Panel>

        <Tabs.Panel class="w-full md:w-3/4">
          <div class="pb-8 h-full">
            <Card.Root class="bg-white dark:bg-gray-900 shadow-lg">
              <Card.Header class="animate-fade-in-down">
                <Card.Title class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Development Services</Card.Title>
                <Card.Description class="text-gray-600 dark:text-gray-300">
                  Robust and scalable web development solutions.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-6 animate-fade-in-up">
                <div class="flex flex-col md:flex-row gap-6">
                  <div class="md:w-1/2">
                    <img
                      src="https://placehold.co/400x250"
                      alt="Code screenshot"
                      class="w-full rounded-lg shadow-md object-cover animate-slide-in-left"
                    />
                  </div>
                  <div class="md:w-1/2 space-y-4">
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">Key Features</Label>
                      <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Full-stack development
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> API integrations
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Performance optimization
                        </li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Details</Label>
                      <div class="grid grid-cols-2 gap-2">
                        <Input value="$4,000" readOnly class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200" placeholder="Starting Price" />
                        <Input value="6-8 weeks" readOnly class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200" placeholder="Timeline" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer class="animate-fade-in-up-delay">
                <Button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Begin Development</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Panel>

        <Tabs.Panel class="w-full md:w-3/4">
          <div class="pb-8 h-full">
            <Card.Root class="bg-white dark:bg-gray-900 shadow-lg">
              <Card.Header class="animate-fade-in-down">
                <Card.Title class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Branding Services</Card.Title>
                <Card.Description class="text-gray-600 dark:text-gray-300">
                  Create a memorable brand identity that resonates with your audience.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-6 animate-fade-in-up">
                <div class="flex flex-col md:flex-row gap-6">
                  <div class="md:w-1/2">
                    <img
                      src="https://placehold.co/400x250"
                      alt="Branding examples"
                      class="w-full rounded-lg shadow-md object-cover animate-slide-in-left"
                    />
                  </div>
                  <div class="md:w-1/2 space-y-4">
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">Key Features</Label>
                      <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Logo design
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Brand guidelines
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Marketing collateral
                        </li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Details</Label>
                      <div class="grid grid-cols-2 gap-2">
                        <Input value="$1,800" readOnly class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200" placeholder="Starting Price" />
                        <Input value="2-4 weeks" readOnly class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200" placeholder="Timeline" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer class="animate-fade-in-up-delay">
                <Button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Build Your Brand</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Panel>

        <Tabs.Panel class="w-full md:w-3/4">
          <div class="pb-8 h-full">
            <Card.Root class="bg-white dark:bg-gray-900 shadow-lg">
              <Card.Header class="animate-fade-in-down">
                <Card.Title class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Marketing Services</Card.Title>
                <Card.Description class="text-gray-600 dark:text-gray-300">
                  Drive growth with strategic digital marketing solutions.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-6 animate-fade-in-up">
                <div class="flex flex-col md:flex-row gap-6">
                  <div class="md:w-1/2">
                    <img
                      src="https://placehold.co/400x250"
                      alt="Marketing campaign"
                      class="w-full rounded-lg shadow-md object-cover animate-slide-in-left"
                    />
                  </div>
                  <div class="md:w-1/2 space-y-4">
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">Key Features</Label>
                      <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> SEO & content strategy
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> Social media management
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span> PPC advertising
                        </li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Details</Label>
                      <div class="grid grid-cols-2 gap-2">
                        <Input value="$1,200/mo" readOnly class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200" placeholder="Starting Price" />
                        <Input value="Ongoing" readOnly class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200" placeholder="Timeline" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer class="animate-fade-in-up-delay">
                <Button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Launch Campaign</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
});