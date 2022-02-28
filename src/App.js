import React, { useEffect, useState } from "react";
import ReactDOM from "react";
import Home from "./components/home"
import Search from "./components/search/search";
import Nav from "./components/nav/nav"
import Male from "./components/male/male"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css"

function App() {

  const [data,setData] = useState()
return(

  <div className="app">
<BrowserRouter>
<Nav pasdata={setData}/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/search" element={<Search data={data}/>}/>
<Route path="/male" element={<Male/>}/>
</Routes>
</BrowserRouter>

</div>

  

)
}

export default App;
