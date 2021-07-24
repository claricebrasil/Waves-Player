import React, {useState} from "react";
//Import Styles
import "./styles/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import Util
import data from "./util";


function App() {
  // state //
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player 
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      songs={songs}
      setSongs={setSongs} />
      <Library 
      songs={songs}
      setSongs={setSongs}
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      libraryStatus={libraryStatus} />
    </div>
  );
}

export default App;
