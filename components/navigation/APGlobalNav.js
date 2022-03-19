import styles from '../../styles/Apple.module.css';

export function ABNav() {

    const menuItems = [
        {name: 'logo', content: '', addlClass: styles.navLogo},
        {name: 'store', content: 'Store', addlClass: null},
        {name: 'mac', content: 'Mac', addlClass: null},
        {name: 'ipad', content: 'iPad', addlClass: null},
        {name: 'iphone', content: 'iPhone', addlClass: null},
        {name: 'watch', content: 'Watch', addlClass: null},
        {name: 'airpods', content: 'AirPods', addlClass: null},
        {name: 'tv', content: 'TV & Home', addlClass: null},
        {name: 'onlyonapple', content: 'Only on Apple', addlClass: null},
        {name: 'accessories', content: 'Accessories', addlClass: null},
        {name: 'support', content: 'Support', addlClass: null},
        {name: 'search', content: '', addlClass: styles.navSearch},
        {name: 'bag', content: '', addlClass: styles.navBag}];

    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navContent}`} id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center w-100 justify-content-between">
            {menuItems.map((item, i) => (
              <li key={i} className="nav-item">
                <a id={item.name} className={item.addlClass ? `nav-link ${styles.navLink} ${item.addlClass}` : `nav-link ${styles.navLink}`} href="#">{item.content}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-search"></div>
        <style jsx>{`
          body {
            font-family: "San Francisco",-apple-system, BlinkMacSystemFont, sans-serif;
            color: rgb(29, 29, 31);
            margin: 0px;
            padding: 0px;
            font-size: 17px;
            line-height: 1.4705882353;
            -webkit-font-smoothing: antialiased;
          }

          * {
            box-sizing: border-box;
          }
          
          a {
            color: rgb(0, 102, 204);
            cursor: pointer;
            font-style: normal;
            text-decoration-line: none;
          }
          
          nav {
            font-family: "San Francisco",-apple-system, BlinkMacSystemFont, sans-serif;
            backdrop-filter: saturate(1.8) blur(20px);
            background-color: rgba(0, 0, 0, 0.8)!important;
            box-sizing:content-box;
            font-size: 12px;
            font-weight: 400;
            height: 44px;
            max-height: 44px;
            min-width: 1024px;
            width: 100%;
            position: fixed;
            left: 0px;
            right: 0px;
            z-index: 9999;
            margin: 0px;
            padding: 0px;
          }    
        `}</style>
      </nav>
    )
}

export default ABNav;