import { useContext } from "react"
import { AppContext } from "../App"

const ChildFour=()=>{
    const{imgUrl:imageUrl,count,onIncreace,onDecreace}=useContext(AppContext)
    return <div style={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
        <div>{count}</div>
        <button onClick={onIncreace}>Increace</button>
        <button onClick={onDecreace}>Decreace</button>
        <img width={"200px"} src={imageUrl} alt='taolaoapp.com'/>
    </div>
}
export default ChildFour