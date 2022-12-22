import React,{ useEffect, useState } from "react";

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
          className="fixed bottom-4 right-2 bg-[#00a6ffff] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl md:text-xl hover:bg-gray-100 filter hover:drop-shadow-md z-30 hover:text-[#00a6ffff] transition ease-in-out duration-200"
        >
          <i className="icon-up-open-2 text-2xl filter drop-shadow-md z-50" />
        </a>
      )}
    </div>
  )
}