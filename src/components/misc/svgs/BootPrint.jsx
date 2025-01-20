import { motion } from 'motion/react';

export default function BootPrint({ x, y, rotate, isLeftFoot }) {
  return (
    <motion.svg
      height='10%'
      width='5%'
      viewBox='-40 -40 592 592'
      xmlns='http://www.w3.org/2000/svg'
      x={x}
      y={y}
      className='absolute'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <g transform={`rotate(${rotate} 256 256)`}>
        <path
          transform='rotate(90 256 256)'
          fill='#330000'
          d={
            isLeftFoot
              ? `M111.512 21.176c-6.65.088-13.7 1.088-21.162 3.088-87.625 23.48-77.956 222.752-9.297 310.984l.002-.002 
                  99.513-26.664c-3.273-35.578.003-76.04 19.313-113.947 2.605-89.97-24.095-174.31-88.368-173.46zm77.366 
                  328.884l-101.26 27.13c5.495 191.896 200.51 104.13 101.26-27.13z`
              : `M405.892 21.176c-64.273-.852-90.972 83.488-88.37 173.46 19.31 37.905 22.587 78.368 19.314 113.946l99.514 
                  26.664.002.002c68.658-88.232 78.327-287.505-9.297-310.984-7.463-2-14.513-3-21.162-3.088zm-77.364 
                  328.884c-99.25 131.26 95.767 219.026 101.262 27.13l-101.263-27.13z`
          }
        />
      </g>
    </motion.svg>
  );
}
