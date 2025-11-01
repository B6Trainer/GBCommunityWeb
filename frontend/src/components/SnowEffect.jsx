import { useEffect, useRef } from 'react';

const SnowEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const numberOfSnowflakes = 100;

    // Create snowflakes with slower speed
    for (let i = 0; i < numberOfSnowflakes; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        speed: Math.random() * 0.3 + 0.2, // Reduced from 1 + 0.5 to 0.3 + 0.2
        drift: Math.random() * 0.3 - 0.15, // Reduced from 0.5 - 0.25
      });
    }

    function drawSnowflakes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FFD700';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#FFD700';

      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update position with slower speed
        flake.y += flake.speed;
        flake.x += flake.drift;

        // Reset snowflake if it goes off screen
        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }

        if (flake.x > canvas.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = canvas.width;
        }
      });

      requestAnimationFrame(drawSnowflakes);
    }

    drawSnowflakes();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6, zIndex: 1 }}
    />
  );
};

export default SnowEffect;
