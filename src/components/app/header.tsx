
import { NavLink } from "react-router-dom"

const logo = require("../../assets/header/header__logo.png");

const Header = () => {

    return (
        <div className="header">
            <div className='header__container'>
                <NavLink to="/">
                    <img src={logo} className='header__logo' />
                </NavLink>
            </div>
        </div>
    )

}

export default Header
