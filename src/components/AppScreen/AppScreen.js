import React, { useState } from 'react'
import { ActorScreen } from '../ActorScreen/ActorScreen';
import { SearchScreen } from '../SearchScreen/SearchScreen'

import './AppScreen.css'

export const AppScreen = () => {
    const [actorName, setActorName] = useState('');

    return (
        <div className='box'>
            {
                actorName === '' ? (
                    <SearchScreen
                        setActorName={setActorName}
                    />
                ) : (
                    <ActorScreen
                        actorName={actorName}
                        setActorName={setActorName}
                    />
                )
            }
        </div>
    )
}
