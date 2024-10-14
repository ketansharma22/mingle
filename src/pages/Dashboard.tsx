import { useEffect, useRef, useState } from "react"

import { Room } from "./Room";

export const Dashboard = () => {
    const [name, setName] = useState("");
    const [localAudioTrack, setLocalAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [localVideoTrack, setlocalVideoTrack] = useState<MediaStreamTrack | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [joined, setJoined] = useState(false);

    const getCam = async () => {
        const stream = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        // MediaStream
        const audioTrack = stream.getAudioTracks()[0]
        const videoTrack = stream.getVideoTracks()[0]
        setLocalAudioTrack(audioTrack);
        setlocalVideoTrack(videoTrack);
        if (!videoRef.current) {
            return;
        }
        videoRef.current.srcObject = new MediaStream([videoTrack])
        videoRef.current.play();
        // MediaStream
    }

    useEffect(() => {
        if (videoRef && videoRef.current) {
            getCam()
        }
    }, [videoRef]);

    if (!joined) {
            
    return( 
        
        <div style={{fontFamily:"sf"}} className="flex flex-col items-center gap-10 justify-center" > 
            <video className=" h-[50%] rounded-2xl" autoPlay ref={videoRef}></video>
            <div className="flex gap-2 h-[50%]">
            <input className="bg-black text-white p-2 rounded-lg font-bold" placeholder="name" type="text" onChange={(e) => {
                setName(e.target.value);
            }}>
            </input>
            <button className="p-2 font-bold" onClick={() => {
                setJoined(true);
            }}>Join</button>
            </div>
            <h1 className="text-[30px]">This is a Check Screen, You can check you hair and face before start talking to strangers</h1>

            

            
        </div>
    )
    }

    return <Room name={name} localAudioTrack={localAudioTrack} localVideoTrack={localVideoTrack} />
}