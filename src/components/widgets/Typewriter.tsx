import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const Typewriter = component$(() => {
  const words = [
    { word: "Web Design", color: "text-primary" },
    { word: "Web Development", color: "text-red-500" },
    { word: "SEO Optimization", color: "text-orange-500" },
    { word: "Branding", color: "text-yellow-500" },
    { word: "E-Commerce", color: "text-green-500" },
  ];

  const text = useSignal('');
  const isDeleting = useSignal(false);
  const loopNum = useSignal(0);
  const typingSpeed = useSignal(60);  // Adjusted typing speed to make it smoother
  const deleteSpeed = useSignal(50); // Set different speed for deleting characters

  useVisibleTask$(({ cleanup }) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = words[loopNum.value % words.length].word;
      text.value = isDeleting.value
        ? current.substring(0, text.value.length - 1)
        : current.substring(0, text.value.length + 1);

      const currentSpeed = isDeleting.value ? deleteSpeed.value : typingSpeed.value;

      if (!isDeleting.value && text.value === current) {
        timeoutId = setTimeout(() => {
          isDeleting.value = true;
          type();
        }, 2000); // Pause before deleting
        return;
      }

      if (isDeleting.value && text.value === '') {
        isDeleting.value = false;
        loopNum.value++;
      }

      timeoutId = setTimeout(type, currentSpeed);
    };

    type();

    cleanup(() => clearTimeout(timeoutId));
  });

  const currentColor = words[loopNum.value % words.length].color;

  return (
    <span class={currentColor}>
      {text.value}
      <span
        class="border-r-2 animate-pulse ml-1"
        style={{ borderColor: 'currentColor' }}
      />
    </span>
  );
});
