import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageThrough = {
  hidden: {
    opacity: 0,
    transition:{
      duration: 0.4
    }
  },
  show: {
    opacity: 1,
    transition:{
      duration: 0.4
    }
  },
}

const Order = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={PageThrough}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <h1>Order</h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Order;
