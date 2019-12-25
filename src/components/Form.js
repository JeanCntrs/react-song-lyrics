import React, { useState } from 'react';

const Form = ({ consultLetterApi }) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const updateState = event => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        consultLetterApi(search);
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit} className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input type="text" className="form-control" name="artist" placeholder="Nombre de Artista" onChange={updateState} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input type="text" className="form-control" name="song" placeholder="Nombre de Canción" onChange={updateState} required />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Form;