import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router';

const Cart = () => {
  const { cart , setCart } = useContext(DataContext);
  return (
    <div>
      <div className="container my-5">
        {cart.length == 0 ? (
          <div className="text-center">
            <h1>Your Cart Is Empty</h1>
            <Link to={"/"} className='btn btn-warning mt-3'>Continue Shopping</Link>
          </div>
        ) : (<>
          <div className="row d-flex justify-content-center">
            {cart.map((product) => <div className='col-lg-8 col-md-10 my-3'>
              <div className="cart cart-card">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4 d-flex justify-content-center">
                    <img src={product.imgSrc} alt='w' className='cart-img' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className='card-title'>{product.title}</h5>
                      <p className='product-price'>${product.price}</p>
                      <div className="button-container">
                        <button className="btn add-to-cart" onClick={() => addToCart(product.id, product.title, product.price, product.imgSrc)}>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
          </div>
          <div className="text-center my-5">
             <button className="btn btn-warning mx-2">CheckOut</button>
            <button onClick={()=>setCart([])} className="btn btn-danger mx-2">ClearCart</button>
          </div>
        </>
      )}
      </div>
    </div>
  )
}

export default Cart
