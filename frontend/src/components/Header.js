import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from '../img/logo.svg'
import menu from '../img/menu.svg'

function Header(props) {
    const { pathname } = useLocation();
    const text = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
    const way = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;
    
    return (
        <header className="header">
            <img
                src={logo}
                alt="Логотип проекта Mesto"
                className="header__logo"
            />
            <div>
                {props.loggedIn ?
                    (<div className="header__context">
                        <p className="header__email">{props.email}</p>
                        <button className="header__out" to="" onClick={props.onLogOut}>Выйти</button>
                    </div>) : (<Link to={way} className="header__link">{text}</Link>)
                }
            </div>
                {props.loggedIn ?
                    (
                        <img
                            className="header__menu"
                            alt='меню'
                            src={menu}
                            onClick={props.onMenu}
                            />
                ) : (
                    ''
                )
            }
        </header>
    )
}

export default Header;