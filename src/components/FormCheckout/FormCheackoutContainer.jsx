import React, { useContext, useEffect, useState } from 'react'
import FormCheckout   from './FormCheckout'
import { Email } from '@mui/icons-material';

import { useFormik } from "formik";

import * as Yup from "yup";
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebaseConfig';
import {addDoc, collection, orderBy, serverTimestamp  } from "firebase/firestore"


export const FormaCheackoutContainer = () => {

const {cart, getTotalPrice } = useContext(CartContext);

const [orderId, serOrderId] = useState(null)


const checkoutFn = (data) => {

  let total = getTotalPrice()

   let dataOrder = {
   
   buyer: data,
   items: cart,
   total: total,
   date: serverTimestamp()

  }

  const orderCollection = collection( db, "orders")
  addDoc(orderCollection, dataOrder ).them(res => console.log(res.id));
}




const { handleSubmit, hadleChage, errors, values  } = useEffect ({
   initialValues: {
    nombre:"",
    email:"",
    phone: null,
   },
   onSubmit: (data) => {
    console.log(data);
   },
   validationsSchema: Yup.object().Shape({
    Nnmbre: Yup.string()
    .required("este campo es obligatorio")
    .min(3, "el nombre debe tener al menos 3 caracteres")
    .max(10, "el nombre no puede superar los 10caracteres"),
    email: Yud.string()
    .email("este campo es obligatorio")
    .required("este campo es obligatorio"),
    phone: Yup.number().required("este campo es obligatorio"),
}),
validateOnChange: false,
})

 
return (
  <div>
    {orderId ? (
      <h3>
        Gracias por tu compra el numero de compra es {orderId}, por favor
        guardalo para cualquier cosa
      </h3>
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

export default FormCheackoutContainer