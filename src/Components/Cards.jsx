
import { toast } from 'react-toastify';

const Cards = ({issue,pickCard,setPickCard,resolved,setResolved}) => {
    const cardClicked = (issue) =>{
        // console.log("Yes Click me")
        setPickCard([...pickCard,issue])
        toast(`${issue.title} added to Task Status ✅`);
    }
    return (
        <div onClick={()=>{cardClicked(issue)}} className="bg-white p-4 rounded-lg shadow-sm  cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{issue.title}</h3>
              <span className={`text-sm px-2 py-1 rounded-full flex items-center gap-1 cursor-pointer ${issue.status == "Open" ? "bg-green-100":"bg-yellow-100"}`}>
                <span><button className={`h-3 w-3 rounded-full  flex ${issue.status == "Open" ?
                     "bg-green-700":"bg-yellow-500"}`}></button></span>{issue.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3">{issue.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>#{issue.id}<span className={`font-semibold ml-3 ${issue.priority == "HIGH PRIORITY" ?
                "text-red-500" : issue.priority == "LOW PRIORITY" ?
                "text-green-500" : "text-yellow-500"}`}>{issue.priority}</span></span>
              <span>{issue.customer}</span>
              <span>{issue.createdAt}</span>
            </div>

        </div>
    );
};

export default Cards;