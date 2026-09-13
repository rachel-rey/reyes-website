"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <div className=" px-6 bg-fixed md:px-16 lg:px-24 py-6">
      {/* About Me Section */}
      <div className="text-center mb-16 justify-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Hello! My name is Rachel Reyes, and this is a little corner where I
          share my passions, projects, and journey.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/Photos/dtSeattleViewfromFerry.JPG"
          alt="Photo of Seattle Skyline during the day on a ferry"
          width={400}
          height={400}
          className="h-auto rounded-md justify-center items-center"
        />
      </div>
        <p className="text-lg">
          Growing up in Colorado, I love exploring the beauties of nature through camping, mountain walks and road trips.
          It&apos;s part of the reason I moved to Washington as I wanted to explore of what Mother Nature had to offer in the world.
          Before moving into the city of Seattle, I was an avid gardener and grew all different kinds of plants on the balconey of my childhood duplex.
          I grew up with my older sister and my mom where we always would joke that we were 3 sisters. Although I have a small family, I&apos;m very grateful for all we have overcome and continue to do so.

          Reading is one of my favorite vices, and while in this day and age of technology it can be a little hard to settle, I always find myself emersed in a good book. Currently I am reading <strong> East of Eden</strong>.
          
          Food. I&apos;m blessed to be able to move my body and get my exercise in as I constantly think of food and my next meal. Not only
          do I love to cook and find new recipes, but I also love the experiences with eating at a new restaurant and finding new grocery stores. 
          I think if I could travel and just eat and cook that would be amazing and who knows maybe I will someday.

          In the meantime, one of my other passions is technology and being able to solve real-world problems.
          There&apos;s so much to learn and grow from Computer Science and I&apos;m constantly reminded of something bigger than myself when I learn and work with new stuff.
        </p>
    </div>
  );
}
