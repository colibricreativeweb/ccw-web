import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import MarketingCharacter from "../images/marketing-character.webp";
import MarketingElements from "../images/marketing-elements.webp";
import GDCharacter from "../images/graphic-design-characters.webp";
import GDElements from "../images/graphic-design-elements.webp";
import WDCharacters from "../images/web-development-characters.webp";
import WDElements from "../images/web-development-elements.webp";

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative" id="services">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">
              From what your imagination and wit can conceive to a
              fully-featured corporate structure and branding, we go with you
              all the way.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">
                  TRUST THE{" "}
                  <span className="bg-blue-400 pl-2 pr-2 text-white pb-1">
                    EXPERTS
                  </span>
                </h3>
                <p className="text-xl text-gray-600">
                  Our network of skilled professionals can provide cutting-edge
                  technology-driven solutions and projects no matter the scale
                  of your business or brand.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-blue-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Digital Marketing
                    </div>
                    <div className="text-gray-600">
                      We help you reach your target audience, generate leads,
                      and boost sales from the very beginning of your brand.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <i className="icon-megaphone" />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-blue-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Graphic Design & UX/UI Prototyping
                    </div>
                    <div className="text-gray-600">
                      Stand out from the competition with our stunning visuals
                      and intuitive user interfaces. We create the perfect look
                      and feel for your website or app.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <i className="icon-brush" />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-blue-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Web Development
                    </div>
                    <div className="text-gray-600">
                      Build a fast, attractive and secure website or app with
                      the latest technology, get ready to conquer all platforms.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0">
                    <i className="icon-code-2 text-md" />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col md:mt-48">
                    <img
                      className="md:max-w-none mx-auto transform animate-float rounded z-10"
                      src={MarketingElements}
                      width="500"
                      height="402"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 z-20"
                      src={MarketingCharacter}
                      width="500"
                      height="402"
                      alt="Element"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col md:mt-52">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={GDCharacter}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full transform animate-float left-0"
                      src={GDElements}
                      width="500"
                      height="44"
                      alt="Element"
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col md:mt-52">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={WDCharacters}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src={WDElements}
                      width="500"
                      height="44"
                      alt="Element"
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
