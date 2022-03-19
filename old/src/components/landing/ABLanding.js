import ABNav from '../nav/ABGlobalNav.js';
import Hero from '../headers/ABHero.js';
import Row from '../rows/ABRow.js';
import Footer from '../footers/ABFooter.js';
import abCarolina from "../../assets/ab-carolina.png";
import abRincon from "../../assets/ab-rincon.jpeg";
import abLuquillo from "../../assets/ab-luquillo.jpeg";
import abFlamenco from "../../assets/ab-flamenco.png";
import abIsabela from "../../assets/ab-isabela.jpeg";
import abBoqueron from "../../assets/ab-boqueron.png";
import abCatano from "../../assets/ab-catano.png";
import abBorinquen from '../../assets/ab-borinquen.png'; 
import abOutdoor from '../../assets/ab-outdoor.jpeg';
import abUnique from '../../assets/ab-unique.jpeg';
import abEntire from '../../assets/ab-entire.jpeg';
import abPets from '../../assets/ab-pets.jpeg';
import abHosting from '../../assets/ab-hosting.jpeg';
import abExperiences from '../../assets/ab-experiences.jpeg';
import abOnline from '../../assets/ab-online.jpeg';
import abWanderlust from '../../assets/ab-wanderlust.jpeg';

export function Landing() {

  const rows= [{title: 'Explore nearby',
                colClass: 'col-4',
                cardClass: 'nowrap',
                cardImageClass: 'shrink',
                cards: [{title: 'Carolina', subtitle: '15 minute drive', image: abCarolina, overlay: ''},
                        {title: 'Rincon', subtitle: '2.5 hour drive', image: abRincon, overlay: ''},
                        {title: 'Luquillo', subtitle: '45 minute drive', image: abLuquillo, overlay: ''},
                        {title: 'Flamenco, Culebra, Puerto Rico', subtitle: '', image: abFlamenco, overlay: ''},
                        {title: 'Isabela', subtitle: '2 hour drive', image: abIsabela, overlay: ''},
                        {title: 'Boquerón', subtitle: '3 hour drive', image: abBoqueron, overlay: ''},
                        {title: 'Cataño', subtitle: '30 minute drive', image: abCatano, overlay: ''},
                        {title: 'Borinquen', subtitle: '2.5 hour drive', image: abBorinquen, overlay: ''}
                       ]
                },
                {title: 'Live anywhere',
                colClass: 'col-4',
                cardClass: '',
                cardImageClass: '',
                cards: [{title: 'Outdoor getaways', subtitle: '', image: abOutdoor, overlay: ''},
                        {title: 'Unique stays', subtitle: '', image: abUnique, overlay: ''},
                        {title: 'Entire homes', subtitle: '', image: abEntire, overlay: ''},
                        {title: 'Pets allowed', subtitle: '', image: abPets, overlay: ''},                    
                      ]
                },
                {title: '',
                colClass: '',
                cardClass: '',
                cardImageClass: '',
                cards: [{title: '', 
                        subtitle: '', 
                        image: abHosting, 
                        overlay: {headline: 'Try hosting',
                                  description: 'Earn extra income and unlock new opportunities by sharing your space.',
                                  buttonText: 'Learn more'
                                  },
                        imageContainerStyle: {width:'100%',height:'400px'},
                        imageStyle: {width:'100%',position:'relative',top:'50%',transform:'translateY(-50%)'},
                        imageClass: 'card-image-img-wide'
                        }                 
                      ]
                },
                {title: 'Discover things to do',
                colClass: 'col-3',
                cardClass: '',
                cardImageClass: '',
                cards: [{title: 'Experiences', subtitle: 'Find unforgettable activities near you.', image: abExperiences, overlay: ''},
                        {title: 'Online Experiences', subtitle: 'Live, interactive activities led by Hosts.', image: abOnline, overlay: ''},
                        {title: 'Featured collection: Wanderlust', subtitle: 'Travel from home with Online Experiences.', image: abWanderlust, overlay: ''}                   
                      ]
                }
              ]

  return (
    <>
    <ABNav></ABNav>
    <div className="main-container">
      <div className="airbnb-content">
        <Hero></Hero>
        <section className="options-section">
          {rows.map((row,i)=>
            <Row key={i} title={row.title} cardClass={row.cardClass} colClass={row.colClass} cardImageClass={row.cardImageClass} cards={row.cards}></Row>
           )}
        </section>
        <Footer></Footer>
      </div>
    </div>
    </>
  );
}

export default Landing;