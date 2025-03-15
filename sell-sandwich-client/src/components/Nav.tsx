export default function Nav(){
    return(
        <div className="nav flex justify-around items-center bg-slate-600 h-14">
            <img src="/icon-192x192.png" alt="logo"  className='h-10 object-contain'/>
        <h1 className='text-xl '>Sell Sandwich</h1>
            <button className="border rounded-3xl bg-slate-900 text-xs h-10 p-3">Crear producto</button>
        </div>
    )
}