import { Link } from "react-router-dom";

import styles from "./HeaderLogo.module.css";

const HeaderLogo = ()=> {
    return <Link className={styles.logo} to="/">LOGO</Link>
}

export default HeaderLogo;