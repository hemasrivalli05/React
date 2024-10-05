import React, { useRef } from 'react'

const VideoControls = () => {

    //!step1: create a reference variable
    let videoRef = useRef()
    console.log(videoRef)

    let playvideo = () => {
        videoRef.current.play()

    }
    let pausevideo = () => {
        videoRef.current.pause()

    }
    let loadvideo = () => {
        videoRef.current.load()

    }

    
    return (
        <>
            <section>
                <aside>
                    <button onClick={playvideo}>PLAY</button>
                    <button onClick={pausevideo}>PAUSE</button>
                    <button onClick={loadvideo}>LOAD</button>
                </aside>
                <aside>
                    {/*step2: target video tag / connect reference variable and video tag*/}
                    <video src="/src/video/206294_tiny.mp4" height="100" width="200" ref={videoRef}></video>
                </aside>
            </section>
        </>
    )
}
export default VideoControls

//! video tag --> 1) play()   2)pause()