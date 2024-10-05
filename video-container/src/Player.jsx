import { useRef , useState} from "react";
import { AiFillMuted } from "react-icons/ai";
import { FaVolumeMute } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa"; 
import { FaPause } from "react-icons/fa6";
const Player = (props) => {
  console.log(props);
  console.log(props.data);  

    let videoRef = useRef()

  let {state , video , title} = props.data 

  let [play , setPlay] = useState() 

  let playorPause = ()=>{
    videoRef.current.autoplay = true 
   setPlay(!play)    
    if(play==true){
      videoRef.current.play() 
    } else {
      videoRef.current.pause() 
    }
  } 

  let unmute = ()=>{
    videoRef.current.muted = false
  }

  let mute = ()=>{
    videoRef.current.muted = true
  }
  
  return (
  <>
  <h1>Video Player</h1> 
  <video src={video} className="leftVideo" ref={videoRef} onClick={playorPause}></video> 
  <h2>{title}</h2>
  <span onClick={()=>videoRef.current.play()}><FaGooglePlay /></span>
  <span onClick={()=>videoRef.current.pause()}><FaPause /></span>    
  <span onClick={unmute}><AiFillMuted /></span> 
  <span onClick={mute}><FaVolumeMute /></span>
  </>
  )
}

export default Player