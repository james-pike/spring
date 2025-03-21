import { component$, useSignal } from "@builder.io/qwik";
import { LuX, LuArrowLeft, LuChevronRight } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { Logo2 } from "../common/Logo2";
import { useLocation } from "@builder.io/qwik-city";
import { Modal } from "../ui/Modal";
import IconHamburger from "../icons/IconHamburger";
import { buttonVariants } from "../ui/Button";

export default component$(() => {
  const show = useSignal(false);
  const isServicesSection = useSignal(false);
  const location = useLocation();

 

  // Menu items array structure
  const menuItems = [
    { title: "Home", href: "/", badge: null },
    { title: "About", href: "/about/", badge: null },
  
    { 
      title: "Services", 
      href: "/services/",
      hasSubmenu: true,
      subitems: [
        {
          title: "Safe Opening & Installation",
          href:"/services/safe-services"
        },
        {
          title: "Emergency Lockout Assistance",
          href:"/services/emergrency-lockout"
        },
        {
          title: "Key Duplication & Replacement",
          href:"/services/key-duplication"
        },
        {
          title: "Lock Installation & Repair",
          href:"/services/lock-installation"
        },
        {
          title: "Smart Lock & Security System Installation",
          href:"/services/smart-locks"
        },
        {
          title: "Automotive Locksmith Services",
          href:"/services/automotive-locksmith"
        },
    
      ]
    },

    { 
      title: "Reviews", 
      href: "/reviews/", 
    },
   
    { title: "FAQ", href: "/faq/", badge: null },
    { title: "Contact Us", href: "/contact/", badge: null }
  ];

  // Get services subitems safely
  const servicesItem = menuItems.find(item => item.hasSubmenu);
  const servicesSubitems = servicesItem?.subitems ?? [];

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="flex items-center hover:bg-primary-100 dark:hover:bg-gray-700">
          <Modal.Trigger class=" rounded-sm p-2 bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <IconHamburger class="w-8 h-8 md:w-5 md:h-5 md:inline-block" />
          </Modal.Trigger>
        </div>
        <Modal.Panel position={"left"} class="dark:bg-gray-950 border-0">
          {/* Header */}
          <div class="border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-1">
            <Modal.Title class="pt-1">
              <a href="/">
                <Logo2 />
              </a>
            </Modal.Title>
            <Modal.Description class="text-lg font-medium px-2 py-1 text-gray-700 dark:text-gray-200">
Safe & Auto Inc           </Modal.Description>
          </div>

          {/* Navigation Content */}
          <nav class="mt-0 space-y-4 border-2 border-t-0 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
            {isServicesSection.value ? (
              // Services Section
              <div class="flex flex-col h-full">
                <div class="flex items-center p-2">
                  <button
                    class="text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2"
                    onClick$={() => (isServicesSection.value = false)}
                  >
                    <LuArrowLeft class="h-5 w-5" />
                  </button>
                  <h2 class="text-lg font-medium dark:text-gray-200 text-gray-700">Services</h2>
                </div>
                <ul class="flex flex-col gap-0 text-lg">
                  {servicesSubitems.map((subitem) => (
                    <li key={subitem.title}>
                      <a
                        href={subitem.href}
                        class={cn(
                          "block text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200",
                          location.url.pathname === subitem.href && "bg-gray-200 dark:bg-gray-700 text-primary-600"
                        )}
                        onClick$={() => (show.value = false)}
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // Main Menu
              <div>
                <ul class="flex flex-col gap-0 text-xl">
                  {menuItems.map((item) => (
                    <li key={item.title}>
                      {item.hasSubmenu ? (
                        <button
                          class={cn(
                            "block w-full text-left text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200 flex items-center justify-between",
                            location.url.pathname.startsWith("/services/") && "bg-gray-100  text-primary-600"
                          )}
                          onClick$={() => (isServicesSection.value = true)}
                        >
                          <span>{item.title}</span>
                          <LuChevronRight class="h-5 w-5 text-gray-500 group-hover:text-primary-600" />
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          class={cn(
                            "block text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200 relative",
                            location.url.pathname === item.href && "bg-gray-200 dark:bg-gray-700 text-primary-600"
                          )}
                          onClick$={() => (show.value = false)}
                        >
                          {item.title}
                          {item.badge}
                        </a>
                      )}
                    </li>
                  ))}
                 
                </ul>
                
              
              </div>
            )}
          </nav>

          {/* Close Button */}
          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-4 top-4 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900"
            )}
            type="submit"
          >
            <LuX class="h-6 w-6" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});