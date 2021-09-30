import {useState} from 'react';
import React from 'react';
import {Landing} from '../landing/NFLanding.js';

function Netflix() {

  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="site">
      {loggedIn === false ? <Landing></Landing> : null}
      {loggedIn === true ? <Boilerplate></Boilerplate> : null}
    </div>
  );
}

function Boilerplate() {
  return (
    <header className="App-header">
        <p>
          netflixxxxxx <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  )
}

export default Netflix;
