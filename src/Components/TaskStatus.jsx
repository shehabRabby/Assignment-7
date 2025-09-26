import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ pickCard, setPickCard }) => {
  // console.log(pickCard)
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Task Status</h2>
      <p className="text-sm text-gray-600 mb-4">
        Select a ticket to add to Task Status
      </p>

      {pickCard.map((card, index) => {
        return (
          <div className="bg-white p-3 rounded-sm shadow-sm mb-2 hover:border-green-300 hover:border">
            <h2 className="font-semibold">{card.title}</h2>
            <button onClick={() => toast(`${card.title} marked as Complete ✅`)}
             className="bg-green-600 text-white w-full py-1 font-mono rounded-sm shadow-sm cursor-pointer mt-2">
              Compelete
            </button>
          </div>
        );
      })}

      {/* task status card here  */}
    </div>
  );
};

export default TaskStatus;
