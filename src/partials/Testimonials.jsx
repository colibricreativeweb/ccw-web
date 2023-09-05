import React, { useRef } from "react";

import TestimonialImage1 from "../images/clients/biomelifescan.webp";
import jaime from "../images/clients/jaime.webp";
import TestimonialImage2 from "../images/clients/longyushop.webp";
import mihai from "../images/clients/mihai.webp";

function Testimonials() {
  const slider = useRef();
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">
              We're{" "}
              <span className="underline underline-offset-4 decoration-blue-400">
                Verified Professionals
              </span>{" "}
              trusted by companies all over the world
            </h2>
            <p className="text-xl text-gray-600 -mb-8" data-aos="zoom-y-out">
              We're a great organization because our team members are that good, we
              combine a select group of people with skilled and talented
              crafting showcased on their public profiles on
            </p>
          </div>

          {/* Items */}
          <div className="flex md:flex-row flex-col items-center md:space-x-8 justify-center max-w-sm md:max-w-4xl mx-auto">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="h-8 filter opacity-50" src="/corps/github.webp" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img
                className="h-8 filter opacity-50"
                src="/corps/linkedin.webp"
              />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="h-8 filter opacity-50" src="/corps/upwork.webp" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img
                className="h-8 filter opacity-50"
                src="/corps/behance.webp"
              />
            </div>
          </div>

          {/* Testimonials Container */}
          <div className="sm:0 mx-0 sm:mx-24 drop-shadow-md">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div
                ref={slider}
                className="snap-x overflow-hidden scroll-smooth h-full flex items-center justify-start"
              >
                <div className="snap-center flex flex-shrink-0 w-full">
                  {/* Testimonials */}
                  <div
                    className="max-w-3xl mx-auto pt-12 md:pt-20"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex items-start rounded bg-white">
                      {/* Testimonial */}
                      <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                        <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                          <svg
                            className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                            viewBox="0 0 64 64"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                          </svg>
                          <div className="flex flex-row">
                            <img
                              className="w-24 relative rounded-full z-10"
                              src={jaime}
                              alt="Testimonial 01"
                            />
                          </div>
                        </div>
                        <blockquote className="text-xl font-medium mb-4">
                          “These guys are awesome, quick and effective, they
                          were working non-stop to get the things done, I got a
                          fully-featured website and store at the same time,
                          can't be more happy.“
                        </blockquote>
                        <cite className="block font-bold text-lg not-italic mb-1">
                          Jaimes Gamez
                        </cite>
                        <div className="text-gray-600 flex items-center justify-center flex-row">
                          <span>CEO & Founder</span> |{" "}
                          <a
                            className="text-blue-600 hover:underline pointer-cursor"
                            href="https://biomelifescan.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="w-8 relative rounded-full z-20"
                              src={TestimonialImage1}
                              alt="Testimonial 01"
                            />
                          </a>
                          <a
                            className="text-blue-600 hover:underline pointer-cursor"
                            href="https://biomelifescan.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            BioMe Lifescan
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="snap-center flex flex-shrink-0 w-full">
                  {/* Testimonials */}
                  <div
                    className="max-w-3xl mx-auto pt-12 md:pt-20"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex items-start rounded bg-white">
                      {/* Testimonial */}
                      <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0" id="testimonials">
                        <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                          <svg
                            className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                            viewBox="0 0 64 64"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                          </svg>
                          <div className="flex flex-row">
                            <img
                              className="w-24 relative rounded-full z-10"
                              src={mihai}
                              alt="Testimonial 01"
                            />
                          </div>
                        </div>
                        <blockquote className="text-xl font-medium mb-4">
                          “From zero to having a company, they did all the
                          branding and got everything up and running in a snap!
                          We'll definitively keep working together.“
                        </blockquote>
                        <cite className="block font-bold text-lg not-italic mb-1">
                          Mi Hai
                        </cite>
                        <div className="text-gray-600 flex items-center justify-center flex-row">
                          <span>COO & Founder</span> |{" "}
                          <a
                            className="text-blue-600 hover:underline pointer-cursor"
                            href="https://instagram.com/longyu.shop"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="w-8 relative rounded-full z-20"
                              src={TestimonialImage2}
                              alt="Testimonial 01"
                            />
                          </a>
                          <a
                            className="text-blue-600 hover:underline pointer-cursor"
                            href="https://instagram.com/longyu.shop"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Longyu Shop
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row drop-shadow-sm mt-1">
                <button
                  onClick={() => (slider.current.scrollLeft -= 1000)}
                  className="p-1 bg-white hover:bg-gray-100 rounded-l-xl"
                >
                  <i className="icon-left-open text-blue-400" />
                </button>
                <button
                  onClick={() => (slider.current.scrollLeft += 1000)}
                  className="p-1 bg-white hover:bg-gray-100 rounded-r-xl"
                >
                  <i className="icon-right-open text-blue-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div
        className="md:grid md:grid-cols-3 lg:grid-cols-3 2xl:flex items-center md:items-start justify-center space-x-0 md:flex-row flex-col mb-20"
        id="team"
      >
        <div x-data="lw" className="flex justify-center items-start">
          <div
            className="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              className="relative w-40 h-40 md:w-36 md:h-36 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.7] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                className="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/alejandro.webp"
                alt="Avatar"
              />
            </figure>
            <header className="motion-safe:translate-y-2 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 className="font-semibold text-xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Manuel Castro
              </h3>
              <p className="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>COO & Founder</strong> | Full Stack Dev
              </p>
            </header>

            <ul
              className="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://github.com/kwgeniusz"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github-circled text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://t.me/kwgeniusz"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-telegram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.linkedin.com/in/kwgeniusz"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div x-data="lw" className="flex justify-center items-start">
          <div
            className="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              className="relative w-40 h-40 md:w-36 md:h-36 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.7] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                className="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/manuel.webp"
                alt="Avatar"
              />
            </figure>
            <header className="motion-safe:translate-y-2 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 className="font-semibold text-xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Manuel Hernandez
              </h3>
              <p className="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>CIO & Founder</strong> | Front-end Dev & DevOps
              </p>
            </header>

            <ul
              className="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://serverket.dev"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-link-2 text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://github.com/Serverket"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github-circled text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://t.me/Serverket"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-telegram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.linkedin.com/in/serverket"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div x-data="lw" className="flex justify-center items-start">
          <div
            className="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              className="relative w-40 h-40 md:w-36 md:h-36 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.7] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                className="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/roberto.webp"
                alt="Avatar"
              />
            </figure>
            <header className="motion-safe:translate-y-2 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 className="font-semibold text-xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Roberto Perez
              </h3>
              <p className="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>CTO</strong> | Back-end Dev
              </p>
            </header>

            <ul
              className="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://github.com/R3is3rsf/"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github-circled text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://t.me/R3is3rsf"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-telegram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.linkedin.com/in/r3is3rsf/"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div x-data="lw" className="flex justify-center items-start">
          <div
            className="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              className="relative w-40 h-40 md:w-36 md:h-36 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.7] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                className="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/jano.webp"
                alt="Avatar"
              />
            </figure>
            <header className="motion-safe:translate-y-2 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 className="font-semibold text-xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Alejandro Pineda
              </h3>
              <p className="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>Lead Developer</strong> | Full Stack Dev
              </p>
            </header>

            <ul
              className="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://janopineda.dev"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-link-2 text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://github.com/janopineda"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github-circled text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://t.me/janopineda"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-telegram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.facebook.com/codephoenix777"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-facebook text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.linkedin.com/in/alejandro-pineda-76074b17"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div x-data="lw" className="flex justify-center items-start">
          <div
            className="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              className="relative w-40 h-40 md:w-36 md:h-36 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.7] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                className="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/jeff.webp"
                alt="Avatar"
              />
            </figure>
            <header className="motion-safe:translate-y-2 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 className="font-semibold text-xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Jeff Bustamante
              </h3>
              <p className="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>Lead Developer</strong> | Back-end Dev
              </p>
            </header>

            <ul
              className="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://github.com/J3f3er"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github-circled text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://t.me/J3f3er"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-telegram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://linkedin.com/in/jefferson-bustamante-hurtado-844218169"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div x-data="lw" className="flex justify-center items-start">
          <div
            className="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              className="relative w-40 h-40 md:w-36 md:h-36 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.7] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                className="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/karen.webp"
                alt="Avatar"
              />
            </figure>
            <header className="motion-safe:translate-y-2 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 className="font-semibold text-xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Karen Barillas
              </h3>
              <p className="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>CDO</strong> | Graphic Designer
              </p>
            </header>

            <ul
              className="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://www.instagram.com/kbbmdesign"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-instagram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://www.behance.net/karenbarillas2"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-behance text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.linkedin.com/mwlite/in/karen-barillas-466272162"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
