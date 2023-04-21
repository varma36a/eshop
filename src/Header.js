import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {


    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none"}}>
            <div className="header__logo">
            <StorefrontIcon className="header__logoImage" fontSize="large" />
            <h2 className="header__logoTitle">eSHOP</h2>
            </div>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="nav__item">
                    <span className="navitemLineOne">Hello Guest</span>
                    <span className="navitemlineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="navitemLineOne">Your</span>
                    <span className="navitemlineTwo">Shop</span>
                </div>
                <Link to="/Checkout" style={{ textDecoration: "none" }}>                
                <div className="nav__itemBasket">
                    <ShoppingBasketIcon />
                    <span className="nav__itemLineTwo nav__basketCount">0</span>        
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;