import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import { SectionWrapper } from "./SectionWrapper";
import { VisibleWrapper } from "./VisibleWrapper";
import ServiceTabsX from "./ServiceTabsX";
 // Adjust the import path

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
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark = false } = props;

  return (
    <SectionWrapper id={id} isDark={isDark} bgClass="dark:bg-gray-920 bg-gray-80" classes={{ container: "pb-4 max-w-5xl" }}>
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      <VisibleWrapper id={`${id}-service-tabs`}>
        <ServiceTabsX  />
      </VisibleWrapper>
    </SectionWrapper>
  );
});