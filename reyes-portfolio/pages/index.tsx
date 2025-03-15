// pages/index.tsx
'use client';

import Image from 'next/image';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import ParallaxProviderWrapper from '../Components/ParallaxWrapper';

const Home = () => {
  return (
    <ParallaxProviderWrapper>
      <ParallaxBanner className="h-screen">
        <ParallaxBannerLayer image="/Photos/88C71B99-4026-4BD4-8BB5-2838D395D929.jpg" speed={-20} />
        <ParallaxBannerLayer speed={-10}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Welcome to my personal website!</h1>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
      <div className="bg-transparent/60">
        {/* Welcome Section */}
        <div id="welcome-section" className="text-center p-10">
          <h1 className="text-4xl font-bold">Welcome to my personal website!</h1>
          <p className="mt-2 text-2xl shadow">
            Hi! My name is Rachel Reyes from Denver, Colorado, and I'm currently a senior in college. I'm looking for bigger opportunities to grow my software engineering skills after I graduate this year. This is a little about the outdoors, good reads, great food, fitness, and software engineering.
          </p>
        </div>
        {/* Personal Images */}
        <div id="middle-section" className="text-center flex flex-col justify-center items-center mt-4">
          <h2 className="text-2xl font-semibold">This is me!</h2>
          {/* Image 1 */}
          <div className="my-4 w-full flex justify-center">
            <Image
              src="/Photos/me.JPG"
              width={320}
              height={420}
              alt="Picture of me"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Image 2 */}
          <div className="my-4">
            <Image
              src="/Photos/rockymountainpic.JPG"
              width={350}
              height={420}
              alt="Picture of the Rocky Mountains through a car window"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Image 3 */}
          <div id="section4" className="my-4">
            <Image
              src="/Photos/88C71B99-4026-4BD4-8BB5-2838D395D929.jpg"
              width={350}
              height={420}
              alt="Picture of a bridge with trees around it in Washington"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <footer className="py-10">
        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Follow Me on Social Media</h2>
          <div className="mt-2 flex items-center space-x-2 justify-center">
            <a
              href="https://www.instagram.com/rachel.reyes24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clipRule="evenodd"
              />
            </svg>
            <a
              href="https://www.linkedin.com/in/rachel-reyes2"
              target="_blank"
              rel="noopener noreferrer"