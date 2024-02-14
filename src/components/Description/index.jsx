import React, {useLayoutEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import { phrases } from "../Constants";


export default function Description() {
  const text = useRef(null);

  const AnimatedText = ({children}) => {
    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        left: "-200px",
        ease: "power3.Out",
      });
    }, []);
  
    return (
      <p ref={text} className="relative m-0">
        {children}
      </p>
    );
  }
  
  return (
    <div className="relative text-black dark:text-white text-[3vw] uppercase py-[40px] px-10 bg-cyan-500">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

