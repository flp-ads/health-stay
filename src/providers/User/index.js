import { createContext, useState, useContext} from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const accToken = useState(JSON.parse(localStorage.getItem('@HS:UserToken')) || []);

    const userLogin = (formData) => {

        api
            .post('/sessions/', formData)
            .then((response) => {

                const { access } = response.data
                localStorage.setItem('@HS:UserToken', JSON.stringify(access))
                toast.success('Login bem sucedido')
            })
            .catch((err) => {
                toast.error('Usuário ou senha incorretos')
            })
    }

    return (
        <UserContext.Provider
            value={{accToken, userLogin}}>
                {children}
        </UserContext.Provider>
    )

}

export const useLogin = () => useContext(UserContext)