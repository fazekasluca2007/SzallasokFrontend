import React from 'react'
import { Link } from "react-router-dom";

export default function Card({ h }) {
  return (
    <Link to={`/data/${h.id}`}>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{h.name}</h5>
          <p className="card-text">{h.hostname}</p>
          <p className="card-text">{h.location}</p>
          <p className="card-text">{h.price}</p>
          <p className="card-text">{h.minimum_nights}</p>
        </div>
      </div>
    </Link>
  )
}