import { useEffect, useRef } from "react";

const InfiniteMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let offset = 0;
    const speed = 2; // pixels per frame
    let animationFrameId;

    const animate = () => {
      offset -= speed;
      const width = marquee.scrollWidth / 2; // because content is duplicated
      if (Math.abs(offset) >= width) offset = 0;
      marquee.style.transform = `translateX(${offset}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const text =
    "Bitsky makes innovative software exclusively for educational institutions, streamlining operations with tailored solutions like CampusTag, a smart geo-tagged photo manager for effortless documentation. ";

  return (
    <div
      className="relative overflow-hidden bg-slate-50 py-4 border-t border-b border-slate-200"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        fontFamily: `'Bruno', sans-serif`,
      }}
    >
      {/* Apply @font-face globally for Bruno */}
      <style>
        {`
          @font-face {
            font-family: 'Bruno';
            src: url('/fonts/anta.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>

      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-5xl sm:text-7xl font-bold tracking-wide"
      >
        {/* Duplicate content for seamless infinite scroll */}
        <span className="mr-16">{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export { InfiniteMarquee };
