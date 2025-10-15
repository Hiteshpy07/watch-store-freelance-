import React from "react";

const StorySection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-pink-50 py-20 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12">
          Our Journey Through Time
        </h2>

        <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-16 space-y-6 border-t-4 border-blue-400">
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Every great story starts small — ours began in the early 1990s, when times were tough and dreams were harder to chase. In the heart of that era, one young man — our founder, <span className="font-semibold text-blue-600">Rajkumar Chhatwani</span> — dared to dream big. With a simple repair shop and a few tools, he set out to build something lasting — a legacy that would stand the test of time.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            From those humble beginnings, we’ve evolved into a trusted name for wristwatches and wall clocks — a name that has come to symbolize honesty, skill, and dedication.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Today, we’re proud to offer something for everyone and for every occasion. From iconic global names like <span className="font-semibold text-blue-600">Fossil</span> and <span className="font-semibold text-blue-600">Kenneth Cole</span> to trusted Indian classics like <span className="font-semibold text-blue-600">Titan</span> and <span className="font-semibold text-blue-600">Sonata</span>, our range reflects every shade of ambition and occasion, keeping you on time and in style.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Our timepieces adorn countless wrists and walls, each one reflecting who you are and where you’re headed. Because for us, time is personal — and so are you. Our customers aren’t just clients; they’re family. Every purchase, every visit, every shared story continues to shape who we are.
          </p>

          <p className="text-gray-900 text-lg sm:text-xl leading-relaxed font-semibold border-l-4 border-blue-500 pl-4">
            We don’t just measure time. We celebrate it — one masterpiece at a time. As we move forward, our vision remains the same — to keep creating timepieces that don’t just tell time, but inspire people to make the most of it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
