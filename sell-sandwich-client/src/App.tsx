import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react' 
import Fallback from './components/Fallback'
const HomePage = lazy(() => import('./components/HomePage'))
const Form = lazy(()=> import('./components/Form') )
function App() {

  return (
    <Suspense fallback={<Fallback/>}>

    <div className='bg-slate-900 h-screen flex  flex-col text-slate-300'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/fallback' element={<Fallback/>}/>
      </Routes>
      
    </div>
    </Suspense>
  )
}

export default App
 