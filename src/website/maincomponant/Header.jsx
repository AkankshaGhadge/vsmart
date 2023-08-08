// import { Dropdown } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Header = () => {
  const [Cate, Setcate] = useState([]);
  const [SubCate, SetSubcate] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [brand, setbrand] = useState([]);
  const Getbrand = () => {
    fetch('https://vsmart.ajspire.com/api/brands')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setbrand(data.brands);
      });
  }
  const [showBrandMegaMenu, setShowBrandMegaMenu] = useState(false);
  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };
  const brandMouseEnter = () => {
    setShowBrandMegaMenu(true);
  };

  const brandMouseLeave = () => {
    setShowBrandMegaMenu(false);
  };
  const Getcate = () => {
    fetch('https://vsmart.ajspire.com/api/categories').then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        data.categories.forEach((category) => { getsubcate(category.category_id) })
        Setcate(data.categories);
      }
    )
  }
  const getsubcate = (category_id) => {
    fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        const newsubcate = data.subcategories
        SetSubcate((previoussubcate) => {
          const filtersubcate = newsubcate.filter((newsubcate) => !previoussubcate.some((previoussubcate) => previoussubcate.subcategory_id === newsubcate.subcategory_id));
          return [...previoussubcate, ...filtersubcate];
        });
      }
    )
  }

  useEffect(() => {
    Getcate();
    Getbrand();
  }, []);



  return (
    <div className='col-lg-12 col-md-3 col-sm-6' >
      <div className="py-1 bg-primary">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="http://vsmart.ajspire.com/images/logo1.png" alt="" srcset="" />VS Mart</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <Link className='text-center' to='/index'>Home</Link>
              <li className="nav-item active"><a href="Index.jsx" className="nav-link"></a></li>

              <li className="nav-item dropdown">

                <li className="nav-item">


                  <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a className='nav-item active' href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>




                    <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-420px' }}>
                      <div className="row">
                        {
                          Cate.map((el) => (

                            <div key={el.category_id} className="col-sm-3">

                              <h5 className='font-weight-bold'>{el.category_name}</h5>



                              <ul>
                                {
                                  SubCate.filter((sub) => sub.subcategory_category_id === el.category_id).map((sub) => (
                                    <li key={sub.subcategory_id}>{sub.subcategory_name}</li>
                                  ))
                                }


                              </ul>




                            </div>
                          ))
                        }
                      </div>
                      <h6 className='text-center'><Link to='/categories'>View More</Link></h6>

                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </li>
              <li className="navbar-item dropdown-megamenu">
                <Link to="/" className="nav-item nav-link" onMouseEnter={brandMouseEnter} onMouseLeave={brandMouseLeave}>
                  <a className='nav-item active' href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">brand</a>
                </Link>

                <Dropdown show={showBrandMegaMenu} onMouseEnter={brandMouseEnter} onMouseLeave={brandMouseLeave}>
                  <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-20px' }}>
                    <div className="row">
                      {
                        brand.map((sub) => (


                          <div className="col-md-3">
                            <div className="megamenu-wrap">

                              <ul className="megamenu-list sub">

                                <li>
                                  {sub.brand_name}
                                </li>


                              </ul>
                            </div>
                          </div>
                        ))
                      }

                      

                    </div>
                    <h6 className='text-center'><Link to='/brand'>View More</Link></h6>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item nav">
                <Link to='/about'>About</Link></li>
              <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
              <Link className='text-center' to='/login'>Login</Link>
              <li className="nav-item"><a href="contact.html" className="nav-link">Login</a></li>
              <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart" />[0]</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header