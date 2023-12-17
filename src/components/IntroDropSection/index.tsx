import React from "react";
import { motion } from "framer-motion";
import { FirstNameNameAnimationConfig } from "../Constants";

type Props = {
  key: number;
  label: string;
  animationDelay: number;
  animationDuration: number;
};

const RenderTextAnimation = ({
  key,
  label,
  animationDelay,
  animationDuration,
}: Props) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ y: -300, opacity: 0, rotate: -120 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          type: "spring",
          stiffness: 120,
        }}
        key={key}
      >
        {label}
      </motion.div>
    </div>
  );
};

const Index = () => {
  return (
    <>
      {FirstNameNameAnimationConfig.map((letter, index) => (
        <RenderTextAnimation
          key={index}
          label={letter.label}
          animationDelay={letter.animationDelay}
          animationDuration={letter.animationDuration}
        />
      ))}
    </>
  );
};

export default Index;