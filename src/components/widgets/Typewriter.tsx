import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const Typewriter = component$(() => {
  const words = [
    { word: "Web Design", gradient: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" },
    { word: "Development", gradient: "bg-gradient-to-r from-green-400 via-teal-500 to-blue-600" },
    { word: "SEO", gradient: "bg-gradient-to-r from-yellow-500 via-orange-600 to-red-700" },
    { word: "Branding", gradient: "bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500" },
    { word: "E-Commerce", gradient: "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" },
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

  const currentGradient = words[loopNum.value % words.length].gradient;

  return (
    <span
      class={`bg-clip-text text-transparent ${currentGradient}`} // Apply unique gradient for each word
    >
      {text.value}
      <span
        class="border-r-2 animate-pulse ml-1"
        style={{ borderColor: 'currentColor' }}
      />
    </span>
  );
});
