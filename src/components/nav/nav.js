import React, { useEffect, useState } from "react";
import "./nav.css";
import Logo from "../recursos/logo.png";
import Heart from "../recursos/heart.png";
import { useNavigate, Link } from "react-router-dom";
import { computeHeadingLevel } from "@testing-library/react";

function Nav(props) {
  let navigate = useNavigate();
  const [check, setCheck] = useState(false);
  function iconocult() {
    const searchinput = document.querySelector(".nav__searchinput");
    const searchicon = document.querySelector(".nav__searchimg");

    searchinput.addEventListener("blur", () => {
      searchicon.style.display = "block";
    });
  }

  function redirect() {
    const searchinput = document.querySelector(".nav__searchinput");
    var apikey;
    if(process.env.REACT_APP_NODE_ENV === "production"){
      apikey =  process.env.REACT_APP_APIKEY_PRODUCTION
     }else{
       apikey =  process.env.REACT_APP_APIKEY
     }
    searchinput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        document.querySelector(".sk-chase").style.display = "block";
        fetch(
          `https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10&name=${searchinput.value}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
              "x-rapidapi-key": apikey,
            },
          }
        )
          .then((response) => response.json())
          .then((response) => {
            props.pasdata(response);
            setCheck(true);
            navigate("/search");
            document.querySelector(".sk-chase").style.display = "none";
          });
      }
    });
  }

  useEffect(() => {
    redirect();
  }, []);
  return (
    <div className="nav__container">
      <div className="nav__logocontainer">
        <Link to="/">
          <img src={Logo} className="nav__logo" />
        </Link>
      </div>
      <div className="nav__links">

      </div>
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
      <div className="nav__searchcontainer">
        <input className="nav__searchinput" type="text" placeholder="Buscar" />
      </div>

      <img src={Heart} className="nav__heart" />
    </div>
  );
}

export default Nav;
