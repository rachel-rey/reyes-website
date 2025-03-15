import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen p-6">

      {/* Title */}
      <div className="text-center ">
        <h1 className="text-4xl font-bold mb-6">My Projects and Internship Experience</h1>
      </div>

      {/* Internship Experience */}
      <div className="px-16 py-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Internship Experience</h2>
        <div className="">
          <ul className="space-y-8">
            {/* Blizzard Entertainment */}
            <li className="p-6 shadow-lg bg-[#009AE4] rounded-lg text-black">
              <h3 className="text-xl font-bold">
                <Link
                  href="https://www.blizzard.com/en-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  Blizzard Entertainment
                </Link>
              </h3>
              <div className="flex justify-center mt-4">
                <Image
                  src="/Photos/IMG_3982.JPG"
                  alt="Two monitors side by side with a Mac laptop on the left and an Alienware desktop on the right"
                  width={256}
                  height={256}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="mt-4">
                During my time at Blizzard, I learned more than I ever thought possible.
                Not only about coding, but also about living alone in a new state, adapting
                to new driving habits, trying new foods, and meeting new people. I gained
                immense technical knowledge in software engineering and learned from senior
                developers. My primary task was to improve our internal system for sending
                builds out for testing. I accomplished this by automating processes using
                Jenkins, Google Cloud Functions, and AWS S3 buckets. I gained experience
                with GCP, Jenkins, and Groovy.
              </p>
            </li>

            {/* Lockheed Martin Space */}
            <li className="p-6 shadow-lg bg-[#005BAD] rounded-lg">
              <h3 className="text-xl font-bold">
                <Link
                  href="https://www.lockheedmartin.com/en-us/capabilities/space.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Lockheed Martin Space
                </Link>
              </h3>
              <div className="flex justify-center mt-4">
                <Image
                  src="/Photos/orion.JPG"
                  alt="Two monitors side by side with a Mac laptop on the left and an Alienware desktop on the right"
                  width={256}
                  height={256}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="p-6">
                <p className="mt-4">
                  My internship at Lockheed Martin was a transformative experience, starting
                  right out of high school with little coding experience. Over three years,
                  I contributed to projects ranging from UI/UX development to innovative
                  firefighting solutions.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>
                    <strong>Year 1:</strong> Designed and developed the UI for an iPad
                    application incorporating Augmented Reality (AR) and Generative Design.
                  </li>
                  <li>
                    <strong>Year 2:</strong> Collaborated with a full-time team to implement
                    features for an in-house application supporting a proprietary
                    three-screen device, using Unity to enhance functionality.
                  </li>
                  <li>
                    <strong>Year 3:</strong> Developed a proof-of-concept for firefighting
                    solutions, integrating real-time weather data and location information
                    displayed on both a website and AR-enabled HoloLens.
                  </li>
                </ul>
              </div>
            </li>
          </ul>


        </div>
      </div>

      {/* Personal Projects */}
      <div className="px-16 py-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Personal Projects</h2>
        <ul className="space-y-8">
          <li>
            <h3 className="text-xl font-bold">Solar System</h3>
            <p className="mt-2">
              This project simulates the solar system using OpenGL and JavaScript. It
              showcases my ability to create interactive graphics and simulations.
            </p>
            <Link
              href="[Project Link]"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              View Project
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}
