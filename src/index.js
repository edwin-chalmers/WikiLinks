import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from "react";


const defaultGlobalProps = {
    
};

const GlobalPropContext = createContext();

const GlobalPropProvider = ({ children }) => { 
    const [startTitle, setStartTitle] = useState('')
    const [gameType, setGameType] = useState()
    const globalPropValue = {
        setStartTitle,
        startTitle,
        gameType, 
        setGameType
      }

      return (
        <GlobalPropContext.Provider value={globalPropValue}>
          {children}
        </GlobalPropContext.Provider>
      );
}

export const useGlobalProps = () => useContext(GlobalPropContext);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <GlobalPropProvider>
        <App />
        </GlobalPropProvider>,
    </BrowserRouter>
);

reportWebVitals();
