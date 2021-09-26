
function Nav() {

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
        {name: 'bag', content: '', addlClass: 'nav-link-logo'}];

    return (
        <div class="nav-content">
        <ul class="nav-header"></ul>
        <div class="nav-search"></div>
        <ul class="nav-items">
          <li class="nav-item">
            <a class="nav-link nav-link-logo" href="#"></a>
          </li>
          {menuItems.map((x,i)=>
                <NavItem key={i} name={x.name} content={x.content} addlClass={x.addlClass}></NavItem>
            )}
          <li class="nav-item"><a class="nav-link nav-link-search" href="#"></a></li>
          <li class="nav-item"><a class="nav-link nav-link-bag" href="#"></a></li>
        </ul>  
      </div>

    )
}

function NavItem({name, content, addlClass}) {
    return (
        <li className="nav-item"><a className={addlClass ? "nav-link " + addlClass : "nav-link"} id={name} href="#">{content}</a></li>
    )
}