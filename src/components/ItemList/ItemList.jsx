
import React from 'react'
import ItemCard from './ItemCard'

const ItemList = ({ items }) => {

  return (
    <div style={{
      display: "flex"
    }}>
      {
        items.map((item) => {
          return (
            <ItemCard item={item} key={item.id} />
          )
        })
      }
    </div>
  )
}

export default ItemList