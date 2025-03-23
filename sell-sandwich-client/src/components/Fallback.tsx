export default function Fallback(){
    return(
        <div className="flex justify-center items-center max-h-screen min-h-screen">

  <div className="flex flex-row gap-2">
  <div className="w-4 h-4 rounded-full animate-bounce-color"></div>
  <div className="w-4 h-4 rounded-full animate-bounce-color [animation-delay:0.2s]"></div>
  <div className="w-4 h-4 rounded-full animate-bounce-color [animation-delay:0.4s]"></div>
</div>
        </div>
    )
}