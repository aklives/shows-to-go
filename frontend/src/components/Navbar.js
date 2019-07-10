import React from 'react'
import { NavLink } from 'react-router-dom';




const NavBar = (props) => {
  return (
    <div>
     <table className="navbar">
       <tbody>
       <tr>
         <th><NavLink className="neon-orange" to="/">Home</NavLink></th>
         <th><NavLink className="neon-orange" to="/about">About</NavLink></th>
         <th><NavLink className="neon-orange" to="/signup">Signup</NavLink></th>

         {props.currentUser ?
         <th><NavLink className="neon-orange" to="/logout">Logout</NavLink></th>
         :
         <th><NavLink className="neon-orange" to="/login">Login</NavLink></th>
         }
       </tr>
       </tbody>
     </table>
    </div>
  );
};


export default NavBar;
