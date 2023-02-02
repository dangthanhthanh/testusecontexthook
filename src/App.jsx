import { createContext } from 'react'
import './App.css'
import ChildOne from './components/ChildOne'
export const AppContext=createContext({
  imgUrl:''
})
function App() {
  const url='/vite.svg'
  const value={
    imgUrl:url,
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
