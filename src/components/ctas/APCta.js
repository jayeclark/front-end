
export function Cta({typeOfCta, topic, className}) {
   return (
    <ul id={className+"-cta"} className={typeOfCta}>
      <li className="cta-item">
        <a className={className} href={className+"-cta"} aria-label={"learn more about " + topic}><span className="cta-item-copy">Learn more</span><span className="chevronright"></span></a>
      </li>
      <li className="cta-item">
        <a className={className} href={className+"-cta"} aria-label={"buy " + topic}><span className="cta-item-copy">Buy</span><span className="chevronright"></span></a>
      </li>
    </ul>
    )
}

export default Cta;