export function Footer({cols}) {

  const sections = [
                      {
                        title: 'Shop and Learn',
                        col5colLayout: 1,
                        hyphenated: 'shop-and-learn',
                        children: ['Mac', 'iPad', 'iPhone', 'Watch', 'TV','Music','AirPod','HomePod','iPod Touch','AirTag','Accessories','Gift Cards']
                      },
                      {
                        title: 'Services',
                        col5colLayout: 2,
                        hyphenated: 'services',
                        children: ['Apple Music', 'Apple TV', 'Apple Fitness', 'Apple News', 'Apple Arcade','iCloud','Apple One','Apple Card','Apple Books','Apple Podcasts','App Store']                       
                      },
                      {
                        title: 'Account',
                        col5colLayout: 2,
                        hyphenated: 'account',
                        children: ['Manage Your Apple Id', 'Apple Store Account', 'iCloud.com']                       
                      },
                      {
                        title: 'Apple Store',
                        col5colLayout: 3,
                        hyphenated: 'apple-store',
                        children: ['Find a Store', 'Shop Online', 'Genius Bar', 'Today at Apple', 'Apple Camp','Apple Store App','Refurbished and Clearance','Financing','Apple Trade In','Order Status','Shopping Map']                       
                      },
                      {
                        title: 'For Business',
                        col5colLayout: 4,
                        hyphenated: 'for-business',
                        children: ['Apple and Business', 'Shop for Business']                       
                      },
                      {
                        title: 'For Education',
                        col5colLayout: 4,
                        hyphenated: 'for-education',
                        children: ['Apple and Education', 'Shop for K-12', 'Shop for College']                       
                      },
                      {
                        title: 'For Healthcare',
                        col5colLayout: 4,
                        hyphenated: 'for-education',
                        children: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone']                       
                      },
                      {
                        title: 'For Government',
                        col5colLayout: 4,
                        hyphenated: 'for-government',
                        children: ['Shop for Government', 'Shop for Veterans and Military']                       
                      },
                      {
                        title: 'Apple Values',
                        col5colLayout: 5,
                        hyphenated: 'apple-values',
                        children: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy','Racial Equity and Justice','Supplier Responsibility']                       
                      },
                      {
                        title: 'About Apple',
                        col5colLayout: 5,
                        hyphenated: 'apple-values',
                        children: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics and Compliance','Events','Contact Apple']                       
                      }
                   ];

    const colArray = sections.reduce((a,b)=> {
      let targetCol = Number(b["col" + cols + "colLayout"]);
      if (a[targetCol-1] === undefined) {
        a[targetCol-1] = [ b ];
      }
      else if (a[targetCol-1].length > 0) {
        a[targetCol-1].push(b);
      } 
      return a;
    }, [...Array(Number(cols))])

    return (
      <div className="footer">
        <div className="footer-nav">
          {colArray.map((col,i)=>
            <FooterCol sections={col} key={i} col={i+1}></FooterCol>
          )}
        </div>
        <section className="footer-shop-legal-container">
            <div id="footer-shop" className="footer-shop">
              <div className="footer-shop-content">More ways to shop: <a href="#footer-shop">Find an Apple Store</a> or <a href="#footer-shop">other retailer</a> near you. Or call 1-800-MY-APPLE.</div>
            </div>
            <div id="footer-legal" className="footer-legal">
              <div className="footer-legal-left">Copyright © 2021 FakeApple Inc. All rights reserved.</div>
              <div className="footer-legal-center">
                <a className="footer-nav-child" href="#footer-legal">Privacy Policy</a><span className="pipeleft">&nbsp;</span><span className="piperight">&nbsp;</span>
                <a className="footer-nav-child" href="#footer-legal">Terms of Use</a><span className="pipeleft">&nbsp;</span><span className="piperight">&nbsp;</span>
                <a className="footer-nav-child" href="#footer-legal">Sales and Refunds</a><span className="pipeleft">&nbsp;</span><span className="piperight">&nbsp;</span>
                <a className="footer-nav-child" href="#footer-legal">Legal</a><span className="pipeleft">&nbsp;</span><span className="piperight">&nbsp;</span>
                <a className="footer-nav-child" href="#footer-legal">Site Map</a></div>
              <div className="footer-legal-right"><a className="footer-nav-child" href="#footer-legal">United States</a></div>
            </div>  
          </section>
      </div>
    )
}

function FooterCol({sections, col}) {
  return (
    <div id={"footer-col-"+col} className="footer-nav-group">
      {sections.map((section,j)=>{
        return (
          <FooterTitle key={j} id={section.hyphenated} title={section.title} items={section.children} col={col}></FooterTitle>
        )
      })}
    </div>
  )
}

function FooterTitle({id,title,items,col}) {
  return (
    <>
    <button id={id} className="footer-nav-title">{title}</button>
    {items.map((item,k)=>
      <div key={k} className={"footer-nav-child " + id}><a className="footer-nav-child" href={"footer-col-"+col}>{item}</a></div>
      )}
    </>
  )
}

export default Footer;