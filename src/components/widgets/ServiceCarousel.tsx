import { component$, PropsOf } from '@builder.io/qwik';
import { Carousel, Progress } from '@qwik-ui/headless';
import { Card } from '../ui/Card'; // Adjust the import path as needed
import { SectionWrapper } from './SectionWrapper';

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
      image: '/images/hero1.png'
    },
    {
      title: 'Mobile Apps',
      description: 'Creating native and cross-platform mobile solutions',
      image: '/images/hero1.webp'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces',
      image: '/images/hero1.webp'
    },
    {
      title: 'Cloud Services',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    },
    {
      title: 'Cloud Services2',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    },
    {
      title: 'Cloud Services3',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    }
  ];

  return (
    
    <Carousel.Root class="carousel-root" gap={30}>
      <div class="carousel-buttons">
        <Carousel.Previous>Prev</Carousel.Previous>
        <Carousel.Next>Next</Carousel.Next>
      </div>
      <Carousel.Scroller class="carousel-scroller">
        {services.map((service) => (
          <Carousel.Slide
            style={{ flexBasis: '300px' }}
            key={service.title}
            class="carousel-slide"
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
          <a
            href="/services"
            class="text-sm font-medium hover:underline"
            style={{ transform: 'translateY(5px)' }} // Fine-tune downward shift
          >
            Browse Portfolio -&gt;
          </a>
        </div>
    </Carousel.Root>
  
  );
});