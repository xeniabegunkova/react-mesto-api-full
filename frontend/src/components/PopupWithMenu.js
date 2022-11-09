import { Link } from "react-router-dom";

function PopupWithMenu(props) {
    return (
        <section className={`header__menu_popup ${props.isOpen && 'header__menu_open'}`}>
            <p className="header__email">{props.email}</p>
            <Link className="header__out" to="" onClick={props.onLogOut}>Выйти</Link>
        </section >
    )
}

export default PopupWithMenu