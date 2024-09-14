import { useEffect, useRef } from 'react';
import { useWindowSize } from '@react-hook/window-size/throttled';
import Hex from './Hex';

export default function HexBG() {
  const [width, height] = useWindowSize();
  const gridRef = useRef<HTMLDivElement>(null);
  const scaleFactor = 0.75;
  const [hexWidth, hexHeight, hexSide] = [100, 100, 40].map(
    original => original * scaleFactor
  );
  const hexOffset = (hexHeight - hexSide) / 2;

  const numCols = Math.ceil(width / hexWidth) + 1;
  const numRows = Math.ceil(height / (hexHeight + hexSide)) * 2 + 1;

  useEffect(() => {
    if (gridRef.current) {
      const { current } = gridRef;
      current.style.setProperty('--hex-width', `${hexWidth}px`);
      current.style.setProperty('--hex-height', `${hexHeight}px`);
      current.style.setProperty('--hex-side', `${hexSide}px`);
      current.style.setProperty('--hex-offset', `-${hexOffset}px`);
      current.style.setProperty('--num-rows', numRows.toString());
      current.style.setProperty('--num-cols', numCols.toString());
    }
  }, [
    width,
    height,
    hexHeight,
    hexOffset,
    hexSide,
    hexWidth,
    numCols,
    numRows,
  ]);

  return (
    <div
      id='hex-bg'
      ref={gridRef}
      aria-hidden='true'
      className='absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex flex-col'
    >
      {Array(numRows)
        .fill(null)
        .map((_row, row) => (
          <div
            className='inline-flex min-w-[100vw] mt-[var(--hex-offset)] shrink-0 odd:ml-[calc(var(--hex-width)/-2)]'
            key={`h-row-${row}`}
          >
            {Array(numCols)
              .fill(null)
              .map((_col, col) => (
                <Hex
                  width={hexWidth}
                  height={hexHeight}
                  key={`h-${row}-${col}`}
                />
              ))}
          </div>
        ))}
    </div>
  );
}
