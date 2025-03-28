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
            "md:grid-cols-2 p-4 sm:p-6 md:p-10  rounded-base",
            isDark ? "bg-background" : "bg-muted"
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