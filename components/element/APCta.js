
import styles from "../../styles/Apple.module.css";

export function Cta({typeOfCta, topic, className}) {
   return (
    <ul id={className+"-cta"} className={styles[typeOfCta]}>
      <li className={styles.ctaItem}>
        <a className={className} href={className+"-cta"} aria-label={"learn more about " + topic}><span className={styles.ctaItemCopy}>Learn more</span><span className={styles.chevronright}></span></a>
      </li>
      <li className={styles.ctaItem}>
        <a className={className} href={className+"-cta"} aria-label={"buy " + topic}><span className={styles.ctaItemCopy}>Buy</span><span className={styles.chevronright}></span></a>
      </li>
    </ul>
    )
}

export default Cta;