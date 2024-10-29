import { createContext, ReactNode, useContext } from "react";
import { useInRouterContext } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";


type EmailCreadentials = {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (user: EmailCreadentials) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const login = (user: EmailCreadentials) => {
    // imituojamas prisijungimas
    // jei pasiseka nustatote gauta useInRouterContext
    // jei nepasiseka, irasote klaida ir ja atvaizduojate
  }
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;