import nfIcon from './assets/nf-favicon.ico';
import apIcon from './assets/ap-favicon-m.ico';
import apLogo from './assets/ap-globalnav_apple_image__cxwwnrj0urau_large.svg';
import nfLogo from './assets/nf-logo.svg';
import siteData from './data/sites.json';
import React, {useState, Suspense} from 'react';
import './App.css';

const Netflix = React.lazy(() => import('./components/main/Netflix.js'));
const Apple = React.lazy(() => import('./components/main/Apple.js'));
const icons = {nf: nfIcon, ap:apIcon}

const NFSiteLoader = () => (<Suspense fallback={<></>}><Netflix></Netflix></Suspense>)
const APSiteLoader = () => (<Suspense fallback={<></>}><Apple></Apple></Suspense>)

function App() {

  const [site, setSite] = useState({site:'nf', siteURL: <NFSiteLoader></NFSiteLoader>});

  let iconLink = document.getElementById('icon');
  iconLink.href = icons[site.site];

  let siteProps = siteData[site.site];

  let pageTitle = document.getElementById('page-title');
  pageTitle.innerHTML = siteProps.title;

  let pageMetaDesc = document.getElementById('meta-description');
  pageMetaDesc.setAttribute("content",siteProps.metaDescription);

  let pageCSS = document.getElementById('main-style');
  let pageCSSRef = pageCSS.href;
  let refReplace = '/front-end/style/'+site.site+'.css';
  pageCSSRef = pageCSSRef.replace(/\/front-end\/style\/.+\.css/i,refReplace);
  pageCSS.setAttribute("href",pageCSSRef);

  const adjustPageData = siteCode => {

    iconLink.href = icons[siteCode];
    let newSiteProps = siteData[siteCode];
    pageTitle.innerHTML = newSiteProps.title;
    pageMetaDesc.setAttribute("content", newSiteProps.metaDescription);
    let pageCSS = document.getElementById('main-style');
    let pageCSSRef = pageCSS.href.toString();
    let refReplace =  '/front-end/style/'+site.site+'.css';
    pageCSSRef = pageCSSRef.replace(/\/front-end\/style\/.+\.css/i,refReplace);
    pageCSS.setAttribute("href",pageCSSRef);
    
  }
  
  //const randomSite = () => {
  //  let sites = ['nf','sf','ad','ab','nv','am'].filter(x=> x !== site);
  //  let random = Math.floor(Math.random())*(sites.length);
  //  setSite(sites[random]);
  //}

  const handleSetSite = (e,siteCode) => {

    const newSiteURL = (siteCode) => {

      switch (siteCode) {
  
        case siteCode === 'nf' :
          return (<NFSiteLoader></NFSiteLoader>)
  
        case siteCode === 'ap' :
          return (<APSiteLoader></APSiteLoader>)

        default :
          return (<APSiteLoader></APSiteLoader>)
  
      }

    }

    const hideContent = () => {
      let body = document.getElementsByTagName('body')[0];
      body.style.backgroundColor = "black";
      let content = document.getElementsByClassName("main-content")[0];
      content.classList.add('invisible');
    }

    const showContent = () => {
      let body = document.getElementsByTagName('body')[0];
      body.style.transitionProperty = "background-color";
      body.style.transitionDuration = "0.4s";
      body.style.transitionTimingFunction = "ease";
      body.style.backgroundColor = null;
      let content = document.getElementsByClassName("main-content")[0];
      content.classList.remove('invisible');
      setTimeout(()=> {
        body.style.transitionProperty = null;
        body.style.transitionDuration = null;
        body.style.transitionTimingFunction = null;
      },400)
    }

    const tempSite = {site: siteCode, siteURL: newSiteURL(siteCode)}
    hideContent();
    adjustPageData(siteCode);
    setTimeout(()=>{
      setSite(tempSite);
      setTimeout(showContent,100)
    },100);
  
  }

  //React.useEffect(()=> {
  //  adjustPageData(site.site);
  //}, [site, adjustPageData]);

  return (

      <div className="App">
        
          <div className="header" style={{height:"47px"}}></div>
          <div id="main-navbar" className="main-navbar" style={{padding:"0px 5px"}}>
              <a style={{display:"inline-block",margin:"auto 5px"}} href="#ap" id="ap" className="option" onClick={e => handleSetSite(e,'ap')}><div style={{display:"flex"}}><img style={{margin:"-12px 4px",height:'40px'}} src={apLogo}/><span style={{lineHeight:"normal",fontSize:"12",fontWeight:"bold", fontColor: "#666",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'"}}>Apple</span></div></a>
              <a style={{display:"inline-block",margin:"auto 5px"}} href="#nf" id="nf" className="option" onClick={e => handleSetSite(e,'nf')}><div style={{display:"flex", height:"18px",margin:"-1px"}}><img height="100%" src={nfLogo}/></div></a>
          </div>
          <div className="main-content">
            <div className="content">
              {site.site === 'nf' ? <NFSiteLoader></NFSiteLoader> : <APSiteLoader></APSiteLoader>}
            </div>
          </div>
      </div>
  );
}

export default App;
