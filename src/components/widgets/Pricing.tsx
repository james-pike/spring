import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline"; // Adjust the import path
import { SectionWrapper } from "./SectionWrapper";
import PriceTabs from "./PriceTabs";
import { VisibleWrapper } from "./VisibleWrapper";
import { Link, useLocation } from "@builder.io/qwik-city";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

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
    const location = useLocation(); // Get the current location
    const isLandingPage = location.url.pathname === "/"; // Check if on landing page

  return (
    <SectionWrapper id={id} isDark={isDark} classes={classes} bgClass=" inset-0  h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      {/* <ServiceCards /> */}
      <VisibleWrapper id={`${id}-pricing`}>
          <PriceTabs isDark={isDark}/>
          </VisibleWrapper>
             {/* Conditionally render the card only if not on the landing page */}
                {!isLandingPage && (
                  <Card.Root class="bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 pt-8 max-w-5xl ">
                    <Card.Content>
                      <Headline title={"Any other questions about our services?"} subtitle={"Get in touch and we'll gladly answer them"} />
                      <Link href="/contact" class="w-full sm:w-auto">
                        <Button look="secondary" size="md" class="w-full">Get Started</Button>
                      </Link>
                    </Card.Content>
                  </Card.Root>
                )}
    </SectionWrapper>
  );
});

// classes={{ container: "max-w-6xl" }}