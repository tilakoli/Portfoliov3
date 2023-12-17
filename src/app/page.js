'use client';
import { useEffect } from 'react';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import ScrollSection from '../components/HorizontalScrollSection';
export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main >
        <Intro />
  
        <Description />
  
        <div className=' w-[99%] text-white uppercase flex justify-center items-center'>
          <Projects />
        </div>
        <ScrollSection />

        <div className=' w-[99%] h-screen text-white uppercase flex justify-center items-center '>
          Let`s work together
        </div>
      </main>
  )
}
