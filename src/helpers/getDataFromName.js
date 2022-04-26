import axios from 'axios';

export const getActorDataWithName = async({actor}) => {
    const urlGet = `${process.env.REACT_APP_API_MOVIE_URL}api_key=${process.env.REACT_APP_API_MOVIE_KEY}&query=${actor}`;
    try{
        const response = await axios.get(urlGet);
        return response;
    }catch(error){
        return error;
    }
}
