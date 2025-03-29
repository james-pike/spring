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
        'inline-flex items-center justify-center rounded-lg border-base p-1 text-muted-foreground shadow-sm',
        isDark ? 'bg-background' : 'bg-muted',
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
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=selected]:border-base',
        isDark ? 'data-[state=selected]:bg-muted' : 'data-[state=selected]:bg-background',
        'data-[state=selected]:text-foreground data-[state=selected]:shadow-inner',
        isDark ? 'bg-background' : 'bg-muted',
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
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
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