import { createContext, ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";


type EmailCredentials = {
  email: string;
  password: string;
}

interface User {
  _id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (user: EmailCredentials) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const login = (user: EmailCredentials) => {
    //laikinai del 4 uzduoties padariau setUser(user): Suvedus inputus ir paspaudus Login mygtuką išsaugoti userio informaciją su useContext ir localStorage bei redirectint į pagrindinį / route
    setUser(user);
  }

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;