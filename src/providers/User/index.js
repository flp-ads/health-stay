import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

import api from "../../services/api";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [accToken, setAccToken] = useState(
    JSON.parse(localStorage.getItem("@HS:UserToken")) || ""
  );
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@HS:UserId")) || -1
  );
  const [userName, setUserName] = useState("");

  const userLogin = (formData) => {
    api
      .post("/sessions/", formData)
      .then((response) => {
        const { access } = response.data;
        const { user_id } = jwt_decode(access);
        setUserId(user_id);
        setAccToken(access);
        localStorage.setItem("@HS:UserId", JSON.stringify(user_id));
        localStorage.setItem("@HS:UserToken", JSON.stringify(access));
        toast.success("Login bem sucedido");
      })
      .catch((err) => {
        if (!!err) {
          toast.error("Usuário ou senha incorretos");
        }
      });
  };

  const getUserName = () => {
    api
      .get(`users/${userId}/`)
      .then((res) => setUserName(res.data.username))
      .catch((err) => console.log(err));
  };

  useEffect(() => {

    if (userId !== -1) {

      getUserName();
    }
  }, [accToken])

  return (
    <UserContext.Provider value={{ accToken, userLogin, userId, userName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useLogin = () => useContext(UserContext);
