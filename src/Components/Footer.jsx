import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className=" bg-black text-white pt-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-3">
          <div className="w-full space-y-2">
            <h1 className="text-xl font-bold">CS-Ticket System</h1>
            <p className="text-gray-400">
              A Customer Support (CS) ticket system is a tool that organizes and
              tracks customer issues or service requests in one place. Each
              ticket represents a problem, question, or task, helping support
              teams manage, prioritize, and resolve them efficiently.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h1 className="text-xl font-bold">Company</h1>
            <ul className="text-gray-400 space-y-1">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>

          <div className="w-full space-y-2">
            <h1 className="text-xl font-bold">Services</h1>
            <ul className="text-gray-400 space-y-1">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          <div className="w-full space-y-2">
            <h1 className="text-xl font-bold">Information</h1>
            <ul className="text-gray-400 space-y-1">
              <li>Privacy Police</li>
              <li>Terms and Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

          <div className="w-full space-y-2">
            <h1 className="text-xl font-bold">Social Links</h1>
            <ul className="text-gray-400 space-y-1">
              <li>
                <img src="" alt="" />
                CS-Ticket System
              </li>
              <li>
                <img src="" alt="" />
                CS-Ticket System
              </li>
              <li>
                <img src="" alt="" />
                CS-Ticket System
              </li>
              <li>
                <img src="" alt="" />
                support@cst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
            <p className=" border-t border-gray-600 text-gray-300 py-5">@2025 CS-Ticket System. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
