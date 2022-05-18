import { Route, Routes } from 'react-router-dom'
import './App.css'
import ToDo from './components/ToDo'
import ToDos from './components/ToDos'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ToDos></ToDos>}></Route>
        <Route path='/todo/:id' element={<ToDo></ToDo>}></Route>
      </Routes>
    </div>
  )
}

export default App
