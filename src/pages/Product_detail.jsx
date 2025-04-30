import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { FaRupeeSign } from 'react-icons/fa'
import { items } from '../context/Data.js'
import Products from '../components/Products.jsx'
import './Product_detail.css'
import DataContext from '../context/DataContext.jsx'
const Product_detail = () => {
  const {addToCart} = useContext(DataContext);
  const { id } = useParams();
  const product = items.find((pro) => pro.id == id)
  const relatedProduct = items.filter((pro) => pro.category.toLowerCase() == product.category.toLowerCase() )
  return (
    <div>
      <div className="container my-5">
        <div className="product-detail-card">
          <div className="image-section">
            <img src={product.imgSrc} alt={product.title}
              className='product-image'
            />        
          </div>
          <div className="info-section">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
<div className="product-price"> <FaRupeeSign/> {product.price}</div>
<button className="btn add-to-cart" onClick={()=>addToCart(product.id ,product.title , product.price , product.imgSrc)}>🛒 Add To Cart </button>
          </div>
        </div>
      </div>
     
<h2 className="text-center my-5">
Related Products
</h2>
<Products items={relatedProduct} />

    </div>
  )
}

export default Product_detail
