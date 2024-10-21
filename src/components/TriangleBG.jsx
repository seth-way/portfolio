import { useEffect, useRef } from 'react';
import { useWindowSize } from '@react-hook/window-size/throttled';
import Triangle from '@/components/Triangle';

export default function TriangleBG() {
  const [width, height] = useWindowSize();
  const gridRef = useRef(null);
  const scaleFactor = 2;
  const [totalHeight, totalWidth, triWidth, triHeight, triGapX, triGapY] = [68, 68, 52, 45, 8, 23].map(
    original => original * scaleFactor
  );

  const numCols = Math.ceil(width / triWidth) + 1;
  const numRows = Math.ceil(height / triHeight) * 2 + 1;

  useEffect(() => {
    if (gridRef.current) {
      const { current } = gridRef;
      current.style.setProperty('--tri-width', `${triWidth}px`);
      current.style.setProperty('--tri-height', `${triHeight}px`);
      current.style.setProperty('--tri-gapX', `-${triGapX}px`);
      current.style.setProperty('--tri-gapY', `-${triGapY}px`)
      current.style.setProperty('--num-rows', numRows.toString());
      current.style.setProperty('--num-cols', numCols.toString());
    }
  }, [width, height, triHeight, triGapX, triWidth, numCols, numRows]);

  return (
    <div
      id='triangle-bg'
      ref={gridRef}
      aria-hidden='true'
      className='absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex flex-col'
    >
      {Array(numRows)
        .fill(null)
        .map((_row, row) => (
          <div
            className='inline-flex [&>*]:ml-[calc(var(--tri-gapX)*2)] min-w-[100vw] [&>*]:mt-[var(--tri-gapY)] shrink-0 odd:ml-[calc(var(--tri-width)/-2)]'
            key={`h-row-${row}`}
          >
            {Array(numCols)
              .fill(null)
              .map((_col, col) => (
                <Triangle
                  width={totalWidth}
                  height={totalHeight}
                  key={`h-${row}-${col}`}
                />
              ))}
          </div>
        ))}
    </div>
  );
}
