import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <div style={{
          padding: "20px",
          display: "flex",
          gap: "30px",
          fontSize:"30px"
          
    }}>
      <Link to="/">Counter App</Link>
      <Link to="/todos">Todos App</Link>
    </div>
  );
}

export default Navbar