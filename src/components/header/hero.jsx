import React from 'react'
import ReactPlayer from 'react-player'
import heroVideo from '../../assets/videos/heroVideo.mp4'

const Hero = () => {
    return (
        <ReactPlayer
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%">
        </ReactPlayer>
    )
}

export default Hero
