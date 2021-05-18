import React from 'react';
import logo from './logo.svg';
import './App.css';
import mock from './api/mock';
import Routes from './routes';

mock();

function App() {
  React.useEffect(() => {
    fetch("/api/todos")
      .then((response) => {
        return response.json()
      })
      .then((json) => console.log(json))
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Routes />
  );
}

export default App;
