import React from "react";
import Container from "./Container";
import leftImg from '../assets/left.png';
import rightImg from '../assets/right.png';

const Box = () => {
  return (
    <div className="bg-gray-100 p-3">
    <Container>
      <div className="flex flex-col sm:flex-row gap-8 py-4">
        <div className="border min-h-55 box-design bg-cover bg-center bg-gradient-to-r from-purple-800 to-purple-400">
          <h1 className="text-xl">In Progress</h1>
          <span className="text-4xl font-semibold">0</span>
        </div>
        <div className="border min-h-55 box-design bg-cover bg-center bg-gradient-to-l from-green-800 to-green-400">
          <h1 className="text-xl">Resolved</h1>
          <span className="text-4xl font-semibold">0</span>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Box;
