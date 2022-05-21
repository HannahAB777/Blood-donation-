import React from 'react';
import { Link,  } from 'react-router-dom';

export default function PublicNav() {
    const navItems = [
      {
        title: "Home",
        link: "/",
        index: 0
      },
      {
        title: "Resources",
        link: "/resources",
        index:1
      },
  
      {
        title: "Enter Results",
        link: "/app/enter-result",
        index:3
      },
      {
        title: "Contact",
        link: "/contact",
        index:4
      },
      {
        title: "Contact",
        link: "/contact",
        index:4
      },
    ];
    return (
      <nav>
        <ul className="navbar">
          {navItems.map((item) => {
            return (
              <li className="navOptions navList" key={item.index}>
                <Link className="navList link" to={item.link}>
                 {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
