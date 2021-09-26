import {useState} from 'react';
import '../../styles/ap.css';
import {Landing} from '../landing/APLanding.jsx';

export function Apple() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="Site">
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

export default Netflix;
