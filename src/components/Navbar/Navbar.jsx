import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesColletion = collection(db, "categories");
    getDocs(categoriesColletion)
      .them((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .cath((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            style={{ width: "72px" }}
            src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-green-elliptical-leaf-illustration-image_1456945.jpg"
            alt="icono"
          />
        </Link>
        <ul style={{ display: "flex", gap: "30px" }}>
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar; 