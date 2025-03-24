import { component$, useStyles$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export default component$(() => {
  useStyles$(`
    .carousel-root {
      height: 100%;
      width: 100%;
      position: relative;
    }
    .carousel-slide {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .carousel-slide img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .carousel-buttons {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10;
      display: flex;
      gap: 10px;
    }
    .carousel-conditional {
      height: 100%;
      width: 100%;
    }
  `);

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

  return (
    <Carousel.Root class="carousel-root" gap={30}>
      <div class="carousel-buttons">
        <Carousel.Previous>Prev</Carousel.Previous>
        <Carousel.Next>Next</Carousel.Next>
      </div>
      <div class="carousel-conditional">
        {colors.map((color) => (
          <Carousel.Slide key={color} class="carousel-slide">
            <img src="/images/placeholder.png" alt={`Slide ${color}`} />
          </Carousel.Slide>
        ))}
      </div>
    </Carousel.Root>
  );
});