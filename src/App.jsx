import React, { useEffect } from "react";
import './styles/tailwind.css';

function App() {
  useEffect(() => {
    document.title = "Colibri Creative Web";
  }, []);
  return (
    <>
<div className="h-screen overflow-hidden flex items-center justify-center font-sans">
    <div className="w-full h-screen flex flex-col items-center justify-between">
    <div className="xl:w-1/2 flex-1 flex flex-col items-center justify-center text-center px-4 lg:px-0">
    <div className="flex items-center justify-center rounded-full overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  preload="auto"
                  className="w-80"
                >
                  <source src="/vid/bg.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                </div>
        <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 tracking-wide">We are boosting Something Bigger!</p>
        <p className="text-xl text-gray-700 uppercase mt-4">To convey your ideas into reality</p>
    </div>
    <div className="w-full py-4 border-t border-gray-300">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-sm md:space-x-8 space-y-1 md:space-y-0">
            <span className="font-bold">You can contact us:</span>
            <a href="tel:+14247020102" rel="noreferrer noopener" className="flex items-center space-x-1 hover:drop-shadow-lg" target="_blank" title="Call">
                <i className="text-gray-600 icon-phone" />
                <span>+1 424-702-0102</span>
            </a>
            <a href="mailto:info@colibricreativeweb.com?subject=Let's%20Talk" className="flex items-center space-x-1 hover:drop-shadow-lg" target="_blank" rel="noreferrer noopener" title="Email">
            <i className="text-gray-600 icon-mail-alt" />
                <span>info@colibricreativeweb.com</span>
            </a>
        </div>
        
    </div>
</div>
</div>
    </>
  )
}

export default App
