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
        'inline-flex items-center justify-center rounded-t-base border-gray-750 border text-muted-foreground shadow-sm',
     'bg-gray-850',
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
       'data-[state=selected]:bg-gray-840 data-[state=selected]:border-b-2 data-[state=selected]:border-b-primary',
        'data-[state=selected]:text-primary data-[state=selected]:shadow-inner',
      'bg-gray-900',
        // Apply rounded-base to left side of first tab and right side of last tab
        'first:rounded-tl-base last:rounded-tr-base',
        // Ensure middle tabs have no roundieng
        'not:first:not:last:rounded-none',
        'border-r border-gray-750 last:border-r-0',
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
        'mt-1.5 ring-offset-background bg-gray-840 rounded-b-base border border-gray-750 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
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