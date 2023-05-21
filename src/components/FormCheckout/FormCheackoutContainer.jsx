import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";


import {addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";

export const FormCheackoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp()  
    };

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, dataOrder).them((res) => setOrderId(res.id));
  };



  cart.map((product) =>
  updateDoc(doc(db, "products", product.id), {
    stock: product.stock - product.quantity,
  })
);

clearCart();
};

const { handleSubmit, handleChange, errors, values } = useEffect({
    initialValues: {
      nombre: "",
      email: "",
      phone: null,
    },
    onSubmit: (data) => {
      console.log(data);
    },
    onSubmit: checkoutFn,
    validationsSchema: Yup.object().shape({
      Nnmbre: Yup.string()
        .required("este campo es obligatorio")
        .min(3, "el nombre debe tener al menos 3 caracteres")
        .max(10, "el nombre no puede superar los 10caracteres"),
      email: Yup.string()
        .email("este campo es obligatorio")
        .required("este campo es obligatorio"),
      phone: Yup.number().required("este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h1>
          Gracias por tu compra el numero de compra es {orderId}, por favor
          guardalo para cualquier cosa
        </h1>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );


export default FormCheackoutContainer;