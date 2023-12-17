import React, {useLayoutEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrases = [
  "I'm a 2* yr old Frontend Developer,",
  "who loves to craft digital wonders by",
  "transforming designs into web experiences",
  "and capturing moments as memories",
];

export default function Index() {
  return (
    <div className="relative text-white text-[3vw] uppercase mt-[270px] mb-[80px] md:mb-0 md:mt-[30vw] ml-[10vw]">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({children}) {
  const text = useRef(null);

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
      left: "-230px",
      ease: "power3.Out",
    });
  }, []);

  return (
    <p ref={text} className="m-0 relative">
      {children}
    </p>
  );
}
