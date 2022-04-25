import React, { useState } from 'react'
import { Button, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import './SearchScreen.css';

export const SearchScreen = ({setActorName}) => {
    const { Dragger } = Upload;

    const props = {
        name: 'file',
        multiple: false,
        action: 'https://whois.nomada.cloud/upload',
        headers: {
            'Nomada': process.env.REACT_APP_API_KEY
        },
        onChange({ file, fileList }) {
            const { status } = file;
            if (status === 'done') {
                console.log('Upload done: ' + file.response.actorName)
                setActorName(file.response.actorName);
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

            {/* <div className='button'>
                    <Button
                        type="primary"
                        disabled={
                            ((actor.length > 1) ? (false) : (true))
                        }
                        onClick={() => {
                            console.log("actor name: ", actor)
                        }}
                    >
                        Buscar actor
                    </Button>
            </div> */}
        </div>  
    )
}
