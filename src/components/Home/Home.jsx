import React from 'react'
import './home.css'

export const Home = () => {
    return (
        <div className='homeContainer' id='home'>
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <div className="homeContent">

                <h1>Adventure Awaits</h1>
                <h4>What are you waiting for?</h4>
                <div className="btnClass">
                    <div className="btn1">Get started</div>
                    <div className="btn2">Watch Trailer</div>
                </div>
            </div>
        </div>
    )
}
