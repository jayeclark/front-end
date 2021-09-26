import Cta from '../ctas/APCta.js';

export function Hero({id, title, logoImgs, lockupImgs, svgArray, classArray, ctaType}) {
  
  const {logoSm, logoSm2x, logoM, logoM2x, logoL, logoL2x} = logoImgs;
  const {heroSm, heroSm2x, heroM, heroM2x, heroL, heroL2x} = lockupImgs;
  
     return (
        <section className="hero-section">
          <div className="sticky-wrapper">
            <div className="sticky-content">
              <div className={classArray ? "section-content " + classArray.section : "section-content"}>
                <div className="copy-container">
                  <div className="headline-wrapper">
                    <div className="headline-logo">
                      {svgArray.map((svg,i)=>
                        <SVG key={i} classArray={classArray} d={svg.d} name={svg.name} fill={svg.fill} fillRule={svg.fillRule}></SVG>
                      )}
                    </div>
                  </div>
                  <div className="link-wrapper">
                    <h2 className="not-visible">{title}</h2>
                    <div className="headline">
                      <picture id="overview-iphone-13-pro-logo-1" data-lazy="" data-picture-loaded="">
                        <source srcSet={logoSm + ", " + logoSm2x + " 2x"} media="(max-width:734px)" />
                        <source srcSet={logoM + ", " + logoM2x + " 2x"} media="(max-width:1068px)" />
                        <source srcSet={logoL + ", " + logoL2x + " 2x"} media="(min-width:0px)" />
                        <img src={logoL} alt="" />
                      </picture>
                    </div>
                    <Cta typeOfCta={ctaType} topic={title.toLowerCase()} className={classArray.general}></Cta>
                  </div>  
                </div>
                <div className="lockup-container">
                  <picture id="overview-iphone-13-pro-hero-1" data-lazy="" data-picture-loaded="">
                    <source srcSet={heroSm + ", " + heroSm2x + " 2x"} media="(max-width:734px)" />
                    <source srcSet={heroM + ", " + heroM2x + " 2x"} media="(max-width:1068px)" />
                    <source srcSet={heroL + ", " + heroL2x + " 2x"} media="(min-width:0px)" />
                    <img src={heroL} alt="" />
                  </picture>
                </div>
              </div>
              <div className="sticky-padding"></div>
            </div>
          </div>
        </section>
  
        )  

}

function SVG({d, classArray, name, fill, fillRule}) {
  return (
    <svg className={classArray.general + " " + name} xmlns="http://www.w3.org/2000/svg"><path fillRule={fillRule} fill={fill} d={d}></path></svg>             
  )
}

export default Hero;