import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarCart from "./NavbarCart/NavbarCart";

import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <NavbarLogo />
                <NavbarMenu />
                <NavbarCart />
            </div>
        </nav>
    )

}

export default Navbar;