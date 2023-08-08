import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Rajister = () => {
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcpassword] = useState('');


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here]
    }
    return (
        <div><div>
            <Link to='/ragister'></Link>

            <h4 className='text-center wel'>WELCOME TO VS MART</h4>
            <div class="col text-center">
                <img src="http://vsmart.ajspire.com/images/logo1.png" alt="Centered Image" class="img-fluid" />
            </div>
           
            

                <form className="login-form" onSubmit={handleSubmit}>
                <h4 className='text-center wel'>Join Now</h4>
                <h6 className='text-center '>Setup A New Account In A Minute</h6>

                <div className='row'>
                <div className='col-lg-6'>
                <div class="col text-center">
                <img src="https://vsmart.ajspire.com/images/images.jpg" alt="Centered Image" class="img-fluid" />
            </div> 
                </div>
                <div className='col-lg-6'>

                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="email"
                        value={Name}
                        onChange={handleEmailChange}
                        placeholder="Enter your Name"
                    />
                     <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                     <label htmlFor="Number">Mobile No:</label>
                    <input
                        type="Number"
                        id="email"
                        value={Mobile}
                        onChange={handleEmailChange}
                        placeholder="Enter your Mobile No"
                    />
                    
                     <label htmlFor="Address">Address:</label>
                    <input
                        type="text"
                        id="Address"
                        value={Address}
                        onChange={handleEmailChange}
                        placeholder="Enter your Address"
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                  
                     <label htmlFor="password"> Confirm Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={cpassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter your Confirm password"
                    />
                     <h6> <input type="checkbox"/ >  Accept all the <Link>Terms & Conditions</Link></h6>
                    <button type="submit">REGISTER</button>
                   
                    </div>
                    </div>
                </form>

           

            );


        </div></div>
    )
}

export default Rajister