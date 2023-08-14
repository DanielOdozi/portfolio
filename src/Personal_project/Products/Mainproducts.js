import React from 'react'
import Products from './Products'
import Productsdata from './Productsdata'

function Mainproduct() {
    const Productcomponent = Products.map(productdata => <Productsdata products={productdata}/>)
    return(
        <div>
            {Productcomponent}
        </div>
    )
}

export default Mainproduct