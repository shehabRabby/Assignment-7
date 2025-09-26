import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({
  data,
  setData,
  pickCard,
  setPickCard,
  resolved,
  setResolved,
}) => {
  // console.log(pickCard)

  const handleComplete = (card) => {
    // console.log('compelete button')
    // console.log(card)
    setPickCard(pickCard.filter((items) => items.id !== card.id));

    let upgradeCard = { ...card };

    if (card.status === "In-progress") {
      upgradeCard.status = "Resolved";
    }

    setResolved((element) => [...element, upgradeCard]);
    toast(`${card.title} marked as Complete ✅`);
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Task Status</h2>

      {pickCard.length === 0 && (
        <p className="text-sm text-gray-600 mb-4">
          Select a ticket to add to Task Status
        </p>
      )}

      {pickCard.map((card, index) => {
        return (
          <div className="bg-white p-3 rounded-sm shadow-sm mb-2 hover:bg-green-100">
            <h2 className="font-semibold">{card.title}</h2>
            <button
              onClick={() => handleComplete(card)}
              className="bg-green-600 text-white w-full py-1 font-mono rounded-sm shadow-sm cursor-pointer mt-2"
            >
              Compelete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStatus;
