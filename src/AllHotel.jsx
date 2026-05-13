import React from 'react'
import { useEffect, useState } from 'react';
import Card from './Components/Card';


export default function AllHotel() {
    const [hotelek,sethotelek]= useState([]);
    useEffect(()=>{
        GetData()       
    },[])

    function GetData(){
        fetch("https://nodejs.sulla.hu/data")
        .then(res=>res.json())
        .then(data=>sethotelek(data))
    }
  return (
    
    <div class="row">
        {
            hotelek.map(function(hotel){
                return <Card h={hotel} GetData={GetData}/>
            })
        }




    </div>
  )
}
