import React, { useRef } from 'react'
import "./Videoplayer.css"
import videoplayer from "../../assets/videoplayer.mp4"



const Videoplayer = ({playState, setPlayState}) => {
    const player = useRef(null);

    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`videoplayer ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={videoplayer} autoPlay muted controls ></video>
    </div>
  )
}

export default Videoplayer  