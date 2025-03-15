"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className=" px-6  bg-fixed md:px-16 lg:px-24 py-6">
      {/* About Me Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Hello! My name is Rachel Reyes, and this is a little corner where I
          share my passions, projects, and journey.
        </p>
      </div>

      {/* Hobbies Section */}
      <div className=" bg-[url('/Photos/tncwashington.jpg')] bg-cover bg-fixed bg-center mb-20"> {/* Increased spacing here */}
      <div className="bg-transparent/60 p-8 pb-16">

        {/* Outdoors Hobby */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-8 px-16 py-4">
          <Image
            src="/Photos/IMG_2043.JPG"
            width={400}
            height={400}
            className="rounded-lg shadow-lg justify-self-center m-4 "
            alt="Rachel and her boyfriend hugging dearly in front of their tent while camping"
          />
          <p className="text-lg leading-relaxed max-w-lg bg-mybrown/75 p-6 rounded-lg shadow-lg">
            <strong>Outdoors:</strong> I love exploring the beauties of nature
            through camping, mountain walks, and road trips with friends and
            family.
          </p>
        </div>

        {/* Books Hobby */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-8 px-16 py-4">
          <p className="text-lg leading-relaxed max-w-lg bg-mybrown/75 p-6 rounded-lg shadow-lg">
            <strong>Books:</strong> I&apos;m an avid reader who enjoys diving into
            the world of literature and sharing book recommendations.
          </p>
          <Image
            src="/Photos/MemoirsOfAGeisha.jpg"
            width={400}
            height={400}
            className="rounded-lg shadow-lg justify-self-center m-4"
            alt="Cover of Memoirs of a Geisha book"
          />
        </div>

        {/* Food Hobby */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-8 px-16 py-4">
          <Image
            src="/Photos/kennysbbfsdinner.JPG"
            width={400}
            height={400}
            className="rounded-lg shadow-lg justify-self-center"
            alt="Spread of food including a charcuterie board, steak, tomatoes, and salad"
          />
          <p className="text-lg leading-relaxed max-w-lg bg-mybrown/75 rounded-lg p-6">
            <strong>Food:</strong> Discovering new recipes, trying out new
            restaurants, and sharing interesting food experiences is my passion.
          </p>
        </div>

        {/* Health Hobby */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-8 px-16 py-4">
          <p className="text-lg leading-relaxed max-w-lg bg-mybrown/75 rounded-lg p-6">
            <strong>
              <Link href="/health" className="hover:underline">
                Health and Fitness
              </Link>
            </strong>{" "}
            Fitness is a big part of my life, and I enjoy creating workout
            routines, staying active, and sharing motivation with others.
          </p>
         <Image
            src="/Photos/rockymtncampsite.JPG"
            width={400}
            height={400}
            className="rounded-lg shadow-lg justify-self-center"
            alt="Big pine tree in front left with the mountains behind it with the sun shining through"
          /> 
        </div>

        {/* Coding Hobby */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-8 px-16 py-4">
          <Image
            src="/Photos/meinrock.JPG"
            width={400}
            height={400}
            className="rounded-lg shadow-lg justify-self-center"
            alt="Coding illustration"
          />
          <p className="text-lg leading-relaxed max-w-lg bg-mybrown/75 rounded-lg p-6">
            <strong>
              <Link href="/project" className=" hover:underline">
                Coding
              </Link>
            </strong>{" "}
            As an aspiring software engineer, I love creating projects that
            solve real-world problems and improve lives.
          </p>
        </div>
      </div>

    </div>
</div>
  );
}
