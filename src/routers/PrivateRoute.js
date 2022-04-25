import { useContext } from "react";
import { ActorContext } from "../providers/ActorContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { actor } = useContext(ActorContext);
    const { pathname, search } = useLocation();

    localStorage.setItem('lastActorPath', pathname + search);

    return actor.setted ? (
        children
        ) : (
        <Navigate to="/" />
    )
}
