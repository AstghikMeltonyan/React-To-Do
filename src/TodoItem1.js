
const TodoItem1 = ({todo, doneTodo, removeTodo}) => {

   

    return (
        <div className={classes.join(' ')}>
            <span>{todo.title}</span>
            <span>
                <i className="fas fa-check" onClick={()=>doneTodo(todo.id)}/>
                <i className="fas fa-trash" onClick={()=>removeTodo(todo.id)}/>
            </span>
        </div>
    )
}

export default TodoItem1;