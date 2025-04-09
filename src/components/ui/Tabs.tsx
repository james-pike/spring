import { Slot, component$, type PropsOf } from '@builder.io/qwik';
import { Tabs as HeadlessTabs } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

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
  const { ...restProps } = props;

  return (
    <HeadlessTabs.List
      {...restProps}
      class={cn(
        'inline-flex items-center justify-center rounded-t-base dark:border-gray-750 border-gray-250 border text-muted-foreground shadow-sm',
        '',
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
  const { ...restProps } = props;

  return (
    <HeadlessTabs.Tab
      {...restProps}
      class={cn(
        'inline-flex items-center justify-center whitespace-nowrap px-3 py-3 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=selected]:border-base',
        'dark:data-[state=selected]:bg-gray-840 data-[state=selected]:bg-gray-160 data-[state=selected]:border-b-2',
        // Base styles for all tabs
        'dark:bg-gray-900 bg-gray-100',
        'first:rounded-tl-base last:rounded-tr-base',
        'not:first:not:last:rounded-none',
        'border-r dark:border-gray-750 border-gray-250 last:border-r-0',
        // Per-tab styles for selected state
        '[&:nth-child(1)]:data-[state=selected]:border-b-primary [&:nth-child(1)]:data-[state=selected]:text-primary', // 1st tab
        '[&:nth-child(2)]:data-[state=selected]:border-b-secondary [&:nth-child(2)]:data-[state=selected]:text-secondary', // 2nd tab
        '[&:nth-child(3)]:data-[state=selected]:border-b-tertiary [&:nth-child(3)]:data-[state=selected]:text-tertiary', // 3rd tab
        '[&:nth-child(4)]:data-[state=selected]:border-b-quaternary [&:nth-child(4)]:data-[state=selected]:text-quaternary', // 4th tab
        'data-[state=selected]:shadow-inner',
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
        'mt-1.5 ring-offset-background dark:bg-gray-840 bg-gray-160 rounded-b-base border dark:border-gray-750 border-gray-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
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