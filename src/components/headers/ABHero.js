import bgEW2560 from '../../assets/ab-background-extrawide-2560.jpg';
import bgEW960 from '../../assets/ab-background-extrawide-960.jpg';
import bgW1920 from '../../assets/ab-background-wide-1920.jpg';
import bgW720 from '../../assets/ab-background-wide-720.jpg';
import bgW1440 from '../../assets/ab-background-wide-1440.jpg';
import bgT320 from '../../assets/ab-background-tall-320.jpg';
import bgT720 from '../../assets/ab-background-tall-720.jpg';


export function Hero() {

     return (
        <section className="hero-section">
          <div id="ab-hero" className="hero-container">
            <div className="hero-content">
              <div className="background-container">
                <picture>
                  <source srcSet={bgEW2560 + " 1x, " + bgEW2560 + " 2x"} media="(min-width: 1440px)" />
                  <source srcSet={bgEW960 + " 1x, " + bgW1920 + " 2x"} media="(min-width: 950px)" />
                  <source srcSet={bgW720 + " 1x, " + bgW1440 + " 2x"} media="(min-width: 744px)" />
                  <source srcSet={bgT320 + " 1x, " + bgT720 + " 2x"} />
                  <img className="cellphone hero-img" aria-hidden="true" alt="" src={bgT720} />
                </picture>
              </div> 
              <div className="slogan-container">
                <div style={{display:'flex',alignItems:'center',height:'100%',width:'100%'}}>
                  <div style={{margin:'0px auto', padding: '186px 80px 40px 80px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div style={{color:'#333',width:'100%',fontSize:'18px',fontWeight:'500',padding:'16px', textAlign:'center'}}>
                      Not sure where to go? Perfect.
                    </div>
                    <div className="hero-cta-button">
                      <div className="hero-cta-button-text">
                        <span className="gradient-text" style={{display:'inline-block'}}>I'm flexible</span>
                      </div>
                  </div>
                </div>
              </div>  
              </div>
            </div>
          </div>
        </section>
      )  

}

export default Hero;