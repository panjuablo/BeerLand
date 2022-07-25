import React, { useState } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import BeerLogo from "../../img/BeerLogo.png";
import { useAuth } from "../context/authContext";
import Cart from "../Cart/Cart";

export default function NavBar({ setPage }) {
  const { salir, user } = useAuth();

  console.log(user);

  const [cart, setCart] = useState(false);

  const handleLogOut = async () => {
    await salir();
  };

  return (
    <nav className={style.navbar}>
      <Link to="/home">
        <span>
          <img
            id="BeerLogo"
            src={BeerLogo}
            width="120px"
            height="80px"
            alt="Beer"
          />
        </span>
      </Link>
      <SearchBar setPage={setPage} />
      {user ? (
        ""
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}

      <Link to="/add">
        <button>Add</button>
      </Link>

      <h1>Hello {user ? user.email : ""}</h1>
      <button onClick={handleLogOut}>LogOut</button>

      {/*       <button onClick={() => setCart(true)}>Cart</button>
      {cart ? <><Cart/><button onClick={() => setCart(false)}>X</button></> : ''}
 */}

      <Link to="/test">
        <button>Cart</button>
      </Link>
    </nav>
  );
}
