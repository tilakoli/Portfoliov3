'use client';
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FallingText } from './FallingText';

export default function Index({animateText}) {
    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {
                // clipPath: `inset(15%)`
                clipPath: `inset(10% 12% 0 11%)`
        })
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <div className='relative flex justify-center w-full h-screen' ref={background}>
            <div className='flex items-center justify-center object-cover object-center w-full h-full bg-homepage'>
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className='w-[250px] h-[375px] md:w-[350px] md:h-[475px] absolute'>
                    <Image
                        className='object-cover object-center w-full h-full'
                        src={'/images/intro.png'}
                        alt="intro image"
                        fill={true} 
                        priority={true}
                    />
                </div>
                <div className="flex gap-3 text-white text-[7vw] z-[3] text-center whitespace-nowrap " data-scroll data-scroll-speed="0.7">
                    <FallingText animateText={animateText} />
                </div> 
            </div>
               
        </div>
       
    )
    
}
