import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Link to="/uj-szallas"> <button class="btn btn-sm btn-outline-secondary" type="button">Új szállás</button> </Link>
  )
}
