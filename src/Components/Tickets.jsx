import React, { use } from "react";
import Container from "./Container";

const Tickets = ({fetchPromise}) => {

    const initialTickets = use(fetchPromise);
    // console.log(initialTickets)

  return (
    <div className="bg-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
          {/* left section here  */}
          <div className="lg:col-span-2">
               <h2 className="text-2xl font-bold mb-4">Customer Tickets</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/*All Ticket Cards start here */}
                 {
                    initialTickets.map((issue) => {
                      return(
                        <div className="bg-white p-4 rounded-lg shadow-sm hover:border border-gray-300">
                           <div className="flex justify-between items-start mb-2">
                             <h3 className="font-semibold text-lg">{issue.title}</h3>
                             <span className={`text-sm px-2 py-1 rounded-full flex items-center gap-1 cursor-pointer ${issue.status == "Open" ? "bg-green-100":"bg-yellow-100"}`}>
                               <span><button className={`h-3 w-3 rounded-full  flex ${issue.status == "Open" ? "bg-green-700":"bg-yellow-500"}`}></button></span>{issue.status}
                             </span>
                           </div>
                           <p className="text-sm text-gray-600 mb-3">{issue.description}</p>
                           <div className="flex justify-between items-center text-sm text-gray-500">
                             <span>#{issue.id}<span className={`font-semibold ml-3 ${issue.priority == "HIGH PRIORITY" ?"text-red-500" : issue.priority == "LOW PRIORITY" ? "text-green-500" : "text-yellow-500"}`}>{issue.priority}</span></span>
                             <span>{issue.customer}</span>
                             <span>{issue.createdAt}</span>
                           </div>
                       </div>
                      )
                    })
                 }
               </div>
          </div>

          {/* Right Section here*/}
          <div className="p-4 rounded-lg">
            <div className="">
               <h2 className="text-xl font-bold mb-4">Task Status</h2>
               <p className="text-sm text-gray-600 mb-4">Select a ticket to add to Task Status</p>


               {/* task status card here  */}
               <div className="bg-white p-3 rounded-sm shadow-sm mb-2 hover:border-green-300 hover:border">
                <h2 className="font-semibold">Tickets Title here</h2>
                <button className="bg-green-600 text-white w-full py-1 font-mono rounded-sm shadow-sm cursor-pointer mt-2">Compelete</button>
               </div>
               <div className="bg-white p-3 rounded-sm shadow-sm mb-2 hover:border-green-300 hover:border">
                <h2 className="text-lg font-semibold">Tickets Title here</h2>
                <button className="bg-green-600 text-white w-full py-1 font-mono rounded-sm shadow-sm cursor-pointer mt-2">Compelete</button>
               </div>
            </div>

            <div>
                <h3 className="text-md font-semibold mb-2">Resolved Task</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-500">No resolved tasks yet.</li>
                </ul>

               <div className="bg-blue-100 p-3 rounded-sm shadow-sm mt-2 hover:border-blue-300 hover:border">
                <h2 className="font-semibold text-center">Tickets Title here</h2>
               </div>

            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default Tickets;
