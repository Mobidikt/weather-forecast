import React, { useContext, useMemo, useState } from 'react';

type CurrentDateContextType = {
  dateState: string;
  setDateState: React.Dispatch<React.SetStateAction<string>> | null;
  currentDateUnix: number;
};
const initialState = {
  dateState: 'yyyy-MM-dd',
  setDateState: null,
  currentDateUnix: 0,
};
const CurrentDateContext =
  React.createContext<CurrentDateContextType>(initialState);

export const CurrentDateContextProvider: React.FC = ({ children }) => {
  const [dateState, setDateState] = useState<string>('yyyy-MM-dd');

  const currentDate = new Date(dateState).getTime();
  const nowDate = new Date();
  const maxPermissibleDate = new Date().setDate(nowDate.getDate() - 1);
  const minPermissibleDate = new Date(new Date().setHours(0, 0, 0, 0)).setDate(
    nowDate.getDate() - 5,
  );

  const currentDateUnix = useMemo(() => {
    if (minPermissibleDate <= currentDate && currentDate < maxPermissibleDate) {
      return Math.floor(new Date(dateState).getTime() / 1000);
    } else return 0;
  }, [dateState, currentDate, maxPermissibleDate, minPermissibleDate]);

  return (
    <CurrentDateContext.Provider
      value={{ dateState, setDateState, currentDateUnix }}>
      {children}
    </CurrentDateContext.Provider>
  );
};

export const useCurrentDateContext = () => {
  return useContext(CurrentDateContext) ?? initialState;
};
