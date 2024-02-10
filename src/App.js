import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error  from "./components/Error";
import {createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

 
// Chunking or code splitting or dynamic building or lazy loading or on demand loading - To make our app bundled into small js files.


const Grocery = lazy(() => import("./components/Grocery"));


const Applayout = () => {

    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name:"Harsha",
        };
        setUserName(data.name);
    },[])

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app"> 
            <Header/>
            <Outlet />   
        </div> 
        </UserContext.Provider>
        </Provider>  
    )
  };
  const appRouter = createBrowserRouter( [
    {
        path: "/",
        element:<Applayout />,
        children:[
            {
                path: "/",
                element:<Body />
            
            },
            {
                path: "/AboutUs",
                element:<AboutUs />
            
            },
            {
                path:"/Contact",
                element: <Contact />
            }, 
            {
                path:"/Grocery",
                element: <Suspense fallback = {<h1>Loading...</h1>}> <Grocery />  </Suspense> 
            }, 

            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/cart",
                element:<Cart />
            },

        ],
        errorElement:< Error />
    }
    
    
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < RouterProvider router = {appRouter}/>);