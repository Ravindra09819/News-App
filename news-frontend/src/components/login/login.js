import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory, Link } from "react-router-dom"
// import forgotpassword from "../register/forgotpassword"


const Login = ({ updateUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8000/login", user)
            .then(res => {
                alert(res.data.message)
                updateUser(res.data.user)
                history.push("/")
            })
    }

    <div className="l1">
        <Link to="/forgotpassword" className="">
            Forgot Password?
        </Link>
    </div>

    return (

        <div className="padding container d-flex justify-content-center">
            <div className="col-md-5 col-md-offset-1">
                <form className="signup-form">
                    <h2 className="text-center">Login</h2>
                    <hr />
                    <div className="form-group"> <input type="text" className="form-control" name="email" required="required" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input></div>
                    <br></br>
                    <div className="form-group"> <input type="password" name="password" className="form-control" required="required" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input></div>
                    <br></br>
                    <div className="form-group text-center"><div class1="button" className="btn btn-blue" onClick={login}>Login</div></div>
                    <div className="form-group text-center">or</div>
                    <div className="form-group text-center"> <div class1="button" className="btn btn-blue" onClick={() => history.push("/register")}>Register</div></div>
                </form>
            </div>
        </div>

    )
}

export default Login