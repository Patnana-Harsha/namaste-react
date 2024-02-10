  import {configureStore} from "@reduxjs/toolkit";
  import cartReducer from "./cartSlice"  //since cartSlice.reducer is a default export. we can directly give a name to it here itself.

  const appStore = configureStore({
    reducer:{
         cart: cartReducer,
     //  user: userReducer, 
         
         // Here the reduceer is apps big reducer, we can have reducers of different slices here. in this app we have only cartReducer
         //if we have multiple reducers we can give like above as userReducer
        
      },
    
  });  
  export default appStore;