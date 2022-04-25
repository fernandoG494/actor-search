import { useContext } from "react";
import { ActorContext } from "../providers/ActorContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
    const { actor } = useContext(ActorContext);

    return actor.setted ? (
        <Navigate to={`actor/${actor.actor}`} />
        ) : (
        children
    )
}