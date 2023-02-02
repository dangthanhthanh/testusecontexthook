import { useContext } from "react"
import { AppContext } from "../App"

const ChildFour=()=>{
    const{imgUrl}=useContext(AppContext)
    return <div>
        <img width={"200px"} src={imageUrl} alt='taolaoapp.com'/>
    </div>
}
export default ChildFour