import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Index from './views/Index'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
