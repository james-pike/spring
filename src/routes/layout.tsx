import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header2 from "~/components/widgets/Header2";

export default component$(() => {
  return (
    <>
      <Header2 />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
