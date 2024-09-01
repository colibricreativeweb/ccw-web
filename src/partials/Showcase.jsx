import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BioD from '../images/clients/BioMeD.png';
import BioM from '../images/clients/BioMeM.png';
import LongD from '../images/clients/LongD.png';
import LongM from '../images/clients/LongM.png';
import GerboD from '../images/clients/GerboD.png';
import GerboM from '../images/clients/GerboM.png';
import MHHD from '../images/clients/MHHD.png';
import MHHM from '../images/clients/MHHM.png';

const AppleMockup = ({ interval = 5000 }) => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [isHovered, setIsHovered] = useState(false);  
  const timerRef = useRef(null);  

  const projects = [  
    {  
      name: "BioMe Lifescan",  
      website: "https://www.biomelifescan.com",  
      screenshots: {  
        desktop: BioD,  
        mobile: BioM,  
      },  
      technologies: ["wordpress", "php", "mysql"]  
    },
    {  
      name: "Longyu Shop",  
      website: "https://www.longyu.store",  
      screenshots: {  
        desktop: LongD,  
        mobile: LongM,  
      },  
      technologies: ["react", "tailwindcss", "express"]  
    },
    {  
      name: "Gerbo Software",  
      website: "https://gerbo-software.up.railway.app/",  
      screenshots: {  
        desktop: GerboD,  
        mobile: GerboM,  
      },  
      technologies: ["flask", "python", "tailwindcss"]  
    },
    {  
      name: "Maria Hidalgo Homes",  
      website: "https://www.mariahidalgo.homes/",  
      screenshots: {  
        desktop: MHHD,  
        mobile: MHHM,  
      },  
      technologies: ["vitejs", "pwa", "react", "tailwindcss"]  
    },  
    // Add more projects as needed  
  ];  

  const technologyIcons = {  
    react: "corps/reactjs.svg",
    angular: "corps/angularjs.svg",
    vuejs: "corps/vuejs.svg",
    nodejs: "corps/nodejs.svg",
    vitejs: "corps/vitejs.svg",
    python: "corps/python.svg",
    flask: "corps/flask.svg",
    django: "corps/django.svg",
    ruby: "corps/ruby.svg",
    php: "corps/php.svg",
    java: "corps/java.svg",
    dotnet: "corps/dotnet.svg",
    golang: "corps/golang.svg",
    typescript: "corps/typescript.svg",
    javascript: "corps/javascript.svg",
    html5: "corps/html5.svg",
    css3: "corps/css3.svg",
    sass: "corps/sass.svg",
    tailwindcss: "corps/tailwindcss.svg",
    mongodb: "corps/mongodb.svg",
    postgresql: "corps/postgresql.svg",
    mysql: "corps/mysql.svg",
    express: "corps/express.svg",
    wordpress: "corps/wordpress.svg",
    pwa: "corps/pwa.svg"
  };  

  useEffect(() => {  
    AOS.init({  
      duration: 1000,  
      once: false,  
      mirror: true,  
    });  

    startTimer();  

    return () => clearInterval(timerRef.current);  
  }, []);  

  const startTimer = () => {  
    clearInterval(timerRef.current);  
    timerRef.current = setInterval(() => {  
      if (!isHovered) {  
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);  
      }  
    }, interval);  
  };  

  useEffect(() => {  
    if (!isHovered) {  
      AOS.refresh();  
      startTimer();  
    } else {  
      clearInterval(timerRef.current);  
    }  
  }, [isHovered]);  

  const handleMouseEnter = () => {  
    setIsHovered(true);  
  };  

  const handleMouseLeave = () => {  
    setIsHovered(false);  
  };  

  const Frame = ({ viewBox, path }) => (  
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">  
      <path d={path} fill="#1E1E1E" />  
    </svg>  
  );  

  const ScreenContent = ({ type }) => (  
    <>  
      {projects.map((project, index) => (  
        <img  
          key={index}  
          src={project.screenshots[type]}  
          alt={`${project.name} ${type} screenshot`}  
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${  
            index === currentIndex ? 'opacity-100' : 'opacity-0'  
          } ${type === 'mobile' ? 'rounded-[18px]' : ''}`}  
          style={{ objectPosition: type === 'desktop' ? 'center top' : 'top center' }}  
          data-aos={!isHovered ? "flip-left" : ""}  
          data-aos-duration="1000"  
        />  
      ))}  
    </>  
  );  

  const ProjectInfo = ({ project }) => (  
    <div  
      className="absolute bottom-[-15%] left-[5%] w-[70%] md:w-[40%] md:left-0 md:ml-4 bg-white p-4 md:p-6 rounded-lg shadow-lg z-10"  
    >  
      <div data-aos={!isHovered ? "fade-down" : ""} data-aos-duration="1000">  
        <a  
          href={project.website}  
          target="_blank"  
          rel="noopener noreferrer"  
          className="flex items-center space-x-2 mb-2 md:mb-4"  
        >  
          <h2 className="text-lg md:text-2xl font-bold">{project.name}</h2>  
          <i className="icon-link-ext text-base md:text-lg mt-1" />  
        </a>  
        <div className="flex items-center space-x-2 md:space-x-4">  
          <span className="text-sm md:text-base font-semibold">Built with</span>  
          <div className="flex space-x-1 md:space-x-2">  
            {project.technologies.map((tech, index) => (  
              <span  
                key={index}  
                className="inline-block"  
                title={tech}  
              >  
                <img  
                  src={technologyIcons[tech]}  
                  alt={tech}  
                  className="w-4 h-4 md:w-6 md:h-6"  
                />  
              </span>  
            ))}  
          </div>  
        </div>  
      </div>  
    </div>  
  );

  return (  
    <section className="pb-12 md:pb-20 py-12 md:py-20"> {/* Added padding to the section */}  
    <div className='flex flex-col'>  
      <div className="max-w-3xl mx-auto text-center mb-12"> {/* Added bottom margin */}  
        <h2 className="h2">Our Latest Projects</h2>  
      </div>  

      <div   
        className="relative w-full pb-12 md:pb-18 lg:pb-32 flex justify-center items-center overflow-hidden"  
        onMouseEnter={handleMouseEnter}  
        onMouseLeave={handleMouseLeave}  
      >  
        <div className="relative w-11/12 max-w-6xl aspect-[16/9] scale-[0.8] md:scale-90 lg:scale-100">  
          {/* Desktop Frame */}  
          <div className="absolute top-0 left-0 w-[88%] h-full">  
            <div className="absolute inset-0 w-[96%] h-[91%] m-auto overflow-hidden rounded-lg z-10">  
              <ScreenContent type="desktop" />  
            </div>  
            <Frame  
              viewBox="0 0 1280 800"  
              path="M0 12C0 5.37258 5.37258 0 12 0H1268C1274.63 0 1280 5.37258 1280 12V788C1280 794.627 1274.63 800 1268 800H12C5.37258 800 0 794.627 0 788V12Z"  
            />  
          </div>  

          {/* Mobile Frame */}  
          <div className="absolute bottom-[-8%] right-0 w-[25%] h-[95%] z-10">  
            <div className="absolute top-[2.5%] left-[5%] w-[90%] h-[95%] overflow-hidden rounded-sm md:rounded-[28px] z-10">  
              <ScreenContent type="mobile" />  
            </div>  
            <Frame  
              viewBox="0 0 375 812"  
              path="M0 40C0 17.9086 17.9086 0 40 0H335C357.091 0 375 17.9086 375 40V772C375 794.091 357.091 812 335 812H40C17.9086 812 0 794.091 0 772V40Z"  
            />  
          </div>  

          {/* Project Info */}  
          <ProjectInfo project={projects[currentIndex]} />  
        </div>  
      </div>  
    </div>  
  </section>  
  );  
};  

export default AppleMockup;