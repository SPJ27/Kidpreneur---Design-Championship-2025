import React from 'react'

const About = () => {
  return (
    <div>
      <section className="py-16 px-6 pt-28 bg-gradient-to-b from-[#fff0dc] to-[#ffe4b3] min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              About{" "}
              <span className="bg-gradient-to-br from-orange-600 to-red-500 bg-clip-text text-transparent">
                Kidpreneur
              </span>
            </h1>
            <p className="text-base md:text-md font-medium text-gray-500">
              Empowering students to share their startup ideas and inspire the next generation of innovators.
            </p>
          </div>

          <div className="text-gray-700 space-y-6 text-base md:text-md leading-relaxed">
            <p>
              <strong>Kidpreneur</strong> is a platform designed for young minds to showcase their startup ideas, creativity, and entrepreneurial spirit. 
              We believe every student has the potential to build something impactful and inspire others along the way.
            </p>

            <p>
              Whether it's a new app, a social initiative, or a creative business, Kidpreneur gives students the stage to present their ideas, 
              gain visibility, and connect with like-minded peers.
            </p>

            <p>
              Our mission is simple — to create a community where innovation meets opportunity. 
              We want to make it easier for students to take their first step into entrepreneurship, 
              share their journey, and learn from each other.
            </p>

            <p>
              Kidpreneur is not just about ideas, it's about turning dreams into action, 
              fostering confidence, and inspiring a future filled with creators and changemakers.
            </p>

            <p>
              Kidpreneur is a project developed by Saksham Jain for the Design Championship 2025.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-10">
            <div className="text-center sm:text-left">
              <p className="text-orange-600 font-semibold text-lg">
                Saksham Jain
              </p>
              <p className="text-gray-500 text-sm">Developer, Kidpreneur</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
