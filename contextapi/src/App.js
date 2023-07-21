import React, { createContext } from 'react'
import ComA from './components/ComA';
import './App.css';

const firstname = createContext();
const lastname = createContext();
function App() {
  return (
    <div className="App">
      <h3>Hello world!</h3> <br /> <br />
      <firstname.Provider value={'Jacob'}>
        <lastname.Provider value={'Thomson'}>
        <ComA/>
        </lastname.Provider>
      </firstname.Provider>

    </div>
  );
}

export default App;
export {firstname, lastname};