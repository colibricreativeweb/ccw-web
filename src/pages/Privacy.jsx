import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
/* import Banner from '../partials/Banner'; */

function Privacy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-3xl mx-auto px-6 md:px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-12">
              {/* Page header */}
              <div className="text-center mb-6">
                <h1 className="h1">
                  <span className="underline underline-offset-4 decoration-blue-400">
                    Privacy Policy
                  </span>
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center mx-auto overflow-auto">
                <p>
                  At colibricreativeweb.com, one of our main priorities is the
                  privacy of our visitors. This Privacy Policy document contains
                  types of information that is collected and recorded by
                  colibricreativeweb.com and how we use it.
                </p>
                <br />
                <p>
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us.
                </p>
                <p>
                  This Privacy Policy applies only to our online activities and
                  is valid for visitors to our website with regards to the
                  information that they shared and/or collect in
                  colibricreativeweb.com. This policy is not applicable to any
                  information collected offline or via channels other than this
                  website.
                </p>
                <h2 className="mt-4 text-xl text-center font-bold">Consent</h2>
                <br />
                <h2 className="font-bold">Information we collect</h2>
                <p>
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                  <br />
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and any other information
                  you may choose to provide. We really care about privacy,
                  that's why:
                  <br />
                  <ol>
                    <li>● We do not hold log files.</li>
                    <li>● We do not use any cookies.</li>
                    <li>● We do not track user behavior.</li>
                    <li>● We do not sell any user information.</li>
                    <li>● We do not permanently save any user information.</li>
                  </ol>
                </p>
                <h2 className="font-bold mt-6">Log Files</h2>
                <p>
                  colibricreativeweb.com follows a standard procedure of using
                  log files. These files log visitors when they visit websites.
                  All hosting companies do this and a part of hosting services'
                  analytics. The information collected by log files include
                  internet protocol (IP) addresses, browser type, Internet
                  Service Provider (ISP), date and time stamp, referring/exit
                  pages, and possibly the number of clicks. These are not linked
                  to any information that is personally identifiable. The
                  purpose of the information is for analyzing trends,
                  administering the site, tracking users' movement on the
                  website, and gathering demographic information.
                </p>
                <p>
                  <span>
                    <b>Vercel</b>
                  </span>
                  <br />
                  We do not hold log files in our end, however we use Vercel as
                  our deployment platform and it has its own Privacy Policy in
                  regards to this matter, you can review their policies at{" "}
                  <a
                    className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white rounded transition-all duration-200 cursor-pointer"
                    href="https://vercel.com/legal/privacy-policy#customers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://vercel.com/legal/privacy-policy#customers
                  </a>
                  .
                  <br />
                  <span>
                    <b>Calendly</b>
                  </span>
                  <br />
                  We use Calendly to schedule better, and you can also see its
                  Privacy Policy at{" "}
                  <a
                    className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white rounded transition-all duration-200 cursor-pointer"
                    href="https://calendly.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://calendly.com/privacy
                  </a>
                  .
                </p>
                <h2 className="font-bold mt-6">
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </h2>
                <p>
                  Under the CCPA, among other rights, California consumers have
                  the right to:
                  <br />
                  Request that a business that collects a consumer's personal
                  data disclose the categories and specific pieces of personal
                  data that a business has collected about consumers.
                  <br />
                  Request that a business delete any personal data about the
                  consumer that a business has collected.
                  <br />
                  Request that a business that sells a consumer's personal data,
                  not sell the consumer's personal data.
                  <br />
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>
                <h2 className="font-bold mt-6">GDPR Data Protection Rights</h2>
                <p>
                  We would like to make sure you are fully aware of all of your
                  data protection rights. Every user is entitled to the
                  following:
                  <br />
                  The right to access – You have the right to request copies of
                  your personal data. We may charge you a small fee for this
                  service.
                  <br />
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate. You
                  also have the right to request that we complete the
                  information you believe is incomplete.
                  <br />
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                  <br />
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                  <br />
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                  <br />
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                  <br />
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>
                <h2 className="font-bold mt-6">Children's Information</h2>
                <p>
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                  <br />
                  colibricreativeweb.com does not knowingly collect any Personal
                  Identifiable Information from children under the age of 13. If
                  you think that your child provided this kind of information on
                  our website, we strongly encourage you to contact us
                  immediately and we will do our best efforts to promptly remove
                  such information from our records.
                </p>
                <h2 className="font-bold mt-6">Inquiries</h2>
                <p className="mb-20">
                  Any inquiries shall be sent to{" "}
                  <a
                    className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white rounded transition-all duration-200 cursor-pointer"
                    href="mailto:info@colibricreativeweb.com?subject=Hey%20there!"
                  >
                    info@colibricreativeweb.com
                  </a>
                  .
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}
    </div>
  );
}

export default Privacy;
