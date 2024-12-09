import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo82nd from '@/components/misc/svgs/82nd';
import Logo173rd from '@/components/misc/svgs/173rd';

const white = '#FFFFFF';
const whiteSmoke = '#F5F5F5';
const lightGray = '#D3D3D3';
const silver = '#C0C0C0';
const darkGray = '#A9A9A9';

const darkest1 = '#8F8F8F';
const darkest2 = '#767676';

const transition = {
  duration: 2,
  ease: 'easeInOut',
};

const variants = {
  left: {
    open: {
      x: '-100%',
      y: '-40%',
      scale: 1.6,
      opacity: 0.5,
      transition: { delay: 0.25, ...transition },
    },
    closed: { x: '-15%', y: '-33%', scale: 2.2, opacity: 1, transition },
  },
  right: {
    open: { x: '150%', y: '-15%', scale: 2.2, opacity: 0.5, transition },
    closed: { x: 0, y: 0, scale: 3.2, opacity: 1, transition },
  },
  top: {
    open: {
      y: '-100%',
      scale: 0.9,
      opacity: 0.5,
      transition: { delay: 0.5, ...transition },
    },
    closed: { y: '20%', scale: 1.7, opacity: 1, transition },
  },
  heading: {
    open: {
      opacity: 0,
      zIndex: 0,
      transition: { default: transition, zIndex: { delay: 2 } },
    },
    closed: {
      opacity: 1,
      zIndex: 31,
      transition: { ease: 'easeInOut', duration: 1, delay: 1.5 },
    },
  },
};

