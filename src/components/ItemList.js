import { addItem } from "../utils/cartSlice";
import {CDN_URL} from "../utils/constants";
import {useDispatch} from "react-redux";


const ItemList = ({items}) => {
    // console.log(items)
   

    const dispatch = useDispatch();
    handleAddItem = (item) => {
        dispatch(addItem(item));
        
    };

     // handleAddItem = () => {
    //     useDispatch(addItem("pizza"))
    // }; if we use this, it is a invalid hook call, we should always call a hook in functional component only.

    return (
        <div>
            {items.map( (item) => (
            <div key = {item.card.info.id} className="p-2 m-2  border-b-2 border-gray-400 flex">
                <div className="text-start w-9/12 "> 
                    <h1 className="font-bold">{item.card.info.name}</h1>
                    <span> ₹ {item.card.info.price/100}</span>
                    <p className="text-sm mt-3">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 ">
                <div className="absolute mt-[5rem] ml-[60px] ">
                    <button className="px-3 py-1  bg-white shadow-lg rounded-xl"  onClick={() => handleAddItem(item)} >Add +</button>
                </div> 
                    <img src={CDN_URL + item.card.info.imageId} className="w-60 "/>
                    
                </div>

            </div> ))}
        </div>

    )

}
export default ItemList;