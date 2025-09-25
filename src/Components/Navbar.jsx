import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="py-3">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-3">
          <h2 className="text-center sm:text-start text-xl font-bold cursor-pointer">CS - Ticket System</h2>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-5 font-semibold">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">FQA</p>
            <p className="cursor-pointer">Changelog</p>
            <p className="cursor-pointer">Blog</p>
            <p className="cursor-pointer">Download</p>
            <p className="cursor-pointer">Concat</p>
            <button className="cursor-pointer mr-0 sm:mr-10 px-5 py-1 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-800 to-purple-400">
              + New Ticket
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
