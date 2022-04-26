import React from 'react';
import { Movie } from '../Movie/Movie';

export const MoviesLister = ({movies}) => {
    console.log(movies.length)
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
