import React, { useEffect, useState } from 'react'
import { ItemDetail }  from './ItemDetail'
import { useParams } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { db } from '../../firebaseConfig' 
import { getDoc, collection, doc } from 'firebase/firestore'
import { ItemDetail } from './ItemDetail'


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

     const {agregarAlCarrito, getQuantityByid}= useContext(CartContext)


    const { id } = useParams()

    useEffect(() => {

        const itemCollection = collection(db, "products");
    
        const refDoc = doc(itemCollection, id);
    
        getDoc(refDoc)
    
          .then((res) =>
    
            setProduct({
    
              ...res.data(),
    
              id: res.id,
    
            })
    
          )
    
          .catch((err) => console.log(err));
    
      }, [id]);

    const onAdd = ( cantidad )=> {
     let data = {
        
    ...product,
    quantity: cantidad
}

   agregarAlCarrito(data)
   Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Se agrego ${product.title} ',
    showConfirmButton: true,
    timer: 1500
  })

}

let cantidadTotal = getQuantityByid(product.id)
console.log (cantidadTotal)

return (
    <div>
        <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal} />
    </div>
);
};

