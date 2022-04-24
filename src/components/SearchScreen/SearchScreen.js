import React, { useState } from 'react'
import { Button, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import './SearchScreen.css';

export const SearchScreen = () => {
    const { Dragger } = Upload;
    const [actorList, setActorList] = useState([]);

    const props = {
        name: 'file',
        multiple: false,
        action: 'https://whois.nomada.cloud/upload',
        onChange({ file, fileList }) {
            const { status } = file;
            if (status === 'done') {
                setActorList(fileList);
            }

            if(fileList.length === 0){
                setActorList([]);
            }if(fileList.length === 1){
                setActorList([]);
                setActorList(fileList);
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
            <Dragger {...props} className="dragger">
                <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{ fontSize: '40px', color: '#5497e8' }}/>
                </p>
                <p className="ant-upload-text">
                    Haz click o arrastra una imagen
                </p>
                <p className="ant-upload-hint">
                    Selecciona la foto de un actor famoso para conocer quien es y en que peliculas ha salido
                </p>
                <p className="ant-upload-hint">
                    (Solo se permite ingresar un actor a la vez)
                </p>
            </Dragger>

            <div className='button'>
                <Button type="primary" disabled={
                    ((actorList.length === 1) ? (false) : (true))
                }>
                    Buscar actor
                </Button>
            </div>
        </div>  
    )
}
