import { useState } from "react";


const AddTodo = ({addTodo})=>{

    const [value, setValue] = useState(''); // value arjeqe vercri, setov popoxum

    const submitHandler = (event) => {
        event.preventDefault();
        if(!value.trim()) return;
        addTodo(value);
        setValue('');
    }

    return(
        <form onSubmit={submitHandler}>                                             
            <input type="text" placeholder="Add Todo" value={value} onChange={ event=>setValue(event.target.value) } /> 
            <button type="submit">ADD</button>
        </form>
    )
}// onChenge ashkhatum a functiayi het, onClicki nman


export default AddTodo;