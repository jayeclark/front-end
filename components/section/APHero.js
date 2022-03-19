import Cta from '../element/APCta';
import styles from '../../styles/Apple.module.css';
import Image from 'next/image';

export function Hero({id, title, logoImgs, lockupImgs, svgArray, classArray, ctaType}) {
  
  const {logoSm, logoSm2x, logoM, logoM2x, logoL, logoL2x} = logoImgs;
  const {heroSm, heroSm2x, heroM, heroM2x, heroL, heroL2x} = lockupImgs;

  console.log(svgArray);

     return (
        <section id={id} className="d-block">
          <div className="d-block">
            <div className="d-block position-sticky">
              <div className={classArray ? styles.sectionContent + " " + styles[classArray.section] : styles.sectionContent}>
                <div className={styles.copyContainer}>
                  <div className={`m-0 p-0 ${styles.headlineWrapper}`}>
                    <div className={styles.headlineLogo}>
                      {svgArray.map((svg,i)=>
                        <SVG key={i} d={svg.d} name={svg.name} fill={svg.fill} fillRule={svg.fillRule}></SVG>
                      )}
                    </div>
                  </div>
                  <div className={styles.linkContainer}>
                    <h2 className={styles.notVisible}>{title}</h2>
                    <div className={styles.headline} >
                      <Image src={logoL} alt="iphone 13 pro logo" />
                    </div>
                    <Cta typeOfCta={ctaType} topic={title.toLowerCase()} className={styles[classArray.general]}></Cta>
                  </div>  
                </div>
                <div className={styles.lockupContainer}>
                  <Image src={heroL} alt="iphone 13 pro logo" />
                </div>
              </div>
              <div className="sticky-padding"></div>
            </div>
          </div>
        </section>
  
        )  

}

function SVG({d, name, fill, fillRule}) {
  console.log(name);
  return (
    <svg className={styles[name]} xmlns="http://www.w3.org/2000/svg"><path fillRule={fillRule} fill={fill} d={d}></path></svg>             
  )
}

export default Hero;