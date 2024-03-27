import React, { useState, useEffect } from "react";

export default function Login(){
    const [login, setLogin] = useState({'username': '', 'password': ''})

    function passwordValidator(password){
        if (''.match()){
            return ''
        }
    }

    function handleFormChange(event){
        setLogin(prevCredentials => {
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
        console.log(login);
    }

    useEffect(()=>{
        console.log('Ran Effect');
    }, [])

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
                            value={login.username}
                        ></input>

                        <label htmlFor="title">Password:</label>
                        <input 
                            className="form-control mb-2" 
                            type="password" 
                            id="password" 
                            name="password" 
                            onChange={handleFormChange}
                            value={login.password}
                        ></input>
                        <button className="btn btn-block btn-warning mt-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}