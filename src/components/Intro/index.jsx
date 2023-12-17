'use client';
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroDropSection from '../IntroDropSection';

export default function Index() {

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
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <div className='relative w-full flex justify-center '>
            <div className='w-full h-[140vh] absolute brightness-[60%] hidden md:block' ref={background}>
                <Image 
                    className='object-cover object-center w-full h-full'
                    src={'/images/background.jpeg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className="flex justify-center relative mt-[25vh] md:mt-[35vh] ">
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className='brightness-[70%] w-[350px]  h-[475px] absolute'>
                    <Image
                        className='object-cover object-center w-full h-full'
                        src={'/images/intro.png'}
                        alt="intro image"
                        fill={true} 
                        priority={true}s
                    />
                </div>
                <div className="flex gap-3 text-white text-[7vw] z-[3] text-center whitespace-nowrap mt-52 " data-scroll data-scroll-speed="0.7">
                    <IntroDropSection/>
                </div> 
            </div>
        </div>
    )
}
