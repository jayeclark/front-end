import '../../styles/nf.css';

export function Row({title,subtitle,imageUrl,animationRowClass,videoUrl,animationCardClass,animationCardContent,isEven}) {

    const rowClasses = "row-block image " + animationRowClass;
    const cardClasses = animationCardClass ? "animation " + animationCardClass : "animation";
  
    return (
  
      <div className="row">
        <div className={isEven ? "row-content-container even-row" : "row-content-container"}>
          <div className="row-block content">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </div>
          <div className={rowClasses}>
            <div className="animation-container">
              <img alt="" style={{borderBottom:"2px solid rgba(0,0,0,0)", borderTop: "2px solid rgba(0,0,0,0)", height:"auto", maxWidth:"100%",position:"relative",zIndex:2}} src={imageUrl} />
              <div className={cardClasses}>
                {videoUrl ? <video className="animation-video" autostart={true} autoPlay={true} playsInline={true} muted={true} loop={true}><source src={videoUrl} type="video/mp4" /></video> : null}
                {animationCardContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
  }

  export default Row;