import { component$, useContextProvider } from '@builder.io/qwik';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Tabs } from '../ui/Tabs';
import { DarkContext } from '~/DarkContext';

interface Props {
  isDark?: boolean;
}

export default component$((props: Props) => {
  const { isDark = false } = props;

  useContextProvider(DarkContext, isDark);

  return (
    <div class="w-full min-h-[600px]">
      <Tabs.Root class="flex flex-col md:flex-row w-full">
        {/* Tabs List - Horizontal on mobile, Vertical on desktop */}
        <Tabs.List class="grid grid-cols-2 md:flex md:flex-col w-full md:w-1/4 border-b md:border-b-0 md:border-r bg-gray-50">
          <Tabs.Tab class="py-4 px-6 md:py-6 md:px-8 text-base md:text-lg font-medium text-left hover:bg-gray-200 transition-colors border-b md:border-b cursor-pointer">
            Design
          </Tabs.Tab>
          <Tabs.Tab class="py-4 px-6 md:py-6 md:px-8 text-base md:text-lg font-medium text-left hover:bg-gray-200 transition-colors border-b md:border-b cursor-pointer">
            Development
          </Tabs.Tab>
          <Tabs.Tab class="py-4 px-6 md:py-6 md:px-8 text-base md:text-lg font-medium text-left hover:bg-gray-200 transition-colors border-b md:border-b cursor-pointer">
            Branding
          </Tabs.Tab>
          <Tabs.Tab class="py-4 px-6 md:py-6 md:px-8 text-base md:text-lg font-medium text-left hover:bg-gray-200 transition-colors border-b md:border-b cursor-pointer">
            Marketing
          </Tabs.Tab>
        </Tabs.List>

        {/* Panels */}
        <Tabs.Panel class="w-full md:w-3/4">
          <div class="p-6 h-full">
            <Card.Root>
              <Card.Header>
                <Card.Title>Design Services</Card.Title>
                <Card.Description>
                  Professional design solutions to make your brand stand out visually.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <img
                      src="https://placehold.co/300x200"
                      alt="Design mockup"
                      class="w-full rounded-lg shadow-md"
                    />
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold">Key Features</Label>
                      <ul class="space-y-2">
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Custom UI/UX design</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Wireframes & prototypes</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Responsive layouts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold">Project Details</Label>
                      <div class="grid grid-cols-2 gap-2">
                        <Input value="$2,500" readOnly class="bg-gray-100" placeholder="Starting Price" />
                        <Input value="3-5 weeks" readOnly class="bg-gray-100" placeholder="Timeline" />
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Our design team creates stunning visuals tailored to your brand's identity.
                    </p>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer>
                <Button class="w-full">Start Designing</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Panel>

        <Tabs.Panel class="w-full md:w-3/4">
          <div class="p-6 h-full">
            <Card.Root>
              <Card.Header>
                <Card.Title>Development Services</Card.Title>
                <Card.Description>
                  Robust and scalable web development solutions.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <img
                      src="https://placehold.co/300x200"
                      alt="Code screenshot"
                      class="w-full rounded-lg shadow-md"
                    />
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold">Key Features</Label>
                      <ul class="space-y-2">
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Full-stack development</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>API integrations</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Performance optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold">Project Details</Label>
                      <div class="grid grid-cols-2 gap-2">
                        <Input value="$4,000" readOnly class="bg-gray-100" placeholder="Starting Price" />
                        <Input value="6-8 weeks" readOnly class="bg-gray-100" placeholder="Timeline" />
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Cutting-edge development with modern frameworks.
                    </p>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer>
                <Button class="w-full">Begin Development</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Panel>

        <Tabs.Panel class="w-full md:w-3/4">
          <div class="p-6 h-full">
            <Card.Root>
              <Card.Header>
                <Card.Title>Branding Services</Card.Title>
                <Card.Description>
                  Create a memorable brand identity that resonates with your audience.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <img
                      src="https://placehold.co/300x200"
                      alt="Branding examples"
                      class="w-full rounded-lg shadow-md"
                    />
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold">Key Features</Label>
                      <ul class="space-y-2">
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Logo design</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Brand guidelines</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Marketing collateral</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold">Project Details</Label>
                      <div class="grid grid-cols-2 gap-2">
                        <Input value="$1,800" readOnly class="bg-gray-100" placeholder="Starting Price" />
                        <Input value="2-4 weeks" readOnly class="bg-gray-100" placeholder="Timeline" />
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Comprehensive branding that tells your story effectively.
                    </p>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer>
                <Button class="w-full">Build Your Brand</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Panel>

        <Tabs.Panel class="w-full md:w-3/4">
          <div class="p-6 h-full">
            <Card.Root>
              <Card.Header>
                <Card.Title>Marketing Services</Card.Title>
                <Card.Description>
                  Drive growth with strategic digital marketing solutions.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <img
                      src="https://placehold.co/300x200"
                      alt="Marketing campaign"
                      class="w-full rounded-lg shadow-md"
                    />
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold">Key Features</Label>
                      <ul class="space-y-2">
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>SEO & content strategy</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>Social media management</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-green-500">✓</span>
                          <span>PPC advertising</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="space-y-2">
                      <Label class="text-lg font-semibold">Project Details</Label>
                      <div class="grid grid-cols-2 gap-2">
                        <Input value="$1,200/mo" readOnly class="bg-gray-100" placeholder="Starting Price" />
                        <Input value="Ongoing" readOnly class="bg-gray-100" placeholder="Timeline" />
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Targeted marketing campaigns to boost your online presence.
                    </p>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer>
                <Button class="w-full">Launch Campaign</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
});