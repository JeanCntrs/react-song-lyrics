import React, { Fragment } from 'react';

const Song = ({ letter }) => {

    if (letter.length === 0) return null;

    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letter}</p>
        </Fragment>
    );
}

export default Song;