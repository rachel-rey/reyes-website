import Image from "next/image";


export default function HealthAndWellness() {
  return (
    <div className="p-6 lg:px-16 lg:mx-32">


      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">
          More on Fitness, Food, and Mental Wellness
        </h1>
      </div>

      {/* Fitness Section */}
      <div className="">
      <div className="mb-12 p-6 lg:px-32 bg-[#899878]/75 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Fitness</h2>
        <p>
          I love weightlifting and staying active. It’s a big part of my life,
          even though I don’t have photos to share of my routines. My passion
          for fitness extends to enjoying outdoor activities like camping and
          hiking, which keep me grounded and connected to nature.
        </p>
        <div className="flex justify-center mt-4 p-8">
          <Image
            src="/Photos/riverntrees.JPG"
            alt="A beautiful forest with a river in the middle"
            width={640}
            height={480}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
      </div>

      {/* Food Section */}
      <div className="mb-12 p-6 lg:px-32 bg-mybrown rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Food</h2>
        <p>
          Trying new foods and experimenting with recipes is a joy for me. From
          discovering unique cuisines to indulging in comforting meals, food is
          a celebration of life’s flavors.
        </p>
        <div className="flex justify-center mt-4 p-8">
          <Image
            src="/Photos/IMG_4385.jpg"
            alt="Delicious Japanese food"
            width={640}
            height={480}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mental Wellness Section */}
      <div className="p-6 lg:py-16 lg:px-32 bg-[#899878]/75 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Mental Wellness and Learning</h2>
        <p>
          Staying mentally balanced and continuously learning are core parts of
          my life. I find solace in nature, like admiring the beauty of flowers,
          and I believe that growth comes from challenging yourself with new
          knowledge and experiences.
        </p>
        <div className="flex justify-center mt-4 p-8">
          <Image
            src="/Photos/redAndorangeflower.JPG"
            alt="A vibrant flower"
            width={640}
            height={480}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
