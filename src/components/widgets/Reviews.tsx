import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import ReviewGrid from "./ReviewGrid";
import ReviewsCarousel from "./ReviewsCarousel";
import { useLocation } from "@builder.io/qwik-city";
import { SectionWrapper } from "./SectionWrapper";
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
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark } = props;
  const loc = useLocation();  // Get current location
  const isIndexPage = loc.url.pathname === '/';  // Check if we're on root path
  
  // Conditional padding classes

  return (
 <SectionWrapper id={id} isDark={isDark} classes={classes}   bgClass="inset-0 z-10 h-full w-full bg-background bg-[linear-gradient(to_right,hsl(var(--card))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--card))_1px,transparent_1px)] bg-[size:6rem_4rem]">
 
     
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <Card.Root class="bg-background">
          <Card.Header class="p-4">
        <div class="block sm:hidden">
          {isIndexPage ? <ReviewsCarousel/> : <ReviewGrid isDark={isDark}/>}
        </div>
        <div class="hidden sm:block">
          {<ReviewGrid isDark={isDark}/>}
        </div>
        </Card.Header>
        </Card.Root>
     
      </SectionWrapper>
  );
});