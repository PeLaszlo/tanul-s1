import {useRef} from "react"
function VideoPlayer()
{
    const videoRef=useRef(null)
    const mouseOver=()=>{videoRef.current.play()};
    const mouseOut=()=>{videoRef.current.pause()};
    return(
    <video with={200} heigth={200}  ref={videoRef} onMouseOver={mouseOver} onMouseOut={mouseOut} muted>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
    </video>
        )
}

export default VideoPlayer