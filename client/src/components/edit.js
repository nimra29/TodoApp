import React, { useState,useEffect } from 'react'
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import todoServices from '../services/todo_services';

function MyVerticallyCenteredModal(props) {
  const [todo,setTodo]=useState({title:"",priority:"",id:0})
  const [label,setLabel]=useState([]);
  const [val,setVal]=useState("");
  const handler=()=>{
    console.log(todo.title);
    console.log(todo.priority)
    console.log(label)
    let newtodo={title:todo.title,priority:todo.priority,label:label,todoId:todo.id}
    
    todoServices.editTodo(newtodo)   
    setTodo({title:"",priority:""})
    setLabel([])
    console.log(props)
    props.onHide();
    
  }
  useEffect(() => {
     console.log("here")
      console.log(props.data.labels)
      setTodo({title:props.data.title,priority:props.data.priority,id:props.data.id})
    //   setLabel(props.data.labels)
    //   setTodo(props.data);
    //   setLabel(props.data.labels)
    props.data.labels.map(item=>{
        setLabel([...label, item.title])
    })
  }, [])
  const onValueChange=e=>{
    setVal(e.target.value);
  }
  const onChange = e =>{
    setTodo({...todo,[e.target.name] : e.target.value});   
}
const DisplayLabel=()=>{
  label.map(item=>{
  return   <h4 style={{float:"left"}}><Badge style={{ marginRight:"1rem"}} variant="secondary">{item}</Badge></h4>
   })
}
const addLabel=()=>{
  setLabel([...label, val])
    setVal("")
  
}
  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
        <Form.Group controlId="formGroupTitle">
    <h6><Form.Label>Task Title</Form.Label></h6>
    <Form.Control type="text" name="title" value={todo.title} onChange={onChange} />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
   <h6> <Form.Label>Priority</Form.Label></h6>
    <div style={{display:"inline-block"}}>
    <h4 style={{float:"left"}}><Badge style={{ marginRight:"1rem"}} variant="secondary" onClick={()=>todo.priority="high"}>High</Badge></h4>
    <h4 style={{float:"left"}}><Badge style={{ marginRight:"1rem"}} variant="secondary" onClick={()=>todo.priority="Medium"}>Medium</Badge></h4>
    <h4 style={{float:"left"}}><Badge style={{ marginRight:"1rem"}} variant="secondary" onClick={()=>todo.priority="Low"}>Low</Badge></h4>
</div>
  </Form.Group>
  
  <Form.Group controlId="formGroupEmail">
    <h6><Form.Label>Lables</Form.Label></h6>
    
    <div style={{display:"inline-block"}}>
    <Form.Control style={{float:"left", width:"22rem",marginRight:"3rem"}} type="text" name="val" value={val} onChange={onValueChange} />
    <Button style={{float:"right"}} variant="secondary" onClick={addLabel}>Add</Button>
    {label.map(lab=>{
      return  <h4 style={{float:"left"}}><Badge style={{ marginRight:"1rem"}} variant="secondary">{lab}</Badge></h4>
    })}
    </div>
  </Form.Group>

  
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handler} block>Create Task</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default MyVerticallyCenteredModal;
