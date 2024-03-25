import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const divVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const TextReveal = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={divVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        delay: 0.25,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
