
export function Nav() {

    const menuItems = [
        {name: 'logo', content: '', addlClass: 'nav-link-logo'},
        {name: 'store', content: 'Store', addlClass: null},
        {name: 'mac', content: 'Mac', addlClass: null},
        {name: 'ipad', content: 'iPad', addlClass: null},
        {name: 'iphone', content: 'iPhone', addlClass: null},
        {name: 'watch', content: 'Watch', addlClass: null},
        {name: 'tv', content: 'TV', addlClass: null},
        {name: 'music', content: 'Music', addlClass: null},
        {name: 'support', content: 'Support', addlClass: null},
        {name: 'search', content: '', addlClass: 'nav-link-search'},
        {name: 'bag', content: '', addlClass: 'nav-link-bag'}];

    return (
        <div className="nav-content">
        <ul className="nav-header"></ul>
        <div className="nav-search"></div>
        <ul id="global-nav" className="nav-items">
          {menuItems.map((x,i)=>
                <NavItem key={i} name={x.name} content={x.content} addlClass={x.addlClass}></NavItem>
            )}
        </ul>  
      </div>

    )
}

function NavItem({name, content, addlClass}) {
    return (
        <li className="nav-item"><a className={addlClass ? "nav-link " + addlClass : "nav-link"} id={name} href="#global-nav">{content}</a></li>
    )
}

export default Nav;