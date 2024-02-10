import React, { useContext, useContext } from "react";
import {LOGO_URL} from "../utils/constants.js";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";



const Header = () =>{


    const [btnName , setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    
    //Subscribing to the store using a selector

    const cartItems = useSelector((store) => store.cart.items); // reacthook, a normal js function.

    return(
        <header className="flex justify-between ">
            <div className="w-24"><img  className="logo" src= {LOGO_URL}/> </div>
            <div>
                <ul className="flex ">
                <li className="p-4 m-4">
                    stauts:{onlineStatus == true? "online":"offline" }
                </li>
                    <li className="p-4 m-4">
                    <Link to = "/">Home</Link>
                    </li>
                    <li className="p-4 m-4">
                    <Link to = "/AboutUs" >AboutUs</Link>
                    </li>
                    <li className="p-4 m-4">
                    <Link to = "/Contact" >
                        Contact
                    </Link>
                    </li>
                    <li className="p-4 m-4">
                    <Link to = "/Grocery" > 
                    Grocery
                    </Link>
                    </li>
                    <li className="p-4 m-4 font-bold">
                    <Link to="/cart">
                    Cart-({cartItems.length})
                    </Link>
                    </li>
                    <button className="li-item" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>
                        {btnName}
                    </button>
                    <li className="p-4 m-4 font-bold">{loggedInUser}</li>
                </ul>
            </div> 
        </header>
    )
};
export default Header;

