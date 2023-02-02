import { createContext, useReducer } from 'react'
import './App.css'
import ChildOne from './components/ChildOne'
const initialState={
  number:0,
  todos:[],
  addtodo:()=>{},
  post:{
    loading:false,
    data:[],
    meta:{
      page:1,
      nextPage:true,
      prevPage:false,
    }
  }
}
// "post-request"=>"post-request-success"=>"post-request-error"
function appReducer(state,action){
  switch(action.type){
    case 'increace':
      return{
        ...state,
        number:state.number++
      }
    case 'decreace':
      return{
        ...state,
        number:state.number--
      }
    case 'add-todo':
      return{
        ...state,
        todos:state.todos.concat(action.payload)
      }
    case 'removeTodo':
      const index=action.payload
      const clonetodo= [...state.todos]
      clonetodo.splice(index,1)
      console.log('lan')
        return{
          ...state,
          todos:clonetodo
        }
    // case 'editTodo':
    //     return{
    //         ...state,
    //         todos:state.todos.splice(action.id,1)
    // }
    case 'post-request':
    case 'post-request-success':
    case 'post-request-error':

      default:
      break;
    }
}
//call api


//usecontext
export const AppContext=createContext({
  // imgUrl:'',
  // count:reducer.number,
  // onIncreace:onIncreace,
  // onDecreace:onDecreace,
  // ontop error because default funtion
})
function App() {
  const [reducer,dispatch]=useReducer(appReducer,initialState)
  const url='/vite.svg'
  console.log(reducer);
  const onIncreace=()=>{
    dispatch({
      type:'increace',
    })
  }
  const onDecreace=()=>{
    dispatch({
      type:'decreace',
    })
  }
  const addtodo=(fromvalue)=>{
    dispatch({
      type:"add-todo",
      payload:fromvalue,
    })
  }

  //add,remove
  const editTodo=(fromvalue)=>{
    dispatch({
      type:"editTodo",
      payload:fromvalue,
    })
  }
  const removeTodo=(todoIndex)=>{
    dispatch({
      type:"removeTodo",
      payload:todoIndex,
    })
  }
  const value={
    imgUrl:url,
    count:reducer.number,
    onIncreace:onIncreace,
    onDecreace:onDecreace,
    todos:reducer.todos,
    addtodo,
    removeTodo,
  }
  return (
    <AppContext.Provider value={value}>
      <div className="App">
        <ChildOne/>       
      </div>
    </AppContext.Provider>
  )
}

export default App
