import React from 'react'
import myVideo from '../Video/video.mp4'

function Background() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <video
                    className="w-full h-full object-cover opacity-85"
                    src={myVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

        </>
    )
}

export default Background