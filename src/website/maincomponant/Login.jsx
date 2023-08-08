import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
    };
    return (
        <div>
            <Link to='/login'></Link>
            
            <h4 className='text-center wel'>WELCOME TO VS MART</h4>
            <div class="col text-center">
                <img src="http://vsmart.ajspire.com/images/logo1.png" alt="Centered Image" class="img-fluid"/>
            </div>
       
            
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />

                <button type="submit">Login</button>
                <h6 className='text-center '>Forgot Your Password? <Link>Reset Here</Link></h6>
            <h6 className='text-center '> Don't Have Any Account?<Link to='/ragister'>Register Here</Link></h6>

            </form>
           

            
            );

        </div>
    )
}

export default Login