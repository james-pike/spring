import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline"; // Adjust the import path
import { SectionWrapper } from "./SectionWrapper";
import { ItemGrid } from "../ui/ItemGrid";
import { twMerge } from "tailwind-merge";
import { Card } from "../ui/Card";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", items, classes = {}, isDark } = props;

  return (
    <SectionWrapper id={id} isDark={isDark} classes={classes}>
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      <Card.Root>
        <ItemGrid
          id="features-grid" // Unique ID for this instance
          items={items}
          classes={{
            container: twMerge(
              "md:grid-cols-2 px-2 py-2 rounded-base",
              isDark ? "bg-background" : "bg-muted"
            ),
            panel: twMerge(
              "bg-primary/5 rounded-none group panel-hover-bg", // Apply the custom class for hover background
              // Mobile (below md): First item has rounded top, last item has rounded bottom
              "[&:nth-child(1)]:rounded-t-base [&:nth-child(1)]:md:rounded-tl-base [&:nth-child(1)]:md:rounded-tr-none",
              "[&:nth-last-child(1)]:rounded-b-base [&:nth-last-child(1)]:md:rounded-br-base [&:nth-last-child(1)]:md:rounded-bl-none",
              // Desktop (md and up): Specific corners for 2-column layout
              "[&:nth-child(2)]:md:rounded-tr-base",
              "[&:nth-last-child(2)]:md:rounded-bl-base",
              // Ensure middle items stay unrounded on desktop
              "[&:not(:nth-child(1)):not(:nth-child(2)):not(:nth-last-child(2)):not(:nth-last-child(1))]:md:rounded-none",
              // Add hover effect for SVG background
              "group-hover:bg-[url('/images/contact.jpg')] group-hover:bg-no-repeat group-hover:bg-center group-hover:bg-contain",
            ),
            title: "md:text-[1.3rem]",
            icon: "text-white bg-primary dark:bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
            ...(classes?.items ?? {}),
          }}
        />
      </Card.Root>
    </SectionWrapper>
  );
});
