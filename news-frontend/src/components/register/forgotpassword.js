import React, { useState } from "react"
// import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
// import Login from "../login/login"

const Forgotpassword = () => {
  
   
      const history = useHistory()

const [ user, setUser] = useState({
    email:"",
    password:"",
    reEnterPassword: ""
})

const handleChange = e => {
        const { email, value } = e.target
        setUser({
            ...user,
            [email]: value
        })
    }

const Forgotpassword = () => {
        const {  email, password, reEnterPassword } = user
        if( email && password && (password !== reEnterPassword)){
            axios.get("http://localhost:8000/forgotpassword", user)
            .then( res => {
                alert(res.data.message)
                history.push("/forgotpassword")
            })
        } else {
            alert("invlid input")
        }
        
    }


    return (
        <div className="forgotpassword">
            {/* {console.log("User", user)}
            <h1>Register</h1> */}
            {/* <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input> */}
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={Forgotpassword} >Forget Password</div>
            <div>Or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}
 
export default Forgotpassword









