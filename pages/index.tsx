import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    //<div className={`grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 `}>
    <div >
      <div className=" bg-[url('/Photos/88C71B99-4026-4BD4-8BB5-2838D395D929.jpg')] bg-fixed bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <div className="bg-transparent/60">
        {/* Welcome Section */}
        <div className="text-center p-10">
          <h1 className="text-4xl font-bold">Welcome to my personal website!</h1>
          <p className="mt-2 text-2xl shadow ">
            Hi! My name is Rachel Reyes from Denver, Colorado and currently a senior in college. Im looking for bigger opportunities to grow my software engineering skills after I graduate this year.
            This is little about the outdoors, good reads, great food, fitness, and
            software engineering.
          </p>
        </div>

       

        {/* Personal Images and Videos */}
        <div className="text-center flex flex-col justify-center items-center mt-4 n">
          <h2 className="text-2xl font-semibold ">This is me!</h2>

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
        </div>
      </div>
      </div>
      <footer className="py-10 ">
      {/* Social Media Links */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Follow Me on Social Media</h2>
              <div className="mt-2 flex items-center space-x-2 justify-center">
                  <Link
                    href="https://www.instagram.com/rachel.reyes24/nk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Link>
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
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
               
                  <Link
                    href="https://www.linkedin.com/in/rachel-reyes2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                  <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                  </svg>
              </div>
            </div>         

      </footer>
    </div>
  );
}