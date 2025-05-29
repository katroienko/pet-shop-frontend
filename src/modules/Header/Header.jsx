import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderCart from "./HeaderCart/HeaderCart";

import styles from "./Header.module.css";

const Header = ()=> {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderMenu />
            <HeaderCart />
        </header>
    )
}

export default Header;