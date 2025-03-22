import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';

export default component$(() => {
  return (
    <Accordion.Root class="w-full -mt-2 px-1 rounded-sm">
      <Accordion.Item>
        <Accordion.Trigger class="text-md">
          Do you offer emergency locksmith services?
        </Accordion.Trigger>
        <Accordion.Content>
          Yes! We provide 24/7 emergency lockout assistance for homes, businesses, and vehicles.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger class="text-md">
          Can you replace lost or broken keys?
        </Accordion.Trigger>
        <Accordion.Content>
          Absolutely! We offer key duplication, cutting, and replacement services for all types of locks.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger class="text-md">
          Do you install smart locks and security systems?
        </Accordion.Trigger>
        <Accordion.Content>
          Yes, we specialize in smart lock installation and advanced security systems for added protection.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger class="text-md">
          Can you repair or replace damaged locks?
        </Accordion.Trigger>
        <Accordion.Content>
          Of course! We repair, rekey, and replace locks to enhance security and restore functionality.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger class="text-md">
          Do you provide car key programming and replacement?
        </Accordion.Trigger>
        <Accordion.Content>
          Yes! We offer car key programming, key fob replacement, and ignition repair for most vehicle models.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger class="text-md">
          Can you open safes and vaults?
        </Accordion.Trigger>
        <Accordion.Content>
          Yes, we offer professional safe opening and installation services while ensuring your valuables remain secure.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
});
