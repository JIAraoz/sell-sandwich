import './App.css'
import HomePage from './components/HomePage'
import Nav from './components/Nav'
function App() {

  return (
    <div className='bg-slate-900 h-screen flex  flex-col text-slate-300'>
      <Nav></Nav>
      <HomePage></HomePage>
    </div>
  )
}

export default App
 