import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
     <NavLink to="/"> <button class="btn btn-outline-success me-2" type="button">Főoldal</button> </NavLink>
   <NavLink to="/összeshotel"> <button class="btn btn-outline-success me-2" type="button">Összes hotel</button> </NavLink>
   
  </form>
</nav>
  )
}
