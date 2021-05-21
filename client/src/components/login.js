import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import userService from '../services/user_services'

function App(props) {
  const [user,setUser] = useState({email: "", password : ""});
  const onChange = e =>{
    setUser({...user,[e.target.name] : e.target.value});   
}
const handleSubmit=()=>{
  // console.log(user)
  // userService.login(user)
  // .then(data=>{
  //   console.log(data)
  //   if(data==="Err"){
  //       console.log("err")
  //       props.history.push('/');
  //   }
  //   else{
  //     var rememberMe="true"
  //     localStorage.setItem('rememberMe', rememberMe);
  //     localStorage.setItem('userId', 0);
  //      props.history.push('/todo');

  // }

//  })
}
const handler=()=>{
console.log("hello")
}
  return (
    <Card style={{backgroundColor:"", width: '30rem',height:'40rem',display:'flex',alignItems:'center',margin:'auto',marginTop:'10rem' }}>
  <Card.Body>
    <Card.Title style={{marginBottom:"3rem",marginTop:"5rem",textAlign:"center",fontWeight:"bold",fontSize:"2rem"}}>TODO APP</Card.Title>
    <Form >
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={onChange} required/>
  </Form.Group>
  <Form.Group style={{marginTop:"3rem",marginBottom:"3rem"}} controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={onChange} required/>
  </Form.Group>

 
  {/* <Button type = "primary" style={{marginBottom:"0.7rem"}} htmlType="submit" className = "login-form-button"  variant="secondary" size="lg" block onSubmit={console.log("hel")}>
                            Sign IN
                            </Button> */}
                            <button className="btn btn-lg btn-primary btn-block" 
                        type="submit" onClick={handler}>Log in </button>
  dont have an account?  
  <Link to="/register">
                        Register now!
                </Link>  
</Form>
            </Card.Body>    
            </Card>
  );
}

export default App;
