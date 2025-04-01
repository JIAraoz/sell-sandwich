import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";

import BackButton from "./BackButton";
export default function Nav(){
    const url = useLocation().pathname
    return(
        <div className="nav flex justify-around items-center bg-slate-600 h-14">
            <img src="/icon-192x192.png" alt="logo"  className='h-10 object-contain'/>
        
            {
             url !== "/form" ? <>
                           <NavLink to='/form'>    
             <button className="text-xs h-10 p-3">Crear producto</button>
             </NavLink>   
             </> : <BackButton/>

            }
        </div>
    )
} 