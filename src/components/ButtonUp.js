import React,{ useEffect, useState, Component } from "react";

export default function ButtonUp() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return (
    <div>
      {offset > 140 && (
        <a
          href="#"
          className="fixed bottom-4 right-2 bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl md:text-xl hover:bg-gray-100 filter hover:drop-shadow-md z-30 hover:text-blue-400 transition duration-500"
        >
          <span className="material-icons text-3xl text-white filter drop-shadow-md z-50">keyboard_double_arrow_up</span>
        </a>
      )}
    </div>
  )
}
