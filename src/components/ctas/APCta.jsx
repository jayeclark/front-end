
export function Cta({type, topic, className}) {
   return (
    <ul className={type}>
      <li className="cta-item">
        <a className={className} href="#" aria-label={"learn more about " + topic}><span class="cta-item-copy">Learn more</span><span class="chevronright"></span></a>
      </li>
      <li class="cta-item">
        <a className={className} href="#" aria-label={"buy " + topic}><span class="cta-item-copy">Buy</span><span class="chevronright"></span></a>
      </li>
    </ul>
    )
}

export default Cta;