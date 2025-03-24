import { component$, useStyles$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';

export default component$(() => {
  useStyles$(`
    .full-size-carousel {
      height: 100%;
      width: 100%;
    }
    .full-size-slide {
      height: 100%;
      width: 100%;
      display: flex; /* Ensure the slide fills the container */
    }
    .full-size-slide img {
      height: 100%;
      width: 100%;
      object-fit: cover; /* Maintain object-cover behavior */
    }
  `);

  return (
    <Carousel pauseOnHover noControls class="full-size-carousel">
      <Carousel.Slide class="full-size-slide">
        <img src="/images/placeholder.png" alt="Slide 1" />
      </Carousel.Slide>
      <Carousel.Slide class="full-size-slide">
        <img src="/images/placeholder.png" alt="Slide 2" />
      </Carousel.Slide>
    </Carousel>
  );
});