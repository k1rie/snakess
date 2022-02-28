import React, { useEffect } from "react"

function Male(){
function getdata(){
    fetch("https://the-sneaker-database.p.rapidapi.com/genders", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "b63a9ffa7amsh59f0ec661625c92p17f5b2jsn21493c2f76dc"
        }
    })
    .then(response => {
        response.json();
    }).then((response)=>console.log(response))
    .catch(err => {
        console.error(err);
    });
}

    useEffect(()=>{
getdata()
    },[])
    return(
        <div>

        </div>
    )
}

export default Male