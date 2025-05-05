import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="min-h-[100vh] flex flex-col md:flex-row">
      {/* First Background Image */}
      <div
        class="flex-1 h-[50vh] md:h-[100vh]"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Second Background Image */}
      <div
        class="flex-1 h-[50vh] md:h-[100vh]"
        style={{
          backgroundImage: "url('/images/hero2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </section>
  );
});