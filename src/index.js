import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  {store}  from './Redux/Store';
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter >      
       <Provider store={store}> 
              <App />
              <Toaster/>
       </Provider>

      
 </BrowserRouter>
      


  
  
  
);
