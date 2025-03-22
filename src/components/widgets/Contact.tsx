import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';

interface Props {
    id?: string;
    title?: any;
    subtitle?: any;
    highlight?: any;
    isDark?: boolean;
    classes?: any;
}

export default component$((props: Props) => {
    const { title = "", subtitle = "", highlight = "", classes = {} } = props;

    return (
        <>
            {/* Hero Banner Section */}
      

            {/* Form/Contact Section */}
            <div class="relative isolate mx-auto max-w-7xl bg-primary-25 rounded-lg bg-gray-100 dark:bg-gray-800">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div class="relative px-6 pb-8 pt-8 sm:pt-32 lg:static lg:px-8 lg:py-24">
                        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-white/5 lg:w-1/2">
                                <div
                                    class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                                    aria-hidden="true"
                                >
                                    <div
                                        class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary-300 to-primary opacity-20 dark:opacity-30"
                                        style={{
                                            clipPath:
                                                'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
                            <dl class="mt-8 space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
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
                                        100 Duncan Lane<br />Hastings Highlands, ON K@G5Y5
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
                                        <a
                                            class="hover:text-gray-900 dark:hover:text-white"
                                            href="tel:+1 (555) 234-5678"
                                        >
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
                                        <a
                                            class="hover:text-gray-900 dark:hover:text-white"
                                            href="mailto:hello@example.com"
                                        >
                                            james@webdev.ca
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form
                        action="#"
                        method="POST"
                        class="px-7 pb-6 pt-8 sm:pb-32 lg:px-8 lg:py-24"
                    >
                        <div class="mx-auto max-w-xl lg:max-w-lg">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        for="first-name"
                                        class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <div class="mt-1.5">
                                        <input
                                            type="text"
                                            id="first-name"
                                            class="block p-2 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                                        <input
                                            type="text"
                                            id="last-name"
                                            class="block p-2 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                                        <input
                                            type="email"
                                            id="email"
                                            class="shadow-sm bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                                        <input
                                            type="number"
                                            id="phone-number"
                                            class="block p-2 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="+12 345 6789"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="topic"
                                        class="pb-1.5 block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Service
                                    </label>
                                    <select
                                        id="topic"
                                        class="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option selected>Select a service</option>
                                        <option value="US">Switch plans and add-ons</option>
                                        <option value="CA">Billing & Invoice</option>
                                        <option value="DE">Parental controls</option>
                                        <option value="XU">Billing & Invoice</option>
                                    </select>
                                </div>
                                <div class="sm:col-span-2">
                                    <label
                                        for="message"
                                        class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Message
                                    </label>
                                    <div class="mt-1.5">
                                        <textarea
                                            id="message"
                                            rows={3}
                                            class="block p-2 w-full text-md text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Leave a comment..."
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3.5 pb-4 flex">
                                <button
                                    type="submit"
                                    class="py-3 w-full px-5 text-sm font-medium text-center text-white rounded-md bg-primary-800 sm:w-fit hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
});