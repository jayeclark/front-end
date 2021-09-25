import logo from './logo.svg';
import nfIcon from './assets/nf-favicon.ico';
import siteData from './data/sites.json';
import {useState} from 'react';
import './App.css';
import {Netflix} from './components/main/Netflix.jsx';

function App() {

  const [site, setSite] = useState('nf');

  let iconLink = document.getElementById('icon');
  iconLink.href = nfIcon;

  let siteProps = siteData['nf'];

  let pageTitle = document.getElementById('page-title');
  pageTitle.innerHTML = siteProps.title;

  let pageMetaDesc = document.getElementById('meta-description');
  pageMetaDesc.setAttribute("content",siteProps.metaDescription);
  console.log(pageMetaDesc);

  const handleSiteChange = e => {
    let newsite = e.target.value;
    setSite(newsite);
  }

  const randomSite = () => {
    let sites = ['nf','sf','ad','ab','nv','am'].filter(x=> x !== site);
    let random = Math.floor(Math.random())*(sites.length);
    setSite(sites[random]);
  }

  const siteURL = site => {
    switch (site) {

      case site === 'nf' :
        return (<Netflix></Netflix>);

      case site === 'am' :
        return (<Netflix></Netflix>);

      default :
        return (<Netflix></Netflix>);
    }
  } 

  return (
    <div className="App">
      <div className="navbar"></div>
      <div className="content">
        {siteURL(site)}
      </div>
    </div>
  );
}

export default App;
