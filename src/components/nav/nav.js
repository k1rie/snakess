import React, { useEffect,useState } from "react";
import "./nav.css";
import Logo from "/Users/k1rie/Desktop/snakers/src/recursos/logo.png";
import Heart from "/Users/k1rie/Desktop/snakers/src/recursos/heart.png";
import Search from "/Users/k1rie/Desktop/snakers/src/recursos/search.svg";
import { useNavigate } from "react-router-dom";


function Nav(props) {
  let navigate = useNavigate();
  const [check,setCheck] = useState(false)
  function iconocult() {
    const searchinput = document.querySelector(".nav__searchinput");
    const searchicon = document.querySelector(".nav__searchimg");


    searchinput.addEventListener("blur", () => {
      searchicon.style.display = "block";
    });
  }
  function redirect(){
    const searchinput = document.querySelector(".nav__searchinput")
    searchinput.addEventListener("keyup",(e)=>{
if(e.key === "Enter"){
    fetch(`https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10&name=${searchinput.value}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
        "x-rapidapi-key": "b63a9ffa7amsh59f0ec661625c92p17f5b2jsn21493c2f76dc"
      }
    }).then((response)=>response.json()).then((response)=>{console.log(response);props.pasdata(response);setCheck(true);navigate("/search");

  })

}
    })
}



  useEffect(() => {
    redirect()
  }, []);
  return (
    <div className="nav__container">
      <div className="nav__logocontainer">
        <img src={Logo} className="nav__logo" />
      </div>
      <div className="nav__links">
        <a className="nav__link">Nuevos Lanzamientos</a>
        <a className="nav__link">Hombre</a>
        <a className="nav__link">Mujeres</a>
      </div>
      <div className="nav__searchcontainer">
<input className="nav__searchinput" type="text" placeholder="Buscar" />
      </div>
      
      <img src={Heart} className="nav__heart" />
    </div>
  );
}

export default Nav;
