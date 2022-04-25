import React from "react";
import { Route, Routes } from "react-router-dom";
import { ActorScreen } from "../components/ActorScreen/ActorScreen";

export const ActorRouter = () => {
    return (
        <>
            <Routes>
                <Route path="actor/:actor" element={<ActorScreen />} />
            </Routes>
        </>
    )
}
