import { component$, useResource$, Resource, PropsOf } from '@builder.io/qwik';
import { Carousel, Progress } from '@qwik-ui/headless';
import { getReviews } from '~/api/GoogleReviews';

// Define the Review interface
interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number; // Unix timestamp in seconds
}

export const CarouselProgress = component$((props: PropsOf<typeof Progress.Root>) => {
  return (
    <Progress.Root {...props} class="progress" style={{ marginBottom: '2rem' }}>
      <Progress.Indicator class="progress-indicator bg-blue-50" />
    </Progress.Root>
  );
});

export default component$(() => {
  // Fetch reviews using useResource$
  const reviewsResource = useResource$<Review[]>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort());

    const reviews = await getReviews();
    return reviews.filter(review => review.rating >= 4); // Filter only 4+ star reviews
  });

  return (
    <Resource
      value={reviewsResource}
      onPending={() => (
        <div class="text-center py-4">Loading reviews...</div>
      )}
      onRejected={(error) => (
        <div class="text-center py-4 text-red-500">Error loading reviews: {error.message}</div>
      )}
      onResolved={(reviews) => (
        <Carousel.Root 
          class="carousel-root bg-gray-50 dark:bg-gray-850 border-gray-300" 
          slidesPerView={1.2} 
          gap={25} 
          rewind 
          sensitivity={{ touch: 1.75 }}
        >
          <Carousel.Scroller class="carousel-scroller">
            {reviews.map((review, index) => (
              <Carousel.Slide
                key={`${review.author_name}-${index}`}
                class="carousel-slide h-64 flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                {/* Star Rating - Smaller section at the top */}
                <div class="flex items-center p-2 bg-gray-100 dark:bg-gray-700">
                  <div class="flex text-yellow-400 text-lg">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                
                {/* Review Content - Takes up most of the space, with truncation */}
                <div class="flex-1 p-4 flex flex-col overflow-hidden">
                  <h1 class="text-lg font-bold truncate text-gray-900 dark:text-gray-100">
                    {review.author_name}
                  </h1>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                    {review.text}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-600 mt-2">
                    {new Date(review.time * 1000).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
          <div class="flex justify-between items-end">
            <Carousel.Pagination class="carousel-pagination justify-start -mt-1">
              {reviews.map((review, index) => (
                <Carousel.Bullet
                  key={`${review.author_name}-${index}`}
                  class="carousel-pagination-bullet w-[10px] h-[10px] bg-[#ccc] rounded-sm transition-all duration-300 data-[active]:!bg-primary-500 data-[active]:scale-125"
                />
              ))}
            </Carousel.Pagination>
            <a
              href="/reviews"
              class="text-sm font-medium hover:underline"
              style={{ transform: 'translateY(5px)' }}
            >
              Browse All Reviews -
            </a>
          </div>
        </Carousel.Root>
      )}
    />
  );
});