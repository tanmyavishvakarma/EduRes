import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import styled from "styled-components";

const A = styled.a`
  font-size: 15px;
  font-family: "Lato";
  color: white;
  &:hover {
    color: grey;
  }
`;
const Navbar = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {
        edge: "left",
        inDuration: 250,
      });
      if (1 > 3) {
        console.log(instances);
      }
    });
  }, []);
  return (
    <div>
      <nav>
        <div className="nav-wrapper black">
          <a href="#!" className="brand-logo"></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger ">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <A href="sass.html">About</A>
            </li>
            <li>
              <A href="badges.html">Register</A>
            </li>
            <li>
              <A href="collapsible.html">Login</A>
            </li>
            <li>
              <A href="collapsible.html">Contribute</A>
            </li>
            <li>
              <A href="#footer">Contact Us</A>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav black" id="mobile-demo">
        <li>
          <a className="white-text" href="sass.html">
            Sass
          </a>
        </li>
        <li>
          <a className="white-text" href="badges.html">
            Components
          </a>
        </li>
        <li>
          <a className="white-text" href="collapsible.html">
            Javascript
          </a>
        </li>
        <li>
          <a className="white-text" href="mobile.html">
            Mobile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
