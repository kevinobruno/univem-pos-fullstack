import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
UserContext.displayName = 'User';

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);

  return (
    <UserContext.Provider value={{ name, balance, setName, setBalance }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const { name, balance, setName, setBalance } = useContext(UserContext);
  return { name, balance, setName, setBalance };
};

export { UserContextProvider, useUserContext };
