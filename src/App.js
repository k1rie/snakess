import React, { useEffect, useState } from "react";
import ReactDOM from "react";
import Home from "./components/home"
import "./app.css"
import Search from "./components/search/search";
import Nav from "./components/nav/nav"
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  const [data,setData] = useState()

console.log(process.env.REACT_APP_KEY)
return(

  <div className="app">
<BrowserRouter>
<Nav pasdata={setData}/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/search" element={<Search data={data}/>}/>
</Routes>
</BrowserRouter>

</div>

  

)
}

export default App;
