export default {
    login : user =>{
        //console.log(user);
        return fetch('user/sign_in',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((res) => {
            if(res.status===200){
            return res.json().then(data => data);
            }
            else{
                return res.json().then(data => "Err")              
            }
            
         })
    },
    register : user =>{
        console.log(user);
        return fetch('user/sign_up',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((res) => {
            if(res.status===200){
            return res.json().then(data => data);
            }else{
                res.json().then(data=>"Err")
            }
         })
        },
        editTodo : todo =>{
            //console.log(user);
            return fetch('todo/edit',{
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
        }
        
    