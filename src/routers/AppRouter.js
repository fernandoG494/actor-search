import React from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import { SearchScreen } from '../components/SearchScreen/SearchScreen';
import { PublicRoute } from "../routers/PublicRoute";
import { PrivateRoute } from "../routers/PrivateRoute";
import { ActorRouter } from './ActorRouter';

import './AppRouter.css'

export const AppRouter = () => {
    return (
        <div className='box'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <PublicRoute>
                            <SearchScreen />
                        </PublicRoute>
                    }/>
                    <Route path='/*' element={
                        <PrivateRoute>
                            <ActorRouter />
                        </PrivateRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
