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

const ProjectShowcase = ({ interval = 5000 }) => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);  
  const totalProjects = useRef(0);

  const projects = [  
    {  
      name: "BioMe Lifescan",  
      website: "https://www.biomelifescan.com",  
      screenshots: {  
        desktop: BioD,  
        mobile: BioM,  
      },
      description: "Healthcare platform for medical professionals",
      technologies: ["wordpress", "php", "mysql"]  
    },
    {  
      name: "Longyu Shop",  
      website: "https://www.longyu.store",  
      screenshots: {  
        desktop: LongD,  
        mobile: LongM,  
      },
      description: "E-commerce solution with modern UI/UX",
      technologies: ["react", "tailwindcss", "express"]  
    },
    {  
      name: "Gerbo Software",  
      website: "https://gerbo-software.up.railway.app/",  
      screenshots: {  
        desktop: GerboD,  
        mobile: GerboM,  
      },
      description: "Enterprise software management system",
      technologies: ["flask", "python", "tailwindcss"]  
    },
    {  
      name: "Maria Hidalgo Homes",  
      website: "https://www.mariahidalgo.homes/",  
      screenshots: {  
        desktop: MHHD,  
        mobile: MHHM,  
      },
      description: "Real estate platform with advanced search",
      technologies: ["vitejs", "pwa", "react", "tailwindcss"]  
    },  
    // Add more projects as needed  
  ];  

  // Update total projects ref
  useEffect(() => {
    totalProjects.current = projects.length;
  }, [projects]);

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
      duration: 800,  
      once: true,
      mirror: false,  
    });  

    startTimer();  

    return () => clearInterval(timerRef.current);  
  }, []);  

  const startTimer = () => {  
    clearInterval(timerRef.current);  
    timerRef.current = setInterval(() => {  
      if (!isHovered && !isTransitioning) {  
        handleNext();
      }  
    }, interval);  
  };  

  useEffect(() => {  
    if (!isHovered) {  
      startTimer();  
    } else {  
      clearInterval(timerRef.current);  
    }
    
    return () => clearInterval(timerRef.current);
  }, [isHovered, interval]);  

  const handleMouseEnter = () => {  
    setIsHovered(true);  
  };  

  const handleMouseLeave = () => {  
    setIsHovered(false);  
  };  

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % projects.length
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
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
          className={`absolute inset-0 w-full h-full object-cover transition-all transform ${  
            index === currentIndex 
              ? 'opacity-100 duration-1000 ease-in-out scale-100 blur-0' 
              : 'opacity-0 duration-700 ease-out scale-[1.03] blur-[2px]'  
          } ${type === 'mobile' ? 'rounded-[18px]' : ''}`}  
          style={{ objectPosition: type === 'desktop' ? 'center top' : 'top center' }}  
        />  
      ))}  
    </>  
  );  

  const ProjectInfo = ({ project }) => (  
    <div  
      className="absolute bottom-0 left-[5%] w-[90%] md:w-[50%] lg:w-[40%] md:left-0 md:ml-4 bg-white dark:bg-gray-800 p-3 md:p-6 rounded-lg shadow-xl z-10 transition-all duration-300 transform translate-y-[calc(100%+0.5rem)] md:translate-y-0 md:bottom-[-15%]"  
    >  
      <div>  
        <a  
          href={project.website}  
          target="_blank"  
          rel="noopener noreferrer"  
          className="flex items-center space-x-2 mb-2 md:mb-3 group"  
        >  
          <h2 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.name}</h2>  
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>  
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
        <div className="flex items-center space-x-2 md:space-x-4">  
          <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200">Built with</span>  
          <div className="flex space-x-2 md:space-x-3">  
            {project.technologies.map((tech, index) => (  
              <span  
                key={index}  
                className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full p-1.5 transition-transform hover:scale-110"  
                title={tech}  
              >  
                <img  
                  src={technologyIcons[tech]}  
                  alt={tech}  
                  className="w-4 h-4 md:w-5 md:h-5"  
                />  
              </span>  
            ))}  
          </div>  
        </div>  
      </div>  
    </div>  
  );

  const NavigationControls = () => (
    <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center space-x-4 z-20 bg-white/20 dark:bg-gray-800/80 py-2 backdrop-blur-sm rounded-full w-auto mx-auto max-w-60 sm:bg-transparent sm:backdrop-blur-none sm:py-0 sm:absolute sm:bottom-0 sm:left-auto sm:right-[5%] sm:justify-end sm:transform sm:translate-y-[calc(100%+4.5rem)] md:translate-y-0 md:bottom-[-20%] md:right-[10%]">
      <button 
        onClick={handlePrev}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        aria-label="Previous project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      
      <div className="flex space-x-1.5">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-blue-600 dark:bg-blue-400 w-5' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        onClick={handleNext}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        aria-label="Next project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );

  return (  
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 mb-16 sm:mb-8 md:mb-0">  
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16"> 
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Latest Projects</h2>  
          <p className="text-lg text-gray-600 dark:text-gray-300">Discover our portfolio of successful client solutions</p>
        </div>  

        <div   
          className="relative w-full pb-16 sm:pb-64 md:pb-36 lg:pb-40 flex justify-center items-center overflow-hidden"  
          onMouseEnter={handleMouseEnter}  
          onMouseLeave={handleMouseLeave}  
        >  
          <div className="relative w-11/12 max-w-6xl aspect-[16/9] scale-[0.8] md:scale-90 lg:scale-100 transition-all duration-300 mb-16 sm:mb-8 md:mb-0">  
            {/* Desktop Frame */}  
            <div className="absolute top-0 left-0 w-[88%] h-full shadow-2xl rounded-lg overflow-hidden">  
              <div className="absolute inset-0 w-[96%] h-[91%] m-auto overflow-hidden rounded-lg z-10 shadow-inner">  
                <ScreenContent type="desktop" />  
              </div>  
              <Frame  
                viewBox="0 0 1280 800"  
                path="M0 12C0 5.37258 5.37258 0 12 0H1268C1274.63 0 1280 5.37258 1280 12V788C1280 794.627 1274.63 800 1268 800H12C5.37258 800 0 794.627 0 788V12Z"  
              />  
            </div>  

            {/* Mobile Frame */}  
            <div className="absolute bottom-[-8%] right-0 w-[25%] h-[95%] z-10 shadow-2xl rounded-[40px]">  
              <div className="absolute top-[2.5%] left-[5%] w-[90%] h-[95%] overflow-hidden rounded-md sm:rounded-[28px] z-10 shadow-inner">  
                <ScreenContent type="mobile" />  
              </div>  
              <Frame  
                viewBox="0 0 375 812"  
                path="M0 40C0 17.9086 17.9086 0 40 0H335C357.091 0 375 17.9086 375 40V772C375 794.091 357.091 812 335 812H40C17.9086 812 0 794.091 0 772V40Z"  
              />  
            </div>  

            {/* Project Info */}  
            <ProjectInfo project={projects[currentIndex]} />  
            
            {/* Navigation Controls */}
            <NavigationControls />
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default ProjectShowcase;