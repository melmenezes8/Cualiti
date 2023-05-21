import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"
import { products } from '../../productsMock';


const ItemListContainer = () => {
 const [items, setItems] = useState([])

  const { categoryName } = useParams()

  useEffect(() => {
   let consulta;
   const itemCollection = collection(db, "products")

   if(categoryName){
    const itemsCollectionFiltered = query( itemCollection, where("category", "==", categoryName)) 
  consulta = itemsCollectionFiltered
  }else{
    consulta = itemCollection
  }

 
getDocs(consulta)
  .then((res) => {
     const products = res.docs.map( product => {
      
      return {
        ...product.data(),
        id: product.id
      }
     })
  
    setItems(products)
  })
     .catch((err) => console.log(err));
  }, [categoryName]);


  if ( items.length === 0 ){
    return <div> style={{display: "flex", justifyContent: "center"}}
    <ScaleLoader color= "hsla(137, 67%, 53%, 1)" size={35} width={18} margin={1} speedMultiplier={2} />
 </div>
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer