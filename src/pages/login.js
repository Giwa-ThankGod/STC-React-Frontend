import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router, 
    Route, Routes
} from "react-router-dom";

export default function Login(){
    const [loginForm, setLoginForm] = useState({'username': '', 'password': ''})
    const [formSubmitted, setFormSubmitted] = useState(false);

    function passwordValidator(password){
        if (''.match()){
            return ''
        }
    }

    function handleFormChange(event){
        setLoginForm(prevCredentials => {
            const {name, value} = event.target
        
            if (name == 'password'){

            }

            return (
                {...prevCredentials, [name]: value}
            )
        })
    }

    function submitForm(event){
        event.preventDefault()
        setFormSubmitted(true);
    }

    useEffect(()=>{
        const url = 'http://127.0.0.1:5000/token'
        const headers = { 'Authorization': 'Basic ' + btoa(loginForm.username + ":" + loginForm.password)}
    
        fetch(url, {method: 'GET', headers: headers})
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token',data.token);
                
            })
    }, [formSubmitted])

    return (
        <>
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                <div className="col-md-6 card border-0 mt-5 p-5">
                    <h2 className="text-center mb-3">Login</h2>
                    <form className="card border-0" onSubmit={submitForm}>
                        <label htmlFor="title">Username:</label>
                        <input 
                            className="form-control mb-2" 
                            type="text" 
                            id="username" 
                            name="username"
                            onChange={handleFormChange}
                            value={loginForm.username}
                        ></input>

                        <label htmlFor="title">Password:</label>
                        <input 
                            className="form-control mb-2" 
                            type="password" 
                            id="password" 
                            name="password" 
                            onChange={handleFormChange}
                            value={loginForm.password}
                        ></input>
                        <button className="btn btn-block btn-warning mt-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}