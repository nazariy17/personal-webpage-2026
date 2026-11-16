import { useEffect, useRef, useState } from 'react';

const imageWidth = 1672;
const imageHeight = 941;

export default function MountainScene() {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ width: imageWidth, height: imageHeight, narrow: false });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width <= 0 || height <= 0) return;
      setSize({ width, height, narrow: window.matchMedia('(max-width: 760px)').matches });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Match the previous background-size: cover and its responsive position.
  // The artwork and flight share one coordinate system, including during parallax.
  const scale = Math.max(size.width / imageWidth, size.height / imageHeight);
  const x = (size.width - imageWidth * scale) * (size.narrow ? .6 : .5);
  const y = (size.height - imageHeight * scale) * (size.narrow ? .5 : .42);

  return <svg ref={ref} className="alpine-landscape" viewBox={`0 0 ${size.width} ${size.height}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <image href="/images/hero-alpine-clean.png" width={imageWidth} height={imageHeight} />
      <path className="flight-trail" d="M1045 235 L1500 105" pathLength="1" fill="none" />
      <g className="flight-plane">
        <image href="/images/hero-airplane.png" x="-28" y="-20" width="56" height="40" preserveAspectRatio="xMidYMid meet" />
      </g>
    </g>
  </svg>;
}
