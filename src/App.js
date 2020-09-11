import React, { useState, useEffect } from 'react';
import './App.css';
import Gallery from './Components/Gallery'

function App() {
  const [albums, setAlbuns] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  function compareAlbumId(a, b) {
    return (a.albumId < b.albumId) ? 1 : (a.albumId > b.albumId) ? -1 : 0;
  }

  function compareId(a, b) {
    return (a.Id < b.Id) ? 1 : (a.Id > b.Id) ? -1 : 0;
  }

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        let albumIds = [...new Set(data.sort(compareAlbumId).map(element => element.albumId))]
        let lastAlbumIds = albumIds.slice(0, 3)
        let lastAlbums = data.filter(photo => lastAlbumIds.includes(photo.albumId))
        let filteredAlbums = []
        lastAlbumIds.forEach(albumId => {
          filteredAlbums = [...filteredAlbums, lastAlbums.filter(album => album.albumId === albumId).sort(compareId).slice(0, 2)]
        })
        setAlbuns(filteredAlbums)
        setIsLoading(false)
      });
  }, [])

  return (
    <>
      <h1>Image Gallery</h1>
      {isLoading ? (<p> Loading... </p>) : (<Gallery albums={albums} />)}
    </>);
}

export default App;
