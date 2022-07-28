import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Navbar extends Component {
 render() {
    return(
     <>
      <div className="navbar">
        <div className="left">
            <ul>
                <Link to="/"><li>home</li></Link>
                <Link to="/business"><li>business</li></Link> 
                <Link to="/entertainment"><li>entertainment</li></Link>
                <Link to="/health"><li>health</li></Link>
                <Link to="/science"><li>science</li></Link>
                <Link to="/sports"><li>sports</li></Link>
                <Link to="/technology"><li>technology</li></Link>
            </ul>
        </div>
        <div className="right">
            <label htmlFor="search">search</label>
            <input type="search"/>
        </div>
    </div>   
    </>
    )
  }
}

export default Navbar;
