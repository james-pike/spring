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
        'inline-flex items-center bg-card justify-center rounded-t-base border-border border text-muted-foreground shadow-sm',
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
        'inline-flex items-center justify-center whitespace-nowrap px-3 py-2 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        // Add a default transparent border to reserve space
        'border-b-2 border-transparent',
        // Styles for selected state
        ' data-[state=selected]:bg-muted',
        // Base styles for all tabs
        'bg-card',
        'first:rounded-tl-base last:rounded-tr-base',
        'not:first:not:last:rounded-none',
        'border-r border-border last:border-r-0',
        // Per-tab styles for selected state
        'data-[state=selected]:border-b-primary data-[state=selected]:text-primary', // 1st tab
     
        'data-[state=selected]:shadow-inner',
        props.class
      )}
    >
      <Slot />
    </HeadlessTabs.Tab>
  );
});


// '[&:nth-child(1)]:data-[state=selected]:border-b-primary [&:nth-child(1)]:data-[state=selected]:text-primary', // 1st tab
// '[&:nth-child(2)]:data-[state=selected]:border-b-secondary [&:nth-child(2)]:data-[state=selected]:text-secondary', // 2nd tab
// '[&:nth-child(3)]:data-[state=selected]:border-b-tertiary [&:nth-child(3)]:data-[state=selected]:text-tertiary', // 3rd tab
// '[&:nth-child(4)]:data-[state=selected]:border-b-quaternary [&:nth-child(4)]:data-[state=selected]:text-quaternary', // 4th tab

const Panel = component$<PropsOf<typeof HeadlessTabs.Panel>>((props) => {
  return (
    <HeadlessTabs.Panel
      {...props}
      class={cn(
        'mt-1 ring-offset-background bg-card rounded-b-base border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
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