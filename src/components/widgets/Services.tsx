import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline"; // Adjust the import path
import ServiceCards from "./ServiceCards";
import { SectionWrapper } from "./SectionWrapper";
import ServiceCarousel from "./ServiceCarousel";

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
    <SectionWrapper id={id} isDark={isDark} classes={classes}>
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      {/* <ServiceCards /> */}
          <ServiceCarousel/>
    </SectionWrapper>
  );
});