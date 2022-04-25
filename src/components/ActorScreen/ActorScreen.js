import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import { ActorContext } from '../../providers/ActorContext';

import './ActorScreen.css';

export const ActorScreen = () => {
    const { actor } = useContext(ActorContext);

    return (
        <div className='actorContainer'>
            <h1>{actor.actor}</h1>
            <div>
                <Row>
                    <Col flex={2}>

                    </Col>
                    <Col flex={3}>
                        
                    </Col>
                </Row>
            </div>
        </div>
    )
}
