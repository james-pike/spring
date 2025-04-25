import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import { VisibleWrapper } from "./VisibleWrapper";
import ServiceTabsX from "./ServiceTabsX";
import { Wrapper } from "./Wrapper";
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
    <Wrapper id={id} isDark={isDark} bgClass="bg-white" classes={{ container: "py-16 max-w-7xl" }}>
       {/* <Card.Root class="pt-6 md:pt-16 mb-0.5 shadow-none"> */}
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      {/* </Card.Root> */}
      <VisibleWrapper id={`${id}-service-tabs`}>
        <ServiceTabsX  />
      </VisibleWrapper>
    </Wrapper>
  );
});