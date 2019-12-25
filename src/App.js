import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import axios from 'axios';
import Song from './components/Song';
import Information from './components/Information';

const App = () => {

  const [artist, setArtist] = useState('');
  const [letter, setLetter] = useState('');
  const [info, setInfo] = useState({});
  const [songError, setSongError] = useState(false);
  const [artistError, setArtistError] = useState(false);

  const consultLetterApi = search => {
    const { artist, song } = search;
    setArtist(artist);
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    axios(url)
      .then(response => {
        setLetter(response.data.lyrics);
        setSongError(false);
      })
      .catch(() => {
        setSongError(true);
      });
  }

  const consultArtistApi = artist => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
    axios(url)
      .then(response => {
        setInfo(response.data.artists[0]);
        setArtistError(false);
      })
      .catch(() => {
        setArtistError(true);
      });
  }

  useEffect(() => {
    if (artist !== '') {
      consultArtistApi(artist)
    }
  }, [artist]);
  
  return (
    <Fragment>
      <Form consultLetterApi={consultLetterApi} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {artistError === false ? <Information info={info} /> : 'Artista no encontrado.'}
          </div>
          <div className="col-md-6">
            {songError === false ? <Song letter={letter} /> : 'Canción no encontrada.'}
          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default App;
