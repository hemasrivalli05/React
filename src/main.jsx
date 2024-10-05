// main.jsx--->javascript file
// jsx---> javascript xml
// NOTE:---> main,jsx --->Entry file---> execution will start from here

// import 2 main ReactJS library

import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
import "./global.css"

ReactDom.createRoot(document.getElementById("root")).render(<App/>) 