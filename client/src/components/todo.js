import React, {useState,useEffect,useContext} from 'react';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from '@material-ui/icons/Edit';
import NewTodo from './newtodo'
import MyVerticallyCenteredModal from './newtodo'
import todoServices from '../services/todo_services'
import EditTodo from './edit'
function Todo(props) {
    const [todos,setTodos] = useState([]);
    const [allow,setAllow]=useState(false)
    const [load,isLoad]=useState(false)
    const [editLoad,setEditload]=useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const [mydata,setmyData]=useState()
    let newtodo={title:"",priority:"",label:"",userId:localStorage.getItem("userId")}
const handleEdit=(data)=>{
   setmyData(data)
  setEditload(true)

}

const updateTodos=()=>{
  setModalShow(false)
  setEditload(false)
  setAllow(false)
  todoServices.getTodo(newtodo).then(data=>{
      console.log(data.allTodos)
      setTodos(data.allTodos)
      setAllow(true)
})
}
useEffect(()=>{
 
  
    todoServices.getTodo(newtodo).then(data=>{
      console.log(data.allTodos)
      setTodos(data.allTodos)
      setAllow(true)
    })
    
    
  
},[]);
const handleLogout=()=>{
  localStorage.setItem("rememberMe","false")
  props.history.push('/');
}
  return (
 
     <>
       <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav.Link href="#deets" onClick={handleLogout}>More deets</Nav.Link>
   
  </Navbar>
     <div style={{padding:"10rem"}}>
     
     <>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={updateTodos}
      />
    </>
    
      {editLoad?  <EditTodo
        show={editLoad}
        onHide={updateTodos}
        data={mydata}
      />:""}
     {load? <NewTodo/> : ""}
    <div style={{display:"inline-block"}}><span style={{float:"left"}}> <Card.Title style={{marginBottom:"3rem",marginTop:"5rem",fontWeight:"bold",fontSize:"3rem"}}>Welcome to your to-do list!</Card.Title> </span> <span style={{float:"right"}}>
    <Button onClick={() => setModalShow(true)} style={{marginTop:"5rem",marginLeft:"40rem"}} variant="secondary" size="lg">
    CREATE NEW TASK
  </Button></span></div>
  

  {allow? 
todos.map(data=>{
  return (     
     <Card style={{backgroundColor:"",padding:"1rem",height:'7rem',display:'flex',margin:'auto',marginTop:'2rem' }}>
 <Card.Body style={{display:"inline-block"}}>

 <h4 style={{float:"left",marginRight:"3rem"}}>{data.title}</h4>
  
 {  data.labels.map(label=>{
       return   <h4><Badge style={{float:"left", marginRight:"1rem"}} variant="secondary">{label.title}</Badge></h4>
   })
 }
   
   <h4  style={{float:"right", marginRight:"3rem"}} onClick={()=>todoServices.deleteTodo({id:data.id,labels:data.labels}).then(updateTodos)}><DeleteIcon/></h4>
   <h4  style={{float:"right", marginRight:"3rem"}} onClick={()=>handleEdit(data)}> <EditIcon/></h4>
   <h4 style={{float:"right",marginRight:"3rem"}}>{data.priority}</h4> 
         
          
           </Card.Body>    
           </Card>     
   
 
   
)             
}):""}
 </div> 
 </>);
}



export default Todo;
