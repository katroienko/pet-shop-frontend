import navbarMenuItems from "./navbarMenuItems";

import { NavLink } from "react-router-dom";
import styles from './styles.module.css' 

const NavbarMenu = () => {
 

  const elements = navbarMenuItems.map(({ href, text }) => (
    <li key={text}>
      <NavLink to={href} className={styles.navbarMenuLinkStyle}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={styles.navbarMenuStyle}>{elements}</ul>;
};

export default NavbarMenu;