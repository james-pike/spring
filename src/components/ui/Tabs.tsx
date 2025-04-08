import { Slot, component$, type PropsOf } from '@builder.io/qwik';
import { Tabs as HeadlessTabs } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';
import { useIsDark } from '~/utils/darkUtils'; // Adjust path

const Root = (props: PropsOf<typeof HeadlessTabs.Root>) => (
  <HeadlessTabs.Root
    {...props}
    tabListComponent={List}
    tabComponent={Tab}
    tabPanelComponent={Panel}
  />
);

// Extend props for List to include isDark
interface TabsListProps extends PropsOf<typeof HeadlessTabs.List> {
  isDark?: boolean;
}

const List = component$<TabsListProps>((props) => {
  const isDark = useIsDark(props.isDark); // Use the hook
  const { ...restProps } = props;

  return (
    <HeadlessTabs.List
      {...restProps}
      class={cn(
        'inline-flex items-center justify-center rounded-t-base border-gray-700 border text-muted-foreground shadow-sm',
        isDark ? 'bg-muted' : 'bg-muted',
        props.class
      )}
    >
      <Slot />
    </HeadlessTabs.List>
  );
});

// Extend props for Tab to include isDark
interface TabsTabProps extends PropsOf<typeof HeadlessTabs.Tab> {
  isDark?: boolean;
}

const Tab = component$<TabsTabProps>((props) => {
  const isDark = useIsDark(props.isDark); // Use the hook
  const { ...restProps } = props;

  return (
    <HeadlessTabs.Tab
      {...restProps}
      class={cn(
        'inline-flex items-center justify-center whitespace-nowrap px-3 py-3 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=selected]:border-base',
        isDark ? 'data-[state=selected]:bg-gray-800' : 'data-[state=selected]:bg-background',
        'data-[state=selected]:text-primary data-[state=selected]:shadow-inner',
        isDark ? 'bg-background' : 'bg-gray-800',
        // Apply rounded-base to left side of first tab and right side of last tab
        'first:rounded-tl-base last:rounded-tr-base',
        // Ensure middle tabs have no rounding
        'not:first:not:last:rounded-none',
        'border-r border-gray-700 last:border-r-0',
        props.class
      )}
    >
      <Slot />
    </HeadlessTabs.Tab>
  );
});

const Panel = component$<PropsOf<typeof HeadlessTabs.Panel>>((props) => {
  return (
    <HeadlessTabs.Panel
      {...props}
      class={cn(
        'mt-1.5 ring-offset-background rounded-b-base border border-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        props.class
      )}
    >
      <Slot />
    </HeadlessTabs.Panel>
  );
});

export const Tabs = {
  Root,
  List,
  Tab,
  Panel,
};