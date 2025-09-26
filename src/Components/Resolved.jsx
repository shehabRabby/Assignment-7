import React from 'react';

const Resolved = ({pickCard,setPickCard}) => {
    return (
            <div>
                {/* resolve button  */}
                <h3 className="text-xl font-bold mb-2">Resolved Task</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-500">No resolved tasks yet.</li>
                </ul>
         
               <div className="bg-blue-100 p-3 rounded-sm shadow-sm mt-2 hover:border-blue-300 hover:border">
                <h2 className="font-semibold text-center">Tickets Title here</h2>
               </div>

            </div>
    );
};

export default Resolved;