import React, { useState } from 'react';
import './Login.css';




const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Here you would typically send the username and password to your backend server for authentication
  };
    return (
        //this is important such that the navbar can scroll to this section
        <section id="login"> 
            <div className="login-container">
                <div className="login">
                    <h1>Login</h1>
                    <form action="">
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" />
                    </div>
                    <button className="btn btn-block">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;