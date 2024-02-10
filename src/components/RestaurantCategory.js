import ItemList from "./ItemList";



const RestaurantCategory = ({data, showItems, setShowIndex}) => {


    const handleClick = () =>{
       setShowIndex()
    };
     
    // console.log(data);
    
    return(
        <div className=" w-6/12 mx-auto my-4 px-4 py-2 bg-gray-200 shadow-lg rounded-lg">
            {/* Header */}
            <div className="flex justify-between" onClick={handleClick} >
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span className="font-bold text-2xl">&#8681;</span>
                
            </div>
            <div>
                {showItems && <ItemList items = {data.itemCards} /> }
            </div>
        </div>
    )
}
export default RestaurantCategory;