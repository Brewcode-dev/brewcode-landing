import React, { useRef, useEffect } from 'react';

const X_GAP = 10;
const Y_GAP = 32;
const LINE_COLOR = '#160000';
const LINE_WIDTH = 1;
const WAVE_AMPLITUDE = 24;
const WAVE_SPEED = 0.0015;
const WAVE_FREQ = 0.22;

const AWaves: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number | null>(null);
  const lines = useRef<any[]>([]);
  const totalLines = useRef(0);
  const totalPoints = useRef(0);
  const xStart = useRef(0);
  const yStart = useRef(0);

  // Set size and lines
  const setSizeAndLines = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    svg.setAttribute('width', `${rect.width}`);
    svg.setAttribute('height', `${rect.height}`);
    // Calculate grid
    const oWidth = rect.width + 200;
    const oHeight = rect.height + 30;
    totalLines.current = Math.ceil(oWidth / X_GAP);
    totalPoints.current = Math.ceil(oHeight / Y_GAP);
    xStart.current = (rect.width - X_GAP * totalLines.current) / 2;
    yStart.current = (rect.height - Y_GAP * totalPoints.current) / 2;
    // Generate points
    lines.current = [];
    for (let i = 0; i <= totalLines.current; i++) {
      const points = [];
      for (let j = 0; j <= totalPoints.current; j++) {
        points.push({
          x: xStart.current + X_GAP * i,
          y: yStart.current + Y_GAP * j,
        });
      }
      lines.current.push(points);
    }
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    setSizeAndLines();
    const handleResize = () => setSizeAndLines();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    let running = true;
    const draw = (time: number) => {
      if (!running) return;
      // Animuj punkty sinusoidą pionowo (każda linia osobno)
      const paths: string[] = [];
      lines.current.forEach((points, lIndex) => {
        let d = '';
        points.forEach((p: any, i: number) => {
          // Każdy punkt animowany sinusoidą w pionie (z przesunięciem fazy)
          const phase = lIndex * 0.25;
          const px = p.x;
          const py = p.y + Math.sin(time * WAVE_SPEED + phase + i * 0.18) * WAVE_AMPLITUDE;
          if (i === 0) d = `M ${px} ${py}`;
          else d += ` L ${px} ${py}`;
        });
        paths.push(d);
      });
      // Render SVG
      svg.innerHTML = '';
      paths.forEach((d) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', LINE_COLOR);
        path.setAttribute('stroke-width', `${LINE_WIDTH}`);
        svg.appendChild(path);
      });
      animationRef.current = requestAnimationFrame(draw);
    };
    animationRef.current = requestAnimationFrame(draw);
    return () => {
      running = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0}}>
      <svg ref={svgRef} style={{display: 'block', width: '100%', height: '100%'}} />
    </div>
  );
};

export default AWaves; 