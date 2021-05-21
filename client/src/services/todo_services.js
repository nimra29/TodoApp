export default {
    postTodo : todo =>{
        //console.log(user);
        return fetch('todo/create',{
            method : "post",
            body : JSON.stringify(todo),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((res) => {
            // if(res.status===200){
            // return res.json().then(data => data);
            // }
            // else{
            //     return res.json().then(data=>"Err")              
            // }
            console.log(res)
         })
    },
    getTodo: todo =>{
        //console.log(user);
        return fetch('todo/find',{
            method : "post",
            body : JSON.stringify(todo),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((res) => {
            if(res.status===200){
            return res.json().then(data => data);
            }
            else{
                return res.json().then(data=>"Err")              
            }
            
         })
    },
    deleteTodo: todo =>{
        console.log(todo);
        return fetch('todo/del',{
            method : "post",
            body : JSON.stringify(todo),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((res) => {
            if(res.status===200){
            return res.json().then(data => data);
            }
            else{
                return res.json().then(data=>"Err")              
            }
            
         })
    },
    
    editTodo : todo=>{
        return fetch('todo/edittt',{
            method : "post",
            body : JSON.stringify(todo),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
            // if(response.status !== 401){
            //     return response.json().then(data => data);
            // }
            // else
            //     return {message : {msgBody : "UnAuthorized"},msgError : true};
        });
    }
}
