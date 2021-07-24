import React from 'react';

const LibrarySong = ({ song, songs, setSongs, setCurrentSong, id, currentSong }) => {

    const songSelectHandler = () => {
        const selectedSong = songs.find((state) => state.id === song.id);
        setCurrentSong(selectedSong);
    };

    const updateSongs = () => {
        setSongs(
            songs.map((targetSong) => {
                return {
                    ...targetSong,
                    active: targetSong.id === song.id,
                }
            })
        );
    };

    return(
        <div onClick={() => {songSelectHandler(); updateSongs();}} className={`library-song ${song.id === currentSong.id ? 'selected' : ""}`}>
            <img src={song.cover} alt="album cover"></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;