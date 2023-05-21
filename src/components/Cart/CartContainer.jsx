import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, deleteProductById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();
  const navigate = useNavigate();

  const clearCartWithtAlert = () => {
    Swal.fire({
      title: "Seguro?",
      text: "Quieres eliminar este producto de tu carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCartWithtAlert();
        Swal.fire("Eliminar", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <Cart
        navigate={navigate}
        total={total}
        clearCartWithtAlert={clearCartWithtAlert}
        cart={cart}
        deleteProductById={deleteProductById}
      />
    </div>
  );
};

export default CartContainer;
