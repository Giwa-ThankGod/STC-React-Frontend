import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 rounded m-0 mb-2 border-2">
                <a className="navbar-brand d-block" href="">
                    <img width="50%" src={logo}></img>
                </a>

                <button className="navbar-toggler" data-toggle="collapse" data-target="navbarSupport">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/articles" className="nav-link">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/questions" className="nav-link">Questions</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <span className="btn btn-warning px-3 border-2">{props.user ? props.user : <Link to="/login" style={{ textDecoration: `none`, color: `black`}}>Login</Link>}</span>
                </div>
            </nav>
        </>
    )
}