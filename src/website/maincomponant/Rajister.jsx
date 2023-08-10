import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Rajister = () => {
    const[formData,setformData]= useState(
        {
           name:'',
           email:'',
           mob_no:'',
           address:'',
           password:'',
           cpassword:''

        }
    );
    console.log(formData)
    const onInputchange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})

    }
    // const onSubmit =(e)=>{

    //     e.preventDefault();
    //     fetch('https://vsmart.ajspire.com/api/userregister',{ method: 'POST', body: formData} ).then((res) => {
    //         // setDisebale(0)
    //       }).catch((error) => {
    //         console.error("Error fetching data:", error);
    //       });
  
    //   } 
    const onSubmit = (e) => {
        e.preventDefault();
        fetch('https://vsmart.ajspire.com/api/userregister', {
          method: 'POST',
          body: JSON.stringify(formData),  // Convert formData to JSON string
          headers: {
            'Content-Type': 'application/json',  // Specify content type as JSON
            // Include other headers if needed
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // Handle response data here
            console.log(data);
          })
          .catch((error) => {
            console.log("Error", error);
          });
      };
    // const [Name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [Mobile, setMobile] = useState('');
    // const [Address, setAddress] = useState('');
    // const [password, setPassword] = useState('');
    // const [cpassword, setcpassword] = useState('');


    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Add your login logic here]
    // }
    return (
        <div><div>
            <Link to='/ragister'></Link>

            <h4 className='text-center wel'>WELCOME TO VS MART</h4>
            <div class="col text-center">
                <img src="http://vsmart.ajspire.com/images/logo1.png" alt="Centered Image" class="img-fluid" />
            </div>
           
            <div className="login-form">

                {/* <form className="login-form" onSubmit={handleSubmit}> */}
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
                        // value={name}
                        name='name'
                        onChange={(e)=>onInputchange(e)}
                        placeholder="Enter your Name"
                    />
                     <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        // value={email}
                        name='email'
                        onChange={(e)=>onInputchange(e)}
                        placeholder="Enter your email"
                    />
                     <label htmlFor="Number">Mobile No:</label>
                    <input
                        type="Number"
                        id="email"
                        name='mob_no'
                        // value={Mobile}
                        onChange={(e)=>onInputchange(e)}
                        placeholder="Enter your Mobile No"
                    />
                    
                     <label htmlFor="Address">Address:</label>
                    <input
                        type="text"
                        id="Address"
                        name='address'
                        // value={Address}
                        onChange={(e)=>onInputchange(e)}
                        placeholder="Enter your Address"
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        // value={password}
                        onChange={(e)=>onInputchange(e)}
                        placeholder="Enter your password"
                    />
                  
                     <label htmlFor="password"> Confirm Password:</label>
                    <input
                        type="password"
                        id="cpassword"
                        name='cpassword'
                        // value={cpassword}
                        onChange={(e)=>onInputchange(e)}
                        placeholder="Enter your Confirm password"
                    />
                     <h6> <input type="checkbox"/>  Accept all the <Link>Terms & Conditions</Link></h6>
                    <button type="submit" onClick={(e)=>onSubmit(e)}>REGISTER</button>
                   
                    </div>
                    </div>
                    </div>
                {/* </form> */}

           

                 


        </div></div>
    )
}

export default Rajister