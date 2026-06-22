import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Counter = ({ value, start }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (!start) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [start, value]);

  return <motion.span>{rounded}</motion.span>;
};

export default Counter;