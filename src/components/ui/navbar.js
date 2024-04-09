import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import inboxicon from "../../assets/images/inbox.gif";
import info from "../../assets/images/info.gif"

import logo from "../../assets/images/logo.png";
export default function Nav(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle form submission (for demonstration purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Search Query: ${searchQuery}`);
    // Add your search functionality here
  };

  const handleLogin = () => {
    // Logic to handle user login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic to handle user logout
    setIsLoggedIn(false);
  };


  const handleMenuItemClick = (menuItem) => {
    // Add functionality for each menu item here
    alert(`Clicked on ${menuItem}`);
    // Close the dropdown after clicking
    setShowDropdown(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 rounded m-0 mb-2 border-2 f fixed-top" >
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img
              id="MDB-logo"
              src={logo}
              alt="MDB Logo"
              draggable="false"
              height="40"
              width="100%"
            />
          </a>
        
           

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-3"></ul>

            {isLoggedIn ? (
              ""
            ) : (
              <ul className="navbar-nav mr-auto d-flex flex-row">
                <li className="nav-item fw-normal px-4 py-2 px-md-0 py-md-0 active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item fw-normal  px-4 py-2 px-md-0 py-md-0">
                  <Link to="/articles" className="nav-link">
                    Articles
                  </Link>
                </li>
                <li className="nav-item fw-normal  px-4 py-2 px-md-0 py-md-0">
                  <Link to="/questions" className="nav-link">
                    Questions
                  </Link>
                </li>
              </ul>
            )}
            <form
              className="d-flex align-items-center w-100 form-search"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <button
                  className="btn btn-light dropdown-toggle shadow-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ paddingBottom: "0.4rem" }}
                >
                  All
                </button>
                <ul className="dropdown-menu dnm dropdown-menu-white p-3 fa-ul">
                  <li className="py-2">drop down item</li>
                  <li className="py-2">drop down item</li>
                  <li className="py-2">drop down item</li>
                  <li className="py-2">drop down item</li>
                </ul>
                <input
                  type="searc "
                  className="form-control "
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-light text-dark">
                <i className="fas fa-search ps-1"></i>
              </button>
            </form>
            <ul className="navbar-nav ms-3">
              <li className="nav-item me-3">
                <a className="nav-link d-flex align-items-center" href="#!">
                  {isLoggedIn ? (
                    <>
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png "
                        alt=""
                        height="40"
                        width="40m"
                      />
                  <span className=" d-lg-none ps-2"> profile</span>

                    </>
                  ) : (
                    <>
                      <img
                        src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg "
                        alt=""
                        height="40"
                        width="40m"
                      />
                  <span className=" d-lg-none ps-2"> profile</span>
                      
                    </>
                  )}
                </a>
              </li>
              <li className="nav-item">
           
                  
                  <Link to="/inbox" className="nav-link d-flex align-items-center  flex-colum me-3">
                  <img src={inboxicon} alt="inbox" height="40" width="40m" />
                  <span>1</span>
                  <span className=" d-lg-none ps-2"> inbox</span>

                  </Link>
                
              </li>


              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center  flex-colum me-3"
                  href="#!"
                >
                  
                  <img src={info} alt="inbox" height="40" width="40m" />
                  <span className=" d-lg-none ps-2"> info/help</span>
                </a>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                {isLoggedIn ? (
                  <a className="nav-link d-flex align-items-center" href="#!">
                    log out
                  </a>
                ) : (
                  <span className="btn btn-warning ms-5  px-3 border-2">
                    {props.user ? (
                      props.user
                    ) : (
                      <Link
                        to="/login"
                        style={{ textDecoration: `none`, color: `black` }}
                      >
                        Login
                      </Link>   
                    )}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
