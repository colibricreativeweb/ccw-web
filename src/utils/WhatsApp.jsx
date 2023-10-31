import React, { Component } from "react";

export default class WhatsApp extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const WhatsApp = () => {
      let btnClosePopup = document.querySelector(".closePopup");
      let btnOpenPopup = document.querySelector(".whatsapp-button");
      let popup = document.querySelector(".popup-whatsapp");
      let sendBtn = document.getElementById("send-btn");

      btnClosePopup.addEventListener("click", () => {
        popup.classList.toggle("is-active-whatsapp-popup");
      });

      btnOpenPopup.addEventListener("click", () => {
        popup.classList.toggle("is-active-whatsapp-popup");
        popup.style.animation = "fadeIn .6s 0.0s both";
      });

      sendBtn.addEventListener("click", () => {
        let msg = document.getElementById("whats-in").value;
        let relmsg = msg.replace(/ /g, "%20");
        window.open("https://wa.me/14244292870?text=" + relmsg, "_blank");
      });

      // setTimeout(() => {
      //     popup.classList.toggle('is-active-whatsapp-popup');
      // }, 3000);
    };

    WhatsApp();
  }

  render() {
    return (
      <div className="nav-bottom fixed m-0 row-auto bottom-0 right-4 flex justify-end content-end align-bottom font-normal cursor-pointer outline-none no-underline z-30">
        <div className="popup-whatsapp absolute w-auto h-auto p-4 bottom-28 right-1 flex-col bg-white rounded-md filter drop-shadow-md justify-start items-start">
          <div className="content-whatsapp -top flex flex-col">
            <button
              type="button"
              className="closePopup w-6 h-6 p-1 mb-4 flex items-center justify-center rounded-full filter drop-shadow-md no-underline outline-none cursor-pointer bg-gray-200 hover:bg-red-400 transition duration-500"
            >
              <i className="not-italic">✖</i>
            </button>
            <p>Hello! Please tell us your request 👨‍💻</p>
          </div>
          <div className="content-whatsapp -bottom flex flex-row">
            <input
              className="whats-input"
              id="whats-in"
              type="text"
              placeholder="Write message..."
            />
            <button
              className="send-msPopup flex items-center justify-center w-6 h-6 p-1 mt-3 rounded-full bg-gray-200 hover:bg-gray-300 transition drop-shadow-md filter no-underline outline outline-2 outline-offset-0 outline-gray-300 cursor-pointer"
              id="send-btn"
              type="button"
            >
              <i className="not-italic">⮞</i>
            </button>
          </div>
        </div>
        <button
          type="button"
          id="whats-openPopup"
          className="whatsapp-button flex justify-center items-center mb-16 w-12 h-12 rounded-full bg-[#00a6ffff] filter drop-shadow-md z-50 transition duration-300"
        >
          <div className="animate-ping fixed inline-flex h-8 w-8 rounded-full bg-[#00a6ffff] z-40"></div>
          <span className="icon-whatsapp text-3xl mb-1 text-white filter drop-shadow-md z-50" />
        </button>
      </div>
    );
  }
}
