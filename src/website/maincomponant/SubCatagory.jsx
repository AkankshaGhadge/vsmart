import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import {useEffect,useState } from 'react';
import { Carousel } from 'react-bootstrap';

const SubCatagory = () => {
  let { cat_id, sub_id } = useParams();
  //product
  const [Category, setCategory] = useState([]);
  //categoryname  for banner
  const [category_, setCategory_] = useState([]);
  //subcategoryname  for banner
  const [subcategory_, subCategory_] = useState([]);
  console.log(subcategory_);
  //scroll menu
  const [Cat, setCate] = useState([]);
  const [brand, setBrand] = useState([]);

  //slider after banner
  const [Sub, setSub] = useState([]);

  //count for brand and categorywise 
  const [Count, setCount] = useState([]);
  console.log(Count);
  const [Count1, setCount1] = useState([]);
  console.log(Count1);

  const getCategoryData = () => {
      // console.log();
      try {
          fetch(`https://vsmart.ajspire.com/api/product-shop/${cat_id}/${sub_id}`)
              .then((response) => response.json())
              .then((data) => {
                  // console.log(data);
                  setCategory(data.category.data);
                  setCategory_(data.category_);
                  subCategory_(data.subcategory_);
                  setCate(data.cat);
                  setBrand(data.brand);
                  setSub(data.sub);
                  setCount(data.count);
                  setCount1(data.count1);
              })



              .catch((error) => {
                  console.error("Error fetching data:", error);
              });

      } catch (error) {

      }


  }
  useEffect(() => {
      getCategoryData();
  }, []);
  
  return (
    <div>

      <Header />
      <div style={{ background: `url(https://i.pinimg.com/originals/17/f0/5f/17f05fe00ece62503f2995f6e9fc70a7.jpg)`, backgroundSize: 'cover', height: '475px' }}>
        <div className='heading'>
          <h1>ABOUT OUR COMPANY</h1>
          <h4> <i className="ion-ios-home" /><Link className='text-center' to='/index'>Home</Link> /  <Link to='/about'>About</Link></h4>

        </div>
      </div>
      <section className="ftco-section ftco-category ftco-no-pt">
                    <div className="container">
                        <Carousel>
                            {/* Group categories in rows of 3 */}
                            {category.map((Cate, index) => {
                                if (index % 3 === 0) {
                                    const categorySlice = category.slice(index, index + 3);
                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="row">
                                                {categorySlice.map((category, subIndex) => (
                                                    <div className="col-md-4" key={subIndex}>
                                                        <div className="category-wrap  img mb-4 d-flex align-items-end" >
                                                            <img className='img' src={category.category_banner} alt="" srcset="" />
                                                            <div className="text px-3 py-1">
                                                                <h2 className="mb-0"><a href="#">{category.category_name}</a></h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                    );
                                } else {
                                    return null; // If not the start of a new row, return null (no carousel item)
                                }
                            })}
                        </Carousel>
                        {/* <button>View More</button> */}
                        <h6 className='text-center'>  <Link to='/categories'><i className="ion-ios-eye" />View More</Link></h6>
                    </div>
                </section>
      <div className='row'>
        <div className='col-lg-6'>

          <div className="shop-widget">
            <h6 className="shop-widget-title">Filter by Category</h6>
            <form>
              <ul className="shop-widget-list shop-widget-scroll">
                <li>
                  <a className="link-dark" href="/product-shop/2/0">
                    <div className="shop-widget-content">
                      <input defaultChecked type="checkbox" />
                      <label htmlFor="brand1">
                        Packaged Food</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (569)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/4/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Grocery</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (680)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/5/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Beverages</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (92)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/10/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Personal care</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (808)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/13/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Home care</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (506)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/14/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Stationary</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/20/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Grains</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (8)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/21/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Baby care</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (76)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/22/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Health Care</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (40)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/28/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Electronics</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (5)
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </form>
          </div>
          <div className="shop-widget">
            <h6 className="shop-widget-title">Filter by Brand </h6>
            <form>
              <ul className="shop-widget-list shop-widget-scroll">
                <li>
                  <a className="link-dark" href="/product-shop/1">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Sol Lifestyle...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (63)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/2">
                    <div className="shop-widget-content">
                      <input defaultChecked type="checkbox" />
                      <label htmlFor="brand1">
                        3M India Ltd.</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (7)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/3">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Aadinath agro...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/4">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Agadyati Prod...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/5">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Amar tea Pvt...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/6">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Amrut Tea &amp; F...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/7">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Amrutanjan He...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/8">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Argus cosmeti...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/9">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Asian Food Pr...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/10">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Bafna Enterpr...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/14">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Balaji Wafers</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/15">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Bambino pasta...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/16">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Britannia</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (29)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/17">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Cargil india</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (19)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/19">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Cavincare Pvt...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (3)
                      </span></div>
                  </a>
                </li>
              </ul>
            </form>

          </div>

        </div>
      <div col-lg-6>
        <h1>hello</h1>
        <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">Featured Products</span>
                            <h2 className="mb-4">Our Products</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                           CatProduct.slice(0, 20).map((products) =>
                            (



                                <div className="col-md-6 col-lg-3  ">
                                    <div className="product">
                                        <a href="#" className="img-prod"><img className="img-fluid card" src={products.product_image} alt="Colorlib Template" />
                                            <span className="status">&#8377;{products.mrp_price - products.sale_price} OFF</span>
                                            <div className="overlay" />
                                        </a>
                                        <div className="text py-3 pb-4 px-3 text-center">
                                            <h3><a href="#">{products.english_name}</a></h3>
                                            <div className="d-flex">
                                                <div className="pricing">
                                                    <p className="price"><span className="mr-2 price-dc">{products.mrp_price}</span><span className="price-sale">{products.sale_price}</span></p>
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
                <h6 className='text-center'>  <Link to='/product'> <i className="ion-ios-eye" />View More</Link></h6>
            </section>
      </div>
      </div>
    </div>

  )
}

export default SubCatagory