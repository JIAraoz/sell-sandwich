import { useNavigate } from "react-router-dom"

export default function BackButton(){
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return(
        <button onClick={back} className="text-xs h-10 p-3">Volver atras</button>
    )
}