import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-papayawhip min-h-screen text-white-800 p-6">

      {/* Contact Form */}
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Contact Me!</h1>
        <form
          action="mailto:rachelreyes2403@gmail.com"
          method="post"
          encType="text/plain"
          className="space-y-4 max-w-lg mx-auto"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-lg ">
              Comments:
            </label>
            <textarea
              name="comment"
              id="comment"
              rows={4} // Use curly braces for numeric values in JSX
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="p-8">
            <button
              type="submit"
              className="bg-green-800 text-white py-2 px-4 rounded hover:text-green-800 hover:bg-white transition ease-out duration-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>

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
               
                  <Link
                    href="https://www.linkedin.com/in/rachel-reyes2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                  </svg>
              </div>
            </div>   
    </div>
  );
}
