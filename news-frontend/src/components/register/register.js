import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:8000/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }


    return (


        <div className="padding container d-flex justify-content-center">
            <div className="col-md-5 col-md-offset-1">
                <form class="signup-form">
                    {console.log("User", user)}
                    <h2 class="text-center">Signup</h2>
                    <hr />
                    <div className="form-group">
                        <input type="text" name="name" class="form-control" value={user.name} placeholder="Your Name" onChange={handleChange} required="required"></input></div>
                    <br></br>
                    <div className="form-group">
                        <input type="email" name="email"  pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" value={user.email} class="form-control" placeholder="Your Email" onChange={handleChange} required="required"></input></div>
                    <br></br>
                    <div className="form-group">
                        <input type="password" name="password" value={user.password} class="form-control" placeholder="Your Password" onChange={handleChange} required="required" ></input></div>
                    <br></br>
                    <div className="form-group"> <input type="password" class="form-control" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} required="required"></input></div>
                    <br></br>
                    <div className="form-group text-center"> <div className="button" class="btn btn-blue btn-block" onClick={register} >Register</div></div>

                    <div className="form-group text-center">Or</div>
                    <div className="form-group text-center"> <div className="button" class="btn btn-blue" onClick={() => history.push("/login")}>Login</div></div>

                </form>
            </div>
        </div>



    )
}

export default Register