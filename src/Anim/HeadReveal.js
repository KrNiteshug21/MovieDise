import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeadReveal = ({ text }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.h2 ref={ref}>
      {text.split("").map((char, i) => {
        return (
          <motion.span
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: i * 0.1 + 0.25, duration: 0.15 }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};

export default HeadReveal;
