import React from "react";
import "./navbar.css";
import App from "./drawer";
import { navliks } from "../Data/data";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <img
          style={{ marginLeft: "20px" }}
          src="https://digitalhub.fifa.com/transform/befe3a64-328b-453c-8b58-0faeb9103684/FIFA_Logo_White_Generic?io=transform:fill&quality=75"
          width={50}
          height={15}
        />
        <div className="stores">
          <a href="">BUY TICKETS </a>
          <a href="">FIFAe </a>
          <a href="">FIFA STORE </a>
          <a href="">FIFA.com </a>
        </div>
      </div>
      <div className="second-nav">
        <App />
        <Link to={'/home'}>
        <img
          src="https://digitalhub.fifa.com/transform/3a170b69-b0b5-4d0c-bca0-85880a60ea1a/World-Cup-logo-landscape-on-dark?io=transform:fill&quality=75"
          width={104}
          height={47}
        />
        </Link>
        {navliks.map((n) => (
          <div className="categories">
            <Link to={n.href}>{n.title}</Link>
          </div>
        ))}
        <select className="language">
          <option>ENGLISH</option>
          <option>FRANCAIS</option>
          <option>DEUTSCH</option>
          <option>ESPANOL</option>
          <option>PORTUGUES</option>
          <option>العربية</option>
        </select>
        <input className="search" type="text" placeholder="search" />
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6C7.65685 6 9 4.65685 9 3C9 1.34315 7.65685 0 6 0C4.34315 0 3 1.34315 3 3C3 4.65685 4.34315 6 6 6ZM8 3C8 4.10457 7.10457 5 6 5C4.89543 5 4 4.10457 4 3C4 1.89543 4.89543 1 6 1C7.10457 1 8 1.89543 8 3Z"
              fill="white"
            />
            <path
              d="M12 11C12 12 11 12 11 12H1C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11ZM11 10.9965C10.9986 10.7497 10.8462 10.0104 10.1679 9.33211C9.51563 8.67985 8.2891 8 5.99999 8C3.71088 8 2.48435 8.67985 1.8321 9.33211C1.15375 10.0104 1.00142 10.7497 1 10.9965H11Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Navbar;
