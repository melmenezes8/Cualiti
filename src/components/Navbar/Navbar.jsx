
import CartWidgets from "../CartWidget/CartWidgets"
import styles from "./Navbar.module.css"

export const Navbar = ()=>{

    return <div className={styles.containerNavbar}>
        <img
        src="https://res.cloudinary.com/danotvxye/image/upload/v1680653196/logo_proyecto1_k0nkgd.jpg"
        alt="this is logo"
        />
        <ul style={{display:"flex", gap:"30px"}}>
            <li>Sin lactosa</li>
            <li>Vegan</li>
            <li>Keto</li>
        </ul>
        <CartWidgets />

    </div>
}