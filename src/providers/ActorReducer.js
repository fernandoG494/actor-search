import { types } from '../types/types';

export const ActorReducer = ({state = {}}, action) => {
    switch (action.type) {
        case types.actorSet:
            return {
                ...action.payload,
                setted: true
            }
        case types.actorNonSet:
            return {
                setted: false
            }
        default:
            return state;
    }
}