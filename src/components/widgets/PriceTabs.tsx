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
    <div class="flex flex-col md:flex-row gap-16 mx-auto justify-center">
      <Tabs.Root class="max-w-[500px]">
        <Tabs.List class="grid w-full grid-cols-2">
          <Tabs.Tab>Complete Project ($3800)</Tabs.Tab>
          <Tabs.Tab>Monthly Cost ($200/month)</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel>
          <Card.Root>
            <Card.Header>
              <Card.Title>Complete Project</Card.Title>
              <Card.Description>
                A one-time cost for building a fully custom website with all features and functionality.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-4">
              <div class="space-y-2">
                <Label for="features1" class="text-lg font-semibold">Features</Label>
                <ul class="space-y-2">
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Fully custom website design</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Up to 10 pages of content</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Responsive mobile and desktop design</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>SEO optimization for better visibility</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Content management system (CMS) setup</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Contact forms and integrations</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>One-year free support and maintenance</span>
                  </li>
                </ul>
              </div>
              <div class="space-y-2">
                <Label for="projectTimeline" class="text-lg font-semibold">Project Timeline</Label>
                <Input id="projectTimeline" value="4-6 weeks" readOnly class="bg-gray-100" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button class="w-full">Get Started</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Panel>
        <Tabs.Panel>
          <Card.Root>
            <Card.Header>
              <Card.Title>Monthly Cost</Card.Title>
              <Card.Description>
                Pay monthly for ongoing website support, updates, and hosting.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-4">
              <div class="space-y-2">
                <Label for="features2" class="text-lg font-semibold">Features</Label>
                <ul class="space-y-2">
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Ongoing website updates</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Monthly backups and security checks</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Content updates and maintenance</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Hosting and server management</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Quarterly SEO audits</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
              <div class="space-y-2">
                <Label for="supportHours" class="text-lg font-semibold">Support Hours</Label>
                <Input id="supportHours" value="10 hours/month" readOnly class="bg-gray-100" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button class="w-full">Subscribe</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Panel>
      </Tabs.Root>

      {/* Second Tabs.Root remains identical, so I'll only show the changes once */}
      {/* You can apply the same changes to the second Tabs.Root */}
    </div>
  );
});