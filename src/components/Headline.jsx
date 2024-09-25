import { motion } from "framer-motion";

const Headline = ({ firstName }) => {

  return (
    <div id="headline" className="flex items-center justify-center font-bold">
      <h1 className="uppercase text-6xl md:text-8xl tracking-wide relative">
        <span className="skew-x-[-20deg] opacity-0">{firstName}</span>
        <span className="absolute top-only">{firstName}</span>
        <span data-content={firstName} className="absolute bottom-only">{firstName}</span>
      </h1>
      <svg
        id="headline-svg"
        viewBox="0 0 100 40"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        width="500px"
        height="125px"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="absolute"
      >
        <motion.ellipse
          cx="5"
          cy="20"
          rx="3.5"
          ry="1.1"
          fill="var(--primary_C)"
        />
        <motion.rect
          x="5"
          y="19"
          width="90"
          height="2"
          fill="var(--primary_C)"
        />
        <motion.ellipse
          cx="95"
          cy="20"
          rx="3.5"
          ry="1.1"
          fill="var(--primary_C)"
        />
      </svg>
    </div>
  );
};

export default Headline;
