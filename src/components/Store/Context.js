import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  setToken: (any) => {},
});

export default StoreContext;
