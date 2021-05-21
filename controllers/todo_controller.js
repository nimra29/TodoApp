const todo=require('../models/todo')
const labels=require('../models/labels')
exports.createToDo= async(req, res) => {
    try{    console.log(req.body)
        
        var {title,priority,label,userId } = req.body
    
    
        var data = {
    
          title: title,
          priority: priority,
          userId:userId
         
        }
        
    
        var todoData =  await todo.create(data)
        label.forEach( async(item)=> {
           var res= await labels.create({todoId:todoData.id,title:item})
          });
        return res.status(200).json({
            Message: "Success",
            Data: todoData
          })
        } catch (error) {
          console.log(error);
          return res.status(302).json({
            success: false,
            error: error.message,
          })
        }
}

exports.getTodos = async(req, res, next) => {
    console.log(req.body);
   // var errors = validationResult(req) //if errors from user_request.js
    // if (!errors.isEmpty()) {
    //     res.status(422).json({ errors: errors.array() })
    //     return
    // }
    
    var {userId } = req.body
    let allTodos=[];
    let i=0;
    let myfinal=[];
    let mytodos={}
     mytodos=await todo.findAll({
        where:{
            userId:userId
        }
    })
    for(let i=0; i<mytodos.length;i++){
        let ll=await labels.findAll({
            where:{
                todoId:mytodos[i].id
            }
        })
       mytodos[i].label=ll;
       var data = {
    
        title: mytodos[i].title,
        priority: mytodos[i].priority,
        labels: ll,
        id:mytodos[i].id
      }
       myfinal[i]=data;
        //  allTodos[i++]= {id:item.id, title:item.title, priority:item.priority, label:lll}
        
        
    }
   mytodos.forEach(todooo=>{
       todooo.label.forEach(too=>{
           console.log(too.title)
       })
   })
   console.log("gya")
    return res.status(200).json({
                    message: 'Success',
                    allTodos:myfinal,
                  
    })
    
}
exports.delTodos = async(req, res, next) => {
    console.log(req.body);
   
    var {id } = req.body
        let delItem= await labels.destroy({
            where: {
                todoId:id
            }
        }); 
     
  
    let del=  await todo.destroy({
        where: {
            id:id
        }
    });
    if(!del){
     res.status(400).json({message:"wrongInput"});
    }

    res.status(200).json({
      success: true,
      message: "Done",
    });
  
         
},
exports.editTodos = async(req, res, next) => {
    console.log(req.body);
   // var errors = validationResult(req) //if errors from user_request.js
    // if (!errors.isEmpty()) {
    //     res.status(422).json({ errors: errors.array() })
    //     return
    // }
    
//     var {userId } = req.body
//     let allTodos=[];
//     let i=0;
//     let myfinal=[];
//     let mytodos={}
//      mytodos=await todo.findAll({
//         where:{
//             userId:userId
//         }
//     })
//     for(let i=0; i<mytodos.length;i++){
//         let ll=await labels.findAll({
//             where:{
//                 todoId:mytodos[i].id
//             }
//         })
//        mytodos[i].label=ll;
//        var data = {
    
//         title: mytodos[i].title,
//         priority: mytodos[i].priority,
//         labels: ll,
//         id:mytodos[i].id
//       }
//        myfinal[i]=data;
//         //  allTodos[i++]= {id:item.id, title:item.title, priority:item.priority, label:lll}
        
        
//     }
//    mytodos.forEach(todooo=>{
//        todooo.label.forEach(too=>{
//            console.log(too.title)
//        })
//    })
//    console.log("gya")
//     return res.status(200).json({
//                     message: 'Success',
//                     allTodos:myfinal,
                  
//     })
    
}
