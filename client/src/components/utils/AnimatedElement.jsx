// AnimatedElement.js
import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
const AnimatedElement = ({
  as = "div", // Default element type is "div", can be changed to any other element
  children,
  type = "load",
  delay = 0,
  ...props // Spread any additional props to the motion component
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const animationVariants = {
    load: {
      hidden: { opacity: 0, y: +30 },
      visible: { opacity: 1, y: 0 },
    },
    scroll: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
  };

  const MotionComponent = motion[as]; // Use the specified element type for the motion component

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={type === "load" ? "visible" : controls}
      variants={animationVariants[type]}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
AnimatedElement.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["load", "scroll"]),
  delay: PropTypes.number,

};
export default AnimatedElement;



 