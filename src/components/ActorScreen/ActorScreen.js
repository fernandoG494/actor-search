import React, { useContext } from 'react'
import { Row, Col, Button } from 'antd';
import { ActorContext } from '../../providers/ActorContext';
import { types } from '../../types/types';

import './ActorScreen.css';

export const ActorScreen = () => {
    const { actor, dispatch } = useContext(ActorContext);

    const handleReturn = () => {
        console.log('retroceso');
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
        </div>
    )
}
