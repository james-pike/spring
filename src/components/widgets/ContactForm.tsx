import { component$, useContextProvider } from '@builder.io/qwik';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input'; // Import your Input component
import { Textarea } from '../ui/TextArea';
import { DarkContext } from '~/DarkContext';
import { Button } from '../ui/Button';
import ContactSelect from './ContactSelect';

interface Props {
    isDark?: boolean;
  }
  
  export default component$((props: Props) => {
 const { isDark = false } = props;
  useContextProvider(DarkContext, isDark);

  return (
    <>
      <Card.Root class=" ">

      <Card.Root>
        <Card.Content>
          <h1>Contact Details</h1>
        <div class=" max-w-md mx-auto ">
        <dl class=" space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Address</span>
              <svg
                class="h-7 w-6 text-gray-400 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>
            </dt>
            <dd>
              100 Duncan Lane
              <br />
              Hastings Highlands, ON K@G5Y5
            </dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Telephone</span>
              <svg
                class="h-7 w-6 text-gray-400 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </dt>
            <dd>
              <a class="hover:text-gray-900 dark:hover:text-white" href="tel:+1 (613) 218-8063">
                +1 (613) 218-8063
              </a>
            </dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Email</span>
              <svg
                class="h-7 w-6 text-gray-400 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </dt>
            <dd>
              <a class="hover:text-gray-900 dark:hover:text-white" href="mailto:james@webdev.ca">
                james@webdev.ca
              </a>
            </dd>
          </div>
        </dl>
        </div>
        </Card.Content>
      </Card.Root>
     
        <Card.Content class="bg-indigo-800 pt-6">
        <form action="#" method="POST" class=" ">
          <div class="mx-auto  lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <div class="mt-1.5">
                  <Input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="James"
                    required
                
                  />
                </div>
              </div>
              <div>
                <label
                  for="last-name"
                  class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Company
                </label>
                <div class="mt-1.5">
                  <Input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Pike"
                    required
                  
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div class="mt-1.5">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="james@webdev.ca"
                    required
                  
                  />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label
                  for="phone-number"
                  class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <div class="mt-1.5">
                  <Input
                    type="tel" // Changed to tel for phone numbers
                    id="phone-number"
                    name="phone-number"
                    placeholder="+12 345 6789"
                    required
                  
                  />
                </div>
              </div>
              <div>
             
              <ContactSelect isDark={isDark}/>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <div class="mt-1.5">
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Leave a comment..."
                   // Use Textarea with isDark
                  />
                </div>
              </div>
            </div>
            <div class="mt-3.5 flex">
             <Button>Send Message</Button>
            </div>
          </div>
        </form>
        </Card.Content>
      </Card.Root>

    
    </>
  );
});