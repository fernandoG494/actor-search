import React from 'react';
import { Movie } from '../Movie/Movie';

export const MoviesLister = ({movies}) => {
    return (
        <>
            {
                movies.length ? (
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                ) : (
                    <></>
                )
            }
        </>
    )
}
