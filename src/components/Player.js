import React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying, songs, setCurrentSong, setSongs }) => {
    // Ref //
    const audioRef = useRef(null);

    // Events Handlers //
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100);
        setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animationPercentage})
    };

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2));
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    const skipTrackHandler =  (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
            if (currentIndex === songs.length - 1) {
               setCurrentSong(songs[0]);
            } else {
               setCurrentSong(songs[currentIndex + 1]);
            };
        };
        if (direction === "skip-back") {
            if (currentIndex === 0) {
                setCurrentSong(songs[songs.length - 1]);
            } else {
                setCurrentSong(songs[currentIndex - 1]);
            };
        };
    }

    const autoPlayerHandler = () => {
        if (isPlaying) {
            audioRef.current.play();
        };
    };

    const songEndHandler = () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (currentIndex === songs.length - 1) {
            setCurrentSong(songs[0]);
        } else {
           setCurrentSong(songs[currentIndex + 1]);
        };
        if(isPlaying) audioRef.current.play();
    }

    // State //
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });

    // Add styles //
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)` 
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
                    <input 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range" />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{getTime(songInfo.duration || 0)}</p>
            </div>
            <div className="play-control">
               <FontAwesomeIcon onClick={() => skipTrackHandler("skip-back")} className="skip-back" size="2x" icon={faAngleLeft} />
               <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} /> 
               <FontAwesomeIcon onClick={() => skipTrackHandler("skip-forward")} className="skip-forward" size="2x" icon={faAngleRight} /> 
            </div>
        <audio
        onLoadedData={autoPlayerHandler} 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}
        ></audio>    
        </div>
    );
};

export default Player;