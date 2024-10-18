
import { motion } from 'framer-motion';
import styles from './InfiniteCarousal.module.css';

const items = [
  {
    title: "Open Ai",
    imgSrc: "./imgs/chatgpt-icon.svg",
  },
  {
    title: "Google Gemini",
    imgSrc: "./imgs/google-gemini-icon.svg",
  },
  {
    title: "Claude ai",
    imgSrc: "./imgs/claude-ai-icon.svg",
  },
  {
    title: "Midjourney",
    imgSrc: "./imgs/midjourney-blue-icon.svg",
  },
  {
    title: "Perplexity",
    imgSrc: "./imgs/perplexity-ai-icon.svg",
  },
  {
    title: "Llama model",
    imgSrc: "./imgs/meta-icon.svg",
  },
  {
    title: "Stability ai",
    imgSrc: "./imgs/stability_ai_logo.jpeg",
  },
//   {
//     title: "Midjourney",
//     imgSrc: "./imgs/midjourney-blue-icon.svg",
//   },
];

function InfiniteCarousal() {
  const sliderVariants = {
    animate: {
      x: [0, -1500], // Adjust this value based on the width of all items
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40, // Duration for one complete loop (adjust for speed)
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className={styles['infinite-carousal-slider']}>
      <motion.div
        className={styles['all-in-one-with-beautiful-interface']}
        variants={sliderVariants}
        animate="animate"
      > 
        {/* Duplicate all items to ensure continuous sliding */}
        {items.map((item, index) => (
          <div key={index} className={styles['item']}>
            <img src={item.imgSrc} width="24px" height="24px"  alt={item.title} />
            <h6>{item?.title}</h6>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`${index}-duplicate`} className={styles['item']}>
            <img src={item.imgSrc} width="24px" height="24px" alt={item.title} />
            <h6>{item?.title}</h6>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={index} className={styles['item']}>
            <img src={item.imgSrc} width="24px" height="24px"  alt={item.title} />
            <h6>{item?.title}</h6>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteCarousal;


