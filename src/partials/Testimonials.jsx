import React from "react";

import TestimonialImage from "../images/clients/rick.webp";

function Testimonials() {
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
              We're a great organization because our team members are great, we
              combine a select group of people with skilled and talented
              crafting showcased on their public profiles on
            </p>
          </div>

          {/* Items */}
          <div className="flex items-center space-x-4 md:space-x-8 justify-center max-w-sm md:max-w-4xl mx-auto">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img
                className="h-8 filter opacity-50"
                src="/src/images/github.webp"
              />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img
                className="h-8 filter opacity-50"
                src="/src/images/linkedin.webp"
              />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img
                className="h-8 filter opacity-50"
                src="/src/images/upwork.webp"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
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
                  <img
                    className="relative rounded-full"
                    src={TestimonialImage}
                    width="96"
                    height="96"
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “These guys are awesome, quick and effective, they were
                  working non-stop to get the things done, I got a
                  fully-featured website and app at the same time, can't be more
                  happy. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Rick Halls
                </cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <a className="text-blue-600 hover:underline" href="#0">
                    @ExtraNeutron
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="flex items-start justify-center space-x-4 md:flex-row flex-col mb-20">
        <div x-data="lw" class="flex justify-center items-start">
          <div
            class="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              class="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.5] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                class="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/manuel.webp"
                alt="Avatar"
              />
            </figure>
            <header class="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 class="font-semibold text-2xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Manuel Hernandez
              </h3>
              <p class="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>Founder & CIO</strong> | Front-end Dev & DevOps
              </p>
            </header>

            <ul
              class="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://serverket.dev"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-link-2 text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://github.com/serverket"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-github-circled text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://t.me/Serverket"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-telegram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.linkedin.com/in/serverket"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-linkedin text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div x-data="lw" class="flex justify-center items-start">
          <div
            class="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              class="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.5] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                class="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/karen.webp"
                alt="Avatar"
              />
            </figure>
            <header class="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 class="font-semibold text-2xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Karen Barillas
              </h3>
              <p class="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>CDO</strong> | Graphic Designer
              </p>
            </header>

            <ul
              class="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://www.instagram.com/kbbmdesign"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-instagram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://www.behance.net/karenbarillas2"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-behance text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.linkedin.com/mwlite/in/karen-barillas-466272162"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-linkedin text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div x-data="lw" class="flex justify-center items-start">
          <div
            class="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-[#00a6ffff]/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              class="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#00a6ffff] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#00a6ffff] before:-z-[1]
                       group-hover:before:scale-[2.5] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <img
                class="rounded-full block max-w-full bg-[#00a6ffff] object-cover z-10 relative"
                src="/team/jano.webp"
                alt="Avatar"
              />
            </figure>
            <header class="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 class="font-semibold text-2xl text-center text-[#00a6ffff] mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                Alejandro Pineda
              </h3>
              <p class="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">
                <strong>Lead Front-end Dev</strong> | Full Stack Dev
              </p>
            </header>

            <ul
              class="flex justify-center space-x-4 mt-16 text-[#00a6ffff]
                   relative"
            >
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://janopineda.dev"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-link-2 text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a
                  href="https://github.com/janopineda"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-github-circled text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a
                  href="https://t.me/janopineda"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-telegram text-md hover:underline hover:underline-offset-4" />
                </a>
              </li>
              <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                <a
                  href="https://www.facebook.com/codephoenix777"
                  className="pointer-cursor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-facebook text-md hover:underline hover:underline-offset-4" />
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
