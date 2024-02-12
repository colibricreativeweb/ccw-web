import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ccw-logo.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link
                to="/"
                className="flex flex-row"
                aria-label="Colibri Grayscaled"
              >
                <div className="flex items-center rounded-r-full bg-gradient-to-l from-white drop-shadow-sm pr-3">
                  <img
                    className="w-9 h-9 grayscale"
                    src={Logo}
                    alt="SVG logo"
                  />
                  <div className="font-bold grayscale pt-1 font-gruppo leading-4 text-transparent bg-clip-text bg-gradient-to-b from-[#00a6ff] to-[#00ffff]">
                    <div className="flex flex-col items-end">
                      <h1 className="text-[26.5px]">Colibri</h1>
                      <div className="flex text-[12px] space-x-1">
                        <h1>Creative</h1>
                        <h1>Web</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Contact</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="tel:14244292870"
                  className="hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/50 shadow transition-all duration-200 pl-1 pr-2 pt-1 pb-1 rounded-full text-gray-600 hover:text-white"
                >
                  <i className="icon-phone" />
                  (424) 429-2870
                </a>
              </li>
              <li className="mb-2 text-gray-600">
                10770 Palms Blvd, Los Angeles, CA 90034.
              </li>
              <li>
                <svg className="w-32" viewBox="0 0 400 171.4">
                  <mask id="mapMask">
                    <g className="dots" fill="#fff">
                      <circle cx="138" cy="0" r=".5" />
                      <circle cx="141" cy="0" r=".5" />
                      <circle cx="144" cy="0" r=".5" />
                      <circle cx="147" cy="0" r=".5" />
                      <circle cx="150" cy="0" r=".5" />
                      <circle cx="153" cy="0" r=".5" />
                      <circle cx="156" cy="0" r=".5" />
                      <circle cx="159" cy="0" r=".5" />
                      <circle cx="162" cy="0" r=".5" />
                      <circle cx="165" cy="0" r=".5" />
                      <circle cx="168" cy="0" r=".5" />
                      <circle cx="171" cy="0" r=".5" />
                      <circle cx="174" cy="0" r=".5" />
                      <circle cx="177" cy="0" r=".5" />
                      <circle cx="180" cy="0" r=".5" />
                      <circle cx="123" cy="3" r=".5" />
                      <circle cx="129" cy="3" r=".5" />
                      <circle cx="132" cy="3" r=".5" />
                      <circle cx="135" cy="3" r=".5" />
                      <circle cx="138" cy="3" r=".5" />
                      <circle cx="141" cy="3" r=".5" />
                      <circle cx="144" cy="3" r=".5" />
                      <circle cx="147" cy="3" r=".5" />
                      <circle cx="150" cy="3" r=".5" />
                      <circle cx="153" cy="3" r=".5" />
                      <circle cx="156" cy="3" r=".5" />
                      <circle cx="159" cy="3" r=".5" />
                      <circle cx="162" cy="3" r=".5" />
                      <circle cx="165" cy="3" r=".5" />
                      <circle cx="168" cy="3" r=".5" />
                      <circle cx="171" cy="3" r=".5" />
                      <circle cx="174" cy="3" r=".5" />
                      <circle cx="177" cy="3" r=".5" />
                      <circle cx="180" cy="3" r=".5" />
                      <circle cx="183" cy="3" r=".5" />
                      <circle cx="204" cy="3" r=".5" />
                      <circle cx="207" cy="3" r=".5" />
                      <circle cx="210" cy="3" r=".5" />
                      <circle cx="213" cy="3" r=".5" />
                      <circle cx="231" cy="3" r=".5" />
                      <circle cx="261" cy="3" r=".5" />
                      <circle cx="264" cy="3" r=".5" />
                      <circle cx="267" cy="3" r=".5" />
                      <circle cx="270" cy="3" r=".5" />
                      <circle cx="105" cy="6" r=".5" />
                      <circle cx="108" cy="6" r=".5" />
                      <circle cx="111" cy="6" r=".5" />
                      <circle cx="114" cy="6" r=".5" />
                      <circle cx="117" cy="6" r=".5" />
                      <circle cx="120" cy="6" r=".5" />
                      <circle cx="123" cy="6" r=".5" />
                      <circle cx="126" cy="6" r=".5" />
                      <circle cx="129" cy="6" r=".5" />
                      <circle cx="132" cy="6" r=".5" />
                      <circle cx="135" cy="6" r=".5" />
                      <circle cx="138" cy="6" r=".5" />
                      <circle cx="144" cy="6" r=".5" />
                      <circle cx="147" cy="6" r=".5" />
                      <circle cx="150" cy="6" r=".5" />
                      <circle cx="153" cy="6" r=".5" />
                      <circle cx="156" cy="6" r=".5" />
                      <circle cx="159" cy="6" r=".5" />
                      <circle cx="162" cy="6" r=".5" />
                      <circle cx="165" cy="6" r=".5" />
                      <circle cx="168" cy="6" r=".5" />
                      <circle cx="171" cy="6" r=".5" />
                      <circle cx="174" cy="6" r=".5" />
                      <circle cx="177" cy="6" r=".5" />
                      <circle cx="180" cy="6" r=".5" />
                      <circle cx="183" cy="6" r=".5" />
                      <circle cx="210" cy="6" r=".5" />
                      <circle cx="243" cy="6" r=".5" />
                      <circle cx="246" cy="6" r=".5" />
                      <circle cx="267" cy="6" r=".5" />
                      <circle cx="270" cy="6" r=".5" />
                      <circle cx="273" cy="6" r=".5" />
                      <circle cx="276" cy="6" r=".5" />
                      <circle cx="279" cy="6" r=".5" />
                      <circle cx="282" cy="6" r=".5" />
                      <circle cx="300" cy="6" r=".5" />
                      <circle cx="303" cy="6" r=".5" />
                      <circle cx="99" cy="9" r=".5" />
                      <circle cx="102" cy="9" r=".5" />
                      <circle cx="105" cy="9" r=".5" />
                      <circle cx="108" cy="9" r=".5" />
                      <circle cx="111" cy="9" r=".5" />
                      <circle cx="114" cy="9" r=".5" />
                      <circle cx="117" cy="9" r=".5" />
                      <circle cx="120" cy="9" r=".5" />
                      <circle cx="123" cy="9" r=".5" />
                      <circle cx="126" cy="9" r=".5" />
                      <circle cx="129" cy="9" r=".5" />
                      <circle cx="132" cy="9" r=".5" />
                      <circle cx="135" cy="9" r=".5" />
                      <circle cx="153" cy="9" r=".5" />
                      <circle cx="156" cy="9" r=".5" />
                      <circle cx="159" cy="9" r=".5" />
                      <circle cx="162" cy="9" r=".5" />
                      <circle cx="165" cy="9" r=".5" />
                      <circle cx="168" cy="9" r=".5" />
                      <circle cx="171" cy="9" r=".5" />
                      <circle cx="174" cy="9" r=".5" />
                      <circle cx="177" cy="9" r=".5" />
                      <circle cx="180" cy="9" r=".5" />
                      <circle cx="240" cy="9" r=".5" />
                      <circle cx="252" cy="9" r=".5" />
                      <circle cx="261" cy="9" r=".5" />
                      <circle cx="264" cy="9" r=".5" />
                      <circle cx="267" cy="9" r=".5" />
                      <circle cx="270" cy="9" r=".5" />
                      <circle cx="273" cy="9" r=".5" />
                      <circle cx="276" cy="9" r=".5" />
                      <circle cx="279" cy="9" r=".5" />
                      <circle cx="282" cy="9" r=".5" />
                      <circle cx="285" cy="9" r=".5" />
                      <circle cx="288" cy="9" r=".5" />
                      <circle cx="291" cy="9" r=".5" />
                      <circle cx="294" cy="9" r=".5" />
                      <circle cx="297" cy="9" r=".5" />
                      <circle cx="306" cy="9" r=".5" />
                      <circle cx="309" cy="9" r=".5" />
                      <circle cx="66" cy="12" r=".5" />
                      <circle cx="69" cy="12" r=".5" />
                      <circle cx="72" cy="12" r=".5" />
                      <circle cx="75" cy="12" r=".5" />
                      <circle cx="78" cy="12" r=".5" />
                      <circle cx="81" cy="12" r=".5" />
                      <circle cx="90" cy="12" r=".5" />
                      <circle cx="93" cy="12" r=".5" />
                      <circle cx="96" cy="12" r=".5" />
                      <circle cx="102" cy="12" r=".5" />
                      <circle cx="105" cy="12" r=".5" />
                      <circle cx="108" cy="12" r=".5" />
                      <circle cx="111" cy="12" r=".5" />
                      <circle cx="114" cy="12" r=".5" />
                      <circle cx="117" cy="12" r=".5" />
                      <circle cx="120" cy="12" r=".5" />
                      <circle cx="123" cy="12" r=".5" />
                      <circle cx="126" cy="12" r=".5" />
                      <circle cx="129" cy="12" r=".5" />
                      <circle cx="132" cy="12" r=".5" />
                      <circle cx="135" cy="12" r=".5" />
                      <circle cx="138" cy="12" r=".5" />
                      <circle cx="141" cy="12" r=".5" />
                      <circle cx="153" cy="12" r=".5" />
                      <circle cx="156" cy="12" r=".5" />
                      <circle cx="159" cy="12" r=".5" />
                      <circle cx="162" cy="12" r=".5" />
                      <circle cx="165" cy="12" r=".5" />
                      <circle cx="168" cy="12" r=".5" />
                      <circle cx="171" cy="12" r=".5" />
                      <circle cx="174" cy="12" r=".5" />
                      <circle cx="177" cy="12" r=".5" />
                      <circle cx="213" cy="12" r=".5" />
                      <circle cx="216" cy="12" r=".5" />
                      <circle cx="219" cy="12" r=".5" />
                      <circle cx="222" cy="12" r=".5" />
                      <circle cx="240" cy="12" r=".5" />
                      <circle cx="243" cy="12" r=".5" />
                      <circle cx="246" cy="12" r=".5" />
                      <circle cx="252" cy="12" r=".5" />
                      <circle cx="255" cy="12" r=".5" />
                      <circle cx="258" cy="12" r=".5" />
                      <circle cx="261" cy="12" r=".5" />
                      <circle cx="264" cy="12" r=".5" />
                      <circle cx="267" cy="12" r=".5" />
                      <circle cx="270" cy="12" r=".5" />
                      <circle cx="273" cy="12" r=".5" />
                      <circle cx="276" cy="12" r=".5" />
                      <circle cx="279" cy="12" r=".5" />
                      <circle cx="282" cy="12" r=".5" />
                      <circle cx="285" cy="12" r=".5" />
                      <circle cx="288" cy="12" r=".5" />
                      <circle cx="291" cy="12" r=".5" />
                      <circle cx="294" cy="12" r=".5" />
                      <circle cx="297" cy="12" r=".5" />
                      <circle cx="300" cy="12" r=".5" />
                      <circle cx="303" cy="12" r=".5" />
                      <circle cx="306" cy="12" r=".5" />
                      <circle cx="309" cy="12" r=".5" />
                      <circle cx="312" cy="12" r=".5" />
                      <circle cx="315" cy="12" r=".5" />
                      <circle cx="318" cy="12" r=".5" />
                      <circle cx="321" cy="12" r=".5" />
                      <circle cx="324" cy="12" r=".5" />
                      <circle cx="327" cy="12" r=".5" />
                      <circle cx="336" cy="12" r=".5" />
                      <circle cx="339" cy="12" r=".5" />
                      <circle cx="60" cy="15" r=".5" />
                      <circle cx="63" cy="15" r=".5" />
                      <circle cx="66" cy="15" r=".5" />
                      <circle cx="69" cy="15" r=".5" />
                      <circle cx="72" cy="15" r=".5" />
                      <circle cx="75" cy="15" r=".5" />
                      <circle cx="78" cy="15" r=".5" />
                      <circle cx="81" cy="15" r=".5" />
                      <circle cx="84" cy="15" r=".5" />
                      <circle cx="87" cy="15" r=".5" />
                      <circle cx="90" cy="15" r=".5" />
                      <circle cx="93" cy="15" r=".5" />
                      <circle cx="96" cy="15" r=".5" />
                      <circle cx="99" cy="15" r=".5" />
                      <circle cx="102" cy="15" r=".5" />
                      <circle cx="105" cy="15" r=".5" />
                      <circle cx="108" cy="15" r=".5" />
                      <circle cx="111" cy="15" r=".5" />
                      <circle cx="114" cy="15" r=".5" />
                      <circle cx="117" cy="15" r=".5" />
                      <circle cx="120" cy="15" r=".5" />
                      <circle cx="123" cy="15" r=".5" />
                      <circle cx="126" cy="15" r=".5" />
                      <circle cx="129" cy="15" r=".5" />
                      <circle cx="132" cy="15" r=".5" />
                      <circle cx="135" cy="15" r=".5" />
                      <circle cx="138" cy="15" r=".5" />
                      <circle cx="141" cy="15" r=".5" />
                      <circle cx="153" cy="15" r=".5" />
                      <circle cx="156" cy="15" r=".5" />
                      <circle cx="159" cy="15" r=".5" />
                      <circle cx="162" cy="15" r=".5" />
                      <circle cx="165" cy="15" r=".5" />
                      <circle cx="168" cy="15" r=".5" />
                      <circle cx="171" cy="15" r=".5" />
                      <circle cx="174" cy="15" r=".5" />
                      <circle cx="210" cy="15" r=".5" />
                      <circle cx="213" cy="15" r=".5" />
                      <circle cx="216" cy="15" r=".5" />
                      <circle cx="219" cy="15" r=".5" />
                      <circle cx="222" cy="15" r=".5" />
                      <circle cx="225" cy="15" r=".5" />
                      <circle cx="228" cy="15" r=".5" />
                      <circle cx="231" cy="15" r=".5" />
                      <circle cx="234" cy="15" r=".5" />
                      <circle cx="237" cy="15" r=".5" />
                      <circle cx="240" cy="15" r=".5" />
                      <circle cx="243" cy="15" r=".5" />
                      <circle cx="246" cy="15" r=".5" />
                      <circle cx="249" cy="15" r=".5" />
                      <circle cx="252" cy="15" r=".5" />
                      <circle cx="255" cy="15" r=".5" />
                      <circle cx="258" cy="15" r=".5" />
                      <circle cx="261" cy="15" r=".5" />
                      <circle cx="264" cy="15" r=".5" />
                      <circle cx="267" cy="15" r=".5" />
                      <circle cx="270" cy="15" r=".5" />
                      <circle cx="273" cy="15" r=".5" />
                      <circle cx="276" cy="15" r=".5" />
                      <circle cx="279" cy="15" r=".5" />
                      <circle cx="282" cy="15" r=".5" />
                      <circle cx="285" cy="15" r=".5" />
                      <circle cx="288" cy="15" r=".5" />
                      <circle cx="291" cy="15" r=".5" />
                      <circle cx="294" cy="15" r=".5" />
                      <circle cx="297" cy="15" r=".5" />
                      <circle cx="300" cy="15" r=".5" />
                      <circle cx="303" cy="15" r=".5" />
                      <circle cx="306" cy="15" r=".5" />
                      <circle cx="309" cy="15" r=".5" />
                      <circle cx="312" cy="15" r=".5" />
                      <circle cx="315" cy="15" r=".5" />
                      <circle cx="318" cy="15" r=".5" />
                      <circle cx="321" cy="15" r=".5" />
                      <circle cx="324" cy="15" r=".5" />
                      <circle cx="327" cy="15" r=".5" />
                      <circle cx="330" cy="15" r=".5" />
                      <circle cx="333" cy="15" r=".5" />
                      <circle cx="336" cy="15" r=".5" />
                      <circle cx="339" cy="15" r=".5" />
                      <circle cx="342" cy="15" r=".5" />
                      <circle cx="345" cy="15" r=".5" />
                      <circle cx="348" cy="15" r=".5" />
                      <circle cx="54" cy="18" r=".5" />
                      <circle cx="57" cy="18" r=".5" />
                      <circle cx="60" cy="18" r=".5" />
                      <circle cx="63" cy="18" r=".5" />
                      <circle cx="66" cy="18" r=".5" />
                      <circle cx="69" cy="18" r=".5" />
                      <circle cx="72" cy="18" r=".5" />
                      <circle cx="75" cy="18" r=".5" />
                      <circle cx="78" cy="18" r=".5" />
                      <circle cx="81" cy="18" r=".5" />
                      <circle cx="84" cy="18" r=".5" />
                      <circle cx="87" cy="18" r=".5" />
                      <circle cx="90" cy="18" r=".5" />
                      <circle cx="93" cy="18" r=".5" />
                      <circle cx="96" cy="18" r=".5" />
                      <circle cx="99" cy="18" r=".5" />
                      <circle cx="102" cy="18" r=".5" />
                      <circle cx="105" cy="18" r=".5" />
                      <circle cx="108" cy="18" r=".5" />
                      <circle cx="111" cy="18" r=".5" />
                      <circle cx="114" cy="18" r=".5" />
                      <circle cx="117" cy="18" r=".5" />
                      <circle cx="120" cy="18" r=".5" />
                      <circle cx="123" cy="18" r=".5" />
                      <circle cx="126" cy="18" r=".5" />
                      <circle cx="129" cy="18" r=".5" />
                      <circle cx="132" cy="18" r=".5" />
                      <circle cx="135" cy="18" r=".5" />
                      <circle cx="138" cy="18" r=".5" />
                      <circle cx="141" cy="18" r=".5" />
                      <circle cx="153" cy="18" r=".5" />
                      <circle cx="156" cy="18" r=".5" />
                      <circle cx="159" cy="18" r=".5" />
                      <circle cx="162" cy="18" r=".5" />
                      <circle cx="177" cy="18" r=".5" />
                      <circle cx="180" cy="18" r=".5" />
                      <circle cx="183" cy="18" r=".5" />
                      <circle cx="207" cy="18" r=".5" />
                      <circle cx="210" cy="18" r=".5" />
                      <circle cx="213" cy="18" r=".5" />
                      <circle cx="219" cy="18" r=".5" />
                      <circle cx="222" cy="18" r=".5" />
                      <circle cx="225" cy="18" r=".5" />
                      <circle cx="228" cy="18" r=".5" />
                      <circle cx="231" cy="18" r=".5" />
                      <circle cx="234" cy="18" r=".5" />
                      <circle cx="237" cy="18" r=".5" />
                      <circle cx="240" cy="18" r=".5" />
                      <circle cx="243" cy="18" r=".5" />
                      <circle cx="246" cy="18" r=".5" />
                      <circle cx="249" cy="18" r=".5" />
                      <circle cx="252" cy="18" r=".5" />
                      <circle cx="255" cy="18" r=".5" />
                      <circle cx="258" cy="18" r=".5" />
                      <circle cx="261" cy="18" r=".5" />
                      <circle cx="264" cy="18" r=".5" />
                      <circle cx="267" cy="18" r=".5" />
                      <circle cx="270" cy="18" r=".5" />
                      <circle cx="273" cy="18" r=".5" />
                      <circle cx="276" cy="18" r=".5" />
                      <circle cx="279" cy="18" r=".5" />
                      <circle cx="282" cy="18" r=".5" />
                      <circle cx="285" cy="18" r=".5" />
                      <circle cx="288" cy="18" r=".5" />
                      <circle cx="291" cy="18" r=".5" />
                      <circle cx="294" cy="18" r=".5" />
                      <circle cx="297" cy="18" r=".5" />
                      <circle cx="300" cy="18" r=".5" />
                      <circle cx="303" cy="18" r=".5" />
                      <circle cx="306" cy="18" r=".5" />
                      <circle cx="309" cy="18" r=".5" />
                      <circle cx="312" cy="18" r=".5" />
                      <circle cx="315" cy="18" r=".5" />
                      <circle cx="318" cy="18" r=".5" />
                      <circle cx="321" cy="18" r=".5" />
                      <circle cx="324" cy="18" r=".5" />
                      <circle cx="327" cy="18" r=".5" />
                      <circle cx="330" cy="18" r=".5" />
                      <circle cx="333" cy="18" r=".5" />
                      <circle cx="336" cy="18" r=".5" />
                      <circle cx="339" cy="18" r=".5" />
                      <circle cx="342" cy="18" r=".5" />
                      <circle cx="345" cy="18" r=".5" />
                      <circle cx="348" cy="18" r=".5" />
                      <circle cx="351" cy="18" r=".5" />
                      <circle cx="51" cy="21" r=".5" />
                      <circle cx="54" cy="21" r=".5" />
                      <circle cx="57" cy="21" r=".5" />
                      <circle cx="60" cy="21" r=".5" />
                      <circle cx="63" cy="21" r=".5" />
                      <circle cx="66" cy="21" r=".5" />
                      <circle cx="69" cy="21" r=".5" />
                      <circle cx="72" cy="21" r=".5" />
                      <circle cx="75" cy="21" r=".5" />
                      <circle cx="78" cy="21" r=".5" />
                      <circle cx="81" cy="21" r=".5" />
                      <circle cx="84" cy="21" r=".5" />
                      <circle cx="87" cy="21" r=".5" />
                      <circle cx="90" cy="21" r=".5" />
                      <circle cx="93" cy="21" r=".5" />
                      <circle cx="96" cy="21" r=".5" />
                      <circle cx="99" cy="21" r=".5" />
                      <circle cx="102" cy="21" r=".5" />
                      <circle cx="105" cy="21" r=".5" />
                      <circle cx="108" cy="21" r=".5" />
                      <circle cx="111" cy="21" r=".5" />
                      <circle cx="114" cy="21" r=".5" />
                      <circle cx="123" cy="21" r=".5" />
                      <circle cx="126" cy="21" r=".5" />
                      <circle cx="129" cy="21" r=".5" />
                      <circle cx="132" cy="21" r=".5" />
                      <circle cx="135" cy="21" r=".5" />
                      <circle cx="138" cy="21" r=".5" />
                      <circle cx="153" cy="21" r=".5" />
                      <circle cx="156" cy="21" r=".5" />
                      <circle cx="159" cy="21" r=".5" />
                      <circle cx="201" cy="21" r=".5" />
                      <circle cx="204" cy="21" r=".5" />
                      <circle cx="207" cy="21" r=".5" />
                      <circle cx="210" cy="21" r=".5" />
                      <circle cx="213" cy="21" r=".5" />
                      <circle cx="216" cy="21" r=".5" />
                      <circle cx="219" cy="21" r=".5" />
                      <circle cx="222" cy="21" r=".5" />
                      <circle cx="225" cy="21" r=".5" />
                      <circle cx="228" cy="21" r=".5" />
                      <circle cx="231" cy="21" r=".5" />
                      <circle cx="234" cy="21" r=".5" />
                      <circle cx="237" cy="21" r=".5" />
                      <circle cx="240" cy="21" r=".5" />
                      <circle cx="243" cy="21" r=".5" />
                      <circle cx="246" cy="21" r=".5" />
                      <circle cx="249" cy="21" r=".5" />
                      <circle cx="252" cy="21" r=".5" />
                      <circle cx="255" cy="21" r=".5" />
                      <circle cx="258" cy="21" r=".5" />
                      <circle cx="261" cy="21" r=".5" />
                      <circle cx="264" cy="21" r=".5" />
                      <circle cx="267" cy="21" r=".5" />
                      <circle cx="270" cy="21" r=".5" />
                      <circle cx="273" cy="21" r=".5" />
                      <circle cx="276" cy="21" r=".5" />
                      <circle cx="279" cy="21" r=".5" />
                      <circle cx="282" cy="21" r=".5" />
                      <circle cx="285" cy="21" r=".5" />
                      <circle cx="288" cy="21" r=".5" />
                      <circle cx="291" cy="21" r=".5" />
                      <circle cx="294" cy="21" r=".5" />
                      <circle cx="297" cy="21" r=".5" />
                      <circle cx="300" cy="21" r=".5" />
                      <circle cx="303" cy="21" r=".5" />
                      <circle cx="306" cy="21" r=".5" />
                      <circle cx="309" cy="21" r=".5" />
                      <circle cx="312" cy="21" r=".5" />
                      <circle cx="315" cy="21" r=".5" />
                      <circle cx="318" cy="21" r=".5" />
                      <circle cx="321" cy="21" r=".5" />
                      <circle cx="324" cy="21" r=".5" />
                      <circle cx="327" cy="21" r=".5" />
                      <circle cx="330" cy="21" r=".5" />
                      <circle cx="333" cy="21" r=".5" />
                      <circle cx="336" cy="21" r=".5" />
                      <circle cx="339" cy="21" r=".5" />
                      <circle cx="342" cy="21" r=".5" />
                      <circle cx="345" cy="21" r=".5" />
                      <circle cx="348" cy="21" r=".5" />
                      <circle cx="351" cy="21" r=".5" />
                      <circle cx="354" cy="21" r=".5" />
                      <circle cx="45" cy="24" r=".5" />
                      <circle cx="48" cy="24" r=".5" />
                      <circle cx="51" cy="24" r=".5" />
                      <circle cx="54" cy="24" r=".5" />
                      <circle cx="57" cy="24" r=".5" />
                      <circle cx="60" cy="24" r=".5" />
                      <circle cx="63" cy="24" r=".5" />
                      <circle cx="66" cy="24" r=".5" />
                      <circle cx="69" cy="24" r=".5" />
                      <circle cx="72" cy="24" r=".5" />
                      <circle cx="75" cy="24" r=".5" />
                      <circle cx="78" cy="24" r=".5" />
                      <circle cx="81" cy="24" r=".5" />
                      <circle cx="84" cy="24" r=".5" />
                      <circle cx="87" cy="24" r=".5" />
                      <circle cx="90" cy="24" r=".5" />
                      <circle cx="93" cy="24" r=".5" />
                      <circle cx="96" cy="24" r=".5" />
                      <circle cx="99" cy="24" r=".5" />
                      <circle cx="102" cy="24" r=".5" />
                      <circle cx="105" cy="24" r=".5" />
                      <circle cx="108" cy="24" r=".5" />
                      <circle cx="111" cy="24" r=".5" />
                      <circle cx="126" cy="24" r=".5" />
                      <circle cx="129" cy="24" r=".5" />
                      <circle cx="132" cy="24" r=".5" />
                      <circle cx="138" cy="24" r=".5" />
                      <circle cx="156" cy="24" r=".5" />
                      <circle cx="201" cy="24" r=".5" />
                      <circle cx="204" cy="24" r=".5" />
                      <circle cx="207" cy="24" r=".5" />
                      <circle cx="210" cy="24" r=".5" />
                      <circle cx="213" cy="24" r=".5" />
                      <circle cx="219" cy="24" r=".5" />
                      <circle cx="222" cy="24" r=".5" />
                      <circle cx="225" cy="24" r=".5" />
                      <circle cx="228" cy="24" r=".5" />
                      <circle cx="231" cy="24" r=".5" />
                      <circle cx="234" cy="24" r=".5" />
                      <circle cx="237" cy="24" r=".5" />
                      <circle cx="240" cy="24" r=".5" />
                      <circle cx="243" cy="24" r=".5" />
                      <circle cx="246" cy="24" r=".5" />
                      <circle cx="249" cy="24" r=".5" />
                      <circle cx="252" cy="24" r=".5" />
                      <circle cx="255" cy="24" r=".5" />
                      <circle cx="258" cy="24" r=".5" />
                      <circle cx="261" cy="24" r=".5" />
                      <circle cx="264" cy="24" r=".5" />
                      <circle cx="267" cy="24" r=".5" />
                      <circle cx="270" cy="24" r=".5" />
                      <circle cx="273" cy="24" r=".5" />
                      <circle cx="276" cy="24" r=".5" />
                      <circle cx="279" cy="24" r=".5" />
                      <circle cx="282" cy="24" r=".5" />
                      <circle cx="285" cy="24" r=".5" />
                      <circle cx="288" cy="24" r=".5" />
                      <circle cx="291" cy="24" r=".5" />
                      <circle cx="294" cy="24" r=".5" />
                      <circle cx="297" cy="24" r=".5" />
                      <circle cx="300" cy="24" r=".5" />
                      <circle cx="303" cy="24" r=".5" />
                      <circle cx="306" cy="24" r=".5" />
                      <circle cx="309" cy="24" r=".5" />
                      <circle cx="312" cy="24" r=".5" />
                      <circle cx="315" cy="24" r=".5" />
                      <circle cx="318" cy="24" r=".5" />
                      <circle cx="321" cy="24" r=".5" />
                      <circle cx="324" cy="24" r=".5" />
                      <circle cx="327" cy="24" r=".5" />
                      <circle cx="330" cy="24" r=".5" />
                      <circle cx="333" cy="24" r=".5" />
                      <circle cx="336" cy="24" r=".5" />
                      <circle cx="345" cy="24" r=".5" />
                      <circle cx="348" cy="24" r=".5" />
                      <circle cx="351" cy="24" r=".5" />
                      <circle cx="51" cy="27" r=".5" />
                      <circle cx="54" cy="27" r=".5" />
                      <circle cx="72" cy="27" r=".5" />
                      <circle cx="75" cy="27" r=".5" />
                      <circle cx="78" cy="27" r=".5" />
                      <circle cx="81" cy="27" r=".5" />
                      <circle cx="84" cy="27" r=".5" />
                      <circle cx="87" cy="27" r=".5" />
                      <circle cx="90" cy="27" r=".5" />
                      <circle cx="93" cy="27" r=".5" />
                      <circle cx="96" cy="27" r=".5" />
                      <circle cx="99" cy="27" r=".5" />
                      <circle cx="102" cy="27" r=".5" />
                      <circle cx="105" cy="27" r=".5" />
                      <circle cx="108" cy="27" r=".5" />
                      <circle cx="111" cy="27" r=".5" />
                      <circle cx="126" cy="27" r=".5" />
                      <circle cx="129" cy="27" r=".5" />
                      <circle cx="132" cy="27" r=".5" />
                      <circle cx="135" cy="27" r=".5" />
                      <circle cx="138" cy="27" r=".5" />
                      <circle cx="192" cy="27" r=".5" />
                      <circle cx="195" cy="27" r=".5" />
                      <circle cx="207" cy="27" r=".5" />
                      <circle cx="210" cy="27" r=".5" />
                      <circle cx="216" cy="27" r=".5" />
                      <circle cx="219" cy="27" r=".5" />
                      <circle cx="222" cy="27" r=".5" />
                      <circle cx="225" cy="27" r=".5" />
                      <circle cx="228" cy="27" r=".5" />
                      <circle cx="231" cy="27" r=".5" />
                      <circle cx="234" cy="27" r=".5" />
                      <circle cx="237" cy="27" r=".5" />
                      <circle cx="240" cy="27" r=".5" />
                      <circle cx="243" cy="27" r=".5" />
                      <circle cx="246" cy="27" r=".5" />
                      <circle cx="249" cy="27" r=".5" />
                      <circle cx="252" cy="27" r=".5" />
                      <circle cx="255" cy="27" r=".5" />
                      <circle cx="258" cy="27" r=".5" />
                      <circle cx="261" cy="27" r=".5" />
                      <circle cx="264" cy="27" r=".5" />
                      <circle cx="267" cy="27" r=".5" />
                      <circle cx="270" cy="27" r=".5" />
                      <circle cx="273" cy="27" r=".5" />
                      <circle cx="276" cy="27" r=".5" />
                      <circle cx="279" cy="27" r=".5" />
                      <circle cx="282" cy="27" r=".5" />
                      <circle cx="285" cy="27" r=".5" />
                      <circle cx="288" cy="27" r=".5" />
                      <circle cx="291" cy="27" r=".5" />
                      <circle cx="294" cy="27" r=".5" />
                      <circle cx="297" cy="27" r=".5" />
                      <circle cx="300" cy="27" r=".5" />
                      <circle cx="303" cy="27" r=".5" />
                      <circle cx="306" cy="27" r=".5" />
                      <circle cx="309" cy="27" r=".5" />
                      <circle cx="312" cy="27" r=".5" />
                      <circle cx="315" cy="27" r=".5" />
                      <circle cx="318" cy="27" r=".5" />
                      <circle cx="321" cy="27" r=".5" />
                      <circle cx="324" cy="27" r=".5" />
                      <circle cx="342" cy="27" r=".5" />
                      <circle cx="345" cy="27" r=".5" />
                      <circle cx="348" cy="27" r=".5" />
                      <circle cx="42" cy="30" r=".5" />
                      <circle cx="45" cy="30" r=".5" />
                      <circle cx="72" cy="30" r=".5" />
                      <circle cx="75" cy="30" r=".5" />
                      <circle cx="78" cy="30" r=".5" />
                      <circle cx="81" cy="30" r=".5" />
                      <circle cx="84" cy="30" r=".5" />
                      <circle cx="87" cy="30" r=".5" />
                      <circle cx="90" cy="30" r=".5" />
                      <circle cx="93" cy="30" r=".5" />
                      <circle cx="96" cy="30" r=".5" />
                      <circle cx="99" cy="30" r=".5" />
                      <circle cx="102" cy="30" r=".5" />
                      <circle cx="105" cy="30" r=".5" />
                      <circle cx="108" cy="30" r=".5" />
                      <circle cx="111" cy="30" r=".5" />
                      <circle cx="114" cy="30" r=".5" />
                      <circle cx="117" cy="30" r=".5" />
                      <circle cx="123" cy="30" r=".5" />
                      <circle cx="126" cy="30" r=".5" />
                      <circle cx="129" cy="30" r=".5" />
                      <circle cx="132" cy="30" r=".5" />
                      <circle cx="135" cy="30" r=".5" />
                      <circle cx="138" cy="30" r=".5" />
                      <circle cx="141" cy="30" r=".5" />
                      <circle cx="189" cy="30" r=".5" />
                      <circle cx="192" cy="30" r=".5" />
                      <circle cx="195" cy="30" r=".5" />
                      <circle cx="204" cy="30" r=".5" />
                      <circle cx="207" cy="30" r=".5" />
                      <circle cx="210" cy="30" r=".5" />
                      <circle cx="213" cy="30" r=".5" />
                      <circle cx="216" cy="30" r=".5" />
                      <circle cx="219" cy="30" r=".5" />
                      <circle cx="222" cy="30" r=".5" />
                      <circle cx="225" cy="30" r=".5" />
                      <circle cx="228" cy="30" r=".5" />
                      <circle cx="231" cy="30" r=".5" />
                      <circle cx="234" cy="30" r=".5" />
                      <circle cx="237" cy="30" r=".5" />
                      <circle cx="240" cy="30" r=".5" />
                      <circle cx="243" cy="30" r=".5" />
                      <circle cx="246" cy="30" r=".5" />
                      <circle cx="249" cy="30" r=".5" />
                      <circle cx="252" cy="30" r=".5" />
                      <circle cx="255" cy="30" r=".5" />
                      <circle cx="258" cy="30" r=".5" />
                      <circle cx="261" cy="30" r=".5" />
                      <circle cx="264" cy="30" r=".5" />
                      <circle cx="267" cy="30" r=".5" />
                      <circle cx="270" cy="30" r=".5" />
                      <circle cx="273" cy="30" r=".5" />
                      <circle cx="276" cy="30" r=".5" />
                      <circle cx="279" cy="30" r=".5" />
                      <circle cx="282" cy="30" r=".5" />
                      <circle cx="285" cy="30" r=".5" />
                      <circle cx="288" cy="30" r=".5" />
                      <circle cx="291" cy="30" r=".5" />
                      <circle cx="294" cy="30" r=".5" />
                      <circle cx="297" cy="30" r=".5" />
                      <circle cx="300" cy="30" r=".5" />
                      <circle cx="303" cy="30" r=".5" />
                      <circle cx="306" cy="30" r=".5" />
                      <circle cx="309" cy="30" r=".5" />
                      <circle cx="312" cy="30" r=".5" />
                      <circle cx="315" cy="30" r=".5" />
                      <circle cx="318" cy="30" r=".5" />
                      <circle cx="321" cy="30" r=".5" />
                      <circle cx="324" cy="30" r=".5" />
                      <circle cx="327" cy="30" r=".5" />
                      <circle cx="345" cy="30" r=".5" />
                      <circle cx="348" cy="30" r=".5" />
                      <circle cx="351" cy="30" r=".5" />
                      <circle cx="69" cy="33" r=".5" />
                      <circle cx="72" cy="33" r=".5" />
                      <circle cx="75" cy="33" r=".5" />
                      <circle cx="78" cy="33" r=".5" />
                      <circle cx="81" cy="33" r=".5" />
                      <circle cx="84" cy="33" r=".5" />
                      <circle cx="87" cy="33" r=".5" />
                      <circle cx="90" cy="33" r=".5" />
                      <circle cx="93" cy="33" r=".5" />
                      <circle cx="96" cy="33" r=".5" />
                      <circle cx="99" cy="33" r=".5" />
                      <circle cx="102" cy="33" r=".5" />
                      <circle cx="105" cy="33" r=".5" />
                      <circle cx="108" cy="33" r=".5" />
                      <circle cx="111" cy="33" r=".5" />
                      <circle cx="114" cy="33" r=".5" />
                      <circle cx="117" cy="33" r=".5" />
                      <circle cx="120" cy="33" r=".5" />
                      <circle cx="123" cy="33" r=".5" />
                      <circle cx="126" cy="33" r=".5" />
                      <circle cx="129" cy="33" r=".5" />
                      <circle cx="132" cy="33" r=".5" />
                      <circle cx="135" cy="33" r=".5" />
                      <circle cx="138" cy="33" r=".5" />
                      <circle cx="141" cy="33" r=".5" />
                      <circle cx="189" cy="33" r=".5" />
                      <circle cx="192" cy="33" r=".5" />
                      <circle cx="195" cy="33" r=".5" />
                      <circle cx="198" cy="33" r=".5" />
                      <circle cx="201" cy="33" r=".5" />
                      <circle cx="204" cy="33" r=".5" />
                      <circle cx="207" cy="33" r=".5" />
                      <circle cx="210" cy="33" r=".5" />
                      <circle cx="213" cy="33" r=".5" />
                      <circle cx="216" cy="33" r=".5" />
                      <circle cx="219" cy="33" r=".5" />
                      <circle cx="222" cy="33" r=".5" />
                      <circle cx="225" cy="33" r=".5" />
                      <circle cx="228" cy="33" r=".5" />
                      <circle cx="231" cy="33" r=".5" />
                      <circle cx="234" cy="33" r=".5" />
                      <circle cx="237" cy="33" r=".5" />
                      <circle cx="240" cy="33" r=".5" />
                      <circle cx="243" cy="33" r=".5" />
                      <circle cx="246" cy="33" r=".5" />
                      <circle cx="249" cy="33" r=".5" />
                      <circle cx="252" cy="33" r=".5" />
                      <circle cx="255" cy="33" r=".5" />
                      <circle cx="258" cy="33" r=".5" />
                      <circle cx="261" cy="33" r=".5" />
                      <circle cx="264" cy="33" r=".5" />
                      <circle cx="267" cy="33" r=".5" />
                      <circle cx="270" cy="33" r=".5" />
                      <circle cx="273" cy="33" r=".5" />
                      <circle cx="276" cy="33" r=".5" />
                      <circle cx="279" cy="33" r=".5" />
                      <circle cx="282" cy="33" r=".5" />
                      <circle cx="285" cy="33" r=".5" />
                      <circle cx="288" cy="33" r=".5" />
                      <circle cx="291" cy="33" r=".5" />
                      <circle cx="294" cy="33" r=".5" />
                      <circle cx="297" cy="33" r=".5" />
                      <circle cx="300" cy="33" r=".5" />
                      <circle cx="303" cy="33" r=".5" />
                      <circle cx="306" cy="33" r=".5" />
                      <circle cx="309" cy="33" r=".5" />
                      <circle cx="312" cy="33" r=".5" />
                      <circle cx="315" cy="33" r=".5" />
                      <circle cx="318" cy="33" r=".5" />
                      <circle cx="321" cy="33" r=".5" />
                      <circle cx="324" cy="33" r=".5" />
                      <circle cx="327" cy="33" r=".5" />
                      <circle cx="330" cy="33" r=".5" />
                      <circle cx="333" cy="33" r=".5" />
                      <circle cx="336" cy="33" r=".5" />
                      <circle cx="348" cy="33" r=".5" />
                      <circle cx="351" cy="33" r=".5" />
                      <circle cx="72" cy="36" r=".5" />
                      <circle cx="75" cy="36" r=".5" />
                      <circle cx="78" cy="36" r=".5" />
                      <circle cx="81" cy="36" r=".5" />
                      <circle cx="84" cy="36" r=".5" />
                      <circle cx="87" cy="36" r=".5" />
                      <circle cx="90" cy="36" r=".5" />
                      <circle cx="93" cy="36" r=".5" />
                      <circle cx="96" cy="36" r=".5" />
                      <circle cx="99" cy="36" r=".5" />
                      <circle cx="102" cy="36" r=".5" />
                      <circle cx="105" cy="36" r=".5" />
                      <circle cx="108" cy="36" r=".5" />
                      <circle cx="111" cy="36" r=".5" />
                      <circle cx="114" cy="36" r=".5" />
                      <circle cx="117" cy="36" r=".5" />
                      <circle cx="120" cy="36" r=".5" />
                      <circle cx="123" cy="36" r=".5" />
                      <circle cx="126" cy="36" r=".5" />
                      <circle cx="129" cy="36" r=".5" />
                      <circle cx="132" cy="36" r=".5" />
                      <circle cx="135" cy="36" r=".5" />
                      <circle cx="138" cy="36" r=".5" />
                      <circle cx="141" cy="36" r=".5" />
                      <circle cx="192" cy="36" r=".5" />
                      <circle cx="195" cy="36" r=".5" />
                      <circle cx="198" cy="36" r=".5" />
                      <circle cx="201" cy="36" r=".5" />
                      <circle cx="204" cy="36" r=".5" />
                      <circle cx="207" cy="36" r=".5" />
                      <circle cx="210" cy="36" r=".5" />
                      <circle cx="213" cy="36" r=".5" />
                      <circle cx="216" cy="36" r=".5" />
                      <circle cx="219" cy="36" r=".5" />
                      <circle cx="222" cy="36" r=".5" />
                      <circle cx="225" cy="36" r=".5" />
                      <circle cx="228" cy="36" r=".5" />
                      <circle cx="231" cy="36" r=".5" />
                      <circle cx="234" cy="36" r=".5" />
                      <circle cx="237" cy="36" r=".5" />
                      <circle cx="240" cy="36" r=".5" />
                      <circle cx="243" cy="36" r=".5" />
                      <circle cx="246" cy="36" r=".5" />
                      <circle cx="249" cy="36" r=".5" />
                      <circle cx="252" cy="36" r=".5" />
                      <circle cx="255" cy="36" r=".5" />
                      <circle cx="258" cy="36" r=".5" />
                      <circle cx="261" cy="36" r=".5" />
                      <circle cx="264" cy="36" r=".5" />
                      <circle cx="267" cy="36" r=".5" />
                      <circle cx="270" cy="36" r=".5" />
                      <circle cx="273" cy="36" r=".5" />
                      <circle cx="276" cy="36" r=".5" />
                      <circle cx="279" cy="36" r=".5" />
                      <circle cx="282" cy="36" r=".5" />
                      <circle cx="285" cy="36" r=".5" />
                      <circle cx="288" cy="36" r=".5" />
                      <circle cx="291" cy="36" r=".5" />
                      <circle cx="294" cy="36" r=".5" />
                      <circle cx="297" cy="36" r=".5" />
                      <circle cx="300" cy="36" r=".5" />
                      <circle cx="303" cy="36" r=".5" />
                      <circle cx="306" cy="36" r=".5" />
                      <circle cx="309" cy="36" r=".5" />
                      <circle cx="312" cy="36" r=".5" />
                      <circle cx="315" cy="36" r=".5" />
                      <circle cx="318" cy="36" r=".5" />
                      <circle cx="321" cy="36" r=".5" />
                      <circle cx="324" cy="36" r=".5" />
                      <circle cx="327" cy="36" r=".5" />
                      <circle cx="330" cy="36" r=".5" />
                      <circle cx="333" cy="36" r=".5" />
                      <circle cx="336" cy="36" r=".5" />
                      <circle cx="339" cy="36" r=".5" />
                      <circle cx="72" cy="39" r=".5" />
                      <circle cx="75" cy="39" r=".5" />
                      <circle cx="78" cy="39" r=".5" />
                      <circle cx="81" cy="39" r=".5" />
                      <circle cx="84" cy="39" r=".5" />
                      <circle cx="87" cy="39" r=".5" />
                      <circle cx="90" cy="39" r=".5" />
                      <circle cx="93" cy="39" r=".5" />
                      <circle cx="96" cy="39" r=".5" />
                      <circle cx="99" cy="39" r=".5" />
                      <circle cx="102" cy="39" r=".5" />
                      <circle cx="105" cy="39" r=".5" />
                      <circle cx="108" cy="39" r=".5" />
                      <circle cx="114" cy="39" r=".5" />
                      <circle cx="117" cy="39" r=".5" />
                      <circle cx="120" cy="39" r=".5" />
                      <circle cx="123" cy="39" r=".5" />
                      <circle cx="126" cy="39" r=".5" />
                      <circle cx="129" cy="39" r=".5" />
                      <circle cx="132" cy="39" r=".5" />
                      <circle cx="138" cy="39" r=".5" />
                      <circle cx="141" cy="39" r=".5" />
                      <circle cx="144" cy="39" r=".5" />
                      <circle cx="195" cy="39" r=".5" />
                      <circle cx="198" cy="39" r=".5" />
                      <circle cx="201" cy="39" r=".5" />
                      <circle cx="204" cy="39" r=".5" />
                      <circle cx="207" cy="39" r=".5" />
                      <circle cx="210" cy="39" r=".5" />
                      <circle cx="213" cy="39" r=".5" />
                      <circle cx="216" cy="39" r=".5" />
                      <circle cx="219" cy="39" r=".5" />
                      <circle cx="222" cy="39" r=".5" />
                      <circle cx="225" cy="39" r=".5" />
                      <circle cx="228" cy="39" r=".5" />
                      <circle cx="231" cy="39" r=".5" />
                      <circle cx="234" cy="39" r=".5" />
                      <circle cx="237" cy="39" r=".5" />
                      <circle cx="240" cy="39" r=".5" />
                      <circle cx="243" cy="39" r=".5" />
                      <circle cx="246" cy="39" r=".5" />
                      <circle cx="249" cy="39" r=".5" />
                      <circle cx="252" cy="39" r=".5" />
                      <circle cx="255" cy="39" r=".5" />
                      <circle cx="258" cy="39" r=".5" />
                      <circle cx="261" cy="39" r=".5" />
                      <circle cx="264" cy="39" r=".5" />
                      <circle cx="267" cy="39" r=".5" />
                      <circle cx="270" cy="39" r=".5" />
                      <circle cx="273" cy="39" r=".5" />
                      <circle cx="276" cy="39" r=".5" />
                      <circle cx="279" cy="39" r=".5" />
                      <circle cx="282" cy="39" r=".5" />
                      <circle cx="285" cy="39" r=".5" />
                      <circle cx="288" cy="39" r=".5" />
                      <circle cx="291" cy="39" r=".5" />
                      <circle cx="294" cy="39" r=".5" />
                      <circle cx="297" cy="39" r=".5" />
                      <circle cx="300" cy="39" r=".5" />
                      <circle cx="303" cy="39" r=".5" />
                      <circle cx="306" cy="39" r=".5" />
                      <circle cx="309" cy="39" r=".5" />
                      <circle cx="312" cy="39" r=".5" />
                      <circle cx="315" cy="39" r=".5" />
                      <circle cx="318" cy="39" r=".5" />
                      <circle cx="321" cy="39" r=".5" />
                      <circle cx="324" cy="39" r=".5" />
                      <circle cx="327" cy="39" r=".5" />
                      <circle cx="330" cy="39" r=".5" />
                      <circle cx="333" cy="39" r=".5" />
                      <circle cx="336" cy="39" r=".5" />
                      <circle cx="339" cy="39" r=".5" />
                      <circle cx="72" cy="42" r=".5" />
                      <circle cx="75" cy="42" r=".5" />
                      <circle cx="78" cy="42" r=".5" />
                      <circle cx="81" cy="42" r=".5" />
                      <circle cx="84" cy="42" r=".5" />
                      <circle cx="87" cy="42" r=".5" />
                      <circle cx="90" cy="42" r=".5" />
                      <circle cx="93" cy="42" r=".5" />
                      <circle cx="96" cy="42" r=".5" />
                      <circle cx="99" cy="42" r=".5" />
                      <circle cx="102" cy="42" r=".5" />
                      <circle cx="105" cy="42" r=".5" />
                      <circle cx="108" cy="42" r=".5" />
                      <circle cx="111" cy="42" r=".5" />
                      <circle cx="114" cy="42" r=".5" />
                      <circle cx="117" cy="42" r=".5" />
                      <circle cx="120" cy="42" r=".5" />
                      <circle cx="123" cy="42" r=".5" />
                      <circle cx="126" cy="42" r=".5" />
                      <circle cx="129" cy="42" r=".5" />
                      <circle cx="132" cy="42" r=".5" />
                      <circle cx="135" cy="42" r=".5" />
                      <circle cx="198" cy="42" r=".5" />
                      <circle cx="201" cy="42" r=".5" />
                      <circle cx="204" cy="42" r=".5" />
                      <circle cx="207" cy="42" r=".5" />
                      <circle cx="210" cy="42" r=".5" />
                      <circle cx="213" cy="42" r=".5" />
                      <circle cx="216" cy="42" r=".5" />
                      <circle cx="219" cy="42" r=".5" />
                      <circle cx="222" cy="42" r=".5" />
                      <circle cx="225" cy="42" r=".5" />
                      <circle cx="231" cy="42" r=".5" />
                      <circle cx="234" cy="42" r=".5" />
                      <circle cx="237" cy="42" r=".5" />
                      <circle cx="240" cy="42" r=".5" />
                      <circle cx="243" cy="42" r=".5" />
                      <circle cx="246" cy="42" r=".5" />
                      <circle cx="249" cy="42" r=".5" />
                      <circle cx="252" cy="42" r=".5" />
                      <circle cx="255" cy="42" r=".5" />
                      <circle cx="258" cy="42" r=".5" />
                      <circle cx="261" cy="42" r=".5" />
                      <circle cx="264" cy="42" r=".5" />
                      <circle cx="267" cy="42" r=".5" />
                      <circle cx="270" cy="42" r=".5" />
                      <circle cx="273" cy="42" r=".5" />
                      <circle cx="276" cy="42" r=".5" />
                      <circle cx="279" cy="42" r=".5" />
                      <circle cx="282" cy="42" r=".5" />
                      <circle cx="285" cy="42" r=".5" />
                      <circle cx="288" cy="42" r=".5" />
                      <circle cx="291" cy="42" r=".5" />
                      <circle cx="294" cy="42" r=".5" />
                      <circle cx="297" cy="42" r=".5" />
                      <circle cx="300" cy="42" r=".5" />
                      <circle cx="303" cy="42" r=".5" />
                      <circle cx="306" cy="42" r=".5" />
                      <circle cx="309" cy="42" r=".5" />
                      <circle cx="312" cy="42" r=".5" />
                      <circle cx="315" cy="42" r=".5" />
                      <circle cx="318" cy="42" r=".5" />
                      <circle cx="321" cy="42" r=".5" />
                      <circle cx="324" cy="42" r=".5" />
                      <circle cx="327" cy="42" r=".5" />
                      <circle cx="330" cy="42" r=".5" />
                      <circle cx="333" cy="42" r=".5" />
                      <circle cx="336" cy="42" r=".5" />
                      <circle cx="342" cy="42" r=".5" />
                      <circle cx="69" cy="45" r=".5" />
                      <circle cx="72" cy="45" r=".5" />
                      <circle cx="75" cy="45" r=".5" />
                      <circle cx="78" cy="45" r=".5" />
                      <circle cx="81" cy="45" r=".5" />
                      <circle cx="84" cy="45" r=".5" />
                      <circle cx="87" cy="45" r=".5" />
                      <circle cx="90" cy="45" r=".5" />
                      <circle cx="93" cy="45" r=".5" />
                      <circle cx="96" cy="45" r=".5" />
                      <circle cx="99" cy="45" r=".5" />
                      <circle cx="102" cy="45" r=".5" />
                      <circle cx="105" cy="45" r=".5" />
                      <circle cx="108" cy="45" r=".5" />
                      <circle cx="111" cy="45" r=".5" />
                      <circle cx="114" cy="45" r=".5" />
                      <circle cx="117" cy="45" r=".5" />
                      <circle cx="120" cy="45" r=".5" />
                      <circle cx="123" cy="45" r=".5" />
                      <circle cx="189" cy="45" r=".5" />
                      <circle cx="192" cy="45" r=".5" />
                      <circle cx="195" cy="45" r=".5" />
                      <circle cx="198" cy="45" r=".5" />
                      <circle cx="201" cy="45" r=".5" />
                      <circle cx="207" cy="45" r=".5" />
                      <circle cx="210" cy="45" r=".5" />
                      <circle cx="216" cy="45" r=".5" />
                      <circle cx="219" cy="45" r=".5" />
                      <circle cx="222" cy="45" r=".5" />
                      <circle cx="225" cy="45" r=".5" />
                      <circle cx="240" cy="45" r=".5" />
                      <circle cx="243" cy="45" r=".5" />
                      <circle cx="246" cy="45" r=".5" />
                      <circle cx="249" cy="45" r=".5" />
                      <circle cx="252" cy="45" r=".5" />
                      <circle cx="255" cy="45" r=".5" />
                      <circle cx="258" cy="45" r=".5" />
                      <circle cx="261" cy="45" r=".5" />
                      <circle cx="264" cy="45" r=".5" />
                      <circle cx="267" cy="45" r=".5" />
                      <circle cx="270" cy="45" r=".5" />
                      <circle cx="273" cy="45" r=".5" />
                      <circle cx="276" cy="45" r=".5" />
                      <circle cx="279" cy="45" r=".5" />
                      <circle cx="282" cy="45" r=".5" />
                      <circle cx="285" cy="45" r=".5" />
                      <circle cx="288" cy="45" r=".5" />
                      <circle cx="291" cy="45" r=".5" />
                      <circle cx="294" cy="45" r=".5" />
                      <circle cx="297" cy="45" r=".5" />
                      <circle cx="300" cy="45" r=".5" />
                      <circle cx="303" cy="45" r=".5" />
                      <circle cx="306" cy="45" r=".5" />
                      <circle cx="309" cy="45" r=".5" />
                      <circle cx="312" cy="45" r=".5" />
                      <circle cx="315" cy="45" r=".5" />
                      <circle cx="318" cy="45" r=".5" />
                      <circle cx="321" cy="45" r=".5" />
                      <circle cx="324" cy="45" r=".5" />
                      <circle cx="327" cy="45" r=".5" />
                      <circle cx="330" cy="45" r=".5" />
                      <circle cx="333" cy="45" r=".5" />
                      <circle cx="342" cy="45" r=".5" />
                      <circle cx="345" cy="45" r=".5" />
                      <circle cx="69" cy="48" r=".5" />
                      <circle cx="72" cy="48" r=".5" />
                      <circle cx="75" cy="48" r=".5" />
                      <circle cx="78" cy="48" r=".5" />
                      <circle cx="81" cy="48" r=".5" />
                      <circle cx="84" cy="48" r=".5" />
                      <circle cx="87" cy="48" r=".5" />
                      <circle cx="90" cy="48" r=".5" />
                      <circle cx="93" cy="48" r=".5" />
                      <circle cx="96" cy="48" r=".5" />
                      <circle cx="99" cy="48" r=".5" />
                      <circle cx="102" cy="48" r=".5" />
                      <circle cx="105" cy="48" r=".5" />
                      <circle cx="108" cy="48" r=".5" />
                      <circle cx="111" cy="48" r=".5" />
                      <circle cx="114" cy="48" r=".5" />
                      <circle cx="117" cy="48" r=".5" />
                      <circle cx="120" cy="48" r=".5" />
                      <circle cx="189" cy="48" r=".5" />
                      <circle cx="192" cy="48" r=".5" />
                      <circle cx="195" cy="48" r=".5" />
                      <circle cx="198" cy="48" r=".5" />
                      <circle cx="207" cy="48" r=".5" />
                      <circle cx="213" cy="48" r=".5" />
                      <circle cx="216" cy="48" r=".5" />
                      <circle cx="219" cy="48" r=".5" />
                      <circle cx="222" cy="48" r=".5" />
                      <circle cx="225" cy="48" r=".5" />
                      <circle cx="228" cy="48" r=".5" />
                      <circle cx="231" cy="48" r=".5" />
                      <circle cx="234" cy="48" r=".5" />
                      <circle cx="237" cy="48" r=".5" />
                      <circle cx="240" cy="48" r=".5" />
                      <circle cx="243" cy="48" r=".5" />
                      <circle cx="246" cy="48" r=".5" />
                      <circle cx="249" cy="48" r=".5" />
                      <circle cx="252" cy="48" r=".5" />
                      <circle cx="255" cy="48" r=".5" />
                      <circle cx="258" cy="48" r=".5" />
                      <circle cx="261" cy="48" r=".5" />
                      <circle cx="264" cy="48" r=".5" />
                      <circle cx="267" cy="48" r=".5" />
                      <circle cx="270" cy="48" r=".5" />
                      <circle cx="273" cy="48" r=".5" />
                      <circle cx="276" cy="48" r=".5" />
                      <circle cx="279" cy="48" r=".5" />
                      <circle cx="282" cy="48" r=".5" />
                      <circle cx="285" cy="48" r=".5" />
                      <circle cx="288" cy="48" r=".5" />
                      <circle cx="291" cy="48" r=".5" />
                      <circle cx="294" cy="48" r=".5" />
                      <circle cx="297" cy="48" r=".5" />
                      <circle cx="300" cy="48" r=".5" />
                      <circle cx="303" cy="48" r=".5" />
                      <circle cx="306" cy="48" r=".5" />
                      <circle cx="309" cy="48" r=".5" />
                      <circle cx="312" cy="48" r=".5" />
                      <circle cx="315" cy="48" r=".5" />
                      <circle cx="318" cy="48" r=".5" />
                      <circle cx="321" cy="48" r=".5" />
                      <circle cx="324" cy="48" r=".5" />
                      <circle cx="327" cy="48" r=".5" />
                      <circle cx="330" cy="48" r=".5" />
                      <circle cx="342" cy="48" r=".5" />
                      <circle cx="345" cy="48" r=".5" />
                      <circle cx="69" cy="51" r=".5" />
                      <circle cx="72" cy="51" r=".5" />
                      <circle cx="75" cy="51" r=".5" />
                      <circle cx="78" cy="51" r=".5" />
                      <circle cx="81" cy="51" r=".5" />
                      <circle cx="84" cy="51" r=".5" />
                      <circle cx="87" cy="51" r=".5" />
                      <circle cx="90" cy="51" r=".5" />
                      <circle cx="93" cy="51" r=".5" />
                      <circle cx="96" cy="51" r=".5" />
                      <circle cx="99" cy="51" r=".5" />
                      <circle cx="102" cy="51" r=".5" />
                      <circle cx="105" cy="51" r=".5" />
                      <circle cx="108" cy="51" r=".5" />
                      <circle cx="111" cy="51" r=".5" />
                      <circle cx="114" cy="51" r=".5" />
                      <circle cx="117" cy="51" r=".5" />
                      <circle cx="189" cy="51" r=".5" />
                      <circle cx="192" cy="51" r=".5" />
                      <circle cx="195" cy="51" r=".5" />
                      <circle cx="210" cy="51" r=".5" />
                      <circle cx="213" cy="51" r=".5" />
                      <circle cx="219" cy="51" r=".5" />
                      <circle cx="222" cy="51" r=".5" />
                      <circle cx="225" cy="51" r=".5" />
                      <circle cx="228" cy="51" r=".5" />
                      <circle cx="231" cy="51" r=".5" />
                      <circle cx="234" cy="51" r=".5" />
                      <circle cx="237" cy="51" r=".5" />
                      <circle cx="240" cy="51" r=".5" />
                      <circle cx="243" cy="51" r=".5" />
                      <circle cx="246" cy="51" r=".5" />
                      <circle cx="249" cy="51" r=".5" />
                      <circle cx="255" cy="51" r=".5" />
                      <circle cx="258" cy="51" r=".5" />
                      <circle cx="261" cy="51" r=".5" />
                      <circle cx="264" cy="51" r=".5" />
                      <circle cx="267" cy="51" r=".5" />
                      <circle cx="270" cy="51" r=".5" />
                      <circle cx="273" cy="51" r=".5" />
                      <circle cx="276" cy="51" r=".5" />
                      <circle cx="279" cy="51" r=".5" />
                      <circle cx="282" cy="51" r=".5" />
                      <circle cx="285" cy="51" r=".5" />
                      <circle cx="288" cy="51" r=".5" />
                      <circle cx="291" cy="51" r=".5" />
                      <circle cx="294" cy="51" r=".5" />
                      <circle cx="297" cy="51" r=".5" />
                      <circle cx="300" cy="51" r=".5" />
                      <circle cx="303" cy="51" r=".5" />
                      <circle cx="306" cy="51" r=".5" />
                      <circle cx="309" cy="51" r=".5" />
                      <circle cx="312" cy="51" r=".5" />
                      <circle cx="315" cy="51" r=".5" />
                      <circle cx="318" cy="51" r=".5" />
                      <circle cx="321" cy="51" r=".5" />
                      <circle cx="324" cy="51" r=".5" />
                      <circle cx="330" cy="51" r=".5" />
                      <circle cx="333" cy="51" r=".5" />
                      <circle cx="345" cy="51" r=".5" />
                      <circle cx="69" cy="54" r=".5" />
                      <circle cx="72" cy="54" r=".5" />
                      <circle cx="75" cy="54" r=".5" />
                      <circle cx="78" cy="54" r=".5" />
                      <circle cx="81" cy="54" r=".5" />
                      <circle cx="84" cy="54" r=".5" />
                      <circle cx="87" cy="54" r=".5" />
                      <circle cx="90" cy="54" r=".5" />
                      <circle cx="93" cy="54" r=".5" />
                      <circle cx="96" cy="54" r=".5" />
                      <circle cx="99" cy="54" r=".5" />
                      <circle cx="102" cy="54" r=".5" />
                      <circle cx="105" cy="54" r=".5" />
                      <circle cx="108" cy="54" r=".5" />
                      <circle cx="111" cy="54" r=".5" />
                      <circle cx="114" cy="54" r=".5" />
                      <circle cx="195" cy="54" r=".5" />
                      <circle cx="198" cy="54" r=".5" />
                      <circle cx="201" cy="54" r=".5" />
                      <circle cx="204" cy="54" r=".5" />
                      <circle cx="207" cy="54" r=".5" />
                      <circle cx="222" cy="54" r=".5" />
                      <circle cx="228" cy="54" r=".5" />
                      <circle cx="231" cy="54" r=".5" />
                      <circle cx="237" cy="54" r=".5" />
                      <circle cx="240" cy="54" r=".5" />
                      <circle cx="243" cy="54" r=".5" />
                      <circle cx="246" cy="54" r=".5" />
                      <circle cx="249" cy="54" r=".5" />
                      <circle cx="252" cy="54" r=".5" />
                      <circle cx="255" cy="54" r=".5" />
                      <circle cx="258" cy="54" r=".5" />
                      <circle cx="261" cy="54" r=".5" />
                      <circle cx="264" cy="54" r=".5" />
                      <circle cx="267" cy="54" r=".5" />
                      <circle cx="270" cy="54" r=".5" />
                      <circle cx="273" cy="54" r=".5" />
                      <circle cx="276" cy="54" r=".5" />
                      <circle cx="279" cy="54" r=".5" />
                      <circle cx="282" cy="54" r=".5" />
                      <circle cx="285" cy="54" r=".5" />
                      <circle cx="288" cy="54" r=".5" />
                      <circle cx="291" cy="54" r=".5" />
                      <circle cx="294" cy="54" r=".5" />
                      <circle cx="297" cy="54" r=".5" />
                      <circle cx="300" cy="54" r=".5" />
                      <circle cx="303" cy="54" r=".5" />
                      <circle cx="306" cy="54" r=".5" />
                      <circle cx="309" cy="54" r=".5" />
                      <circle cx="312" cy="54" r=".5" />
                      <circle cx="315" cy="54" r=".5" />
                      <circle cx="318" cy="54" r=".5" />
                      <circle cx="321" cy="54" r=".5" />
                      <circle cx="324" cy="54" r=".5" />
                      <circle cx="333" cy="54" r=".5" />
                      <circle cx="339" cy="54" r=".5" />
                      <circle cx="342" cy="54" r=".5" />
                      <circle cx="345" cy="54" r=".5" />
                      <circle cx="69" cy="57" r=".5" />
                      <circle cx="72" cy="57" r=".5" />
                      <circle cx="75" cy="57" r=".5" />
                      <circle cx="78" cy="57" r=".5" />
                      <circle cx="81" cy="57" r=".5" />
                      <circle cx="84" cy="57" r=".5" />
                      <circle cx="87" cy="57" r=".5" />
                      <circle cx="90" cy="57" r=".5" />
                      <circle cx="93" cy="57" r=".5" />
                      <circle cx="96" cy="57" r=".5" />
                      <circle cx="99" cy="57" r=".5" />
                      <circle cx="102" cy="57" r=".5" />
                      <circle cx="105" cy="57" r=".5" />
                      <circle cx="108" cy="57" r=".5" />
                      <circle cx="111" cy="57" r=".5" />
                      <circle cx="189" cy="57" r=".5" />
                      <circle cx="192" cy="57" r=".5" />
                      <circle cx="195" cy="57" r=".5" />
                      <circle cx="198" cy="57" r=".5" />
                      <circle cx="201" cy="57" r=".5" />
                      <circle cx="204" cy="57" r=".5" />
                      <circle cx="207" cy="57" r=".5" />
                      <circle cx="210" cy="57" r=".5" />
                      <circle cx="237" cy="57" r=".5" />
                      <circle cx="240" cy="57" r=".5" />
                      <circle cx="243" cy="57" r=".5" />
                      <circle cx="246" cy="57" r=".5" />
                      <circle cx="249" cy="57" r=".5" />
                      <circle cx="252" cy="57" r=".5" />
                      <circle cx="255" cy="57" r=".5" />
                      <circle cx="258" cy="57" r=".5" />
                      <circle cx="261" cy="57" r=".5" />
                      <circle cx="264" cy="57" r=".5" />
                      <circle cx="267" cy="57" r=".5" />
                      <circle cx="270" cy="57" r=".5" />
                      <circle cx="273" cy="57" r=".5" />
                      <circle cx="276" cy="57" r=".5" />
                      <circle cx="279" cy="57" r=".5" />
                      <circle cx="282" cy="57" r=".5" />
                      <circle cx="285" cy="57" r=".5" />
                      <circle cx="288" cy="57" r=".5" />
                      <circle cx="291" cy="57" r=".5" />
                      <circle cx="294" cy="57" r=".5" />
                      <circle cx="297" cy="57" r=".5" />
                      <circle cx="300" cy="57" r=".5" />
                      <circle cx="303" cy="57" r=".5" />
                      <circle cx="306" cy="57" r=".5" />
                      <circle cx="309" cy="57" r=".5" />
                      <circle cx="312" cy="57" r=".5" />
                      <circle cx="315" cy="57" r=".5" />
                      <circle cx="318" cy="57" r=".5" />
                      <circle cx="321" cy="57" r=".5" />
                      <circle cx="324" cy="57" r=".5" />
                      <circle cx="327" cy="57" r=".5" />
                      <circle cx="336" cy="57" r=".5" />
                      <circle cx="339" cy="57" r=".5" />
                      <circle cx="342" cy="57" r=".5" />
                      <circle cx="72" cy="60" r=".5" />
                      <circle cx="75" cy="60" r=".5" />
                      <circle cx="78" cy="60" r=".5" />
                      <circle cx="81" cy="60" r=".5" />
                      <circle cx="84" cy="60" r=".5" />
                      <circle cx="87" cy="60" r=".5" />
                      <circle cx="90" cy="60" r=".5" />
                      <circle cx="93" cy="60" r=".5" />
                      <circle cx="96" cy="60" r=".5" />
                      <circle cx="99" cy="60" r=".5" />
                      <circle cx="102" cy="60" r=".5" />
                      <circle cx="105" cy="60" r=".5" />
                      <circle cx="108" cy="60" r=".5" />
                      <circle cx="186" cy="60" r=".5" />
                      <circle cx="189" cy="60" r=".5" />
                      <circle cx="192" cy="60" r=".5" />
                      <circle cx="195" cy="60" r=".5" />
                      <circle cx="198" cy="60" r=".5" />
                      <circle cx="201" cy="60" r=".5" />
                      <circle cx="204" cy="60" r=".5" />
                      <circle cx="207" cy="60" r=".5" />
                      <circle cx="210" cy="60" r=".5" />
                      <circle cx="213" cy="60" r=".5" />
                      <circle cx="216" cy="60" r=".5" />
                      <circle cx="219" cy="60" r=".5" />
                      <circle cx="222" cy="60" r=".5" />
                      <circle cx="225" cy="60" r=".5" />
                      <circle cx="228" cy="60" r=".5" />
                      <circle cx="231" cy="60" r=".5" />
                      <circle cx="234" cy="60" r=".5" />
                      <circle cx="237" cy="60" r=".5" />
                      <circle cx="240" cy="60" r=".5" />
                      <circle cx="243" cy="60" r=".5" />
                      <circle cx="246" cy="60" r=".5" />
                      <circle cx="249" cy="60" r=".5" />
                      <circle cx="252" cy="60" r=".5" />
                      <circle cx="255" cy="60" r=".5" />
                      <circle cx="258" cy="60" r=".5" />
                      <circle cx="261" cy="60" r=".5" />
                      <circle cx="264" cy="60" r=".5" />
                      <circle cx="267" cy="60" r=".5" />
                      <circle cx="270" cy="60" r=".5" />
                      <circle cx="273" cy="60" r=".5" />
                      <circle cx="276" cy="60" r=".5" />
                      <circle cx="279" cy="60" r=".5" />
                      <circle cx="282" cy="60" r=".5" />
                      <circle cx="285" cy="60" r=".5" />
                      <circle cx="288" cy="60" r=".5" />
                      <circle cx="291" cy="60" r=".5" />
                      <circle cx="294" cy="60" r=".5" />
                      <circle cx="297" cy="60" r=".5" />
                      <circle cx="300" cy="60" r=".5" />
                      <circle cx="303" cy="60" r=".5" />
                      <circle cx="306" cy="60" r=".5" />
                      <circle cx="309" cy="60" r=".5" />
                      <circle cx="312" cy="60" r=".5" />
                      <circle cx="315" cy="60" r=".5" />
                      <circle cx="318" cy="60" r=".5" />
                      <circle cx="321" cy="60" r=".5" />
                      <circle cx="324" cy="60" r=".5" />
                      <circle cx="327" cy="60" r=".5" />
                      <circle cx="339" cy="60" r=".5" />
                      <circle cx="72" cy="63" r=".5" />
                      <circle cx="75" cy="63" r=".5" />
                      <circle cx="78" cy="63" r=".5" />
                      <circle cx="81" cy="63" r=".5" />
                      <circle cx="84" cy="63" r=".5" />
                      <circle cx="87" cy="63" r=".5" />
                      <circle cx="90" cy="63" r=".5" />
                      <circle cx="93" cy="63" r=".5" />
                      <circle cx="108" cy="63" r=".5" />
                      <circle cx="177" cy="63" r=".5" />
                      <circle cx="180" cy="63" r=".5" />
                      <circle cx="183" cy="63" r=".5" />
                      <circle cx="186" cy="63" r=".5" />
                      <circle cx="189" cy="63" r=".5" />
                      <circle cx="192" cy="63" r=".5" />
                      <circle cx="195" cy="63" r=".5" />
                      <circle cx="198" cy="63" r=".5" />
                      <circle cx="201" cy="63" r=".5" />
                      <circle cx="204" cy="63" r=".5" />
                      <circle cx="207" cy="63" r=".5" />
                      <circle cx="210" cy="63" r=".5" />
                      <circle cx="213" cy="63" r=".5" />
                      <circle cx="216" cy="63" r=".5" />
                      <circle cx="219" cy="63" r=".5" />
                      <circle cx="222" cy="63" r=".5" />
                      <circle cx="225" cy="63" r=".5" />
                      <circle cx="228" cy="63" r=".5" />
                      <circle cx="231" cy="63" r=".5" />
                      <circle cx="234" cy="63" r=".5" />
                      <circle cx="237" cy="63" r=".5" />
                      <circle cx="240" cy="63" r=".5" />
                      <circle cx="243" cy="63" r=".5" />
                      <circle cx="246" cy="63" r=".5" />
                      <circle cx="249" cy="63" r=".5" />
                      <circle cx="252" cy="63" r=".5" />
                      <circle cx="255" cy="63" r=".5" />
                      <circle cx="258" cy="63" r=".5" />
                      <circle cx="261" cy="63" r=".5" />
                      <circle cx="264" cy="63" r=".5" />
                      <circle cx="267" cy="63" r=".5" />
                      <circle cx="270" cy="63" r=".5" />
                      <circle cx="273" cy="63" r=".5" />
                      <circle cx="276" cy="63" r=".5" />
                      <circle cx="279" cy="63" r=".5" />
                      <circle cx="282" cy="63" r=".5" />
                      <circle cx="285" cy="63" r=".5" />
                      <circle cx="288" cy="63" r=".5" />
                      <circle cx="291" cy="63" r=".5" />
                      <circle cx="294" cy="63" r=".5" />
                      <circle cx="297" cy="63" r=".5" />
                      <circle cx="300" cy="63" r=".5" />
                      <circle cx="303" cy="63" r=".5" />
                      <circle cx="306" cy="63" r=".5" />
                      <circle cx="309" cy="63" r=".5" />
                      <circle cx="312" cy="63" r=".5" />
                      <circle cx="315" cy="63" r=".5" />
                      <circle cx="318" cy="63" r=".5" />
                      <circle cx="321" cy="63" r=".5" />
                      <circle cx="324" cy="63" r=".5" />
                      <circle cx="327" cy="63" r=".5" />
                      <circle cx="330" cy="63" r=".5" />
                      <circle cx="72" cy="66" r=".5" />
                      <circle cx="75" cy="66" r=".5" />
                      <circle cx="78" cy="66" r=".5" />
                      <circle cx="81" cy="66" r=".5" />
                      <circle cx="84" cy="66" r=".5" />
                      <circle cx="87" cy="66" r=".5" />
                      <circle cx="90" cy="66" r=".5" />
                      <circle cx="108" cy="66" r=".5" />
                      <circle cx="180" cy="66" r=".5" />
                      <circle cx="183" cy="66" r=".5" />
                      <circle cx="186" cy="66" r=".5" />
                      <circle cx="189" cy="66" r=".5" />
                      <circle cx="192" cy="66" r=".5" />
                      <circle cx="195" cy="66" r=".5" />
                      <circle cx="198" cy="66" r=".5" />
                      <circle cx="201" cy="66" r=".5" />
                      <circle cx="204" cy="66" r=".5" />
                      <circle cx="207" cy="66" r=".5" />
                      <circle cx="210" cy="66" r=".5" />
                      <circle cx="213" cy="66" r=".5" />
                      <circle cx="216" cy="66" r=".5" />
                      <circle cx="219" cy="66" r=".5" />
                      <circle cx="222" cy="66" r=".5" />
                      <circle cx="225" cy="66" r=".5" />
                      <circle cx="228" cy="66" r=".5" />
                      <circle cx="231" cy="66" r=".5" />
                      <circle cx="234" cy="66" r=".5" />
                      <circle cx="237" cy="66" r=".5" />
                      <circle cx="240" cy="66" r=".5" />
                      <circle cx="243" cy="66" r=".5" />
                      <circle cx="246" cy="66" r=".5" />
                      <circle cx="249" cy="66" r=".5" />
                      <circle cx="252" cy="66" r=".5" />
                      <circle cx="255" cy="66" r=".5" />
                      <circle cx="258" cy="66" r=".5" />
                      <circle cx="261" cy="66" r=".5" />
                      <circle cx="264" cy="66" r=".5" />
                      <circle cx="267" cy="66" r=".5" />
                      <circle cx="270" cy="66" r=".5" />
                      <circle cx="273" cy="66" r=".5" />
                      <circle cx="276" cy="66" r=".5" />
                      <circle cx="279" cy="66" r=".5" />
                      <circle cx="282" cy="66" r=".5" />
                      <circle cx="285" cy="66" r=".5" />
                      <circle cx="288" cy="66" r=".5" />
                      <circle cx="291" cy="66" r=".5" />
                      <circle cx="294" cy="66" r=".5" />
                      <circle cx="297" cy="66" r=".5" />
                      <circle cx="300" cy="66" r=".5" />
                      <circle cx="303" cy="66" r=".5" />
                      <circle cx="306" cy="66" r=".5" />
                      <circle cx="309" cy="66" r=".5" />
                      <circle cx="312" cy="66" r=".5" />
                      <circle cx="315" cy="66" r=".5" />
                      <circle cx="318" cy="66" r=".5" />
                      <circle cx="321" cy="66" r=".5" />
                      <circle cx="324" cy="66" r=".5" />
                      <circle cx="327" cy="66" r=".5" />
                      <circle cx="75" cy="69" r=".5" />
                      <circle cx="78" cy="69" r=".5" />
                      <circle cx="81" cy="69" r=".5" />
                      <circle cx="84" cy="69" r=".5" />
                      <circle cx="87" cy="69" r=".5" />
                      <circle cx="111" cy="69" r=".5" />
                      <circle cx="114" cy="69" r=".5" />
                      <circle cx="180" cy="69" r=".5" />
                      <circle cx="183" cy="69" r=".5" />
                      <circle cx="186" cy="69" r=".5" />
                      <circle cx="189" cy="69" r=".5" />
                      <circle cx="192" cy="69" r=".5" />
                      <circle cx="195" cy="69" r=".5" />
                      <circle cx="198" cy="69" r=".5" />
                      <circle cx="201" cy="69" r=".5" />
                      <circle cx="204" cy="69" r=".5" />
                      <circle cx="207" cy="69" r=".5" />
                      <circle cx="210" cy="69" r=".5" />
                      <circle cx="213" cy="69" r=".5" />
                      <circle cx="216" cy="69" r=".5" />
                      <circle cx="219" cy="69" r=".5" />
                      <circle cx="222" cy="69" r=".5" />
                      <circle cx="225" cy="69" r=".5" />
                      <circle cx="228" cy="69" r=".5" />
                      <circle cx="231" cy="69" r=".5" />
                      <circle cx="234" cy="69" r=".5" />
                      <circle cx="240" cy="69" r=".5" />
                      <circle cx="243" cy="69" r=".5" />
                      <circle cx="246" cy="69" r=".5" />
                      <circle cx="249" cy="69" r=".5" />
                      <circle cx="252" cy="69" r=".5" />
                      <circle cx="255" cy="69" r=".5" />
                      <circle cx="258" cy="69" r=".5" />
                      <circle cx="261" cy="69" r=".5" />
                      <circle cx="273" cy="69" r=".5" />
                      <circle cx="276" cy="69" r=".5" />
                      <circle cx="279" cy="69" r=".5" />
                      <circle cx="282" cy="69" r=".5" />
                      <circle cx="285" cy="69" r=".5" />
                      <circle cx="288" cy="69" r=".5" />
                      <circle cx="291" cy="69" r=".5" />
                      <circle cx="294" cy="69" r=".5" />
                      <circle cx="297" cy="69" r=".5" />
                      <circle cx="300" cy="69" r=".5" />
                      <circle cx="303" cy="69" r=".5" />
                      <circle cx="306" cy="69" r=".5" />
                      <circle cx="309" cy="69" r=".5" />
                      <circle cx="312" cy="69" r=".5" />
                      <circle cx="315" cy="69" r=".5" />
                      <circle cx="318" cy="69" r=".5" />
                      <circle cx="321" cy="69" r=".5" />
                      <circle cx="324" cy="69" r=".5" />
                      <circle cx="327" cy="69" r=".5" />
                      <circle cx="330" cy="69" r=".5" />
                      <circle cx="21" cy="72" r=".5" />
                      <circle cx="81" cy="72" r=".5" />
                      <circle cx="84" cy="72" r=".5" />
                      <circle cx="87" cy="72" r=".5" />
                      <circle cx="99" cy="72" r=".5" />
                      <circle cx="102" cy="72" r=".5" />
                      <circle cx="108" cy="72" r=".5" />
                      <circle cx="111" cy="72" r=".5" />
                      <circle cx="117" cy="72" r=".5" />
                      <circle cx="180" cy="72" r=".5" />
                      <circle cx="183" cy="72" r=".5" />
                      <circle cx="186" cy="72" r=".5" />
                      <circle cx="189" cy="72" r=".5" />
                      <circle cx="192" cy="72" r=".5" />
                      <circle cx="195" cy="72" r=".5" />
                      <circle cx="198" cy="72" r=".5" />
                      <circle cx="201" cy="72" r=".5" />
                      <circle cx="204" cy="72" r=".5" />
                      <circle cx="207" cy="72" r=".5" />
                      <circle cx="210" cy="72" r=".5" />
                      <circle cx="213" cy="72" r=".5" />
                      <circle cx="216" cy="72" r=".5" />
                      <circle cx="219" cy="72" r=".5" />
                      <circle cx="222" cy="72" r=".5" />
                      <circle cx="225" cy="72" r=".5" />
                      <circle cx="228" cy="72" r=".5" />
                      <circle cx="231" cy="72" r=".5" />
                      <circle cx="234" cy="72" r=".5" />
                      <circle cx="237" cy="72" r=".5" />
                      <circle cx="240" cy="72" r=".5" />
                      <circle cx="243" cy="72" r=".5" />
                      <circle cx="246" cy="72" r=".5" />
                      <circle cx="249" cy="72" r=".5" />
                      <circle cx="252" cy="72" r=".5" />
                      <circle cx="255" cy="72" r=".5" />
                      <circle cx="258" cy="72" r=".5" />
                      <circle cx="261" cy="72" r=".5" />
                      <circle cx="273" cy="72" r=".5" />
                      <circle cx="276" cy="72" r=".5" />
                      <circle cx="279" cy="72" r=".5" />
                      <circle cx="282" cy="72" r=".5" />
                      <circle cx="285" cy="72" r=".5" />
                      <circle cx="288" cy="72" r=".5" />
                      <circle cx="291" cy="72" r=".5" />
                      <circle cx="294" cy="72" r=".5" />
                      <circle cx="297" cy="72" r=".5" />
                      <circle cx="300" cy="72" r=".5" />
                      <circle cx="303" cy="72" r=".5" />
                      <circle cx="306" cy="72" r=".5" />
                      <circle cx="309" cy="72" r=".5" />
                      <circle cx="312" cy="72" r=".5" />
                      <circle cx="315" cy="72" r=".5" />
                      <circle cx="318" cy="72" r=".5" />
                      <circle cx="321" cy="72" r=".5" />
                      <circle cx="24" cy="75" r=".5" />
                      <circle cx="81" cy="75" r=".5" />
                      <circle cx="84" cy="75" r=".5" />
                      <circle cx="87" cy="75" r=".5" />
                      <circle cx="90" cy="75" r=".5" />
                      <circle cx="96" cy="75" r=".5" />
                      <circle cx="99" cy="75" r=".5" />
                      <circle cx="117" cy="75" r=".5" />
                      <circle cx="120" cy="75" r=".5" />
                      <circle cx="180" cy="75" r=".5" />
                      <circle cx="183" cy="75" r=".5" />
                      <circle cx="186" cy="75" r=".5" />
                      <circle cx="189" cy="75" r=".5" />
                      <circle cx="192" cy="75" r=".5" />
                      <circle cx="195" cy="75" r=".5" />
                      <circle cx="198" cy="75" r=".5" />
                      <circle cx="201" cy="75" r=".5" />
                      <circle cx="204" cy="75" r=".5" />
                      <circle cx="207" cy="75" r=".5" />
                      <circle cx="210" cy="75" r=".5" />
                      <circle cx="213" cy="75" r=".5" />
                      <circle cx="216" cy="75" r=".5" />
                      <circle cx="219" cy="75" r=".5" />
                      <circle cx="222" cy="75" r=".5" />
                      <circle cx="225" cy="75" r=".5" />
                      <circle cx="228" cy="75" r=".5" />
                      <circle cx="231" cy="75" r=".5" />
                      <circle cx="234" cy="75" r=".5" />
                      <circle cx="237" cy="75" r=".5" />
                      <circle cx="243" cy="75" r=".5" />
                      <circle cx="246" cy="75" r=".5" />
                      <circle cx="249" cy="75" r=".5" />
                      <circle cx="252" cy="75" r=".5" />
                      <circle cx="255" cy="75" r=".5" />
                      <circle cx="258" cy="75" r=".5" />
                      <circle cx="261" cy="75" r=".5" />
                      <circle cx="279" cy="75" r=".5" />
                      <circle cx="282" cy="75" r=".5" />
                      <circle cx="285" cy="75" r=".5" />
                      <circle cx="288" cy="75" r=".5" />
                      <circle cx="291" cy="75" r=".5" />
                      <circle cx="303" cy="75" r=".5" />
                      <circle cx="306" cy="75" r=".5" />
                      <circle cx="309" cy="75" r=".5" />
                      <circle cx="312" cy="75" r=".5" />
                      <circle cx="315" cy="75" r=".5" />
                      <circle cx="318" cy="75" r=".5" />
                      <circle cx="84" cy="78" r=".5" />
                      <circle cx="87" cy="78" r=".5" />
                      <circle cx="90" cy="78" r=".5" />
                      <circle cx="93" cy="78" r=".5" />
                      <circle cx="96" cy="78" r=".5" />
                      <circle cx="168" cy="78" r=".5" />
                      <circle cx="171" cy="78" r=".5" />
                      <circle cx="180" cy="78" r=".5" />
                      <circle cx="183" cy="78" r=".5" />
                      <circle cx="186" cy="78" r=".5" />
                      <circle cx="189" cy="78" r=".5" />
                      <circle cx="192" cy="78" r=".5" />
                      <circle cx="195" cy="78" r=".5" />
                      <circle cx="198" cy="78" r=".5" />
                      <circle cx="201" cy="78" r=".5" />
                      <circle cx="204" cy="78" r=".5" />
                      <circle cx="207" cy="78" r=".5" />
                      <circle cx="210" cy="78" r=".5" />
                      <circle cx="213" cy="78" r=".5" />
                      <circle cx="216" cy="78" r=".5" />
                      <circle cx="219" cy="78" r=".5" />
                      <circle cx="222" cy="78" r=".5" />
                      <circle cx="225" cy="78" r=".5" />
                      <circle cx="228" cy="78" r=".5" />
                      <circle cx="231" cy="78" r=".5" />
                      <circle cx="234" cy="78" r=".5" />
                      <circle cx="237" cy="78" r=".5" />
                      <circle cx="240" cy="78" r=".5" />
                      <circle cx="246" cy="78" r=".5" />
                      <circle cx="249" cy="78" r=".5" />
                      <circle cx="252" cy="78" r=".5" />
                      <circle cx="255" cy="78" r=".5" />
                      <circle cx="258" cy="78" r=".5" />
                      <circle cx="279" cy="78" r=".5" />
                      <circle cx="282" cy="78" r=".5" />
                      <circle cx="285" cy="78" r=".5" />
                      <circle cx="288" cy="78" r=".5" />
                      <circle cx="303" cy="78" r=".5" />
                      <circle cx="306" cy="78" r=".5" />
                      <circle cx="309" cy="78" r=".5" />
                      <circle cx="312" cy="78" r=".5" />
                      <circle cx="315" cy="78" r=".5" />
                      <circle cx="333" cy="78" r=".5" />
                      <circle cx="93" cy="81" r=".5" />
                      <circle cx="96" cy="81" r=".5" />
                      <circle cx="99" cy="81" r=".5" />
                      <circle cx="102" cy="81" r=".5" />
                      <circle cx="129" cy="81" r=".5" />
                      <circle cx="171" cy="81" r=".5" />
                      <circle cx="177" cy="81" r=".5" />
                      <circle cx="180" cy="81" r=".5" />
                      <circle cx="183" cy="81" r=".5" />
                      <circle cx="186" cy="81" r=".5" />
                      <circle cx="189" cy="81" r=".5" />
                      <circle cx="192" cy="81" r=".5" />
                      <circle cx="195" cy="81" r=".5" />
                      <circle cx="198" cy="81" r=".5" />
                      <circle cx="201" cy="81" r=".5" />
                      <circle cx="204" cy="81" r=".5" />
                      <circle cx="207" cy="81" r=".5" />
                      <circle cx="210" cy="81" r=".5" />
                      <circle cx="213" cy="81" r=".5" />
                      <circle cx="216" cy="81" r=".5" />
                      <circle cx="219" cy="81" r=".5" />
                      <circle cx="222" cy="81" r=".5" />
                      <circle cx="225" cy="81" r=".5" />
                      <circle cx="228" cy="81" r=".5" />
                      <circle cx="231" cy="81" r=".5" />
                      <circle cx="234" cy="81" r=".5" />
                      <circle cx="237" cy="81" r=".5" />
                      <circle cx="240" cy="81" r=".5" />
                      <circle cx="243" cy="81" r=".5" />
                      <circle cx="246" cy="81" r=".5" />
                      <circle cx="249" cy="81" r=".5" />
                      <circle cx="252" cy="81" r=".5" />
                      <circle cx="255" cy="81" r=".5" />
                      <circle cx="282" cy="81" r=".5" />
                      <circle cx="285" cy="81" r=".5" />
                      <circle cx="306" cy="81" r=".5" />
                      <circle cx="309" cy="81" r=".5" />
                      <circle cx="312" cy="81" r=".5" />
                      <circle cx="315" cy="81" r=".5" />
                      <circle cx="318" cy="81" r=".5" />
                      <circle cx="333" cy="81" r=".5" />
                      <circle cx="99" cy="84" r=".5" />
                      <circle cx="102" cy="84" r=".5" />
                      <circle cx="117" cy="84" r=".5" />
                      <circle cx="120" cy="84" r=".5" />
                      <circle cx="180" cy="84" r=".5" />
                      <circle cx="183" cy="84" r=".5" />
                      <circle cx="186" cy="84" r=".5" />
                      <circle cx="189" cy="84" r=".5" />
                      <circle cx="192" cy="84" r=".5" />
                      <circle cx="195" cy="84" r=".5" />
                      <circle cx="198" cy="84" r=".5" />
                      <circle cx="201" cy="84" r=".5" />
                      <circle cx="204" cy="84" r=".5" />
                      <circle cx="207" cy="84" r=".5" />
                      <circle cx="210" cy="84" r=".5" />
                      <circle cx="213" cy="84" r=".5" />
                      <circle cx="216" cy="84" r=".5" />
                      <circle cx="219" cy="84" r=".5" />
                      <circle cx="222" cy="84" r=".5" />
                      <circle cx="225" cy="84" r=".5" />
                      <circle cx="228" cy="84" r=".5" />
                      <circle cx="231" cy="84" r=".5" />
                      <circle cx="234" cy="84" r=".5" />
                      <circle cx="237" cy="84" r=".5" />
                      <circle cx="240" cy="84" r=".5" />
                      <circle cx="243" cy="84" r=".5" />
                      <circle cx="246" cy="84" r=".5" />
                      <circle cx="255" cy="84" r=".5" />
                      <circle cx="282" cy="84" r=".5" />
                      <circle cx="285" cy="84" r=".5" />
                      <circle cx="309" cy="84" r=".5" />
                      <circle cx="312" cy="84" r=".5" />
                      <circle cx="315" cy="84" r=".5" />
                      <circle cx="318" cy="84" r=".5" />
                      <circle cx="333" cy="84" r=".5" />
                      <circle cx="336" cy="84" r=".5" />
                      <circle cx="339" cy="84" r=".5" />
                      <circle cx="102" cy="87" r=".5" />
                      <circle cx="108" cy="87" r=".5" />
                      <circle cx="111" cy="87" r=".5" />
                      <circle cx="114" cy="87" r=".5" />
                      <circle cx="117" cy="87" r=".5" />
                      <circle cx="120" cy="87" r=".5" />
                      <circle cx="123" cy="87" r=".5" />
                      <circle cx="126" cy="87" r=".5" />
                      <circle cx="180" cy="87" r=".5" />
                      <circle cx="183" cy="87" r=".5" />
                      <circle cx="186" cy="87" r=".5" />
                      <circle cx="189" cy="87" r=".5" />
                      <circle cx="192" cy="87" r=".5" />
                      <circle cx="195" cy="87" r=".5" />
                      <circle cx="198" cy="87" r=".5" />
                      <circle cx="201" cy="87" r=".5" />
                      <circle cx="204" cy="87" r=".5" />
                      <circle cx="207" cy="87" r=".5" />
                      <circle cx="210" cy="87" r=".5" />
                      <circle cx="213" cy="87" r=".5" />
                      <circle cx="216" cy="87" r=".5" />
                      <circle cx="219" cy="87" r=".5" />
                      <circle cx="222" cy="87" r=".5" />
                      <circle cx="225" cy="87" r=".5" />
                      <circle cx="228" cy="87" r=".5" />
                      <circle cx="231" cy="87" r=".5" />
                      <circle cx="234" cy="87" r=".5" />
                      <circle cx="237" cy="87" r=".5" />
                      <circle cx="240" cy="87" r=".5" />
                      <circle cx="243" cy="87" r=".5" />
                      <circle cx="246" cy="87" r=".5" />
                      <circle cx="249" cy="87" r=".5" />
                      <circle cx="252" cy="87" r=".5" />
                      <circle cx="285" cy="87" r=".5" />
                      <circle cx="288" cy="87" r=".5" />
                      <circle cx="309" cy="87" r=".5" />
                      <circle cx="315" cy="87" r=".5" />
                      <circle cx="318" cy="87" r=".5" />
                      <circle cx="330" cy="87" r=".5" />
                      <circle cx="336" cy="87" r=".5" />
                      <circle cx="339" cy="87" r=".5" />
                      <circle cx="105" cy="90" r=".5" />
                      <circle cx="108" cy="90" r=".5" />
                      <circle cx="111" cy="90" r=".5" />
                      <circle cx="114" cy="90" r=".5" />
                      <circle cx="117" cy="90" r=".5" />
                      <circle cx="120" cy="90" r=".5" />
                      <circle cx="123" cy="90" r=".5" />
                      <circle cx="126" cy="90" r=".5" />
                      <circle cx="129" cy="90" r=".5" />
                      <circle cx="183" cy="90" r=".5" />
                      <circle cx="186" cy="90" r=".5" />
                      <circle cx="189" cy="90" r=".5" />
                      <circle cx="192" cy="90" r=".5" />
                      <circle cx="195" cy="90" r=".5" />
                      <circle cx="198" cy="90" r=".5" />
                      <circle cx="201" cy="90" r=".5" />
                      <circle cx="204" cy="90" r=".5" />
                      <circle cx="207" cy="90" r=".5" />
                      <circle cx="210" cy="90" r=".5" />
                      <circle cx="213" cy="90" r=".5" />
                      <circle cx="216" cy="90" r=".5" />
                      <circle cx="219" cy="90" r=".5" />
                      <circle cx="222" cy="90" r=".5" />
                      <circle cx="225" cy="90" r=".5" />
                      <circle cx="228" cy="90" r=".5" />
                      <circle cx="231" cy="90" r=".5" />
                      <circle cx="234" cy="90" r=".5" />
                      <circle cx="237" cy="90" r=".5" />
                      <circle cx="240" cy="90" r=".5" />
                      <circle cx="243" cy="90" r=".5" />
                      <circle cx="246" cy="90" r=".5" />
                      <circle cx="249" cy="90" r=".5" />
                      <circle cx="252" cy="90" r=".5" />
                      <circle cx="288" cy="90" r=".5" />
                      <circle cx="309" cy="90" r=".5" />
                      <circle cx="336" cy="90" r=".5" />
                      <circle cx="339" cy="90" r=".5" />
                      <circle cx="111" cy="93" r=".5" />
                      <circle cx="114" cy="93" r=".5" />
                      <circle cx="117" cy="93" r=".5" />
                      <circle cx="120" cy="93" r=".5" />
                      <circle cx="123" cy="93" r=".5" />
                      <circle cx="126" cy="93" r=".5" />
                      <circle cx="129" cy="93" r=".5" />
                      <circle cx="132" cy="93" r=".5" />
                      <circle cx="135" cy="93" r=".5" />
                      <circle cx="138" cy="93" r=".5" />
                      <circle cx="186" cy="93" r=".5" />
                      <circle cx="189" cy="93" r=".5" />
                      <circle cx="192" cy="93" r=".5" />
                      <circle cx="195" cy="93" r=".5" />
                      <circle cx="198" cy="93" r=".5" />
                      <circle cx="204" cy="93" r=".5" />
                      <circle cx="207" cy="93" r=".5" />
                      <circle cx="210" cy="93" r=".5" />
                      <circle cx="213" cy="93" r=".5" />
                      <circle cx="216" cy="93" r=".5" />
                      <circle cx="219" cy="93" r=".5" />
                      <circle cx="222" cy="93" r=".5" />
                      <circle cx="225" cy="93" r=".5" />
                      <circle cx="228" cy="93" r=".5" />
                      <circle cx="231" cy="93" r=".5" />
                      <circle cx="234" cy="93" r=".5" />
                      <circle cx="237" cy="93" r=".5" />
                      <circle cx="240" cy="93" r=".5" />
                      <circle cx="243" cy="93" r=".5" />
                      <circle cx="246" cy="93" r=".5" />
                      <circle cx="249" cy="93" r=".5" />
                      <circle cx="252" cy="93" r=".5" />
                      <circle cx="288" cy="93" r=".5" />
                      <circle cx="306" cy="93" r=".5" />
                      <circle cx="312" cy="93" r=".5" />
                      <circle cx="327" cy="93" r=".5" />
                      <circle cx="330" cy="93" r=".5" />
                      <circle cx="339" cy="93" r=".5" />
                      <circle cx="381" cy="93" r=".5" />
                      <circle cx="108" cy="96" r=".5" />
                      <circle cx="111" cy="96" r=".5" />
                      <circle cx="114" cy="96" r=".5" />
                      <circle cx="117" cy="96" r=".5" />
                      <circle cx="120" cy="96" r=".5" />
                      <circle cx="123" cy="96" r=".5" />
                      <circle cx="126" cy="96" r=".5" />
                      <circle cx="129" cy="96" r=".5" />
                      <circle cx="132" cy="96" r=".5" />
                      <circle cx="135" cy="96" r=".5" />
                      <circle cx="138" cy="96" r=".5" />
                      <circle cx="210" cy="96" r=".5" />
                      <circle cx="213" cy="96" r=".5" />
                      <circle cx="216" cy="96" r=".5" />
                      <circle cx="219" cy="96" r=".5" />
                      <circle cx="222" cy="96" r=".5" />
                      <circle cx="225" cy="96" r=".5" />
                      <circle cx="228" cy="96" r=".5" />
                      <circle cx="231" cy="96" r=".5" />
                      <circle cx="234" cy="96" r=".5" />
                      <circle cx="237" cy="96" r=".5" />
                      <circle cx="240" cy="96" r=".5" />
                      <circle cx="243" cy="96" r=".5" />
                      <circle cx="246" cy="96" r=".5" />
                      <circle cx="249" cy="96" r=".5" />
                      <circle cx="309" cy="96" r=".5" />
                      <circle cx="312" cy="96" r=".5" />
                      <circle cx="315" cy="96" r=".5" />
                      <circle cx="324" cy="96" r=".5" />
                      <circle cx="327" cy="96" r=".5" />
                      <circle cx="330" cy="96" r=".5" />
                      <circle cx="108" cy="99" r=".5" />
                      <circle cx="111" cy="99" r=".5" />
                      <circle cx="114" cy="99" r=".5" />
                      <circle cx="117" cy="99" r=".5" />
                      <circle cx="120" cy="99" r=".5" />
                      <circle cx="123" cy="99" r=".5" />
                      <circle cx="126" cy="99" r=".5" />
                      <circle cx="129" cy="99" r=".5" />
                      <circle cx="132" cy="99" r=".5" />
                      <circle cx="135" cy="99" r=".5" />
                      <circle cx="138" cy="99" r=".5" />
                      <circle cx="204" cy="99" r=".5" />
                      <circle cx="207" cy="99" r=".5" />
                      <circle cx="210" cy="99" r=".5" />
                      <circle cx="213" cy="99" r=".5" />
                      <circle cx="216" cy="99" r=".5" />
                      <circle cx="219" cy="99" r=".5" />
                      <circle cx="222" cy="99" r=".5" />
                      <circle cx="225" cy="99" r=".5" />
                      <circle cx="228" cy="99" r=".5" />
                      <circle cx="231" cy="99" r=".5" />
                      <circle cx="234" cy="99" r=".5" />
                      <circle cx="237" cy="99" r=".5" />
                      <circle cx="240" cy="99" r=".5" />
                      <circle cx="243" cy="99" r=".5" />
                      <circle cx="246" cy="99" r=".5" />
                      <circle cx="309" cy="99" r=".5" />
                      <circle cx="312" cy="99" r=".5" />
                      <circle cx="315" cy="99" r=".5" />
                      <circle cx="321" cy="99" r=".5" />
                      <circle cx="324" cy="99" r=".5" />
                      <circle cx="327" cy="99" r=".5" />
                      <circle cx="330" cy="99" r=".5" />
                      <circle cx="333" cy="99" r=".5" />
                      <circle cx="336" cy="99" r=".5" />
                      <circle cx="339" cy="99" r=".5" />
                      <circle cx="342" cy="99" r=".5" />
                      <circle cx="105" cy="102" r=".5" />
                      <circle cx="108" cy="102" r=".5" />
                      <circle cx="111" cy="102" r=".5" />
                      <circle cx="114" cy="102" r=".5" />
                      <circle cx="117" cy="102" r=".5" />
                      <circle cx="120" cy="102" r=".5" />
                      <circle cx="123" cy="102" r=".5" />
                      <circle cx="126" cy="102" r=".5" />
                      <circle cx="129" cy="102" r=".5" />
                      <circle cx="132" cy="102" r=".5" />
                      <circle cx="135" cy="102" r=".5" />
                      <circle cx="138" cy="102" r=".5" />
                      <circle cx="141" cy="102" r=".5" />
                      <circle cx="144" cy="102" r=".5" />
                      <circle cx="147" cy="102" r=".5" />
                      <circle cx="207" cy="102" r=".5" />
                      <circle cx="210" cy="102" r=".5" />
                      <circle cx="213" cy="102" r=".5" />
                      <circle cx="216" cy="102" r=".5" />
                      <circle cx="219" cy="102" r=".5" />
                      <circle cx="222" cy="102" r=".5" />
                      <circle cx="225" cy="102" r=".5" />
                      <circle cx="228" cy="102" r=".5" />
                      <circle cx="231" cy="102" r=".5" />
                      <circle cx="237" cy="102" r=".5" />
                      <circle cx="240" cy="102" r=".5" />
                      <circle cx="243" cy="102" r=".5" />
                      <circle cx="312" cy="102" r=".5" />
                      <circle cx="315" cy="102" r=".5" />
                      <circle cx="321" cy="102" r=".5" />
                      <circle cx="324" cy="102" r=".5" />
                      <circle cx="327" cy="102" r=".5" />
                      <circle cx="333" cy="102" r=".5" />
                      <circle cx="345" cy="102" r=".5" />
                      <circle cx="348" cy="102" r=".5" />
                      <circle cx="354" cy="102" r=".5" />
                      <circle cx="105" cy="105" r=".5" />
                      <circle cx="108" cy="105" r=".5" />
                      <circle cx="111" cy="105" r=".5" />
                      <circle cx="114" cy="105" r=".5" />
                      <circle cx="117" cy="105" r=".5" />
                      <circle cx="120" cy="105" r=".5" />
                      <circle cx="123" cy="105" r=".5" />
                      <circle cx="126" cy="105" r=".5" />
                      <circle cx="129" cy="105" r=".5" />
                      <circle cx="132" cy="105" r=".5" />
                      <circle cx="135" cy="105" r=".5" />
                      <circle cx="138" cy="105" r=".5" />
                      <circle cx="141" cy="105" r=".5" />
                      <circle cx="144" cy="105" r=".5" />
                      <circle cx="147" cy="105" r=".5" />
                      <circle cx="150" cy="105" r=".5" />
                      <circle cx="153" cy="105" r=".5" />
                      <circle cx="210" cy="105" r=".5" />
                      <circle cx="213" cy="105" r=".5" />
                      <circle cx="216" cy="105" r=".5" />
                      <circle cx="219" cy="105" r=".5" />
                      <circle cx="222" cy="105" r=".5" />
                      <circle cx="225" cy="105" r=".5" />
                      <circle cx="228" cy="105" r=".5" />
                      <circle cx="231" cy="105" r=".5" />
                      <circle cx="234" cy="105" r=".5" />
                      <circle cx="237" cy="105" r=".5" />
                      <circle cx="240" cy="105" r=".5" />
                      <circle cx="312" cy="105" r=".5" />
                      <circle cx="315" cy="105" r=".5" />
                      <circle cx="324" cy="105" r=".5" />
                      <circle cx="327" cy="105" r=".5" />
                      <circle cx="333" cy="105" r=".5" />
                      <circle cx="336" cy="105" r=".5" />
                      <circle cx="342" cy="105" r=".5" />
                      <circle cx="345" cy="105" r=".5" />
                      <circle cx="348" cy="105" r=".5" />
                      <circle cx="351" cy="105" r=".5" />
                      <circle cx="354" cy="105" r=".5" />
                      <circle cx="357" cy="105" r=".5" />
                      <circle cx="360" cy="105" r=".5" />
                      <circle cx="369" cy="105" r=".5" />
                      <circle cx="105" cy="108" r=".5" />
                      <circle cx="108" cy="108" r=".5" />
                      <circle cx="111" cy="108" r=".5" />
                      <circle cx="114" cy="108" r=".5" />
                      <circle cx="117" cy="108" r=".5" />
                      <circle cx="120" cy="108" r=".5" />
                      <circle cx="123" cy="108" r=".5" />
                      <circle cx="126" cy="108" r=".5" />
                      <circle cx="129" cy="108" r=".5" />
                      <circle cx="132" cy="108" r=".5" />
                      <circle cx="135" cy="108" r=".5" />
                      <circle cx="138" cy="108" r=".5" />
                      <circle cx="141" cy="108" r=".5" />
                      <circle cx="144" cy="108" r=".5" />
                      <circle cx="147" cy="108" r=".5" />
                      <circle cx="150" cy="108" r=".5" />
                      <circle cx="153" cy="108" r=".5" />
                      <circle cx="156" cy="108" r=".5" />
                      <circle cx="213" cy="108" r=".5" />
                      <circle cx="216" cy="108" r=".5" />
                      <circle cx="219" cy="108" r=".5" />
                      <circle cx="222" cy="108" r=".5" />
                      <circle cx="225" cy="108" r=".5" />
                      <circle cx="228" cy="108" r=".5" />
                      <circle cx="231" cy="108" r=".5" />
                      <circle cx="234" cy="108" r=".5" />
                      <circle cx="237" cy="108" r=".5" />
                      <circle cx="240" cy="108" r=".5" />
                      <circle cx="315" cy="108" r=".5" />
                      <circle cx="318" cy="108" r=".5" />
                      <circle cx="348" cy="108" r=".5" />
                      <circle cx="354" cy="108" r=".5" />
                      <circle cx="357" cy="108" r=".5" />
                      <circle cx="360" cy="108" r=".5" />
                      <circle cx="363" cy="108" r=".5" />
                      <circle cx="366" cy="108" r=".5" />
                      <circle cx="372" cy="108" r=".5" />
                      <circle cx="39" cy="111" r=".5" />
                      <circle cx="108" cy="111" r=".5" />
                      <circle cx="111" cy="111" r=".5" />
                      <circle cx="114" cy="111" r=".5" />
                      <circle cx="117" cy="111" r=".5" />
                      <circle cx="120" cy="111" r=".5" />
                      <circle cx="123" cy="111" r=".5" />
                      <circle cx="126" cy="111" r=".5" />
                      <circle cx="129" cy="111" r=".5" />
                      <circle cx="132" cy="111" r=".5" />
                      <circle cx="135" cy="111" r=".5" />
                      <circle cx="138" cy="111" r=".5" />
                      <circle cx="141" cy="111" r=".5" />
                      <circle cx="144" cy="111" r=".5" />
                      <circle cx="147" cy="111" r=".5" />
                      <circle cx="150" cy="111" r=".5" />
                      <circle cx="153" cy="111" r=".5" />
                      <circle cx="156" cy="111" r=".5" />
                      <circle cx="213" cy="111" r=".5" />
                      <circle cx="216" cy="111" r=".5" />
                      <circle cx="219" cy="111" r=".5" />
                      <circle cx="222" cy="111" r=".5" />
                      <circle cx="225" cy="111" r=".5" />
                      <circle cx="228" cy="111" r=".5" />
                      <circle cx="231" cy="111" r=".5" />
                      <circle cx="234" cy="111" r=".5" />
                      <circle cx="237" cy="111" r=".5" />
                      <circle cx="240" cy="111" r=".5" />
                      <circle cx="324" cy="111" r=".5" />
                      <circle cx="327" cy="111" r=".5" />
                      <circle cx="330" cy="111" r=".5" />
                      <circle cx="333" cy="111" r=".5" />
                      <circle cx="339" cy="111" r=".5" />
                      <circle cx="354" cy="111" r=".5" />
                      <circle cx="357" cy="111" r=".5" />
                      <circle cx="363" cy="111" r=".5" />
                      <circle cx="366" cy="111" r=".5" />
                      <circle cx="375" cy="111" r=".5" />
                      <circle cx="378" cy="111" r=".5" />
                      <circle cx="399" cy="111" r=".5" />
                      <circle cx="111" cy="114" r=".5" />
                      <circle cx="114" cy="114" r=".5" />
                      <circle cx="117" cy="114" r=".5" />
                      <circle cx="120" cy="114" r=".5" />
                      <circle cx="123" cy="114" r=".5" />
                      <circle cx="126" cy="114" r=".5" />
                      <circle cx="129" cy="114" r=".5" />
                      <circle cx="132" cy="114" r=".5" />
                      <circle cx="135" cy="114" r=".5" />
                      <circle cx="138" cy="114" r=".5" />
                      <circle cx="141" cy="114" r=".5" />
                      <circle cx="144" cy="114" r=".5" />
                      <circle cx="147" cy="114" r=".5" />
                      <circle cx="150" cy="114" r=".5" />
                      <circle cx="153" cy="114" r=".5" />
                      <circle cx="213" cy="114" r=".5" />
                      <circle cx="216" cy="114" r=".5" />
                      <circle cx="219" cy="114" r=".5" />
                      <circle cx="222" cy="114" r=".5" />
                      <circle cx="225" cy="114" r=".5" />
                      <circle cx="228" cy="114" r=".5" />
                      <circle cx="231" cy="114" r=".5" />
                      <circle cx="234" cy="114" r=".5" />
                      <circle cx="237" cy="114" r=".5" />
                      <circle cx="240" cy="114" r=".5" />
                      <circle cx="243" cy="114" r=".5" />
                      <circle cx="246" cy="114" r=".5" />
                      <circle cx="357" cy="114" r=".5" />
                      <circle cx="378" cy="114" r=".5" />
                      <circle cx="384" cy="114" r=".5" />
                      <circle cx="3" cy="117" r=".5" />
                      <circle cx="111" cy="117" r=".5" />
                      <circle cx="114" cy="117" r=".5" />
                      <circle cx="117" cy="117" r=".5" />
                      <circle cx="120" cy="117" r=".5" />
                      <circle cx="123" cy="117" r=".5" />
                      <circle cx="126" cy="117" r=".5" />
                      <circle cx="129" cy="117" r=".5" />
                      <circle cx="132" cy="117" r=".5" />
                      <circle cx="135" cy="117" r=".5" />
                      <circle cx="138" cy="117" r=".5" />
                      <circle cx="141" cy="117" r=".5" />
                      <circle cx="144" cy="117" r=".5" />
                      <circle cx="147" cy="117" r=".5" />
                      <circle cx="150" cy="117" r=".5" />
                      <circle cx="153" cy="117" r=".5" />
                      <circle cx="213" cy="117" r=".5" />
                      <circle cx="216" cy="117" r=".5" />
                      <circle cx="219" cy="117" r=".5" />
                      <circle cx="222" cy="117" r=".5" />
                      <circle cx="225" cy="117" r=".5" />
                      <circle cx="228" cy="117" r=".5" />
                      <circle cx="231" cy="117" r=".5" />
                      <circle cx="234" cy="117" r=".5" />
                      <circle cx="237" cy="117" r=".5" />
                      <circle cx="240" cy="117" r=".5" />
                      <circle cx="243" cy="117" r=".5" />
                      <circle cx="252" cy="117" r=".5" />
                      <circle cx="345" cy="117" r=".5" />
                      <circle cx="348" cy="117" r=".5" />
                      <circle cx="351" cy="117" r=".5" />
                      <circle cx="357" cy="117" r=".5" />
                      <circle cx="114" cy="120" r=".5" />
                      <circle cx="117" cy="120" r=".5" />
                      <circle cx="120" cy="120" r=".5" />
                      <circle cx="123" cy="120" r=".5" />
                      <circle cx="126" cy="120" r=".5" />
                      <circle cx="129" cy="120" r=".5" />
                      <circle cx="132" cy="120" r=".5" />
                      <circle cx="135" cy="120" r=".5" />
                      <circle cx="138" cy="120" r=".5" />
                      <circle cx="141" cy="120" r=".5" />
                      <circle cx="144" cy="120" r=".5" />
                      <circle cx="147" cy="120" r=".5" />
                      <circle cx="150" cy="120" r=".5" />
                      <circle cx="153" cy="120" r=".5" />
                      <circle cx="210" cy="120" r=".5" />
                      <circle cx="213" cy="120" r=".5" />
                      <circle cx="216" cy="120" r=".5" />
                      <circle cx="219" cy="120" r=".5" />
                      <circle cx="222" cy="120" r=".5" />
                      <circle cx="225" cy="120" r=".5" />
                      <circle cx="228" cy="120" r=".5" />
                      <circle cx="231" cy="120" r=".5" />
                      <circle cx="234" cy="120" r=".5" />
                      <circle cx="237" cy="120" r=".5" />
                      <circle cx="240" cy="120" r=".5" />
                      <circle cx="243" cy="120" r=".5" />
                      <circle cx="249" cy="120" r=".5" />
                      <circle cx="252" cy="120" r=".5" />
                      <circle cx="336" cy="120" r=".5" />
                      <circle cx="339" cy="120" r=".5" />
                      <circle cx="342" cy="120" r=".5" />
                      <circle cx="345" cy="120" r=".5" />
                      <circle cx="348" cy="120" r=".5" />
                      <circle cx="351" cy="120" r=".5" />
                      <circle cx="357" cy="120" r=".5" />
                      <circle cx="360" cy="120" r=".5" />
                      <circle cx="384" cy="120" r=".5" />
                      <circle cx="30" cy="123" r=".5" />
                      <circle cx="117" cy="123" r=".5" />
                      <circle cx="120" cy="123" r=".5" />
                      <circle cx="123" cy="123" r=".5" />
                      <circle cx="126" cy="123" r=".5" />
                      <circle cx="129" cy="123" r=".5" />
                      <circle cx="132" cy="123" r=".5" />
                      <circle cx="135" cy="123" r=".5" />
                      <circle cx="138" cy="123" r=".5" />
                      <circle cx="141" cy="123" r=".5" />
                      <circle cx="144" cy="123" r=".5" />
                      <circle cx="147" cy="123" r=".5" />
                      <circle cx="150" cy="123" r=".5" />
                      <circle cx="153" cy="123" r=".5" />
                      <circle cx="210" cy="123" r=".5" />
                      <circle cx="213" cy="123" r=".5" />
                      <circle cx="216" cy="123" r=".5" />
                      <circle cx="219" cy="123" r=".5" />
                      <circle cx="222" cy="123" r=".5" />
                      <circle cx="225" cy="123" r=".5" />
                      <circle cx="228" cy="123" r=".5" />
                      <circle cx="231" cy="123" r=".5" />
                      <circle cx="234" cy="123" r=".5" />
                      <circle cx="237" cy="123" r=".5" />
                      <circle cx="246" cy="123" r=".5" />
                      <circle cx="249" cy="123" r=".5" />
                      <circle cx="252" cy="123" r=".5" />
                      <circle cx="333" cy="123" r=".5" />
                      <circle cx="336" cy="123" r=".5" />
                      <circle cx="339" cy="123" r=".5" />
                      <circle cx="342" cy="123" r=".5" />
                      <circle cx="345" cy="123" r=".5" />
                      <circle cx="348" cy="123" r=".5" />
                      <circle cx="351" cy="123" r=".5" />
                      <circle cx="354" cy="123" r=".5" />
                      <circle cx="357" cy="123" r=".5" />
                      <circle cx="360" cy="123" r=".5" />
                      <circle cx="384" cy="123" r=".5" />
                      <circle cx="396" cy="123" r=".5" />
                      <circle cx="120" cy="126" r=".5" />
                      <circle cx="123" cy="126" r=".5" />
                      <circle cx="126" cy="126" r=".5" />
                      <circle cx="129" cy="126" r=".5" />
                      <circle cx="132" cy="126" r=".5" />
                      <circle cx="135" cy="126" r=".5" />
                      <circle cx="138" cy="126" r=".5" />
                      <circle cx="141" cy="126" r=".5" />
                      <circle cx="144" cy="126" r=".5" />
                      <circle cx="147" cy="126" r=".5" />
                      <circle cx="150" cy="126" r=".5" />
                      <circle cx="213" cy="126" r=".5" />
                      <circle cx="216" cy="126" r=".5" />
                      <circle cx="219" cy="126" r=".5" />
                      <circle cx="222" cy="126" r=".5" />
                      <circle cx="225" cy="126" r=".5" />
                      <circle cx="228" cy="126" r=".5" />
                      <circle cx="231" cy="126" r=".5" />
                      <circle cx="234" cy="126" r=".5" />
                      <circle cx="246" cy="126" r=".5" />
                      <circle cx="249" cy="126" r=".5" />
                      <circle cx="258" cy="126" r=".5" />
                      <circle cx="261" cy="126" r=".5" />
                      <circle cx="327" cy="126" r=".5" />
                      <circle cx="330" cy="126" r=".5" />
                      <circle cx="333" cy="126" r=".5" />
                      <circle cx="336" cy="126" r=".5" />
                      <circle cx="339" cy="126" r=".5" />
                      <circle cx="342" cy="126" r=".5" />
                      <circle cx="345" cy="126" r=".5" />
                      <circle cx="348" cy="126" r=".5" />
                      <circle cx="351" cy="126" r=".5" />
                      <circle cx="354" cy="126" r=".5" />
                      <circle cx="357" cy="126" r=".5" />
                      <circle cx="360" cy="126" r=".5" />
                      <circle cx="363" cy="126" r=".5" />
                      <circle cx="381" cy="126" r=".5" />
                      <circle cx="120" cy="129" r=".5" />
                      <circle cx="123" cy="129" r=".5" />
                      <circle cx="126" cy="129" r=".5" />
                      <circle cx="129" cy="129" r=".5" />
                      <circle cx="132" cy="129" r=".5" />
                      <circle cx="135" cy="129" r=".5" />
                      <circle cx="138" cy="129" r=".5" />
                      <circle cx="141" cy="129" r=".5" />
                      <circle cx="144" cy="129" r=".5" />
                      <circle cx="147" cy="129" r=".5" />
                      <circle cx="150" cy="129" r=".5" />
                      <circle cx="213" cy="129" r=".5" />
                      <circle cx="216" cy="129" r=".5" />
                      <circle cx="219" cy="129" r=".5" />
                      <circle cx="222" cy="129" r=".5" />
                      <circle cx="225" cy="129" r=".5" />
                      <circle cx="228" cy="129" r=".5" />
                      <circle cx="231" cy="129" r=".5" />
                      <circle cx="234" cy="129" r=".5" />
                      <circle cx="246" cy="129" r=".5" />
                      <circle cx="249" cy="129" r=".5" />
                      <circle cx="324" cy="129" r=".5" />
                      <circle cx="327" cy="129" r=".5" />
                      <circle cx="330" cy="129" r=".5" />
                      <circle cx="333" cy="129" r=".5" />
                      <circle cx="336" cy="129" r=".5" />
                      <circle cx="339" cy="129" r=".5" />
                      <circle cx="342" cy="129" r=".5" />
                      <circle cx="345" cy="129" r=".5" />
                      <circle cx="348" cy="129" r=".5" />
                      <circle cx="351" cy="129" r=".5" />
                      <circle cx="354" cy="129" r=".5" />
                      <circle cx="357" cy="129" r=".5" />
                      <circle cx="360" cy="129" r=".5" />
                      <circle cx="363" cy="129" r=".5" />
                      <circle cx="381" cy="129" r=".5" />
                      <circle cx="120" cy="132" r=".5" />
                      <circle cx="123" cy="132" r=".5" />
                      <circle cx="126" cy="132" r=".5" />
                      <circle cx="129" cy="132" r=".5" />
                      <circle cx="132" cy="132" r=".5" />
                      <circle cx="135" cy="132" r=".5" />
                      <circle cx="138" cy="132" r=".5" />
                      <circle cx="141" cy="132" r=".5" />
                      <circle cx="144" cy="132" r=".5" />
                      <circle cx="213" cy="132" r=".5" />
                      <circle cx="216" cy="132" r=".5" />
                      <circle cx="219" cy="132" r=".5" />
                      <circle cx="222" cy="132" r=".5" />
                      <circle cx="225" cy="132" r=".5" />
                      <circle cx="228" cy="132" r=".5" />
                      <circle cx="231" cy="132" r=".5" />
                      <circle cx="234" cy="132" r=".5" />
                      <circle cx="246" cy="132" r=".5" />
                      <circle cx="249" cy="132" r=".5" />
                      <circle cx="324" cy="132" r=".5" />
                      <circle cx="327" cy="132" r=".5" />
                      <circle cx="330" cy="132" r=".5" />
                      <circle cx="333" cy="132" r=".5" />
                      <circle cx="336" cy="132" r=".5" />
                      <circle cx="339" cy="132" r=".5" />
                      <circle cx="342" cy="132" r=".5" />
                      <circle cx="345" cy="132" r=".5" />
                      <circle cx="348" cy="132" r=".5" />
                      <circle cx="351" cy="132" r=".5" />
                      <circle cx="354" cy="132" r=".5" />
                      <circle cx="357" cy="132" r=".5" />
                      <circle cx="360" cy="132" r=".5" />
                      <circle cx="363" cy="132" r=".5" />
                      <circle cx="366" cy="132" r=".5" />
                      <circle cx="120" cy="135" r=".5" />
                      <circle cx="123" cy="135" r=".5" />
                      <circle cx="126" cy="135" r=".5" />
                      <circle cx="129" cy="135" r=".5" />
                      <circle cx="132" cy="135" r=".5" />
                      <circle cx="135" cy="135" r=".5" />
                      <circle cx="138" cy="135" r=".5" />
                      <circle cx="141" cy="135" r=".5" />
                      <circle cx="213" cy="135" r=".5" />
                      <circle cx="216" cy="135" r=".5" />
                      <circle cx="219" cy="135" r=".5" />
                      <circle cx="222" cy="135" r=".5" />
                      <circle cx="225" cy="135" r=".5" />
                      <circle cx="228" cy="135" r=".5" />
                      <circle cx="231" cy="135" r=".5" />
                      <circle cx="324" cy="135" r=".5" />
                      <circle cx="327" cy="135" r=".5" />
                      <circle cx="330" cy="135" r=".5" />
                      <circle cx="333" cy="135" r=".5" />
                      <circle cx="336" cy="135" r=".5" />
                      <circle cx="339" cy="135" r=".5" />
                      <circle cx="342" cy="135" r=".5" />
                      <circle cx="345" cy="135" r=".5" />
                      <circle cx="348" cy="135" r=".5" />
                      <circle cx="351" cy="135" r=".5" />
                      <circle cx="354" cy="135" r=".5" />
                      <circle cx="357" cy="135" r=".5" />
                      <circle cx="360" cy="135" r=".5" />
                      <circle cx="363" cy="135" r=".5" />
                      <circle cx="120" cy="138" r=".5" />
                      <circle cx="123" cy="138" r=".5" />
                      <circle cx="126" cy="138" r=".5" />
                      <circle cx="129" cy="138" r=".5" />
                      <circle cx="132" cy="138" r=".5" />
                      <circle cx="135" cy="138" r=".5" />
                      <circle cx="138" cy="138" r=".5" />
                      <circle cx="141" cy="138" r=".5" />
                      <circle cx="216" cy="138" r=".5" />
                      <circle cx="219" cy="138" r=".5" />
                      <circle cx="222" cy="138" r=".5" />
                      <circle cx="225" cy="138" r=".5" />
                      <circle cx="228" cy="138" r=".5" />
                      <circle cx="231" cy="138" r=".5" />
                      <circle cx="324" cy="138" r=".5" />
                      <circle cx="327" cy="138" r=".5" />
                      <circle cx="330" cy="138" r=".5" />
                      <circle cx="333" cy="138" r=".5" />
                      <circle cx="336" cy="138" r=".5" />
                      <circle cx="339" cy="138" r=".5" />
                      <circle cx="342" cy="138" r=".5" />
                      <circle cx="345" cy="138" r=".5" />
                      <circle cx="348" cy="138" r=".5" />
                      <circle cx="351" cy="138" r=".5" />
                      <circle cx="354" cy="138" r=".5" />
                      <circle cx="357" cy="138" r=".5" />
                      <circle cx="360" cy="138" r=".5" />
                      <circle cx="363" cy="138" r=".5" />
                      <circle cx="120" cy="141" r=".5" />
                      <circle cx="123" cy="141" r=".5" />
                      <circle cx="126" cy="141" r=".5" />
                      <circle cx="129" cy="141" r=".5" />
                      <circle cx="132" cy="141" r=".5" />
                      <circle cx="135" cy="141" r=".5" />
                      <circle cx="138" cy="141" r=".5" />
                      <circle cx="141" cy="141" r=".5" />
                      <circle cx="216" cy="141" r=".5" />
                      <circle cx="219" cy="141" r=".5" />
                      <circle cx="222" cy="141" r=".5" />
                      <circle cx="225" cy="141" r=".5" />
                      <circle cx="228" cy="141" r=".5" />
                      <circle cx="324" cy="141" r=".5" />
                      <circle cx="327" cy="141" r=".5" />
                      <circle cx="330" cy="141" r=".5" />
                      <circle cx="333" cy="141" r=".5" />
                      <circle cx="342" cy="141" r=".5" />
                      <circle cx="345" cy="141" r=".5" />
                      <circle cx="348" cy="141" r=".5" />
                      <circle cx="351" cy="141" r=".5" />
                      <circle cx="354" cy="141" r=".5" />
                      <circle cx="357" cy="141" r=".5" />
                      <circle cx="360" cy="141" r=".5" />
                      <circle cx="120" cy="144" r=".5" />
                      <circle cx="123" cy="144" r=".5" />
                      <circle cx="126" cy="144" r=".5" />
                      <circle cx="129" cy="144" r=".5" />
                      <circle cx="132" cy="144" r=".5" />
                      <circle cx="135" cy="144" r=".5" />
                      <circle cx="138" cy="144" r=".5" />
                      <circle cx="216" cy="144" r=".5" />
                      <circle cx="219" cy="144" r=".5" />
                      <circle cx="222" cy="144" r=".5" />
                      <circle cx="225" cy="144" r=".5" />
                      <circle cx="321" cy="144" r=".5" />
                      <circle cx="324" cy="144" r=".5" />
                      <circle cx="327" cy="144" r=".5" />
                      <circle cx="330" cy="144" r=".5" />
                      <circle cx="342" cy="144" r=".5" />
                      <circle cx="345" cy="144" r=".5" />
                      <circle cx="348" cy="144" r=".5" />
                      <circle cx="351" cy="144" r=".5" />
                      <circle cx="354" cy="144" r=".5" />
                      <circle cx="357" cy="144" r=".5" />
                      <circle cx="381" cy="144" r=".5" />
                      <circle cx="120" cy="147" r=".5" />
                      <circle cx="123" cy="147" r=".5" />
                      <circle cx="126" cy="147" r=".5" />
                      <circle cx="129" cy="147" r=".5" />
                      <circle cx="132" cy="147" r=".5" />
                      <circle cx="135" cy="147" r=".5" />
                      <circle cx="345" cy="147" r=".5" />
                      <circle cx="348" cy="147" r=".5" />
                      <circle cx="351" cy="147" r=".5" />
                      <circle cx="354" cy="147" r=".5" />
                      <circle cx="381" cy="147" r=".5" />
                      <circle cx="120" cy="150" r=".5" />
                      <circle cx="123" cy="150" r=".5" />
                      <circle cx="126" cy="150" r=".5" />
                      <circle cx="129" cy="150" r=".5" />
                      <circle cx="132" cy="150" r=".5" />
                      <circle cx="135" cy="150" r=".5" />
                      <circle cx="348" cy="150" r=".5" />
                      <circle cx="351" cy="150" r=".5" />
                      <circle cx="381" cy="150" r=".5" />
                      <circle cx="384" cy="150" r=".5" />
                      <circle cx="120" cy="153" r=".5" />
                      <circle cx="123" cy="153" r=".5" />
                      <circle cx="126" cy="153" r=".5" />
                      <circle cx="129" cy="153" r=".5" />
                      <circle cx="348" cy="153" r=".5" />
                      <circle cx="351" cy="153" r=".5" />
                      <circle cx="375" cy="153" r=".5" />
                      <circle cx="378" cy="153" r=".5" />
                      <circle cx="120" cy="156" r=".5" />
                      <circle cx="123" cy="156" r=".5" />
                      <circle cx="126" cy="156" r=".5" />
                      <circle cx="129" cy="156" r=".5" />
                      <circle cx="348" cy="156" r=".5" />
                      <circle cx="369" cy="156" r=".5" />
                      <circle cx="372" cy="156" r=".5" />
                      <circle cx="375" cy="156" r=".5" />
                      <circle cx="120" cy="159" r=".5" />
                      <circle cx="123" cy="159" r=".5" />
                      <circle cx="126" cy="159" r=".5" />
                      <circle cx="129" cy="159" r=".5" />
                      <circle cx="366" cy="159" r=".5" />
                      <circle cx="369" cy="159" r=".5" />
                      <circle cx="123" cy="162" r=".5" />
                      <circle cx="126" cy="162" r=".5" />
                      <circle cx="129" cy="162" r=".5" />
                      <circle cx="123" cy="165" r=".5" />
                      <circle cx="126" cy="165" r=".5" />
                      <circle cx="129" cy="165" r=".5" />
                      <circle cx="138" cy="165" r=".5" />
                      <circle cx="141" cy="165" r=".5" />
                      <circle cx="126" cy="168" r=".5" />
                      <circle cx="129" cy="168" r=".5" />
                      <circle cx="132" cy="168" r=".5" />
                    </g>
                  </mask>
                  <filter
                    id="blur"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                  </filter>
                  <radialGradient id="grad">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="30%" stopColor="rgba(0,255,255,0.7)" />
                    <stop offset="100%" stopColor="rgba(0,255,255,0)" />
                  </radialGradient>
                  <g mask="url(#mapMask)" filter="url(#blur)">
                    <rect height="100%" width="100%" fill="rgba(0,0,0,0.7)" />"
                    <circle
                      cx="0"
                      cy="0"
                      r="30"
                      fill="url(#grad)"
                      filter="brightness(172%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="39.3s"
                        begin="-23.4s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="21.4s"
                        begin="-20s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="14"
                      fill="url(#grad)"
                      filter="brightness(131%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="39.7s"
                        begin="-16.5s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="21.2s"
                        begin="-19.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="6"
                      fill="url(#grad)"
                      filter="brightness(123%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="38.5s"
                        begin="-7.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="20.9s"
                        begin="-11.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="17"
                      fill="url(#grad)"
                      filter="brightness(194%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="37s"
                        begin="-28.7s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="35s"
                        begin="-7.2s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="27"
                      fill="url(#grad)"
                      filter="brightness(173%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="35.5s"
                        begin="-23.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="31.9s"
                        begin="-18.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="19"
                      fill="url(#grad)"
                      filter="brightness(216%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="34.8s"
                        begin="-35.7s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="34.3s"
                        begin="-12.8s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      fill="url(#grad)"
                      filter="brightness(187%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="38s"
                        begin="-18.9s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="24.5s"
                        begin="-6.1s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="7"
                      fill="url(#grad)"
                      filter="brightness(204%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="32.9s"
                        begin="-18.9s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="20.9s"
                        begin="-9.9s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="22"
                      fill="url(#grad)"
                      filter="brightness(243%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="35s"
                        begin="-33.1s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="26.4s"
                        begin="-16.7s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="28"
                      fill="url(#grad)"
                      filter="brightness(145%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="33.4s"
                        begin="-15s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="24.5s"
                        begin="-20s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="21"
                      fill="url(#grad)"
                      filter="brightness(210%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="38.8s"
                        begin="-18s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="32.6s"
                        begin="-16.8s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="9"
                      fill="url(#grad)"
                      filter="brightness(208%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="33s"
                        begin="-14.3s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="20s"
                        begin="-9.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      fill="url(#grad)"
                      filter="brightness(247%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="36.6s"
                        begin="-33.7s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="22.5s"
                        begin="-10.1s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="26"
                      fill="url(#grad)"
                      filter="brightness(105%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="30.2s"
                        begin="-4.9s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="34.1s"
                        begin="-17.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="12"
                      fill="url(#grad)"
                      filter="brightness(239%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="38.8s"
                        begin="-29.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="32.4s"
                        begin="-9.3s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="5"
                      fill="url(#grad)"
                      filter="brightness(182%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="31.8s"
                        begin="-24.8s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="21.7s"
                        begin="-11.8s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="17"
                      fill="url(#grad)"
                      filter="brightness(220%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="38.2s"
                        begin="-16.3s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="32.9s"
                        begin="-19s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="14"
                      fill="url(#grad)"
                      filter="brightness(205%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="32.8s"
                        begin="-23.3s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="21.5s"
                        begin="-11.4s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="25"
                      fill="url(#grad)"
                      filter="brightness(163%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="39.2s"
                        begin="-5.9s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="28.9s"
                        begin="-19.2s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="9"
                      fill="url(#grad)"
                      filter="brightness(155%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="39.4s"
                        begin="-34.5s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="30.5s"
                        begin="-15.2s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="11"
                      fill="url(#grad)"
                      filter="brightness(200%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="39.2s"
                        begin="-32.7s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="24.8s"
                        begin="-7.2s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="29"
                      fill="url(#grad)"
                      filter="brightness(192%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="33.7s"
                        begin="-23.9s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="32.9s"
                        begin="-17.2s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="18"
                      fill="url(#grad)"
                      filter="brightness(137%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="38.1s"
                        begin="-15.1s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="32s"
                        begin="-7s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="25"
                      fill="url(#grad)"
                      filter="brightness(164%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="30.5s"
                        begin="-8.4s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="21.4s"
                        begin="-18.3s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="24"
                      fill="url(#grad)"
                      filter="brightness(110%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="30.8s"
                        begin="-17.4s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="28.8s"
                        begin="-9.3s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="28"
                      fill="url(#grad)"
                      filter="brightness(117%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="33.2s"
                        begin="-25.1s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="26.1s"
                        begin="-18.6s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="28"
                      fill="url(#grad)"
                      filter="brightness(168%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="38.8s"
                        begin="-0.2s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="30.3s"
                        begin="-5.4s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="7"
                      fill="url(#grad)"
                      filter="brightness(245%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="37.5s"
                        begin="-36.4s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="30.6s"
                        begin="-18.4s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      fill="url(#grad)"
                      filter="brightness(232%)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="34.8s"
                        begin="-36.5s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="30.3s"
                        begin="-9.2s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="0"
                      r="11"
                      fill="url(#grad)"
                      filter="brightness(2.2)"
                    >
                      <animate
                        attributeName="cx"
                        values="0%; 100%; 0%"
                        dur="35.8s"
                        begin="-1s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                      <animate
                        attributeName="cy"
                        values="0%; 100%; 0%"
                        dur="23.1s"
                        begin="-19.8s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        keySplines="0.13 0.5 0.87 0.5; 0.13 0.5 0.87 0.5"
                        calcMode="spline"
                      />
                    </circle>
                  </g>
                </svg>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  className="hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/50 shadow transition-all duration-200 pl-1 pr-2 pt-1 pb-1 rounded-full text-gray-600 hover:text-white"
                  href="https://theorg.com/org/colibri-creative-web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-sitemap" />
                  The Org
                </a>
              </li>
              <li className="mb-2">
                <ScrollLink
                  activeClass="current"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-150 cursor-pointer"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Our Team
                </ScrollLink>
              </li>
              <li className="mb-2">
                <ScrollLink
                  activeClass="current"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-150 cursor-pointer"
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li className="mb-2">
                <ScrollLink
                  activeClass="current"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-150 cursor-pointer"
                  to="start"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  How We Work
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Services</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <ScrollLink
                  activeClass="current"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-150 cursor-pointer"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Digital Marketing
                </ScrollLink>
              </li>
              <li className="mb-2">
                <ScrollLink
                  activeClass="current"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-150 cursor-pointer"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Graphic Design & UX/UI Prototyping
                </ScrollLink>
              </li>
              <li className="mb-2">
                <ScrollLink
                  activeClass="current"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-150 cursor-pointer"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Web Development
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest updates from our projects to your inbox.
            </p>
            <form
              target="_blank"
              action="https://formsubmit.co/info@colibricreativeweb.com"
              method="POST"
            >
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <div className="relative flex items-center max-w-xs">
                    <input
                      type="email"
                      name="email"
                      maxLength="40"
                      autoComplete="on"
                      inputMode="email"
                      placeholder="Your email"
                      autoCapitalize="off"
                      spellCheck="false"
                      autoCorrect="off"
                      className="rounded-full border-gray-200 w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      pattern="(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute hover:animate-pulse transition-all duration-200 hover:scale-125 inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <i className="icon-right-open w-3 h-3 fill-current text-blue-400 mx-3 flex-shrink-0" />
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 lg:mr-0 mr-8 space-x-2">
            <li>
              <a
                title="Instagram"
                href="https://www.instagram.com/colibricreative.web/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-1 text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Instagram"
              >
                <i className="text-md icon-instagram-circled" />
              </a>
            </li>
            <li>
              <a
                title="Facebook"
                href="https://facebook.com/colibricreativeweb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-1 text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <i className="text-md icon-facebook-circled" />
              </a>
            </li>
            <li>
              <a
                title="GitHub"
                href="https://github.com/colibricreativeweb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-1 text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="GitHub"
              >
                <i className="text-md icon-github-circled-alt2" />
              </a>
            </li>
            <li>
              <a
                title="Email"
                href="mailto:info@colibricreativeweb.com?subject=Let's%20Talk"
                className="flex justify-center items-center p-1 text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Email"
              >
                <i className="text-md icon-mail-circled" />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            {`© ${new Date().getFullYear()}`} ·{" "}
            <a
              className="text-transparent bg-clip-text bg-gradient-to-b from-[#00a6ff] to-[#00ffff] hover:text-blue-600 hover:underline font-bold"
              href="https://github.com/colibricreativeweb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colibri Creative Web
            </a>
            <a
              target="_blank"
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
            >
              <img
                alt="Creative Commons License"
                src="https://i.creativecommons.org/l/by-nc-nd/3.0/80x15.png"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
