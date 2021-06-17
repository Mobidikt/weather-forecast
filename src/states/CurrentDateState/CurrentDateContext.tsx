import React, { useContext, useState } from 'react';

type CurrentDateContextType = {
  dateUnixState: number,
  setDateUnixState: React.Dispatch<React.SetStateAction<number>> | null,
};
const initialState = {
  dateUnixState: 0,
  setDateUnixState: null,
};
const CurrentDateContext = React.createContext<CurrentDateContextType>(initialState);

// eslint-disable-next-line
export const CurrentDateContextProvider: React.FC = ({ children }) => {
  const [dateUnixState, setDateUnixState] = useState<number>(0);

  return (
    <CurrentDateContext.Provider
      value={{
        dateUnixState,
        setDateUnixState,
      }}
    >
      {children}
    </CurrentDateContext.Provider>
  );
};

export const useCurrentDateContext = () => useContext(CurrentDateContext) ?? initialState;
