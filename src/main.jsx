import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Only here
import App from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Wrap the entire app here */}
    
      <App />
    
    </BrowserRouter>
  </React.StrictMode>
);
