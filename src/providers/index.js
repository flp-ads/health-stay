import { UserContextProvider } from "./User";

const Providers = ({ children }) => {
  return (
  <UserContextProvider>
    {children}
  </UserContextProvider>
  )
};

export default Providers;
