import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Category = () => {
    const [Categories, Setcategories] = useState([]);
    const Getcategories = () => {
        fetch('https://vsmart.ajspire.com/api/categories').then(
            response => {
                return response.json();
            }

        ).then(
            data => {
                console.log(data);
                Setcategories(data.categories);
            }
        )
    }
    useEffect(() => {

        Getcategories();
    }, []);
    return (
        <div>
            <Header></Header>
            <h1 className='text-center'> Categories</h1>
            <Link to='/categories'></Link>

            <section className="ftco-section ftco-category ftco-no-pt">
                <div className="container">

                    <div className="row">


                        {
                            Categories.map((Cate) =>

                            (

                                <div className="col-md-4">
                                    <div className="category-wrap  img mb-4 d-flex align-items-end" >
                                        <img className='img' src={Cate.category_banner} alt="" srcset="" />
                                        <div className="text px-3 py-1">
                                            <h2 className="mb-0"><a href="#">{Cate.category_name}</a></h2>
                                        </div>
                                    </div>

                                </div>

                            )
                            )
                        }

                    </div>
                </div>
            </section >


            <Footer />

        </div>
    )
}

export default Category