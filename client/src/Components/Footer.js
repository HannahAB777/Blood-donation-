import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

    export default function Footer() {
      return (
        <footer>
      <ul className="navbar">
            <li className="navOptions navList">
              <Link className="navList link" to="/signup">
              SignUp / Login
               </Link>
            </li>
          </ul>
    </footer>
      )
    }
    