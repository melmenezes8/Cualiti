
import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img style={{width:"72px"}} src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-green-elliptical-leaf-illustration-image_1456945.jpg" alt="icono" />
        </Link>
        <ul style={{ display: "flex", gap: "30px", }}>
          <Link to="/">Todo</Link>
          <Link to="/category/Keto">Keto</Link>
          <Link to="/category/Sin lactosa">Sin lactosa</Link>
          <Link to="/category/Vegan">Vegan</Link>
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  )
}

export default Navbar