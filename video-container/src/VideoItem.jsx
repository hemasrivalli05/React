import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
const VideoItem = (props) => {
  // console.log(props.data);

  let {value , setVideo , setTitle} = props.data 
  console.log(value);
  
  let {thumbnailUrl , views , videoUrl , title} = value 
   
  let changeVideo = ()=>{
    setVideo(videoUrl)
    setTitle(title)            
  }
  
  return (
    <>
    <img src={thumbnailUrl} alt={title} className='rightImg' onClick={changeVideo}/> 
    <p><IoEyeOutline />  {views}</p>   
    </>   
  )
}

export default VideoItem