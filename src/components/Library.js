import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, setSongs, libraryStatus, currentSong }) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                        songs={songs}
                        setSongs={setSongs}
                        setCurrentSong={setCurrentSong}
                        currentSong={currentSong}
                        song={song}
                        id={song.id}
                        key={song.id}
                    />  
                ))}
            </div>
        </div>
    );
};

export default Library;