import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Button, Tag } from 'antd';
import { ActorContext } from '../../providers/ActorContext';
import { types } from '../../types/types';
import { getActorDataWithName } from '../../helpers/getDataFromName';

import './ActorScreen.css';
import { MoviesLister } from '../MoviesLister/MoviesLister';

export const ActorScreen = () => {
    const { actor, dispatch } = useContext(ActorContext);
    const [response, setResponse] = useState({});
    const [rawData, setRawData] = useState({});
    const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getActorDataWithName(actor).then(
            res => setResponse(res.data.results)
        ).catch(err => console.log(err));
    }, [actor]);

    useEffect(() => {
        if(response.length > 0){
            setIsLoading(false);
            setRawData(response[0]);
            setMovies(response[0].known_for)
        }else{
            setIsLoading(true);
        }
    }, [response])

    const handleReturn = () => {
        const action = {
            type: types.actorNonSet
        }
        dispatch(action);
    }

    return (
        <div className='actorContainer'>
            <Row>
                <Col flex={4}>
                    <h1>{actor.actor}</h1>
                </Col>
                <Col flex={1} className='button'>
                    <Button
                        type='primary'
                        onClick={handleReturn}
                    >
                        Retroceder
                    </Button>
                </Col>
            </Row>
            <hr />

            <Row>
                <Col flex={2} className="center">
                    <div className='card'>
                        <img
                            alt=""
                            className='card-image'
                            src={!isLoading &&
                                `${process.env.REACT_APP_API_PICTURE_BASE}${rawData.profile_path}`
                            }
                        />
                    </div>
                    <div className='tag'>
                        <Tag 
                            color={(!isLoading && (
                                rawData.gender === 2 ? ('blue') : (
                                    rawData.gender === 1 ? ('magenta') : 
                                    ('default')
                                )
                            ))}
                        >
                            {(!isLoading && (
                                rawData.gender === 2 ? ('Hombre') : (
                                    rawData.gender === 1 ? ('Mujer') : 
                                    ('No especificado')
                                )
                            ))}
                        </Tag>
                    </div>
                    <div>
                        <Tag 
                            color="gold"
                        >
                            Popularidad: {(
                                !isLoading && (rawData.popularity)
                            )}
                        </Tag>
                    </div>
                </Col>
                <Col flex={3}>
                    <div>
                        {
                            (movies) ? (
                                <MoviesLister movies={movies} />
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}
