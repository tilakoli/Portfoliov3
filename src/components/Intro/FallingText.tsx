import React from "react";
import { motion } from "framer-motion";

export const FallingText = ({animateText}) => {
  
  return (
    <>
      {animateText?.map((letter, index) => (
       <div className="flex" key={index}>
        <motion.div
          key={index}
          initial={{ y: -300, opacity: 0, rotate: -120 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{
            delay: letter.animationDelay,
            duration: letter.animationDuration,
            type: "spring",
            stiffness: 120,
          }}
        >
          {letter.label}
        </motion.div>
     </div>
      ))}
    </>
  );
};

//  default FallingText;