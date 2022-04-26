import React from 'react';
import { Card, Col, Row } from 'antd';
import { StarFilled } from '@ant-design/icons'

import './Movie.css';

export const Movie = ({movie}) => {
    console.log(movie)

    const formatDate = (date) => {
        let newFormat = date.split("-").reverse().join("/");
        return newFormat;
    }

    return (
        <>
            <Row>
                <Col flex={4}>
                    <h3>{movie.title}</h3>
                </Col>
                <Col flex={1} className='votes'>
                    <StarFilled
                        style={{
                            color: '#F8CB2E',
                            marginTop: '3px',
                            marginLeft: '3px'
                        }}
                    />
                    {movie.vote_average}/10
                </Col>
            </Row>
            <Row>
                <Col flex={1}>
                    <img
                        alt=""
                        className='moviePoster'
                        src={
                            `${process.env.REACT_APP_API_PICTURE_BASE}${movie.poster_path}`
                        }
                    />
                </Col>
                <Col flex={4}>
                <div>
                    <Card
                        size="small"
                        title={
                            'Fecha de estreno: ' + (movie.release_date ? (
                                    formatDate(movie.release_date)
                            ) : 'Desconocida')
                        }
                        style={{ width: '100%'}}
                    >
                        <p className='overview'>{movie.overview} </p>
                    </Card>
                </div>
                </Col>
            </Row>
            <hr></hr>
        </>
    )
}
