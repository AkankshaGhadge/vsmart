import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

const Brand = () => {
	const [Brand, SetBrand] = useState([]);

	const Getbrand = () => {
		fetch('https://vsmart.ajspire.com/api/brands').then(
			response => {
				return response.json();
			}

		).then(
			data => {
				console.log(data.brands);
				SetBrand(data.brands)
			}
		)

	}
	useEffect(() => {

		Getbrand();
	}, []);
	return (
		<div>
			<Header></Header>
			<section class="ftco-section">
				<h2 className=" text-center  mb-4">SHOP BY BRANDS</h2>

				<div className="container">


					{
						<div className="row">
							{
								Brand.map((b, subIndex) => (
									<div className="col-md-3" >

										<div className="col all vegetables">
											<div className="brand-wrap">

												<div className="brand-media">

													<img className='bimg' src={b.brand_banner} alt="brand" data-pagespeed-url-hash={3646614136} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
													<div className="brand-overlay"><a href="/product-shop/207"><i className="fas fa-link" /></a></div>
												</div>
												<div className="brand-meta">
													<p className=' text-center wel'>{b.brand_name}</p>
												</div>
											</div>
										</div>
									</div>
								))
							}
						</div>


					}





				</div>


			</section>
		</div>
	)
}

export default Brand