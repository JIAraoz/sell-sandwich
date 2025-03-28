import { NavLink } from "react-router-dom"

export default function Nav(){
    return(
        <div className="nav flex justify-around items-center bg-slate-600 h-14">
            <img src="/icon-192x192.png" alt="logo"  className='h-10 object-contain'/>
        
            <NavLink to='/form'>
                
            <button className="border rounded-3xl bg-slate-900 text-xs h-10 p-3">Crear producto</button>
            </NavLink>
        </div>
    )
} 