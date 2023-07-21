import React, { createContext } from 'react'
import ComA from './components/ComA';
import './App.css';

const firstname = createContext()
function App() {
  return (
    <div className="App">
      <h3>Hello world!</h3> <br /> <br />
      <firstname.Provider value={'Jacob'}>
        <ComA/>
      </firstname.Provider>

    </div>
  );
}

export default App;
export {firstname}