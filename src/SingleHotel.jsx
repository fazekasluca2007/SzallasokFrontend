import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SingleHotel() {
    const [hotel,setHotel]= useState([]);
    const {id}= useParams();

    useEffect(()=>{
        fetch("https://nodejs.sulla.hu/data/"+id)
        .then(response => response.json())
        .then(data => setHotel(data))
    }, [id])

  return (
 
     <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{hotel.name}</h5>
          <p className="card-text">{hotel.hostname}</p>
          <p className="card-text">{hotel.location}</p>
          <p className="card-text">{hotel.price}</p>
          <p className="card-text">{hotel.minimum_nights}</p>
             <Link to="/"><i class="bi bi-arrow-left"></i></Link>
        </div>
      </div>
  )
}
