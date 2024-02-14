'use client';
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Loader from './loading'; 
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import ScrollSection from '../components/HorizontalScrollSection';
import { useTheme } from 'next-themes';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    const delay = .5;

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>switch theme</button>
      <Intro />
      <Description /> 
      <div className='flex items-center justify-center w-full uppercase '>
        <Projects />
      </div>
     {/*  <main>
        {loading ? (
          <Loader />
        ) : (
          <div>
        
           
              <div className=' w-[99%] text-white uppercase flex justify-center items-center'>
              <Projects />
            </div>
            <ScrollSection />
            <div className=' w-[99%] h-screen text-white uppercase flex justify-center items-center '>
              Let`s work together
            </div> 
          </div>
        )}
      </main>*/}
    </Suspense>
  );
}