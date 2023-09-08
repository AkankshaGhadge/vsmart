import React, { useEffect, useState } from 'react'
import Authuser from '../Authantication/Authuser';

const ViewCart = () => {
    const [cartItems, SetCartItems] = useState([])
    const [cartCount, SetCartCount] = useState([])
  const { http, user, logout, token } = Authuser();


    const getCardproduct = () => {
        http.get(`/get-cart-list`).then(
          (res) => {
            SetCartItems(res.data.cart);
            SetCartCount(res.data.cart.length)
          }
    
        )
      }
      useEffect(() => {

        if (token) {
          getCardproduct();
    
        }
      }, [token])
    
    
    return (
        <div>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
                            <h1 className="mb-0 bread">My Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                    
                        <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                            <div className="cart-list">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>Sr.No</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>Product name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    {cartItems.map((el,index) => (
                                    <tbody>

                                        <tr className="text-center">
                                            <td>{index+1}</td>
                                            <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                                            <td className="image-prod"><div className="img"   /> <img src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" className="cart-image" /></td>
                                            <td className="product-name">
                                                <h3>{el.english_name}</h3>
                                                
                                            </td>
                                            <td className="price">{el.sale_price}</td>
                                            <td className="quantity">
                                                <div className="input-group mb-3">
                                                    <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                                                </div>
                                            </td>
                                            <td className="total">$4.90</td>
                                        </tr>{/* END TR*/}
                                        
                                    </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="cart-total mb-3">
                                <h3>Coupon Code</h3>
                                <p>Enter your coupon code if you have one</p>
                                <form action="#" className="info">
                                    <div className="form-group">
                                        <label htmlFor>Coupon code</label>
                                        <input type="text" className="form-control text-left px-3" placeholder />
                                    </div>
                                </form>
                            </div>
                            <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Apply Coupon</a></p>
                        </div>
                        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="cart-total mb-3">
                                <h3>Estimate shipping and tax</h3>
                                <p>Enter your destination to get a shipping estimate</p>
                                <form action="#" className="info">
                                    <div className="form-group">
                                        <label htmlFor>Country</label>
                                        <input type="text" className="form-control text-left px-3" placeholder />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">State/Province</label>
                                        <input type="text" className="form-control text-left px-3" placeholder />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Zip/Postal Code</label>
                                        <input type="text" className="form-control text-left px-3" placeholder />
                                    </div>
                                </form>
                            </div>
                            <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Estimate</a></p>
                        </div>
                        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span>$20.60</span>
                                </p>
                                <p className="d-flex">
                                    <span>Delivery</span>
                                    <span>$0.00</span>
                                </p>
                                <p className="d-flex">
                                    <span>Discount</span>
                                    <span>$3.00</span>
                                </p>
                                <hr />
                                <p className="d-flex total-price">
                                    <span>Total</span>
                                    <span>$17.60</span>
                                </p>
                            </div>
                            <p><a href="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                        </div>
                    </div>
                </div>
            </section>


        </div>


    )
}

export default ViewCart