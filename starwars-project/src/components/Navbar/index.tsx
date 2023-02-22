import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./styles.css"

export const Navbar: React.FC = () => {

  return (
    <>
      <div className='nav-bar'>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/characters">Personagens</Link>
      </div>
    </>
  );
}

export default Navbar;