import React from "react";
//import './styles.css'

function Header() {
  return (
    <header id="masthead">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <a href="index.html" id="logo">
              John Fields
            </a>
          </div>

          <div class="col-md-9">
            <nav class="navbar-nav-right">
              <a href="/">About</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
