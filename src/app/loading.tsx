'use client';
import React, { useEffect, useState } from 'react'
import gsap, {Expo, CSSPlugin} from 'gsap';
gsap.registerPlugin(CSSPlugin);

const Loader = () => {
  const [counter, setCounter] = useState<number>(0); 

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => (prevCounter < 100 ? prevCounter + 1 : prevCounter) );
    }, 25);

    counter === 100 && reveal()

    return () => {
      clearInterval(count); // Clear the interval when the component is unmounted
    };
    
  }, [counter]);

const reveal = () => {

  const tl = gsap.timeline({
    onComplete: () =>{}
  });

  tl.to('.follow', {width: '100%', duration: 0.7,
  ease: Expo.easeInOut
  });

  tl.to('.hide', {
    display: 'none',
    duration: 0.3, 
  });

  tl.to('.follow', {
    height: '100%',
    duration: 0.5,
    // delay: 0.5,
    ease: Expo.easeInOut
  })
  
  tl.to('.follow', {
    opacity: 0,
    duration: 0.7,
    delay: 0.6,
    ease: Expo.easeInOut,
    clipPath: `inset(25%)`
    
  }) 

}

  return (
    <>
      {/* <div className='bg-red-500 h-screen w-screen z-50 flex items-center justify-center loader'>Wait for it...</div> */}
      <div className='loading text-white'>
        <div className='follow'></div>
        <div className='hide progressbar' style={{
          width: `${counter}%`
        }}> </div>
        <p className='hide count'>{counter}%</p>
        {/* <p className='loaderContent'>content</p> */}
      </div>
    </>
  )
}

export default Loader
