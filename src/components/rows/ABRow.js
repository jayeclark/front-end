export function Row({cards,title,colClass,cardClass}) {

    return (
  
      <div className="dynamic-row-container">
        <div className="dynamic-row-content-container">
          <div className="dynamic-row-content">
            {title ? <div className="dynamic-row-header"><h2>{title}</h2></div> : null }
            <div className={colClass ? "dynamic-row-cards " + colClass : "dynamic-row-cards"}>
              {cards.map((card,i) => 
                <Card   key={i} 
                        title={card.title} 
                        cardClass={cardClass} 
                        subtitle={card.subtitle} 
                        image={card.image} 
                        overlay={card.overlay} 
                        imageClass={card.imageClass ? card.imageClass : null} 
                        imageStyle={card.imageStyle ? card.imageStyle : null} 
                        imageContainerStyle={card.imageContainerStyle ? card.imageContainerStyle : null}></Card>
              )}
            </div>
          </div>
        </div>
      </div>

)
  
}

function Card({title, subtitle, overlay, image, cardClass, cardImageClass, imageClass, imageStyle, imageContainerStyle}) {

  return (
    <div className={cardClass ? "card-container " + cardClass : "card-container"}>
      <div className={cardImageClass ? "card-image-container " + cardImageClass : "card-image-container"} style={imageContainerStyle ? imageContainerStyle : {}}>
        <div className="card-image">
          <div style={{height:'100%', width:'100%', position:'relative', borderRadius:'16px', overflow:'hidden'}}>
            <img className={imageClass ? imageClass : "card-image-img"} style={imageStyle ? imageStyle : {}} alt={title} src={image} />
          </div>
        </div>
        {overlay !== '' ? <Overlay headline={overlay.headline} description={overlay.description} buttonText={overlay.buttonText}></Overlay> : null}
      </div>
      <div className="card-label">
        <div className="card-title">
          <span style={{overflowX:'hidden'}}>
            <span style={{overflowX:'hidden',textOverflow:'ellipsis!important'}}>{title}</span>
          </span>
        </div>
        <div className="card-subtitle">{subtitle}</div>
      </div>
    </div>                             
  )

}

function Overlay({headline, description, buttonText}) {

  return (
    <div className="card-image-overlay-container">
      <div className="card-image-overlay-left">
        <h1 style={{textAlign:'left'}}>{headline}</h1>
        <h3 style={{textAlign:'left'}}>{description}</h3>
        <div className="regular-cta-button"><div>{buttonText}</div></div>
      </div>
    </div>
  )
}

  export default Row;