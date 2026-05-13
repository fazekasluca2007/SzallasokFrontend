import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NewHotel() {
    const [name,setName]= useState("");
    const [hostname,setHostname]= useState("");
    const [location,setLocation]= useState("");
    const [price,setPrice]= useState("");
    const [minimum_nights,setMinimum_nights]= useState("");

    const navigate=useNavigate();
     const handleSubmit = (e) => {
        e.preventDefault();
        

        fetch("https://nodejs.sulla.hu/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                name: name,
                hostname: hostname,
                location: location,
                price: price,
                minimum_nights: minimum_nights
            }),
        })
            .then((data) => {
                console.log("Siker:", data);
                alert("Sikeres adatfelvétel!")
                navigate("/")
                setName("");
                setHostname("");
                setLocation("");
                setPrice("");
                setMinimum_nights("");
            })
            .catch((err) => console.error(err));
    };
    

    
  return (
     <>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div class="row mb-3 p-5 border">
                        <label class="col-sm-2 col-form-label">Név:</label>
                        <div class="col-sm-10 mb-3">
                            <input class="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <label className="col-sm-2 col-form-label" >Hostname:</label>
                        <div class="col-sm-10 mb-2">
                        <input type="text" className="form-control" value={hostname} onChange={(e) => setHostname(e.target.value)} required />
                        </div>
                        
                        <label className="col-sm-2 col-form-label" >Location:</label>
                        <div class="col-sm-10 mb-2">
                        <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
                        </div>
                        
                        <label className="col-sm-2 col-form-label" >Price:</label>
                        <div class="col-sm-10 mb-2">
                        <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </div>

                        
                        <label className="col-sm-2 col-form-label" >Minimum nights:</label>
                        <div class="col-sm-10 mb-2">
                        <input type="text" className="form-control" value={minimum_nights} onChange={(e) => setMinimum_nights(e.target.value)} required />
                        </div>

                    <button type="submit" className="btn btn-primary w-25">Hozzáadás</button>
                </div>

            </form >
            </div>
        </>


    );
}


    
 
