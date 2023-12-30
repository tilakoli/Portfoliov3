'use client';
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Loader from './loading'; 
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import ScrollSection from '../components/HorizontalScrollSection';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 5500;

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <main>
        {loading ? (
          <Loader />
        ) : (
         
          <div>
            <Intro />

            <Description />
            <div className=' w-[99%] text-white uppercase flex justify-center items-center'>
              <Projects />
            </div>
            <ScrollSection />
            <div className=' w-[99%] h-screen text-white uppercase flex justify-center items-center '>
              Let`s work together
            </div>
          </div>
        )}
      </main>
    </Suspense>
  );
}