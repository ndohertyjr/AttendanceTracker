import { useState } from 'react';


/* 
    Getter and Setter for session authentication.
    Saves or returns token in state.
*/
export default function useToken() {

    //Gets token even when undefined due to optional chaining operator
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = tokenString;
        return userToken?.token
    }
    const [token, setToken] = useState(getToken());

    //Saves token to session data and state
    function saveToken(userToken) {

        sessionStorage.setItem('token', userToken.token);
        try {
            setToken(userToken.token);
        } catch (e) {
            console.log(e)
        }
        
    };

    return {
        setToken: saveToken,
        token
    }

}