const Clouds = ({ isOpen, jumps }) => {
  //const [variant, setVariant] = useState('closed');
  const [variant, setVariant] = useState('open');

  useEffect(() => {
    if (isOpen) setVariant('open');
    else setVariant('closed');
  }, [isOpen]);

  return (
    <div className='absolute inset-0 z-30 pointer-events-none'>
      <motion.div
        initial='closed'
        animate={variant}
        variants={variants.heading}
        className='absolute inset-0 z-[31] bg-card flex flex-col items-center justify-center gap-4'
      >
        <h3 className='text-text'>{jumps} Airborne Jumps</h3>
        <div className='flex items-center justify-center relative h-1/4 gap-4'>
          <Logo82nd />
          <Logo173rd />
        </div>
      </motion.div>
      <motion.svg
        initial='closed'
        animate={variant}
        variants={variants.top}
        id='cloud-top'
        viewBox='38 705 750 440'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        height='100%'
        width='100%'
        className='absolute'
      >
        <defs>
          <clipPath id='clip-24'>
            <path
              clipRule='nonzero'
              d='M 122 778 L 778 778 L 778 924 L 122 924 Z M 122 778 '
            />
          </clipPath>
          <clipPath id='clip-25'>
            <path
              clipRule='evenodd'
              d='M 145.910156 837.710938 C 126.789062 823.890625 28.785156 853.339844 38.949219 810.578125 C 39.234375 809.378906 40.195312 808.109375 40.648438 806.949219 C 53.632812 773.710938 98.835938 793.039062 117.753906 780.679688 C 130.265625 772.511719 133.777344 747.339844 146.855469 736.269531 C 151.171875 732.609375 156.050781 729.761719 161.59375 727.96875 C 177.917969 722.710938 193.328125 748.121094 200.902344 745.601562 C 210.585938 742.378906 220.585938 714.519531 230.191406 707.929688 C 250.226562 694.191406 290.007812 707.820312 293.121094 705.328125 C 298.347656 701.148438 303.105469 680.339844 306.347656 674.738281 C 327.335938 638.488281 392.542969 632.398438 435.046875 621.941406 C 492.699219 607.738281 569.621094 634.128906 600.964844 681.039062 C 606.773438 689.730469 603.945312 709.171875 611.359375 715.949219 C 616.386719 720.550781 646.796875 709.691406 657.660156 716.121094 C 676.980469 727.558594 672.9375 745.128906 681.09375 752.589844 C 693.3125 763.761719 711.066406 751.28125 723.613281 768.488281 C 723.910156 768.898438 724.328125 769.25 724.554688 769.699219 C 730.183594 780.851562 704.785156 795.128906 712.839844 804.960938 C 731.441406 827.640625 770.234375 814.058594 777.28125 855.941406 C 784.472656 898.691406 691.167969 901.820312 663.328125 899.140625 C 654.898438 898.328125 636.140625 882.378906 630.636719 885.320312 C 612.363281 895.058594 603.109375 914.210938 581.503906 921.261719 C 547.03125 932.519531 495.476562 903.359375 492.117188 904.328125 C 435.957031 920.550781 410.375 928.570312 322.980469 914.789062 C 297.59375 910.789062 293.277344 876.421875 276.113281 874.179688 C 239.984375 869.460938 195.742188 937.519531 153.65625 893.539062 C 141.917969 881.269531 161.984375 849.339844 145.910156 837.710938 Z M 145.910156 837.710938 '
            />
          </clipPath>
          <clipPath id='clip-26'>
            <path
              clipRule='nonzero'
              d='M 312 738 L 356 738 L 356 773 L 312 773 Z M 312 738 '
            />
          </clipPath>
          <clipPath id='clip-27'>
            <path
              clipRule='evenodd'
              d='M 145.910156 837.710938 C 126.789062 823.890625 28.785156 853.339844 38.949219 810.578125 C 39.234375 809.378906 40.195312 808.109375 40.648438 806.949219 C 53.632812 773.710938 98.835938 793.039062 117.753906 780.679688 C 130.265625 772.511719 133.777344 747.339844 146.855469 736.269531 C 151.171875 732.609375 156.050781 729.761719 161.59375 727.96875 C 177.917969 722.710938 193.328125 748.121094 200.902344 745.601562 C 210.585938 742.378906 220.585938 714.519531 230.191406 707.929688 C 250.226562 694.191406 290.007812 707.820312 293.121094 705.328125 C 298.347656 701.148438 303.105469 680.339844 306.347656 674.738281 C 327.335938 638.488281 392.542969 632.398438 435.046875 621.941406 C 492.699219 607.738281 569.621094 634.128906 600.964844 681.039062 C 606.773438 689.730469 603.945312 709.171875 611.359375 715.949219 C 616.386719 720.550781 646.796875 709.691406 657.660156 716.121094 C 676.980469 727.558594 672.9375 745.128906 681.09375 752.589844 C 693.3125 763.761719 711.066406 751.28125 723.613281 768.488281 C 723.910156 768.898438 724.328125 769.25 724.554688 769.699219 C 730.183594 780.851562 704.785156 795.128906 712.839844 804.960938 C 731.441406 827.640625 770.234375 814.058594 777.28125 855.941406 C 784.472656 898.691406 691.167969 901.820312 663.328125 899.140625 C 654.898438 898.328125 636.140625 882.378906 630.636719 885.320312 C 612.363281 895.058594 603.109375 914.210938 581.503906 921.261719 C 547.03125 932.519531 495.476562 903.359375 492.117188 904.328125 C 435.957031 920.550781 410.375 928.570312 322.980469 914.789062 C 297.59375 910.789062 293.277344 876.421875 276.113281 874.179688 C 239.984375 869.460938 195.742188 937.519531 153.65625 893.539062 C 141.917969 881.269531 161.984375 849.339844 145.910156 837.710938 Z M 145.910156 837.710938 '
            />
          </clipPath>
        </defs>
        <path
          fillRule='evenodd'
          fill={darkest2}
          fillOpacity='1'
          d='M 152.558594 857.671875 C 133.441406 843.839844 35.4375 873.289062 45.601562 830.539062 C 45.886719 829.339844 46.847656 828.070312 47.300781 826.910156 C 60.28125 793.660156 105.484375 812.988281 124.402344 800.640625 C 136.914062 792.460938 140.429688 767.289062 153.503906 756.21875 C 157.820312 752.570312 162.699219 749.710938 168.246094 747.929688 C 184.566406 742.660156 199.980469 768.070312 207.550781 765.550781 C 217.234375 762.328125 227.234375 734.46875 236.84375 727.878906 C 256.875 714.140625 296.660156 727.78125 299.773438 725.289062 C 305 721.101562 309.757812 700.300781 313 694.699219 C 333.988281 658.441406 399.191406 652.351562 441.695312 641.890625 C 499.347656 627.691406 576.273438 654.089844 607.617188 700.988281 C 613.425781 709.679688 610.59375 729.121094 618.011719 735.898438 C 623.035156 740.5 653.445312 729.648438 664.308594 736.078125 C 683.628906 747.511719 679.589844 765.078125 687.742188 772.539062 C 699.960938 783.71875 717.71875 771.230469 730.261719 788.441406 C 730.5625 788.851562 730.980469 789.199219 731.207031 789.648438 C 736.835938 800.800781 711.433594 815.078125 719.492188 824.910156 C 738.09375 847.589844 776.886719 834.011719 783.929688 875.890625 C 791.125 918.640625 697.820312 921.769531 669.980469 919.089844 C 661.546875 918.28125 642.789062 902.328125 637.285156 905.269531 C 619.011719 915.019531 609.757812 934.160156 588.152344 941.21875 C 553.679688 952.46875 502.128906 923.308594 498.765625 924.28125 C 442.605469 940.5 417.027344 948.53125 329.628906 934.75 C 304.242188 930.738281 299.929688 896.378906 282.765625 894.128906 C 246.632812 889.410156 202.390625 957.46875 160.308594 913.488281 C 148.570312 901.21875 168.636719 869.289062 152.558594 857.671875 '
        />
        <path
          fillRule='evenodd'
          fill={lightGray}
          fillOpacity='1'
          d='M 145.910156 837.710938 C 126.789062 823.890625 28.785156 853.339844 38.949219 810.578125 C 39.234375 809.378906 40.195312 808.109375 40.648438 806.949219 C 53.632812 773.710938 98.835938 793.039062 117.753906 780.679688 C 130.265625 772.511719 133.777344 747.339844 146.855469 736.269531 C 151.171875 732.609375 156.050781 729.761719 161.59375 727.96875 C 177.917969 722.710938 193.328125 748.121094 200.902344 745.601562 C 210.585938 742.378906 220.585938 714.519531 230.191406 707.929688 C 250.226562 694.191406 290.007812 707.820312 293.121094 705.328125 C 298.347656 701.148438 303.105469 680.339844 306.347656 674.738281 C 327.335938 638.488281 392.542969 632.398438 435.046875 621.941406 C 492.699219 607.738281 569.621094 634.128906 600.964844 681.039062 C 606.773438 689.730469 603.945312 709.171875 611.359375 715.949219 C 616.386719 720.550781 646.796875 709.691406 657.660156 716.121094 C 676.980469 727.558594 672.9375 745.128906 681.09375 752.589844 C 693.3125 763.761719 711.066406 751.28125 723.613281 768.488281 C 723.910156 768.898438 724.328125 769.25 724.554688 769.699219 C 730.183594 780.851562 704.785156 795.128906 712.839844 804.960938 C 731.441406 827.640625 770.234375 814.058594 777.28125 855.941406 C 784.472656 898.691406 691.167969 901.820312 663.328125 899.140625 C 654.898438 898.328125 636.140625 882.378906 630.636719 885.320312 C 612.363281 895.058594 603.109375 914.210938 581.503906 921.261719 C 547.03125 932.519531 495.476562 903.359375 492.117188 904.328125 C 435.957031 920.550781 410.375 928.570312 322.980469 914.789062 C 297.59375 910.789062 293.277344 876.421875 276.113281 874.179688 C 239.984375 869.460938 195.742188 937.519531 153.65625 893.539062 C 141.917969 881.269531 161.984375 849.339844 145.910156 837.710938 '
        />
        <g clipPath='url(#clip-24)'>
          <g clipPath='url(#clip-25)'>
            <path
              fillRule='evenodd'
              fill={darkGray}
              fillOpacity='1'
              d='M 139.070312 835.019531 C 146.597656 832.238281 166.210938 853.960938 167.269531 856.859375 C 170.824219 866.628906 183.332031 873.910156 192.792969 876.109375 C 221.253906 882.75 242.636719 849.398438 270.085938 848.390625 C 302.90625 847.171875 327.570312 882.378906 363.890625 881.289062 C 429.988281 879.28125 458.285156 790.980469 492.238281 780.191406 C 530.171875 768.128906 543.46875 831.03125 577.652344 839.558594 C 610.472656 847.761719 628.320312 812.449219 640.933594 811.121094 C 660.027344 809.121094 675.410156 845.558594 694.664062 850.078125 C 713.429688 854.488281 727.820312 854.519531 745.984375 851.058594 C 754.074219 849.519531 772.410156 833.179688 778.832031 835.019531 C 794.683594 839.539062 792.195312 883.21875 789.988281 893.140625 C 787.636719 903.710938 784.058594 914.980469 777.136719 923.449219 C 707.066406 1009.183594 366.648438 1053.785156 266.964844 1006.71875 C 249.074219 998.269531 227.261719 997.28125 209.039062 989.070312 C 169.601562 971.289062 123.867188 919.328125 122.105469 873.53125 C 121.578125 859.828125 131.542969 837.789062 139.070312 835.019531 '
            />
          </g>
        </g>
        <g clipPath='url(#clip-26)'>
          <g clipPath='url(#clip-27)'>
            <path
              fill='none'
              strokeWidth='16.67'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke={darkGray}
              strokeOpacity='1'
              strokeMiterlimit='10'
              d='M 3133.59375 12609.6875 C 3147.890625 12498.28125 3273.632812 12373.28125 3367.578125 12325.703125 C 3424.6875 12296.796875 3486.914062 12297.304688 3547.734375 12287.8125 '
              transform='matrix(0.1, 0, 0, -0.1, 0, 2000)'
            />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        initial='closed'
        animate={variant}
        variants={variants.left}
        id='cloud-left'
        viewBox='1177 1170 1083 722'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        height='100%'
        width='100%'
        className='absolute'
      >
        <defs>
          <clipPath id='clip-40'>
            <path
              clipRule='nonzero'
              d='M 1176 1728 L 1901 1728 L 1901 1791 L 1176 1791 Z M 1176 1728 '
            />
          </clipPath>
          <clipPath id='clip-41'>
            <path
              clipRule='evenodd'
              d='M 1313.25 1785.054688 C 1267.78125 1787.246094 1176.859375 1791.632812 1176.859375 1744.414062 C 1176.859375 1696.082031 1222.5 1710.457031 1248.519531 1696.5 C 1263.421875 1688.503906 1268.558594 1633.886719 1305.46875 1617.953125 C 1330.121094 1607.316406 1373.078125 1620.875 1376.851562 1619.320312 C 1393.308594 1612.527344 1423.140625 1541.800781 1448.601562 1511.507812 C 1492 1459.882812 1580.460938 1451.214844 1620.230469 1511.507812 C 1624.960938 1518.6875 1629.671875 1545.730469 1635.488281 1550.023438 C 1644.609375 1556.746094 1685.660156 1529.988281 1715.351562 1577.773438 C 1726.671875 1595.988281 1719.988281 1612.273438 1716.480469 1631.148438 C 1716.378906 1631.660156 1715.519531 1635.277344 1715.769531 1635.542969 C 1716.320312 1636.132812 1721.898438 1634.613281 1722.699219 1634.332031 C 1742.328125 1627.3125 1767.058594 1629.402344 1787.289062 1633.574219 C 1833.171875 1643.039062 1896.550781 1684.644531 1899.929688 1739.109375 C 1903.46875 1796.023438 1789.800781 1787.0625 1760.148438 1788.691406 C 1643.671875 1795.101562 1524.578125 1785.960938 1408.371094 1778.835938 C 1376.71875 1776.898438 1344.691406 1785.054688 1313.25 1785.054688 '
            />
          </clipPath>
          <clipPath id='clip-42'>
            <path
              clipRule='nonzero'
              d='M 1382 1636 L 1422 1636 L 1422 1683 L 1382 1683 Z M 1382 1636 '
            />
          </clipPath>
          <clipPath id='clip-43'>
            <path
              clipRule='evenodd'
              d='M 1313.25 1785.054688 C 1267.78125 1787.246094 1176.859375 1791.632812 1176.859375 1744.414062 C 1176.859375 1696.082031 1222.5 1710.457031 1248.519531 1696.5 C 1263.421875 1688.503906 1268.558594 1633.886719 1305.46875 1617.953125 C 1330.121094 1607.316406 1373.078125 1620.875 1376.851562 1619.320312 C 1393.308594 1612.527344 1423.140625 1541.800781 1448.601562 1511.507812 C 1492 1459.882812 1580.460938 1451.214844 1620.230469 1511.507812 C 1624.960938 1518.6875 1629.671875 1545.730469 1635.488281 1550.023438 C 1644.609375 1556.746094 1685.660156 1529.988281 1715.351562 1577.773438 C 1726.671875 1595.988281 1719.988281 1612.273438 1716.480469 1631.148438 C 1716.378906 1631.660156 1715.519531 1635.277344 1715.769531 1635.542969 C 1716.320312 1636.132812 1721.898438 1634.613281 1722.699219 1634.332031 C 1742.328125 1627.3125 1767.058594 1629.402344 1787.289062 1633.574219 C 1833.171875 1643.039062 1896.550781 1684.644531 1899.929688 1739.109375 C 1903.46875 1796.023438 1789.800781 1787.0625 1760.148438 1788.691406 C 1643.671875 1795.101562 1524.578125 1785.960938 1408.371094 1778.835938 C 1376.71875 1776.898438 1344.691406 1785.054688 1313.25 1785.054688 '
            />
          </clipPath>
          <clipPath id='clip-44'>
            <path
              clipRule='nonzero'
              d='M 1575 1556 L 1630 1556 L 1630 1603 L 1575 1603 Z M 1575 1556 '
            />
          </clipPath>
          <clipPath id='clip-45'>
            <path
              clipRule='evenodd'
              d='M 1313.25 1785.054688 C 1267.78125 1787.246094 1176.859375 1791.632812 1176.859375 1744.414062 C 1176.859375 1696.082031 1222.5 1710.457031 1248.519531 1696.5 C 1263.421875 1688.503906 1268.558594 1633.886719 1305.46875 1617.953125 C 1330.121094 1607.316406 1373.078125 1620.875 1376.851562 1619.320312 C 1393.308594 1612.527344 1423.140625 1541.800781 1448.601562 1511.507812 C 1492 1459.882812 1580.460938 1451.214844 1620.230469 1511.507812 C 1624.960938 1518.6875 1629.671875 1545.730469 1635.488281 1550.023438 C 1644.609375 1556.746094 1685.660156 1529.988281 1715.351562 1577.773438 C 1726.671875 1595.988281 1719.988281 1612.273438 1716.480469 1631.148438 C 1716.378906 1631.660156 1715.519531 1635.277344 1715.769531 1635.542969 C 1716.320312 1636.132812 1721.898438 1634.613281 1722.699219 1634.332031 C 1742.328125 1627.3125 1767.058594 1629.402344 1787.289062 1633.574219 C 1833.171875 1643.039062 1896.550781 1684.644531 1899.929688 1739.109375 C 1903.46875 1796.023438 1789.800781 1787.0625 1760.148438 1788.691406 C 1643.671875 1795.101562 1524.578125 1785.960938 1408.371094 1778.835938 C 1376.71875 1776.898438 1344.691406 1785.054688 1313.25 1785.054688 '
            />
          </clipPath>
        </defs>
        <path
          fillRule='evenodd'
          fill={darkest1}
          fillOpacity='1'
          d='M 1317.621094 1810.167969 C 1273.148438 1812.363281 1184.210938 1816.75 1184.210938 1769.53125 C 1184.210938 1721.195312 1228.851562 1735.570312 1254.300781 1721.613281 C 1268.878906 1713.617188 1273.910156 1659 1310.011719 1643.070312 C 1334.121094 1632.433594 1376.140625 1645.988281 1379.828125 1644.433594 C 1395.929688 1637.640625 1425.109375 1566.914062 1450.011719 1536.625 C 1492.460938 1485 1578.980469 1476.328125 1617.890625 1536.625 C 1622.519531 1543.804688 1627.121094 1570.847656 1632.820312 1575.140625 C 1641.730469 1581.863281 1681.878906 1555.105469 1710.929688 1602.886719 C 1722 1621.101562 1715.46875 1637.390625 1712.03125 1656.261719 C 1711.941406 1656.777344 1711.089844 1660.390625 1711.339844 1660.660156 C 1711.878906 1661.246094 1717.339844 1659.730469 1718.121094 1659.445312 C 1737.320312 1652.425781 1761.511719 1654.515625 1781.289062 1658.6875 C 1826.171875 1668.152344 1888.171875 1709.761719 1891.480469 1764.222656 C 1894.929688 1821.136719 1783.75 1812.175781 1754.75 1813.808594 C 1640.808594 1820.214844 1524.328125 1811.078125 1410.660156 1803.953125 C 1379.699219 1802.011719 1348.371094 1810.167969 1317.621094 1810.167969 '
        />
        <path
          fillRule='evenodd'
          fill={whiteSmoke}
          fillOpacity='1'
          d='M 1313.25 1785.054688 C 1267.78125 1787.246094 1176.859375 1791.632812 1176.859375 1744.414062 C 1176.859375 1696.082031 1222.5 1710.457031 1248.519531 1696.5 C 1263.421875 1688.503906 1268.558594 1633.886719 1305.46875 1617.953125 C 1330.121094 1607.316406 1373.078125 1620.875 1376.851562 1619.320312 C 1393.308594 1612.527344 1423.140625 1541.800781 1448.601562 1511.507812 C 1492 1459.882812 1580.460938 1451.214844 1620.230469 1511.507812 C 1624.960938 1518.6875 1629.671875 1545.730469 1635.488281 1550.023438 C 1644.609375 1556.746094 1685.660156 1529.988281 1715.351562 1577.773438 C 1726.671875 1595.988281 1719.988281 1612.273438 1716.480469 1631.148438 C 1716.378906 1631.660156 1715.519531 1635.277344 1715.769531 1635.542969 C 1716.320312 1636.132812 1721.898438 1634.613281 1722.699219 1634.332031 C 1742.328125 1627.3125 1767.058594 1629.402344 1787.289062 1633.574219 C 1833.171875 1643.039062 1896.550781 1684.644531 1899.929688 1739.109375 C 1903.46875 1796.023438 1789.800781 1787.0625 1760.148438 1788.691406 C 1643.671875 1795.101562 1524.578125 1785.960938 1408.371094 1778.835938 C 1376.71875 1776.898438 1344.691406 1785.054688 1313.25 1785.054688 '
        />
        <g clipPath='url(#clip-40)'>
          <g clipPath='url(#clip-41)'>
            <path
              fillRule='evenodd'
              fill={darkGray}
              fillOpacity='1'
              d='M 1170.859375 1767.851562 C 1171.121094 1767.164062 1170.988281 1768.589844 1172.410156 1769.265625 C 1182.859375 1774.246094 1198.589844 1764.394531 1207.359375 1760.277344 C 1247.328125 1741.503906 1290.621094 1732.367188 1333.839844 1731.492188 C 1414.28125 1729.863281 1484 1766 1563.558594 1764.011719 C 1599.691406 1763.109375 1638 1761.800781 1673.238281 1752.296875 C 1711.03125 1742.105469 1746.78125 1727.253906 1786.191406 1728.765625 C 1816.519531 1729.929688 1844.191406 1743.371094 1873.261719 1748.761719 C 1884.730469 1750.886719 1896.511719 1745.027344 1909.03125 1749.671875 C 1916.679688 1752.503906 1922.789062 1761.550781 1922.648438 1770.375 C 1921.761719 1829.675781 1791.03125 1872.417969 1754.949219 1879.652344 C 1656.859375 1899.320312 1562.960938 1861.523438 1466.039062 1851.777344 C 1379.769531 1843.101562 1291.46875 1865.730469 1205.730469 1851.171875 C 1187.921875 1848.148438 1162.261719 1842.964844 1152.25 1823.296875 C 1145.859375 1810.734375 1167.511719 1776.855469 1170.859375 1767.851562 '
            />
          </g>
        </g>
        <g clipPath='url(#clip-42)'>
          <g clipPath='url(#clip-43)'>
            <path
              fill='none'
              strokeWidth='16.67'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke={darkGray}
              strokeOpacity='1'
              strokeMiterlimit='10'
              d='M 13835.3125 3626.640625 C 13874.414062 3470.117188 14022.1875 3110.859375 14210.3125 3196.40625 '
              transform='matrix(0.1, 0, 0, -0.1, 0, 2000)'
            />
          </g>
        </g>
        <g clipPath='url(#clip-44)'>
          <g clipPath='url(#clip-45)'>
            <path
              fill='none'
              strokeWidth='16.67'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke={darkGray}
              strokeOpacity='1'
              strokeMiterlimit='10'
              d='M 15761.914062 3979.140625 C 16019.804688 3997.070312 16195 4136.992188 16291.289062 4422.5 '
              transform='matrix(0.1, 0, 0, -0.1, 0, 2000)'
            />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        initial='closed'
        animate={variant}
        variants={variants.right}
        id='cloud-right'
        viewBox='-255 740 1230 910'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        className='absolute'
        height='100%'
        width='100%'
      >
        <defs>
          <clipPath id='clip-34'>
            <path
              clipRule='nonzero'
              d='M 48 1248 L 958 1248 L 958 1354 L 48 1354 Z M 48 1248 '
            />
          </clipPath>
          <clipPath id='clip-35'>
            <path
              clipRule='evenodd'
              d='M 129.601562 1302.277344 C 102.335938 1312.546875 40.078125 1298.6875 49.566406 1275.8125 C 68.871094 1229.28125 178.46875 1247.921875 220.835938 1245.113281 C 238.265625 1243.960938 254.550781 1216.851562 278.257812 1215.28125 C 287.257812 1214.683594 295.902344 1228.933594 303.203125 1224.359375 C 323.863281 1211.425781 321.21875 1176.078125 367.492188 1176.078125 C 384.628906 1176.078125 409.855469 1202.675781 417.71875 1201.445312 C 420.695312 1200.976562 428.371094 1166.898438 454.214844 1163.972656 C 466.15625 1162.617188 473.902344 1165.816406 484.015625 1170.167969 C 486.964844 1171.4375 490.117188 1180.507812 493.054688 1179.535156 C 495.324219 1178.785156 539.328125 1103.597656 632.085938 1081.816406 C 690.859375 1068.019531 789.300781 1086.988281 820.765625 1135.144531 C 825.929688 1143.050781 831.082031 1171.8125 837.507812 1175.5 C 842.054688 1178.109375 887.972656 1170.789062 903.472656 1176.511719 C 932.523438 1187.230469 905.480469 1205.53125 905.480469 1215.28125 C 905.480469 1215.945312 916.535156 1217.792969 917.699219 1218.164062 C 938.535156 1224.773438 956.128906 1229.941406 957.546875 1251.890625 C 960.710938 1300.925781 779.578125 1331.875 743.253906 1314.152344 C 722.863281 1304.207031 724.789062 1317.460938 703.910156 1326.691406 C 663.359375 1344.617188 613.058594 1339.257812 568.726562 1340.816406 C 549.34375 1341.496094 522.023438 1341.375 502.765625 1337.789062 C 493.1875 1336.007812 481.664062 1321.347656 475.476562 1321.789062 C 438.402344 1324.449219 399.113281 1349.113281 359.289062 1352.921875 C 326.382812 1356.070312 309.058594 1344.1875 283.617188 1339.808594 C 250.671875 1334.136719 215.628906 1344.613281 182.328125 1337.070312 C 166.746094 1333.539062 129.429688 1316.714844 129.601562 1302.277344 Z M 129.601562 1302.277344 '
            />
          </clipPath>
          <clipPath id='clip-36'>
            <path
              clipRule='nonzero'
              d='M 496 1190 L 601 1190 L 601 1247 L 496 1247 Z M 496 1190 '
            />
          </clipPath>
          <clipPath id='clip-37'>
            <path
              clipRule='evenodd'
              d='M 129.601562 1302.277344 C 102.335938 1312.546875 40.078125 1298.6875 49.566406 1275.8125 C 68.871094 1229.28125 178.46875 1247.921875 220.835938 1245.113281 C 238.265625 1243.960938 254.550781 1216.851562 278.257812 1215.28125 C 287.257812 1214.683594 295.902344 1228.933594 303.203125 1224.359375 C 323.863281 1211.425781 321.21875 1176.078125 367.492188 1176.078125 C 384.628906 1176.078125 409.855469 1202.675781 417.71875 1201.445312 C 420.695312 1200.976562 428.371094 1166.898438 454.214844 1163.972656 C 466.15625 1162.617188 473.902344 1165.816406 484.015625 1170.167969 C 486.964844 1171.4375 490.117188 1180.507812 493.054688 1179.535156 C 495.324219 1178.785156 539.328125 1103.597656 632.085938 1081.816406 C 690.859375 1068.019531 789.300781 1086.988281 820.765625 1135.144531 C 825.929688 1143.050781 831.082031 1171.8125 837.507812 1175.5 C 842.054688 1178.109375 887.972656 1170.789062 903.472656 1176.511719 C 932.523438 1187.230469 905.480469 1205.53125 905.480469 1215.28125 C 905.480469 1215.945312 916.535156 1217.792969 917.699219 1218.164062 C 938.535156 1224.773438 956.128906 1229.941406 957.546875 1251.890625 C 960.710938 1300.925781 779.578125 1331.875 743.253906 1314.152344 C 722.863281 1304.207031 724.789062 1317.460938 703.910156 1326.691406 C 663.359375 1344.617188 613.058594 1339.257812 568.726562 1340.816406 C 549.34375 1341.496094 522.023438 1341.375 502.765625 1337.789062 C 493.1875 1336.007812 481.664062 1321.347656 475.476562 1321.789062 C 438.402344 1324.449219 399.113281 1349.113281 359.289062 1352.921875 C 326.382812 1356.070312 309.058594 1344.1875 283.617188 1339.808594 C 250.671875 1334.136719 215.628906 1344.613281 182.328125 1337.070312 C 166.746094 1333.539062 129.429688 1316.714844 129.601562 1302.277344 Z M 129.601562 1302.277344 '
            />
          </clipPath>
          <clipPath id='clip-38'>
            <path
              clipRule='nonzero'
              d='M 809 1180 L 835 1180 L 835 1225 L 809 1225 Z M 809 1180 '
            />
          </clipPath>
          <clipPath id='clip-39'>
            <path
              clipRule='evenodd'
              d='M 129.601562 1302.277344 C 102.335938 1312.546875 40.078125 1298.6875 49.566406 1275.8125 C 68.871094 1229.28125 178.46875 1247.921875 220.835938 1245.113281 C 238.265625 1243.960938 254.550781 1216.851562 278.257812 1215.28125 C 287.257812 1214.683594 295.902344 1228.933594 303.203125 1224.359375 C 323.863281 1211.425781 321.21875 1176.078125 367.492188 1176.078125 C 384.628906 1176.078125 409.855469 1202.675781 417.71875 1201.445312 C 420.695312 1200.976562 428.371094 1166.898438 454.214844 1163.972656 C 466.15625 1162.617188 473.902344 1165.816406 484.015625 1170.167969 C 486.964844 1171.4375 490.117188 1180.507812 493.054688 1179.535156 C 495.324219 1178.785156 539.328125 1103.597656 632.085938 1081.816406 C 690.859375 1068.019531 789.300781 1086.988281 820.765625 1135.144531 C 825.929688 1143.050781 831.082031 1171.8125 837.507812 1175.5 C 842.054688 1178.109375 887.972656 1170.789062 903.472656 1176.511719 C 932.523438 1187.230469 905.480469 1205.53125 905.480469 1215.28125 C 905.480469 1215.945312 916.535156 1217.792969 917.699219 1218.164062 C 938.535156 1224.773438 956.128906 1229.941406 957.546875 1251.890625 C 960.710938 1300.925781 779.578125 1331.875 743.253906 1314.152344 C 722.863281 1304.207031 724.789062 1317.460938 703.910156 1326.691406 C 663.359375 1344.617188 613.058594 1339.257812 568.726562 1340.816406 C 549.34375 1341.496094 522.023438 1341.375 502.765625 1337.789062 C 493.1875 1336.007812 481.664062 1321.347656 475.476562 1321.789062 C 438.402344 1324.449219 399.113281 1349.113281 359.289062 1352.921875 C 326.382812 1356.070312 309.058594 1344.1875 283.617188 1339.808594 C 250.671875 1334.136719 215.628906 1344.613281 182.328125 1337.070312 C 166.746094 1333.539062 129.429688 1316.714844 129.601562 1302.277344 Z M 129.601562 1302.277344 '
            />
          </clipPath>
        </defs>
        <path
          fillRule='evenodd'
          fill={darkest1}
          fillOpacity='1'
          d='M 130.453125 1324.246094 C 103.1875 1334.515625 40.929688 1320.65625 50.417969 1297.785156 C 69.722656 1251.25 179.320312 1269.890625 221.6875 1267.085938 C 239.117188 1265.929688 255.402344 1238.820312 279.109375 1237.25 C 288.109375 1236.652344 296.753906 1250.902344 304.054688 1246.328125 C 324.71875 1233.394531 322.070312 1198.046875 368.34375 1198.046875 C 385.480469 1198.046875 410.707031 1224.644531 418.570312 1223.414062 C 421.546875 1222.949219 429.222656 1188.867188 455.066406 1185.941406 C 467.007812 1184.589844 474.757812 1187.785156 484.867188 1192.136719 C 487.8125 1193.40625 490.96875 1202.480469 493.90625 1201.507812 C 496.175781 1200.753906 540.179688 1125.566406 632.9375 1103.785156 C 691.710938 1089.988281 790.152344 1108.960938 821.617188 1157.113281 C 826.78125 1165.019531 831.933594 1193.78125 838.359375 1197.472656 C 842.90625 1200.078125 888.824219 1192.761719 904.320312 1198.480469 C 933.375 1209.199219 906.332031 1227.5 906.332031 1237.25 C 906.332031 1237.914062 917.386719 1239.761719 918.554688 1240.132812 C 939.390625 1246.742188 956.980469 1251.910156 958.398438 1273.859375 C 961.5625 1322.894531 780.429688 1353.84375 744.105469 1336.121094 C 723.71875 1326.175781 725.640625 1339.429688 704.761719 1348.660156 C 664.210938 1366.589844 613.910156 1361.226562 569.578125 1362.785156 C 550.191406 1363.46875 522.875 1363.34375 503.617188 1359.757812 C 494.039062 1357.976562 482.515625 1343.316406 476.328125 1343.761719 C 439.253906 1346.421875 399.964844 1371.082031 360.140625 1374.894531 C 327.234375 1378.039062 309.910156 1366.15625 284.46875 1361.777344 C 251.523438 1356.105469 216.480469 1366.582031 183.179688 1359.039062 C 167.597656 1355.507812 130.28125 1338.683594 130.453125 1324.246094 '
        />
        <path
          fillRule='evenodd'
          fill={white}
          fillOpacity='1'
          d='M 129.601562 1302.277344 C 102.335938 1312.546875 40.078125 1298.6875 49.566406 1275.8125 C 68.871094 1229.28125 178.46875 1247.921875 220.835938 1245.113281 C 238.265625 1243.960938 254.550781 1216.851562 278.257812 1215.28125 C 287.257812 1214.683594 295.902344 1228.933594 303.203125 1224.359375 C 323.863281 1211.425781 321.21875 1176.078125 367.492188 1176.078125 C 384.628906 1176.078125 409.855469 1202.675781 417.71875 1201.445312 C 420.695312 1200.976562 428.371094 1166.898438 454.214844 1163.972656 C 466.15625 1162.617188 473.902344 1165.816406 484.015625 1170.167969 C 486.964844 1171.4375 490.117188 1180.507812 493.054688 1179.535156 C 495.324219 1178.785156 539.328125 1103.597656 632.085938 1081.816406 C 690.859375 1068.019531 789.300781 1086.988281 820.765625 1135.144531 C 825.929688 1143.050781 831.082031 1171.8125 837.507812 1175.5 C 842.054688 1178.109375 887.972656 1170.789062 903.472656 1176.511719 C 932.523438 1187.230469 905.480469 1205.53125 905.480469 1215.28125 C 905.480469 1215.945312 916.535156 1217.792969 917.699219 1218.164062 C 938.535156 1224.773438 956.128906 1229.941406 957.546875 1251.890625 C 960.710938 1300.925781 779.578125 1331.875 743.253906 1314.152344 C 722.863281 1304.207031 724.789062 1317.460938 703.910156 1326.691406 C 663.359375 1344.617188 613.058594 1339.257812 568.726562 1340.816406 C 549.34375 1341.496094 522.023438 1341.375 502.765625 1337.789062 C 493.1875 1336.007812 481.664062 1321.347656 475.476562 1321.789062 C 438.402344 1324.449219 399.113281 1349.113281 359.289062 1352.921875 C 326.382812 1356.070312 309.058594 1344.1875 283.617188 1339.808594 C 250.671875 1334.136719 215.628906 1344.613281 182.328125 1337.070312 C 166.746094 1333.539062 129.429688 1316.714844 129.601562 1302.277344 '
        />
        <g clipPath='url(#clip-34)'>
          <g clipPath='url(#clip-35)'>
            <path
              fillRule='evenodd'
              fill={silver}
              fillOpacity='1'
              d='M 44.503906 1290.535156 C 52.695312 1291.707031 87.929688 1273.058594 119.386719 1276.984375 C 138.214844 1279.335938 154.492188 1303.976562 173.386719 1309.527344 C 213.320312 1321.257812 255.335938 1317.441406 296.109375 1322.097656 C 335.550781 1326.597656 395.617188 1282.164062 447.125 1283.941406 C 516.257812 1286.320312 556.566406 1323.996094 637.324219 1310.773438 C 668.464844 1305.675781 694.652344 1285.375 726.039062 1280.640625 C 743.816406 1277.960938 761.820312 1286.210938 779.234375 1288.039062 C 844.238281 1294.875 867.636719 1287.519531 924.183594 1256.929688 C 939.003906 1248.910156 981.75 1239.332031 981.75 1268.339844 C 981.75 1336.957031 876.898438 1374.367188 824.574219 1385.480469 C 766.828125 1397.746094 706.691406 1400.574219 648.210938 1407.410156 C 526.015625 1421.695312 399.035156 1439.5625 276.382812 1416.59375 C 208.152344 1403.816406 137.058594 1385.691406 76.636719 1350.265625 C 74.828125 1349.207031 73.042969 1348.101562 71.28125 1346.96875 C 68.933594 1345.460938 66.53125 1343.761719 64.316406 1342.066406 C 62.355469 1340.566406 60.527344 1338.816406 58.785156 1337.074219 C 42.378906 1320.683594 26.242188 1290.535156 44.503906 1290.535156 '
            />
          </g>
        </g>
        <g clipPath='url(#clip-36)'>
          <g clipPath='url(#clip-37)'>
            <path
              fill='none'
              strokeWidth='16.67'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke={silver}
              strokeOpacity='1'
              strokeMiterlimit='10'
              d='M 4975.3125 8090.898438 C 5057.96875 7971.601562 5175.273438 7827.851562 5334.609375 7827.851562 C 5377.265625 7827.851562 5451.132812 7853.632812 5490.546875 7843.28125 C 5600 7814.492188 5738.59375 7543.710938 5996.09375 7543.710938 '
              transform='matrix(0.1, 0, 0, -0.1, 0, 2000)'
            />
          </g>
        </g>
        <g clipPath='url(#clip-38)'>
          <g clipPath='url(#clip-39)'>
            <path
              fill='none'
              strokeWidth='16.67'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke={silver}
              strokeOpacity='1'
              strokeMiterlimit='10'
              d='M 8103.867188 7763.398438 C 8256.875 7782.5 8322.109375 8063.632812 8339.804688 8187.304688 '
              transform='matrix(0.1, 0, 0, -0.1, 0, 2000)'
            />
          </g>
        </g>
      </motion.svg>
    </div>
  );
};

export default Clouds;