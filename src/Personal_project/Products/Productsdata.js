import React from 'react'

function Productsdata(props) {
    return(
        <div>
            <h2>{props.products.name}</h2>
            <p>{props.products.price.toLocaleString('en-US', {style: "currency", currency: "NGN"})}</p>
            <p>{props.products.description}</p>
        </div>
    )
}

export default Productsdata