import { useRef, useEffect } from 'react';

// Parametry mesh
const MESH_WIDTH = 1.2; // grubość linii
const MESH_COLOR = 'rgba(220, 180, 60, 0.38)'; // subtelny złoty
const VERTEX_COLOR = 'rgba(255,255,255,0.12)';
const TRIANGLE_COLOR = 'rgba(220, 180, 60, 0.10)';
const COLS = 16;
const ROWS = 10;
const VERTEX_RADIUS = 0;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const MeshBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Tworzenie siatki
    let points: {x: number, y: number, baseX: number, baseY: number, vx: number, vy: number}[][] = [];
    for (let y = 0; y <= ROWS; y++) {
      let row = [];
      for (let x = 0; x <= COLS; x++) {
        const px = (x / COLS) * width;
        const py = (y / ROWS) * height;
        row.push({
          x: px,
          y: py,
          baseX: px,
          baseY: py,
          vx: randomBetween(-0.5, 0.5),
          vy: randomBetween(-0.5, 0.5)
        });
      }
      points.push(row);
    }

    function animate() {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Aktualizacja pozycji wierzchołków
      for (let y = 0; y <= ROWS; y++) {
        for (let x = 0; x <= COLS; x++) {
          let p = points[y][x];
          // Oscylacja wokół pozycji bazowej
          p.x = p.baseX + Math.sin(Date.now() / 900 + p.baseY * 0.01 + p.baseX * 0.01) * 28 + Math.sin(Date.now() / 1200 + p.baseX * 0.02) * 12;
          p.y = p.baseY + Math.cos(Date.now() / 1100 + p.baseX * 0.01 + p.baseY * 0.01) * 28 + Math.cos(Date.now() / 1300 + p.baseY * 0.02) * 12;
        }
      }
      // Rysowanie trójkątów
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const p1 = points[y][x];
          const p2 = points[y][x+1];
          const p3 = points[y+1][x];
          const p4 = points[y+1][x+1];
          // Trójkąt 1
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.fillStyle = TRIANGLE_COLOR;
          ctx.fill();
          // Trójkąt 2
          ctx.beginPath();
          ctx.moveTo(p2.x, p2.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.fillStyle = TRIANGLE_COLOR;
          ctx.fill();
        }
      }
      // Rysowanie linii siatki
      ctx.strokeStyle = MESH_COLOR;
      ctx.lineWidth = MESH_WIDTH;
      for (let y = 0; y <= ROWS; y++) {
        ctx.beginPath();
        for (let x = 0; x <= COLS; x++) {
          const p = points[y][x];
          if (x === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      for (let x = 0; x <= COLS; x++) {
        ctx.beginPath();
        for (let y = 0; y <= ROWS; y++) {
          const p = points[y][x];
          if (y === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      // (opcjonalnie) wierzchołki
      if (VERTEX_RADIUS > 0) {
        ctx.fillStyle = VERTEX_COLOR;
        for (let y = 0; y <= ROWS; y++) {
          for (let x = 0; x <= COLS; x++) {
            const p = points[y][x];
            ctx.beginPath();
            ctx.arc(p.x, p.y, VERTEX_RADIUS, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Aktualizuj bazowe pozycje
      for (let y = 0; y <= ROWS; y++) {
        for (let x = 0; x <= COLS; x++) {
          points[y][x].baseX = (x / COLS) * width;
          points[y][x].baseY = (y / ROWS) * height;
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{
        filter: 'blur(0.5px)',
        opacity: 0.95,
        background: 'transparent',
        transition: 'opacity 0.5s'
      }}
    />
  );
};

export default MeshBackground; 