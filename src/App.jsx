import { useEffect, useState } from "react"
import toast from "react-hot-toast";

function App() {

  const [isOnline , setisOnline] = useState(true);
  const eventHandler = () => {
    setisOnline(!isOnline);
  }

  useEffect(() => {
    window.addEventListener("online" , eventHandler);
    window.addEventListener("offline" , eventHandler)
  } , [])

  useEffect(() => {
    if (!isOnline){
      toast.error("You are offline")
    }
    }, [isOnline])

  window.addEventListener("online" , eventHandler);
  window.addEventListener("offline" , eventHandler)

  return (
    <div>
      <h3>{isOnline ? "Connected" : "Not Connected"}</h3>
    </div>
  )
}

export default App
