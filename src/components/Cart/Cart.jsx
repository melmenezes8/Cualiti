import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearWithAlert, deleteProductById, total, navigate }) => {
  return (
    <div>
      <div className="cart-container"> (
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Resumen del carrito:</h2>
          <h3>Cantidad de productos:</h3>
          <h3>Precio total:</h3>
          <h3>Descuento:</h3>
          <h3>Precio final: </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button variant="contained" onClick={() => navigate("/checkout")}>
                Finalizar compra
              </Button>
              <Button onClick={clearWithAlert} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          ) : (
            <link to="/">
              <Button variant="contained">Agregar productos</Button>
            </link>
          )}
          <h1>Total del carrito es de ${total}</h1>
        </div>
        );
      </div>
    </div>
  );
};

export default Cart;