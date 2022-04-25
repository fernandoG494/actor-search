import React, { useContext } from 'react'
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { types } from "../../types/types";

import './SearchScreen.css';
import { ActorContext } from '../../providers/ActorContext';

export const SearchScreen = () => {
    const { Dragger } = Upload;

    const { dispatch } = useContext(ActorContext);

    const handleActorSett = (name) => {
        console.log(name);
        const action = {
            type: types.actorSet,
            payload: { actor: name}
        }

        dispatch(action);
    }

    const props = {
        name: 'file',
        multiple: false,
        action: process.env.REACT_APP_API_URL,
        headers: {
            'Nomada': process.env.REACT_APP_API_KEY
        },
        onChange({ file }) {
            const { status } = file;
            if (status === 'done') {
                handleActorSett(file.response.actorName);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className='search'>
            <div className='title'>
                <h1>¿Quien es este actor?</h1>
            </div>
            <Dragger
                {...props}
                className="dragger"
                beforeUpload={file => console.log(typeof(file))}
            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{ fontSize: '40px', color: '#5497e8' }}/>
                </p>
                <p className="ant-upload-text">
                    Haz click o arrastra una imagen
                </p>
                <p className="ant-upload-hint">
                    Selecciona la foto de un actor famoso para conocer quien es y en que peliculas ha salido
                </p>
            </Dragger>
        </div>  
    )
}
