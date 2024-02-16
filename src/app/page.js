'use client';
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Loader from './loading'; 
import LandingPageIntro from '../components/Intro/LandingPageIntro';
import Description from '../components/Description';
import Projects from '../components/Projects/Projects';
import ScrollSection from '../components/HorizontalScrollSection';
import { useTheme } from 'next-themes';
import { FALLING_NAME_ANIMATION_TEXT } from '../components/Constants';

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
      <LandingPageIntro animateText={FALLING_NAME_ANIMATION_TEXT} />
      <Description /> 
      <Projects />
      <ScrollSection />
     {/*  <main>s
        {loading ? (
          <Loader />
        ) : (
          <> </>
        )}
      </main>*/}
    </Suspense>
  );
}