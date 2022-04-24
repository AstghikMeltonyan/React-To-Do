
const TodoItem = ({todo, removeTodo, doneTodo})=>{

    // const todo = props.todo; //{id,title,done}
    // const removeTodo = props.removeTodo;
    // const doneTodo = props.doneTodo;

    const classes = ["TodoItem"];
    if(todo.done) classes.push('done')// ete if true a ,aysinqn done trun

    return (
        <div className= {classes.join(' ')}>
            <span>{todo.title}</span>
            <span>
                <i className="fas fa-check" onClick={ ()=>doneTodo(todo.id) }></i>
                <i className="fas fa-trash" onClick={ ()=>removeTodo(todo.id) }></i>
            </span>
        </div>
    );
}

export default TodoItem;