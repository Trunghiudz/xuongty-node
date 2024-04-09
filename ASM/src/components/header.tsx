import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";


const header = () => {

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <Link to="/" className="header__logo">
                            <img src="../src/img/logo.svg" alt="" />
                        </Link>
                        <div className="button-mobile"><button>=</button></div>
                        <nav className="main-menu">
                            <ul className="main-menu__list">
                                <li className="main-menu__item">
                                    <NavLink to="/" className="main-menu__link">Home</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="./shop" className="main-menu__link">Shop</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="" className="main-menu__link">About</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="" className="main-menu__link">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>


                        <div className="header-items">
                            <div className="header-item-user">
                                <i className="fa-solid fa-user-plus"></i>
                            </div>
                            <div className="header-item-search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="header-item-wishlist">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className="header-item-cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
};

export default header;
