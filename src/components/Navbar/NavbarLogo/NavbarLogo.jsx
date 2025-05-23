import { Link } from "react-router-dom";
// import PetLogo from "../../../assets/petLogo";
import LogoPetshop from "../../../assets/LogoPetshop";

import styles from './NavbarLogo.module.css'

function NavbarLogo() {
  return (
    <>
      <div  className={styles.cart}>
        <Link to="/"> <LogoPetshop style={{ width: '70px', height: '70px' }} /></Link>
      </div>
    </>
  )
}

export default NavbarLogo