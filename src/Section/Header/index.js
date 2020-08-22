import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="wrap-menu-header gradient1 trans-0-4">
        <div className="container h-full">
          <div className="wrap_header trans-0-3">
            {/* Logo */}
            <div className="logo">
              <NavLink exact to="/">
                <img
                  src="images/food-and-restaurant.png"
                  alt="IMG-LOGO"
                  data-logofixed="images/food-and-restaurant.png"
                />
              </NavLink>
            </div>

            {/* Menu */}
            <div className="wrap_menu p-l-45 p-l-0-xl">
              <nav className="menu">
                <ul className="main_menu">
                  <li>
                    <NavLink exact to="/" activeStyle={{ color: "#d41b22" }}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/reservation"
                      activeStyle={{ color: "#d41b22" }}
                    >
                      Reservations
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      exact
                      to="/menu"
                      activeStyle={{ color: "#d41b22" }}
                    >
                      Menu
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      exact
                      to="/contact"
                      activeStyle={{ color: "#d41b22" }}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social */}
            <div className="social flex-w flex-l-m p-r-20">
              <NavLink exact to="/cart" activeStyle={{ color: "#d41b22" }}>
                <i
                  className="fas fa-shopping-cart"
                  style={{ fontsize: "1.3rem" }}
                >
                  <span className="badge notifications-count">0</span>
                </i>
              </NavLink>
              <NavLink exact to="/" activeStyle={{ color: "#d41b22" }}>
                <i
                  className="fas fa-bell m-l-21"
                  style={{ fontsize: "1.3rem" }}
                >
                  <span className="badge notifications-count">0</span>
                </i>
              </NavLink>

              <button className="sidebarBtn btn-show-sidebar m-l-33 trans-0-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
