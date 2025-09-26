import React, { use, useState } from "react";
import Container from "./Container";
import leftImg from '../assets/left.png';
import rightImg from '../assets/right.png';

const Box = ({fetchPromise,resolved,setResolved}) => {

  const initialTickets = use(fetchPromise);
  // console.log(initialTickets)
  const [data,setData] = useState(initialTickets);
// console.log(data)

  const inProgress = data.filter((items) => items.status == "In-progress");

  return (
    <div className="bg-gray-100 p-3">
    <Container>
      <div className="flex flex-col sm:flex-row gap-8 py-4">
        <div className="min-h-55 box1-bg-image box-design">
          <h1 className="text-xl">In Progress</h1>
          <span className="text-4xl font-semibold">{inProgress.length}</span>
        </div>
        <div className="min-h-55 box2-bg-image box-design bg-cover">
          <h1 className="text-xl">Resolved</h1>
          <span className="text-4xl font-semibold">{resolved.length}</span>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Box;
