//app/landing/page.tsx
"use client";

import { useState } from "react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-[#f7f9fa] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between bg-[#0174d3] px-4 md:px-8 py-3 shadow-lg">
        <div className="flex items-center">
          <img
            src="/SA_logo1.jpg"
            alt="StudyAsan Logo"
            className="h-8 md:h-10 w-auto mr-2"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex ml-auto space-x-6 lg:space-x-7 font-semibold text-white text-sm lg:text-base">
          <a href="#home" className="hover:text-[#ffa800] transition">
            HOME
          </a>
          <a href="#about" className="hover:text-[#ffa800] transition">
            ABOUT
          </a>
          <a href="#contact" className="hover:text-[#ffa800] transition">
            CONTACT
          </a>
          <a href="#career" className="hover:text-[#ffa800] transition">
            CAREER
          </a>
          <a href="#blog" className="hover:text-[#ffa800] transition">
            BLOG
          </a>
          <a
            href="#login"
            className="ml-3 py-1 px-4 lg:px-6 rounded bg-white text-[#0176d3] font-bold hover:bg-[#ffa800] hover:text-white transition"
          >
            Log In
          </a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0176d3] text-white">
          <nav className="flex flex-col space-y-4 px-6 py-4 font-semibold">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ffa800] transition"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ffa800] transition"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ffa800] transition"
            >
              CONTACT
            </a>
            <a
              href="#career"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ffa800] transition"
            >
              CAREER
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ffa800] transition"
            >
              BLOG
            </a>
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center py-2 px-6 rounded bg-white text-[#0176d3] font-bold hover:bg-[#ffa800] hover:text-white transition"
            >
              Log In
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="w-full  py-12 md:py-20 lg:py-28 px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1765ad] mb-4 md:mb-6 drop-shadow px-2">
          Invest in Knowledge
        </h1>
        <p className="max-w-xs sm:max-w-lg md:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#49362e] font-medium mb-8 md:mb-10 px-4">
          Providing{" "}
          <span className="text-[#ffa800] font-bold">
            Free Basic English Speaking Skills
          </span>{" "}
          and{" "}
          <span className="text-[#ffa800] font-bold">
            Personality Development Skills
          </span>{" "}
          With Our Courses
        </p>
        <a href="#contact">
          <button className="bg-[#0176d3] text-white text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:bg-[#ffa800] hover:text-[#1765ad] transition duration-200">
            Get in Touch
          </button>
        </a>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#f7f9fa]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 lg:mb-20 text-[#1765ad]">
            Why Choose StudyAsan?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col items-center hover:scale-105 hover:shadow-3xl transition">
              <div className="flex items-center justify-center bg-[#0176d3] rounded-full h-16 w-16 md:h-20 md:w-20 mb-6 md:mb-8 shadow-xl">
                <span className="text-3xl md:text-4xl text-white">🎓</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#0176d3] mb-3 md:mb-4 tracking-tight text-center">
                Expert Instructors
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center max-w-xs">
                Top-qualified teachers to guide your growth every step.
              </p>
            </div>

            <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col items-center hover:scale-105 hover:shadow-3xl transition">
              <div className="flex items-center justify-center bg-[#ffa800] rounded-full h-16 w-16 md:h-20 md:w-20 mb-6 md:mb-8 shadow-xl">
                <span className="text-3xl md:text-4xl text-[#1765ad]">📚</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#ffa800] mb-3 md:mb-4 tracking-tight text-center">
                Personalized Learning
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center max-w-xs">
                Adaptive paths & real-time analytics for YOUR strengths.
              </p>
            </div>

            <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col items-center hover:scale-105 hover:shadow-3xl transition">
              <div className="flex items-center justify-center bg-[#68de7c] rounded-full h-16 w-16 md:h-20 md:w-20 mb-6 md:mb-8 shadow-xl">
                <span className="text-3xl md:text-4xl text-white">🤝</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#32a658] mb-3 md:mb-4 tracking-tight text-center">
                Interactive Community
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center max-w-xs">
                Collaborate, discuss & get support from peers and mentors.
              </p>
            </div>

            <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col items-center hover:scale-105 hover:shadow-3xl transition">
              <div className="flex items-center justify-center bg-[#a571e6] rounded-full h-16 w-16 md:h-20 md:w-20 mb-6 md:mb-8 shadow-xl">
                <span className="text-3xl md:text-4xl text-white">🚀</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#8b5cf6] mb-3 md:mb-4 tracking-tight text-center">
                Career-Focused
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center max-w-xs">
                Courses and mentorship designed for real world success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1765ad] mb-12 md:mb-16">
            Explore Our Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {/* Course Card 1 */}
            <div className="border border-gray-200 rounded-3xl shadow-lg p-5 md:p-6 hover:shadow-2xl transition cursor-pointer">
              <div className="flex items-center text-[#0176d3] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 md:h-8 md:w-8 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20h9M12 4v16"
                  />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold">
                  Kids Classes
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Playful and interactive classes for young learners to build
                solid foundations.
              </p>
              <button className="w-full bg-[#0176d3] text-white font-semibold py-2 rounded-xl hover:bg-[#125bb5] transition">
                Learn More
              </button>
            </div>

            {/* Course Card 2 */}
            <div className="border border-gray-200 rounded-3xl shadow-lg p-5 md:p-6 hover:shadow-2xl transition cursor-pointer">
              <div className="flex items-center text-[#0176d3] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 md:h-8 md:w-8 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6M12 9v6"
                  />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold">
                  Grade 4-8 Tuition
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Comprehensive subject coverage to boost your academic progress
                and presence.
              </p>
              <button className="w-full bg-[#0176d3] text-white font-semibold py-2 rounded-xl hover:bg-[#125bb5] transition">
                Learn More
              </button>
            </div>

            {/* Course Card 3 */}
            <div className="border border-gray-200 rounded-3xl shadow-lg p-5 md:p-6 hover:shadow-2xl transition cursor-pointer">
              <div className="flex items-center text-[#0176d3] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 md:h-8 md:w-8 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12h10M12 7v10"
                  />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold">
                  Grade 9-10 Tuition
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Prepare effectively for your board exams with expert guidance
                and mentorship.
              </p>
              <button className="w-full bg-[#0176d3] text-white font-semibold py-2 rounded-xl hover:bg-[#125bb5] transition">
                Learn More
              </button>
            </div>

            {/* Course Card 4 */}
            <div className="border border-gray-200 rounded-3xl shadow-lg p-5 md:p-6 hover:shadow-2xl transition cursor-pointer">
              <div className="flex items-center text-[#0176d3] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 md:h-8 md:w-8 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16M8 12h8"
                  />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold">
                  Grade 11-12 Tuition
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                In-depth subject support for science, commerce, & arts streams.
              </p>
              <button className="w-full bg-[#0176d3] text-white font-semibold py-2 rounded-xl hover:bg-[#125bb5] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f7f9fa] py-16 md:py-20 lg:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1765ad] mb-12 md:mb-16">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col">
              <p className="text-gray-700 mb-6 text-base md:text-lg italic">
                &quot;StudyAsan&apos;s expert instructors helped me clear the
                JEE with excellent guidance and personalized support.&quot;
              </p>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src="/Aman.jpg"
                  alt="Student 1"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-[#0176d3]">Aman Sharma</p>
                  <p className="text-sm text-gray-500">JEE Topper 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col">
              <p className="text-gray-700 mb-6 text-base md:text-lg italic">
                &quot;Leveraging StudyAsan&apos;s analytics and personalized
                learning, I doubled my accounts grades this year!&quot;
              </p>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src="/Priya.jpg"
                  alt="Student 2"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-[#0176d3]">Priya Raj</p>
                  <p className="text-sm text-gray-500">Commerce Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col">
              <p className="text-gray-700 mb-6 text-base md:text-lg italic">
                &quot;The live classes and community engagement made difficult
                topics fun and easy to grasp!&quot;
              </p>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src="/Rahul.jpg"
                  alt="Student 3"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-[#0176d3]">Rahul Verma</p>
                  <p className="text-sm text-gray-500">Science Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Revolution */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#f7f9fa]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-[#fa933e] drop-shadow-sm tracking-tight">
            JOIN OUR REVOLUTION...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl hover:-translate-y-2">
              <img
                src="/digital.jpg"
                alt="Digital Marketing"
                className="h-40 md:h-44 object-cover w-full"
              />
              <div className="px-4 py-6 flex-1 flex flex-col justify-end">
                <div className="shadow-lg rounded-md bg-[#0176d3] p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wider text-center leading-tight">
                    DIGITAL
                    <br />
                    MARKETING
                    <br />
                    COURSE
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl hover:-translate-y-2">
              <img
                src="/Web_dev.jpg"
                alt="Web Development"
                className="h-40 md:h-44 object-cover w-full"
              />
              <div className="px-4 py-6 flex-1 flex flex-col justify-end">
                <div className="shadow-lg rounded-md bg-[#0176d3] p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wider text-center leading-tight">
                    WEB
                    <br />
                    DEVELOPMENT
                    <br />
                    COURSE
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl hover:-translate-y-2">
              <img
                src="/MAD.jpg"
                alt="App Development"
                className="h-40 md:h-44 object-cover w-full"
              />
              <div className="px-4 py-6 flex-1 flex flex-col justify-end">
                <div className="shadow-lg rounded-md bg-[#0176d3] p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wider text-center leading-tight">
                    APP
                    <br />
                    DEVELOPMENT
                    <br />
                    COURSE
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl hover:-translate-y-2">
              <img
                src="/AIML.jpg"
                alt="AI/ML Courses"
                className="h-40 md:h-44 object-cover w-full"
              />
              <div className="px-4 py-6 flex-1 flex flex-col justify-end">
                <div className="shadow-lg rounded-md bg-[#0176d3] p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wider text-center leading-tight">
                    AI/ML
                    <br />
                    COURSES
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passive Skills */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#fa933e] font-extrabold mb-12 md:mb-16 text-center tracking-wide">
            Introducing passive skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-center">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center">
              <img
                src="/Musics.jpg"
                alt="Music & Instrument"
                className="h-56 md:h-64 object-cover w-full"
              />
              <div className="bg-[#0176d3] w-full p-5 md:p-6 py-6 md:py-8 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center italic mb-2">
                  music &<br />
                  instrument
                </h3>
                <div className="w-12 h-1 bg-white rounded my-2"></div>
                <p className="text-white font-semibold text-xs text-center">
                  Training By Professionals
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center">
              <img
                src="/Dance.jpg"
                alt="Dance & Entertainment"
                className="h-56 md:h-64 object-cover w-full"
              />
              <div className="bg-[#0176d3] w-full p-5 md:p-6 py-6 md:py-8 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center italic mb-2">
                  dance &<br />
                  entertainment
                </h3>
                <div className="w-12 h-1 bg-white rounded my-2"></div>
                <p className="text-white font-semibold text-xs text-center">
                  Training by Professionals
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center">
              <img
                src="/Artcreate.jpg"
                alt="Art & Creativity"
                className="h-56 md:h-64 object-cover w-full"
              />
              <div className="bg-[#0176d3] w-full p-5 md:p-6 py-6 md:py-8 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center italic mb-2">
                  art &<br />
                  creativity
                </h3>
                <div className="w-12 h-1 bg-white rounded my-2"></div>
                <p className="text-white font-semibold text-xs text-center">
                  Training by Professionals
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-10 flex justify-center">
            <button className="bg-[#0176d3] text-white font-semibold text-base md:text-lg px-6 md:px-7 py-3 md:py-4 rounded-md shadow-lg hover:bg-[#1450a3] transition">
              Start your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Explore Us */}
      <section className="bg-[#0176d3] py-16 md:py-20 lg:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Left Side: Text Content */}
          <div className="flex-1 max-w-lg text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 md:mb-8">
              Explore us
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              How are we different?
            </h3>
            <p className="text-white text-base md:text-lg mb-6">
              Emerging as a{" "}
              <span className="font-semibold">
                &quot;gesture of Studying&quot;
              </span>{" "}
              through which we shall unite the intrinsic skills of students and
              a unique way of teaching-learning association.
            </p>
            <p className="text-[#ebdc4c] text-xl md:text-2xl font-extrabold mt-2">
              Best for upcoming visionaries...
            </p>
          </div>
          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
            <div className="rounded-full bg-white shadow-xl p-3 md:p-4 flex justify-center items-center w-64 h-64 sm:w-80 sm:h-80 md:w-[320px] md:h-[320px]">
              <img
                src="/Creative.jpg"
                alt="Visionary"
                className="rounded-full object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-[#f7f9fa]">
        <div
          id="contact"
          className="max-w-xl mx-auto w-full bg-white rounded-2xl shadow-xl border border-[#ffe2a7] p-6 md:p-8 mx-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#fa933e] mb-4 md:mb-6 text-center">
            Get in Touch
          </h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 px-4 py-2 md:py-3 rounded-md border border-[#ffe2a7] focus:outline-none focus:border-[#0176d3]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 px-4 py-2 md:py-3 rounded-md border border-[#ffe2a7] focus:outline-none focus:border-[#0176d3]"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 md:py-3 rounded-md border border-[#ffe2a7] focus:outline-none focus:border-[#0176d3]"
            />
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-2 md:py-3 rounded-md border border-[#ffe2a7] focus:outline-none focus:border-[#0176d3]"
            />
            <textarea
              placeholder="Type your message here"
              className="w-full px-4 py-2 md:py-3 rounded-md border border-[#ffe2a7] focus:outline-none focus:border-[#0176d3] resize-none"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="mt-2 w-full bg-[#0176d3] text-white font-bold py-2 md:py-3 rounded-md hover:bg-[#125bb5] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1765ad] text-white pt-10 pb-3 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Row: Logo + Social + Small Intro */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
            <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/SA_logo.jpg"
                  alt="StudyAsan Logo"
                  className="h-8 w-8"
                />
                <span className="font-bold text-lg">
                  <span className="text-[#ffa800]">Study</span>
                  <span className="text-white">Asan</span>
                </span>
              </div>
              <div className="flex gap-3 mb-4">
                <a
                  href="#"
                  aria-label="facebook"
                  className="hover:text-[#ffa800] transition"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  aria-label="instagram"
                  className="hover:text-[#ffa800] transition"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  aria-label="youtube"
                  className="hover:text-[#ffa800] transition"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
              <p className="text-xs text-gray-100 max-w-xs text-center md:text-left">
                Spreading all over India we have built up the stockroom of smart
                knowledge along with the best faculty and experts.
              </p>
            </div>

            {/* Services + Contact */}
            <div className="flex-1 flex flex-col sm:flex-row gap-8 md:gap-12 justify-center text-center sm:text-left">
              {/* Services */}
              <div>
                <h4 className="text-[#ffa800] text-md font-semibold mb-3">
                  Services
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-[#ffa800] transition">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#ffa800] transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#ffa800] transition">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#ffa800] transition">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#ffa800] transition">
                      News
                    </a>
                  </li>
                </ul>
              </div>
              {/* Contact */}
              <div>
                <h4 className="text-[#ffa800] text-md font-semibold mb-3">
                  Contact
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>📞 +91 1234567890</li>
                  <li>
                    <a
                      href="mailto:info@studyasan.com"
                      className="hover:text-[#ffa800] transition"
                    >
                      info@studyasan.com
                    </a>
                  </li>
                  <li>Working hours: 10am to 7pm</li>
                  <li>
                    <a href="#" className="hover:text-[#ffa800] transition">
                      Help & Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#ffa800] transition">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* About + Terms + Description */}
          <div className="text-xs max-w-4xl mx-auto text-gray-200 mb-6 leading-relaxed text-center md:text-left">
            <h5 className="text-[#ffa800] font-bold mb-2">ABOUT US</h5>
            <p>
              StudyAsan is a signature of study devoted to perfection in
              achieving &quot;THE PATH TO SUCCESS&quot;. Spreading all over
              India we have built up the stockroom of smart knowledge along with
              the best faculty and experts.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-t border-white/20 my-4" />

          {/* Copyright Row */}
          <div className="text-center text-xs text-gray-200">
            Copyright © 2025 StudyAsan All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
