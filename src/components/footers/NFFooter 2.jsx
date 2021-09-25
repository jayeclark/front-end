import '../../styles/nf.css';

export function Footer() {
    return (
        <div className="footer">
        <div style={{width:"100%", fontSize:"1rem", paddingBottom:"10px"}}>Questions? Call 1-844-505-2993</div>
        <div className="footer-col-grp">
          <div className="footer-column">
            <p className="footer-link">FAQ</p>
            <p className="footer-link">Investor Relations</p>
            <p className="footer-link">Ways to Watch</p>
            <p className="footer-link">Corporate Information</p>
            <p className="footer-link">Only on Netflix</p>
          </div>
          <div className="footer-column">
            <p className="footer-link">Help Center</p>
            <p className="footer-link">Jobs</p>
            <p className="footer-link">Terms of Use</p>
            <p className="footer-link">Contact Us</p>
          </div>
        </div>
        <div className="footer-col-grp">
          <div className="footer-column">
            <p className="footer-link">Account</p>
            <p className="footer-link">Redeem Gift Cards</p>
            <p className="footer-link">Privacy</p>
            <p className="footer-link">Speed Test</p>
          </div>
          <div className="footer-column">
            <p className="footer-link">Media Center</p>
            <p className="footer-link">Buy Gift Cards</p>
            <p className="footer-link">Cookie Preferences</p>
            <p className="footer-link">Legal Notices</p>
          </div>
        </div>
        <div style={{width:"100%",flexGrow:0,marginTop:"20px"}}>
          <div className="lang-selector" style={{width:"130px",marginRight:"0px",paddingRight:"0px",borderColor: "rgb(48,48,48)",color:"rgb(117,117,117)"}}>
            
            <select className="dropdown-select" style={{margin:"8px",color: "rgb(117,117,117)",fontSize:"1rem"}} id="language-swapper-footer" tabindex="0" >
              <option selected="" lang="en" value="en">English</option>
              <option lang="es" value="es">Español</option>
            </select>

          </div>

        </div>

      </div>
    )
}

export default Footer;