import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import "./App.css"
function App() {

  return (
  
      <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>

  )
}

export default App
