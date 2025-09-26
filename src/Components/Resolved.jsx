import React from "react";

const Resolved = ({resolved, setResolved }) => {
  return (
    <div>
      {/* resolve button  */}
      <h3 className="text-xl font-bold mb-2">Resolved Task</h3>

      {resolved.length == 0 ? (
        <p className="text-sm text-gray-500">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-2">
          {resolved.map((task) => (
            <div className="bg-blue-100 p-3 rounded-sm shadow-sm mt-2 ">
              <h2 className="font-semibold text-center">{task.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Resolved;
