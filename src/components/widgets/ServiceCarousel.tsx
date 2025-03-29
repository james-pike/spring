import { component$, PropsOf, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel, Progress } from '@qwik-ui/headless';
import { Card } from '../ui/Card'; // Adjust the import path as needed

export const CarouselProgress = component$((props: PropsOf<typeof Progress.Root>) => {
  return (
    <Progress.Root {...props} class="progress" style={{ marginBottom: '2rem' }}>
      <Progress.Indicator class="progress-indicator bg-blue-50" />
    </Progress.Root>
  );
});

export default component$(() => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and modern web applications',
      image: '/images/hero1.png',
    },
    {
      title: 'Mobile Apps',
      description: 'Creating native and cross-platform mobile solutions',
      image: '/images/hero1.png',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces',
      image: '/images/hero1.png',
    },
    {
      title: 'Cloud Services',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.png',
    },
    {
      title: 'Cloud Services2',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.png',
    },
    {
      title: 'Cloud Services3',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.png',
    },
  ];

  const isDraggable = useSignal(true); // Signal to manage draggable state
  const isVisible = useSignal(false); // Signal to manage visibility for animation

  // Handle draggable state based on screen size
  useVisibleTask$(() => {
    const updateDraggable = () => {
      if (window.innerWidth >= 768) {
        isDraggable.value = false; // Disable dragging on desktop
      } else {
        isDraggable.value = true; // Enable dragging on mobile
      }
    };

    updateDraggable();
    window.addEventListener('resize', updateDraggable);
    return () => window.removeEventListener('resize', updateDraggable);
  });

  // Handle stagger fade-in animation
  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0 } // Trigger when any part of the carousel enters the viewport
    );

    const element = document.querySelector('.carousel-root');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  return (
    <Carousel.Root
      class="carousel-root"
      gap={30}
      draggable={isDraggable.value}
      rewind
      sensitivity={{ touch: 1.75 }}
    >
      <Carousel.Scroller class="carousel-scroller">
        {services.map((service, index) => (
          <Carousel.Slide
            key={service.title}
            class={[
              'carousel-slide',
              'transform transition-all duration-500 ease-out',
              isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ]}
            style={{
              flexBasis: '300px', // Combined into one style object
              transitionDelay: `${index * 100}ms`, // Stagger delay
            }}
          >
            <Card.Root>
              <Card.Image
                src={service.image}
                alt={service.title}
                style={{ height: '200px' }} // Optional: adjust height as needed
              />
              <Card.Header>
                <Card.Title>{service.title}</Card.Title>
                <Card.Description>{service.description}</Card.Description>
              </Card.Header>
            </Card.Root>
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      <div class="flex justify-between items-end">
        <Carousel.Pagination class="carousel-pagination justify-start -mt-1">
          {services.map((service) => (
            <Carousel.Bullet
              key={service.title}
              class="carousel-pagination-bullet w-[10px] h-[10px] bg-[#ccc] rounded-sm transition-all duration-300 data-[active]:!bg-primary data-[active]:scale-125"
            />
          ))}
        </Carousel.Pagination>
        <div class="">
          <Carousel.Previous>Prev</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </div>
      </div>
    </Carousel.Root>
  );
});