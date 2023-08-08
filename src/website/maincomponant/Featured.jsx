
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const Featured = () => {
    const [Product, Setproduct] = useState([]);
    const GetProduct = () => {
        fetch('https://vsmart.ajspire.com/api/products').then(
            response => {
                return response.json();
            }

        ).then(
            data => {
                Setproduct(data.products.data);
            }
        )


    }
    useEffect(() => {
        GetProduct();

    }, []);
  return (
    <div>
         <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading"><h1> Featured Products </h1></span>
                          
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* {
                            Product.map((products) =>
                            ( */}
                               {Product.filter((Product) => Product.featured === 0).slice(0, 8).map((Product) => (



                                <div className="col-md-6 col-lg-3  ">
                                    <div className="product">
                                        <a href="#" className="img-prod"><img className="img-fluid card" src={Product.product_image} alt="Colorlib Template" />
                                            <span className="status">&#8377;{Product.mrp_price - Product.sale_price} OFF</span>
                                            <div className="overlay" />
                                        </a>
                                        <div className="text py-3 pb-4 px-3 text-center">
                                            <h3><a href="#">{Product.english_name}</a></h3>
                                            <div className="d-flex">
                                                <div className="pricing">
                                                    <p className="price"><span className="mr-2 price-dc">{Product.mrp_price}</span><span className="price-sale">{Product.sale_price}</span></p>
                                                </div>
                                            </div>
                                            <div className="bottom-area d-flex px-3">
                                                <div className="m-auto d-flex">
                                                    <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                        <span><i className="ion-ios-menu" /></span>
                                                    </a>
                                                    <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                        <span><i className="ion-ios-cart" /></span>
                                                    </a>
                                                    <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                                        <span><i className="ion-ios-heart" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Featured