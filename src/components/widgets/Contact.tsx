import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline"; // Adjust the import path
import { SectionWrapper } from "./SectionWrapper";
import ContactForm from "./ContactForm";


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
    <SectionWrapper id={id} isDark={isDark} classes={{ container: "max-w-3xl" }} bgClass="inset-0 max-w-7xl h-full  bg-background bg-[linear-gradient(to_right,hsl(var(--card))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--card)),transparent_1px)] bg-[size:14px_24px]">
     <div class="flex w-full">
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
</div>
      {/* <ServiceCards /> */}
          <ContactForm isDark={isDark}/>
          {/* <Card.Root class="bg-gradient-to-r from-primary to-primary/50 mt-4">
          <Card.Content>
          <Headline title={"Ready to transform your digital presence?"} subtitle={"Lets collaborate to create something amazing that will help your business grow and succeed in the digital landscape"} highlight={highlight} classes={classes?.headline} />
 <Link href="/contact" class="w-full sm:w-auto">
                <Button look="secondary" size="md" class="w-full">Get Started</Button>
              </Link>
          </Card.Content>
          </Card.Root> */}
    </SectionWrapper>
  );
});

// classes={{ container: "max-w-6xl" }}