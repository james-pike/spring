import { component$ } from "@builder.io/qwik";

import ContactForm2 from "./ContactForm2";
import { SectionWrapper2 } from "./SectionWrapper2";


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
  const { id,  } = props;

  return (
    <SectionWrapper2 id={id} classes={{ container: "max-w-7xl" }} bgClass="inset-0 max-w-7xl h-full  bg-background bg-[linear-gradient(to_right,hsl(var(--card))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--card)),transparent_1px)] bg-[size:14px_24px]">
      {/* <div class="flex w-full">
        <div class="w-2/3 bg-border pl-6 pt-6">
          <Headline
            align="left"
            title={title}
            subtitle={subtitle}
            highlight={highlight}
            classes={classes?.headline}
          />
        </div>
        <div class="w-1/3">
          <img
            src="/images/contact.jpg"
            alt="Descriptive alt text"
            class="w-full h-full object-cover"
          />
        </div>
      </div> */}
      {/* <ServiceCards /> */}
      <ContactForm2 />
      {/* <Card.Root class="bg-gradient-to-r from-primary to-primary/50 mt-4">
          <Card.Content>
          <Headline title={"Ready to transform your digital presence?"} subtitle={"Lets collaborate to create something amazing that will help your business grow and succeed in the digital landscape"} highlight={highlight} classes={classes?.headline} />
 <Link href="/contact" class="w-full sm:w-auto">
                <Button look="secondary" size="md" class="w-full">Get Started</Button>
              </Link>
          </Card.Content>
          </Card.Root> */}
    </SectionWrapper2>
  );
});

// classes={{ container: "max-w-6xl" }}