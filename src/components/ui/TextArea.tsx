// ui/Textarea.tsx
import { $, component$, type PropsOf } from '@builder.io/qwik';
import { cn } from '@qwik-ui/utils';
import { useIsDark } from '~/utils/darkUtils'; // Adjust path

type TextareaProps = PropsOf<'textarea'> & {
  error?: string;
  isDark?: boolean;
};

export const Textarea = component$<TextareaProps>(
  ({ name, error, id, ['bind:value']: valueSig, value, onInput$, isDark: propsIsDark, ...props }) => {
    const textareaId = id || name;
    const isDark = useIsDark(propsIsDark);

    return (
      <>
        <textarea
          {...props}
          aria-errormessage={`${textareaId}-error`}
          aria-invalid={!!error}
          value={valueSig ? valueSig.value : value}
          onInput$={valueSig ? $((__, el) => (valueSig.value = el.value)) : onInput$}
          class={cn(
            'flex w-full rounded-base border border-input px-3 py-1 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
            isDark ? 'bg-muted' : 'bg-background', // Same isDark logic as Input
            props.class
          )}
          id={textareaId}
        />
        {error && (
          <div id={`${textareaId}-error`} class="text-alert mt-1 text-sm">
            {error}
          </div>
        )}
      </>
    );
  },
);