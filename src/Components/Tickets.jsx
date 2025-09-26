import React, { use, useState } from "react";
import Container from "./Container";
import Cards from "./Cards";
import TaskStatus from "./TaskStatus";
import Resolved from "./Resolved";

const Tickets = ({fetchPromise}) => {

    const initialTickets = use(fetchPromise);
    // here i change all 
    const [data,setData] = useState(initialTickets);
    // console.log(data);


    const [pickCard,setPickCard] = useState([]);
    // console.log(pickCard)

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
                    data.map((issue,index) => {
                      return(
                        <Cards key={index} issue={issue} pickCard ={pickCard} setPickCard={setPickCard}></Cards>
                      )
                    })
                 }
               </div>
          </div>

          {/* Right Section here*/}
          <div className="p-4 rounded-lg">
            <TaskStatus pickCard ={pickCard} setPickCard={setPickCard}></TaskStatus>
            <Resolved pickCard ={pickCard} setPickCard={setPickCard}></Resolved>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Tickets;
