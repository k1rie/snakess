import React, { useEffect } from "react";
import Nav from "../nav/nav"
import "./search.css"
import Card from "../card/card";

function Search(props){

function showdata(){
    console.log(props.data)
    props.data.results.map((item)=>{
        return <Card title={item.name} price={item.retailPrice} marketvalue={item.estimatedMarketValue} sneakers={item.image.small}/>
console.log(item)
    })
}

    return(
        <div className="search">
<div className="search__content">
    {props.data.results.map((item,index)=>{
        return (<Card key={index} title={item.name} price={item.retailPrice} marketvalue={item.estimatedMarketValue} marca={item.brand} sneakers={item.image.small}/>)
console.log(item)
    })}
</div>
        </div>
    )
}

export default Search