import "./Style/SignUpPage.css";
const SignUpPage=()=>{
    return(
<div className="signUpPageContainer">


<div className="signupParentBox">
<h1 className="Odoo" style={{textAlign:"center"}}><span  style={{color:"orange"}}>O</span>doo</h1>
<hr/>

  <div className="SignUpPageInnerBox">
      
   
 
 <h3 style={{color:"grey"}} className="personalinfo">Personal Info</h3>
 <div className="firstNameAndLastName">
 User Name 
 <br></br>
 <input type="text"placeholder="user name" className="inputdata"></input>
<br></br>
 
 Email
 <br></br>
 <input type="email"placeholder="abcd@gmail.com" className="inputdata"></input>
<br></br>
Phone Number 

<br></br>
<input type="number"placeholder="+91 9912345567" className="inputdata"></input>
<br></br>
Password
<br></br>

<input type="password"placeholder="xxxxx" className="inputdata"></input>
<br></br>

<button className="signup">Submit</button>
</div>
 </div>
  </div>
  </div>

    )
}
export default SignUpPage;