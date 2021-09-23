import '../../styles/nf.css';
import Hero from '../headers/NFHero.jsx';
import Row from '../rows/NFRow.jsx';
import FAQ from '../lists/NFFaq.jsx';
import Footer from '../footers/NFFooter.jsx';
import nfTv from '../../assets/nf-tv.png';
import nfVideoTv0819 from '../../assets/videos/nf-video-tv-0819.m4v';
import nfMobile0819 from '../../assets/nf-mobile-0819.jpeg';
import nfBoxShot from '../../assets/nf-boxshot.png';
import nfDevicePile from '../../assets/nf-device-pile.png';
import nfVideoDevices from '../../assets/videos/nf-video-devices.m4v';
import kidPhoto from '../../assets/nf-AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png';

export function Landing() {

  const rows = [{ title: "Enjoy on your TV.",
                  subtitle: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
                  imageUrl: nfTv,
                  animationRowClass: "watchOnTv",
                  videoUrl: nfVideoTv0819,
                  animationCardClass: "",
                  animationCardContent: "",
                },
                { title: "Download your shows to watch offline.",
                  subtitle: "Save your favorites easily and always have something to watch.",
                  imageUrl: nfMobile0819,
                  animationRowClass: "downloadAndWatch",
                  videoUrl: "",
                  animationCardClass: "downloading",
                  animationCardContent: (
                    <>
                      <div style={{marginRight:"1em"}}>
                        <img alt="" style={{height:"4.5em"}} src={nfBoxShot}/>
                      </div>
                      <div className="our-story-card-animation-text">
                        <div style={{fontWeight:"bold"}}>Stranger Things</div>
                        <div style={{color:"blue"}}>Downloading...</div> 
                      </div>
                    </>
                  ),
                },
                { title: "Watch everywhere.",
                  subtitle: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
                  imageUrl: nfDevicePile,
                  animationRowClass: "watchOnDevice",
                  videoUrl: nfVideoDevices,
                  animationCardClass: "",
                  animationCardContent: "",
                },
                { title: "Create profiles for kids.",
                  subtitle: "Send kids on adventures with their favorite characters in a space made just for them--free with your membership.",
                  imageUrl: kidPhoto,
                  animationRowClass: "watchOnTv",
                  videoUrl: "",
                  animationCardClass: "",
                  animationCardContent: "",
                },
              ];

  console.log(rows);

  return (
    <>
    <div className="hero-section">
      <Hero></Hero>
    </div>
    <div className="rows-section">
      {rows.map((row,i) => <Row 
                  id = {i}
                  key = {i}
                  title = {row.title}
                  subtitle = {row.subtitle}
                  imageUrl = {row.imageUrl}
                  animationRowClass = {row.animationRowClass}
                  videoUrl = {row.videoUrl}
                  animationCardClass = {row.animationCardClass}
                  animationCardContent = {row.animationCardContent}
                  isEven = {i % 2 === 0 ? true : false}
                ></Row>
      )}
    </div>
    <div className="faq-section">
        <FAQ></FAQ>
    </div>
    <div className="footer-section">
        <Footer></Footer>
    </div>
    </>
  );
}

export default Landing;