import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import PriceTabs from './PriceTabs';

export default component$(() => {
  const stars = useSignal<Star[]>([]);

  interface Star {
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
  }

  // Define the dimensions of the centered div
  const DIV_WIDTH = 300;
  const DIV_HEIGHT = 200;

  useVisibleTask$(() => {
    // Initialize stars
    const initialStars: Star[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
      size: Math.random() * 3 + 1,
    }));
    stars.value = initialStars;

    // Animation loop
    const animate = () => {
      stars.value = stars.value.map(star => {
        let newX = star.x + star.dx;
        let newY = star.y + star.dy;

        // Get centered div bounds
        const centerX = (window.innerWidth - DIV_WIDTH) / 2;
        const centerY = (window.innerHeight - DIV_HEIGHT) / 2;
        const divLeft = centerX;
        const divRight = centerX + DIV_WIDTH;
        const divTop = centerY;
        const divBottom = centerY + DIV_HEIGHT;

        // Bounce off centered div
        if (
          newX + star.size > divLeft &&
          newX - star.size < divRight &&
          newY + star.size > divTop &&
          newY - star.size < divBottom
        ) {
          // Check which side to bounce from
          if (star.x < divLeft || star.x > divRight) {
            star.dx = -star.dx;
          }
          if (star.y < divTop || star.y > divBottom) {
            star.dy = -star.dy;
          }
        }

        // Bounce off window edges
        if (newX < 0 || newX > window.innerWidth) star.dx = -star.dx;
        if (newY < 0 || newY > window.innerHeight) star.dy = -star.dy;

        return {
          ...star,
          x: star.x + star.dx,
          y: star.y + star.dy,
        };
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {};
  });

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(to bottom, #0a0a23, #1a1a3d)',
      overflow: 'hidden'
    }}>
      {/* Shooting stars */}
      {stars.value.map((star, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            transition: 'all 0.1s linear'
          }}
        />
      ))}

      {/* Centered div */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${DIV_WIDTH}px`,
        height: `${DIV_HEIGHT}px`,
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '8px'
      }}>
        <PriceTabs/>
      </div>
    </div>
  );
});