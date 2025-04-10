import { component$, type QRL } from "@builder.io/qwik";
import type { JSXNode } from "@builder.io/qwik";

// Define the props interface
interface BackgroundWrapperProps {
  children: JSXNode | JSXNode[];
}

// Export the BackgroundWrapper component with proper typing
export const BackgroundWrapper = component$<BackgroundWrapperProps>(({ children }) => {
  return (
    <div class="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20">
      {/* Skewed white background */}
      <div 
        class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36" 
        aria-hidden="true"
      />
      {/* Skewed indigo background */}
      <div 
        class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36" 
        aria-hidden="true"
      />
      {/* Bottom fade gradient */}
      <div 
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32"
      />
      
      {children}
    </div>
  );
});