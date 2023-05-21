import { GrCart } from "react-icons/gr";
import "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div className="container-cart">
        <GrCart
          style={{
            fontSize: "2rem",
            color: "GrAchievement",
          }}
        />

        <div className="bubble_counter">
          <span>{total} </span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
