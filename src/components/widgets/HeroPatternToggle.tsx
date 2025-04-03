import { component$, useSignal } from '@builder.io/qwik';
import { PATTERN_1, PATTERN_2, PATTERN_3 } from './HeroPatterns';

// Define a type for the pattern keys
type PatternKey = 'pattern1' | 'pattern2' | 'pattern3';

// Define the patterns object with the type
const patterns: Record<PatternKey, string> = {
  pattern1: PATTERN_1,
  pattern2: PATTERN_2,
  pattern3: PATTERN_3,
};

// Define the component
export const BackgroundToggleComponent = component$(() => {
  // Use a signal with the specific type
  const currentPattern = useSignal<PatternKey>('pattern1');

  return (
    <div>
      {/* Buttons to toggle patterns */}
      <div class="mb-4">
        <button
          class="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick$={() => (currentPattern.value = 'pattern1')}
        >
          Pattern 1
        </button>
        <button
          class="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick$={() => (currentPattern.value = 'pattern2')}
        >
          Pattern 2
        </button>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          onClick$={() => (currentPattern.value = 'pattern3')}
        >
          Pattern 3
        </button>
      </div>

      {/* Div with dynamic background */}
      <div
        class="relative z-10 order-2 md:order-1 flex items-center justify-center bg-[#DFDBE5] px-4 py-8 md:px-8 md:py-0"
        style={{ backgroundImage: `url(${patterns[currentPattern.value]})` }}
      >
        <p class="text-lg">Content goes here</p>
      </div>
    </div>
  );
});

export default BackgroundToggleComponent;