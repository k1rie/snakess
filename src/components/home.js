import React, { useEffect } from "react";
import "./home.css"
import Sliderimg1 from "./recursos/slider1.jpeg"
import Sliderimg2 from "./recursos/slider2.jpeg"
import Sliderimg3 from "./recursos/slider3.jpeg"
import Sneaker1 from "./recursos/sneakers1.png"
import Sneaker2 from "./recursos/sneakers2.png"
import Sneaker3 from "./recursos/sneakers3.png"
import Sneaker4 from "./recursos/sneakers4.png"
import Sneaker5 from "./recursos/sneakers5.png"

function Home(props){
    function slider(){
        const container = document.querySelector(".slider__container")
        const slider = document.querySelector(".slider")
        var contador = 0


        setInterval(()=>{
            slider.style.transition = "1s all"

const primerelemento = slider.children[0]

            contador++
slider.style.transform = `translateX(-${contador*100}vw)`






function sl(){
    slider.style.transition = "none"
    slider.style.transform = `translateX(-${0}vw)`
    slider.append(primerelemento)



}

slider.addEventListener("transitionend", sl)


if(contador === 2){
    contador = 0
    slider.style.transition = "none"
    slider.style.transform = `translateX(-${0}vw)`
}
},5000)
}





    useEffect(()=>{
        slider()
    },[])
return(
    <div className="home__container">
        <div className="slider__container">
            
<div className="slider">
<img className="slider__img img1" src={Sliderimg1}/>
<img className="slider__img img2" src={Sliderimg2}/>
<img className="slider__img img3" src={Sliderimg3}/>
</div>
</div>
<div className="home__releases">
<div className="home__line">
<p className="home__linetext">New Releases</p>
</div>
<div className="home__releasescont">
<img className="home__sneakers" src={Sneaker1}/>
<img className="home__sneakers" src={Sneaker2}/>
<img className="home__sneakers" src={Sneaker3}/>
<img className="home__sneakers" src={Sneaker4}/>
<img className="home__sneakers" src={Sneaker5}/>
</div>
</div>
</div>
)
} 


export default Home