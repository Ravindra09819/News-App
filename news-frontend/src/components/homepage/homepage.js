
import React from "react"
import "./homepage.css"
import Navbar from '../NavBar'
import News from '../News'
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";

const Homepage = ({updateUser}) => {
    
    
    return(
    <>
        <div className="homepage">
            
        </div>
        
        <>
        <Router>


 <Navbar/>
   <Switch>
   <Route exact path="/home">  <News key="" country="in" category=""/></Route>
       <Route exact path="/business">  <News key="business" country="in" category="business"/></Route>
        <Route exact path="/entertainment">  <News key="entertainment" country="in" category="entertainment"/></Route>
         <Route exact path="/general">  <News key="general" country="in" category="general"/></Route>
        <Route exact path="/health">  <News key="health" country="in" category="health"/><h4>Please first login...</h4></Route>
        <Route exact path="/science">  <News key="science" country="in" category="science"/></Route>
           <Route exact path="/sports">  <News key="sports" country="in" category="sports"/></Route>
           <Route exact path="/technology">  <News key="technology" country="in" category="technology"/></Route>
           <Route exact path="/logout"><button type="button " class="btn btn-info d-grid gap-2  mx-auto" onClick={() => updateUser({})} >Logout</button></Route>

 


         </Switch>
 </Router>

        </>
        </>
    )
}


export default Homepage



 