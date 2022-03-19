import {useState} from 'react';
import {Landing} from '../landing/APLanding.js';

function Apple() {

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
          appleeeeeeee.
        </p>
      </header>
  )
}

export default Apple;
