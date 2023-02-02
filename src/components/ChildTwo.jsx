import { useContext, useState } from "react"
import { AppContext } from "../App"
import ChildThree from "./ChildThree"

const ChildTwo=()=>{
    const {todos,addtodo,removeTodo}=useContext(AppContext)
    const [fromvalue,setFromvalue]=useState([])
    const onChangeInput=(e)=>{
        setFromvalue(e.target.value)
    }
    const onAddtodo=()=>{
        addtodo(fromvalue);
        setFromvalue('')
        console.log(todos)
    }
    const onEdit=(e)=>{
        console.log(e)

    }
    
    return <div>
        <ChildThree />
        <input onChange={onChangeInput}
        type="text"
        value={fromvalue} />
        <button onClick={onAddtodo}>addtodo</button>
        <ul>
            {todos.map((it,index)=>{
                return(
                    <li key={index}>{it}
                    <button onClick={onEdit}>edit</button>
                    <button onClick={()=>{removeTodo(index)}}>remove</button>
                    </li>
                )
            })}
        </ul>
    </div>
}
export default ChildTwo