import TodoItem from "./TodoItem";
// mutqum vercnum einq propse vore hamapatasxanum er` todos, removeTodo, doneTodo

const TodoList = ({todos, removeTodo, doneTodo})=>{
  //console.log(props);

    const elements = todos.map((el, index)=>{  // propsum ekael a todose
       
      return <TodoItem key={index} todo={el} removeTodo={removeTodo} doneTodo={doneTodo} /> // key tals enq vor error chberi
                                                        // titeln el propsn ee
      //sra poxaren todoitem componente berecinq //return <div className="TodoItem" key={index}>{el.title}</div>
    })

    return (
        <div>
            {elements}
        </div>  
      );


    // return (   es poxarinecinq verevi returnov
    //   <div>
    //       <div className="todoItem">{props.str1}</div>
    //       <div className="todoItem">{props.str2}</div>
    //       <div className="todoItem">Dina</div>
    //   </div>  
    // );
}

export default TodoList;

// kam karch tarberak 
// import TodoItem1 from "./TodoItem1"
// const TodoList1 = ({todo, addTodo}) => {
    

//     return (
//         <div>
//             {
//                 todo.map((el,index)=>{
//                     return(
//                         <TodoItem1 key={index} item={el} addTodo={addTodo}/>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default TodoList1;