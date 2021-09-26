import '../../styles/nf.css';

export function Footer(cols) {

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

    const colArray = sections.reduce((section,i)=> {
      let targetCol = section["col" + cols + "colLayout"];
      if (a[targetCol] !== null) {
        a[targetCol].push(section);
      } else {
        a[targetCol] = [];
        a[targetCol].push(section);
      }
    }, Array(cols))

    return (
      <div class="footer">
        <div class="footer-nav">
          {colArray.map((col,i)=>
            <FooterCol sections={col} key={i} col={i+1}></FooterCol>
          )}
        </div>
        <section style="padding:34px 0px 21px 0px">
            <div class="footer-shop">
              <div style="color: rgb(110, 110, 115);padding:0px;margin:0px;">More ways to shop: <a>Find an Apple Store</a> or <a>other retailer</a> near you. Or call 1-800-MY-APPLE.</div>
            </div>
            <div class="footer-legal">
              <div class="footer-legal-left">Copyright © 2021 FakeApple Inc. All rights reserved.</div>
              <div class="footer-legal-center">
                <a class="footer-nav-child">Privacy Policy</a><span style="display:inline-block;padding: 0px 5px;border-right:1px solid rgb(110,110,115)">&nbsp;</span><span style="display:inline-block;padding: 0px 5px">&nbsp;</span>
                <a class="footer-nav-child">Terms of Use</a><span style="display:inline-block;padding: 0px 5px;border-right:1px solid rgb(110,110,115)">&nbsp;</span><span style="display:inline-block;padding: 0px 5px">&nbsp;</span>
                <a class="footer-nav-child">Sales and Refunds</a><span style="display:inline-block;padding: 0px 5px;border-right:1px solid rgb(110,110,115)">&nbsp;</span><span style="display:inline-block;padding: 0px 5px">&nbsp;</span>
                <a class="footer-nav-child">Legal</a><span style="display:inline-block;padding: 0px 5px;border-right:1px solid rgb(110,110,115)">&nbsp;</span><span style="display:inline-block;padding: 0px 5px">&nbsp;</span>
                <a class="footer-nav-child">Site Map</a></div>
              <div class="footer-legal-right"><a class="footer-nav-child">United States</a></div>
            </div>  
          </section>
      </div>
    )
}

function FooterCol({sections,col}) {
  return (
    <div id={"footer-col-"+col} class="footer-nav-group">
      {sections.map((section)=>{
        <button id={section.hyphenated} class="footer-nav-title">{section.title}</button>
        {section.children.map((child)=>
          <div class={"footer-nav-child " + section.hyphenated}><a class="footer-nav-child">{child}</a></div>
          )}
      })}
    </div>
  )
}

export default Footer;