import { component$, useResource$, Resource } from '@builder.io/qwik';
import { twMerge } from 'tailwind-merge';
import { getReviews } from '~/api/GoogleReviews';

// Define the Review type
interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number; // Unix timestamp in seconds
}

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  items?: Array<Item>;
  defaultIcon?: any;
  classes?: Record<string, string>;
}

export default component$<Props>((props) => {
  // Use useResource$ to fetch reviews server-side
  const reviewsResource = useResource$<Review[]>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort());

    const reviews = await getReviews();
    return reviews.filter(review => review.rating >= 4); // Filter only 4+ star reviews
  });

  return (
    <Resource
      value={reviewsResource}
      onPending={() => <p>Loading reviews...</p>}
      onResolved={(reviews) =>
        reviews.length > 0 ? (
          <div
            class={twMerge(
              // Masonry layout with columns instead of grid
              "motion-group mx-auto max-w-5xl columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8",
              props.classes?.container
            )}
          >
            {reviews.map((review, index) => (
              <div
                key={`${review.author_name}-${index}`}
                class="flex flex-col w-full break-inside-avoid mb-4 sm:mb-8" // Break-inside prevents splitting across columns
              >
                <div
                  class={twMerge(
                    "flex flex-col p-4 bg-background-accent shadow-md rounded-lg border border-gray-200 dark:border-gray-700 opacity-0 intersect-once intersect:opacity-100 intersect:motion-preset-slide-up",
                    props.classes?.panel
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Review Author and Rating */}
                  <div class="flex items-center mb-2">
                    <span class="font-semibold">{review.author_name}</span>
                    <div class="ml-2 flex items-center">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          class={twMerge(
                            "text-yellow-400",
                            i < review.rating ? 'fill-current' : 'text-gray-300'
                          )}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p class={twMerge("text-gray-600 dark:text-gray-400 mt-2", props.classes?.description)}>
                    {review.text}
                  </p>

                  {/* Review Date (Optional, formatted from Unix timestamp) */}
                  <p class={twMerge("text-sm text-gray-500 dark:text-gray-600 mt-2")}>
                    {new Date(review.time * 1000).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews available.</p>
        )
      }
      onRejected={(error) => <p>Error loading reviews: {error.message}</p>}
    />
  );
});