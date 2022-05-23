import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import auth from '../utils/Auth';

    export default function Footer() {
      return (
        <footer>
      <ul className="navbar">
            <li className="navOptions navList">
            {{if (auth.login) }}
              <Link className="navList link" to="/signup">
              SignUp / Login
               </Link>
            </li>
          </ul>
    </footer>
      )
    }
    