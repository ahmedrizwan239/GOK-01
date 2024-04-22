import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null)

  const saveUser = (user) => {
    setUserInfo(user);
  };

  const logoutUser = () => {
    setUserInfo(null);
  };

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserInfo(JSON.parse(userInfo));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        saveUser,
        logoutUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};