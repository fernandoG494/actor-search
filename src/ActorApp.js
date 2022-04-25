import React, { useEffect, useReducer } from "react";
import { ActorReducer } from "./providers/ActorReducer";
import { ActorContext } from "./providers/ActorContext";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
    return JSON.parse(localStorage.getItem('actor')) || { setted: false };
}

export const ActorApp = () => {
    const [actor, dispatch] = useReducer(ActorReducer, {}, init);
    
    useEffect(() => {
        if(!actor) return;
        localStorage.setItem('actor', JSON.stringify(actor));
    }, [actor]);

    return (
        <ActorContext.Provider value={{
            actor,
            dispatch
        }}>
            <AppRouter />
        </ActorContext.Provider>
    );
}
