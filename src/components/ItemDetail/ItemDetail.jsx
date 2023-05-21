import React from 'react'
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CounterContainer from  "../Counter/CounterContainer";


export const ItemDetail = ({ product, onAdd, cantidadTotal }) =>  {

    return (
        <div>
            <div className={styles.containerItemDetail}>
            <div className= {styles.containerImage}>
              <imgs src= {product.img} alt="" />
              </div>
            </div>
            
            <div className= {styles.containerDetail}>
            <h2 style= {{ fontFamily: "monospace" }}>
              <span style={{ fontSize:"23px" }}>Nombre:</span> {product.title}
            </h2>

          <h2 style={{ fontFamilly: "monospace" }}> 
            <span style={{ fontSize:"23px" }}>Descripcion:</span> {" "} 
            {product.description}
          </h2>

          <h2 style={{ fontFamilly: "monospace" }}> 
          <span style={{ fontSize:"23px" }}>Precio:</span> 
            ${product.price}.-</h2>
        </div> 

        </div> 
      
 )}