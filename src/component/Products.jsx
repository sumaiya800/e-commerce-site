import React from 'react'

function Products(props) {

    return (
      <div style={{ display: "inline-block" }
      }>
        <img style={{ width: "300px" }}
         src={props.product.i.imgur.com} alt="" />
         <h6>Product name : {props.product.title}</h6>
  
      </div>
  )
}

export default Products