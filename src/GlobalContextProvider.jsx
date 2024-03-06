import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useGlobalContextProvider = () => {
  return useContext(MyContext);
};

export const GlobalContextProvider = ({ children }) => {
  const [estadoGlobal, setEstadoGlobal] = useState(false);



  const toggleEstadoGlobal = () =>{
    console.log("ok")
    if(estadoGlobal){
      setEstadoGlobal(false)
    }
  }

  return (
    <MyContext.Provider value={{ estadoGlobal, setEstadoGlobal }}>
      {children}
    </MyContext.Provider>
  );
};