import Nav from '../nav/APGlobalNav.js';
import Hero from '../headers/APHero.js';
import Footer from '../footers/APFooter.js';
import Ap_iPhone13ProLogoSmall from '../../assets/ap-iphone_13_pro_logo__dx3ikh4nlf0i_small.png';
import Ap_iPhone13ProLogoSmall_2x from '../../assets/ap-iphone_13_pro_logo__dx3ikh4nlf0i_small_2x.png';
import Ap_iPhone13ProLogoMedium from '../../assets/ap-iphone_13_pro_logo__dx3ikh4nlf0i_medium.png';
import Ap_iPhone13ProLogoMedium_2x from '../../assets/ap-iphone_13_pro_logo__dx3ikh4nlf0i_medium_2x.png';
import Ap_iPhone13ProLogoLarge from '../../assets/ap-iphone_13_pro_logo__dx3ikh4nlf0i_large.png';
import Ap_iPhone13ProLogoLarge_2x from '../../assets/ap-iphone_13_pro_logo__dx3ikh4nlf0i_large_2x.png';
import Ap_iPhone13ProHeroSmall from '../../assets/ap-iphone_13_pro_hero__b833cu78x5f6_small.jpeg';
import Ap_iPhone13ProHeroSmall_2x from '../../assets/ap-iphone_13_pro_hero__b833cu78x5f6_small_2x.jpeg';
import Ap_iPhone13ProHeroMedium from '../../assets/ap-iphone_13_pro_hero__b833cu78x5f6_medium.jpeg';
import Ap_iPhone13ProHeroMedium_2x from '../../assets/ap-iphone_13_pro_hero__b833cu78x5f6_medium_2x.jpeg';
import Ap_iPhone13ProHeroLarge from '../../assets/ap-iphone_13_pro_hero__b833cu78x5f6_large.jpeg';
import Ap_iPhone13ProHeroLarge_2x from '../../assets/ap-iphone_13_pro_hero__b833cu78x5f6_large_2x.jpeg';
import Ap_iPhone13LogoSmall from '../../assets/ap-iphone_13_logo__b6g92pxv4zrm_small.png';
import Ap_iPhone13LogoSmall_2x from '../../assets/ap-iphone_13_logo__b6g92pxv4zrm_small_2x.png';
import Ap_iPhone13LogoMedium from '../../assets/ap-iphone_13_logo__b6g92pxv4zrm_medium.png';
import Ap_iPhone13LogoMedium_2x from '../../assets/ap-iphone_13_logo__b6g92pxv4zrm_medium_2x.png';
import Ap_iPhone13LogoLarge from '../../assets/ap-iphone_13_logo__b6g92pxv4zrm_large.png';
import Ap_iPhone13LogoLarge_2x from '../../assets/ap-iphone_13_logo__b6g92pxv4zrm_large_2x.png';
import Ap_iPhone13HeroSmall from '../../assets/ap-iphone_13_hero__fy4bx6w0wfma_small.jpeg';
import Ap_iPhone13HeroSmall_2x from '../../assets/ap-iphone_13_hero__fy4bx6w0wfma_small_2x.jpeg';
import Ap_iPhone13HeroMedium from '../../assets/ap-iphone_13_hero__fy4bx6w0wfma_medium.jpeg';
import Ap_iPhone13HeroMedium_2x from '../../assets/ap-iphone_13_hero__fy4bx6w0wfma_medium_2x.jpeg';
import Ap_iPhone13HeroLarge from '../../assets/ap-iphone_13_hero__fy4bx6w0wfma_large.jpeg';
import Ap_iPhone13HeroLarge_2x from '../../assets/ap-iphone_13_hero__fy4bx6w0wfma_large_2x.jpeg';

//import {Ap_iPhone13ProLogoSmall, Ap_iPhone13ProLogoSmall_2x,
//        Ap_iPhone13ProLogoMedium, Ap_iPhone13ProLogoMedium_2x,
//        Ap_iPhone13ProLogoLarge, Ap_iPhone13ProLogoLarge_2x,
//        Ap_iPhone13ProHeroSmall, Ap_iPhone13ProHeroSmall_2x,
//        Ap_iPhone13ProHeroMedium, Ap_iPhone13ProHeroMedium_2x,
//        Ap_iPhone13ProHeroLarge, Ap_iPhone13ProHeroLarge_2x,
//        Ap_iPhone13LogoSmall, Ap_iPhone13LogoSmall_2x,
//        Ap_iPhone13LogoMedium, Ap_iPhone13LogoMedium_2x,
//        Ap_iPhone13LogoLarge, Ap_iPhone13LogoLarge_2x,
//        Ap_iPhone13HeroSmall, Ap_iPhone13HeroSmall_2x,
//        Ap_iPhone13HeroMedium, Ap_iPhone13HeroMedium_2x,
//        Ap_iPhone13HeroLarge, Ap_iPhone13HeroLarge_2x} from '../../assets/assetindex.js';


export function Landing() {

  const heroes = [
                { title: "iPhone 13 Pro",
                  logoImgs: {
                        logoSm: Ap_iPhone13ProLogoSmall, logoSM2x: Ap_iPhone13ProLogoSmall_2x,
                        logoM: Ap_iPhone13ProLogoMedium, logoM2x: Ap_iPhone13ProLogoMedium_2x,
                        logoL: Ap_iPhone13ProLogoLarge, logoL2x: Ap_iPhone13ProLogoLarge_2x
                            },
                  lockupImgs: {
                        heroSm: Ap_iPhone13ProHeroSmall, heroSm2x: Ap_iPhone13ProHeroSmall_2x,
                        heroM: Ap_iPhone13ProHeroMedium, heroM2x: Ap_iPhone13ProHeroMedium_2x,
                        heroL: Ap_iPhone13ProHeroLarge, heroL2x: Ap_iPhone13ProHeroLarge_2x,
                              },
                  svgArray: [{
                          name: 'large', fill: '#231F20', fillRule: 'evenodd',
                          d: "M712.735 235.226c-47.17 0-78.2-32.586-78.2-85.947 0-53.203 31.188-85.789 78.2-85.789s78.2 32.586 78.2 85.789c0 53.361-31.031 85.947-78.2 85.947zm0-143.714c-26.487 0-43.725 21.092-43.725 57.767 0 36.836 17.238 57.928 43.725 57.928 26.638 0 43.721-21.092 43.721-57.928 0-36.675-17.238-57.767-43.721-57.767zm-99.997 3.302c-21.781 0-35.255 14.641-35.255 38.093v99.17h-33.854V66.481h32.284v28.178h.783c5.485-19.36 20.216-30.851 39.648-30.851 4.86 0 9.091.786 11.595 1.259v31.638c-2.662-1.104-8.617-1.891-15.201-1.891zm-171.305 59.661h-48.584v77.603h-35.104V4.935h84.784c43.879 0 74.436 30.378 74.436 74.611 0 44.389-31.182 74.929-75.532 74.929zm-8.15-119.79h-40.434v90.195h40.276c30.56 0 47.953-16.525 47.953-45.175 0-28.647-17.393-45.02-47.795-45.02zM280.6 169.114c0 39.982-34.788 67.212-81.958 67.212-48.426 0-80.865-26.916-83.057-65.953h33.693c1.721 22.192 20.999 36.519 49.364 36.519 27.579 0 46.074-15.741 46.229-37.778.154-25.974-18.492-40.453-48.739-40.453H168.71V101.27h26.484c25.855 0 43.409-15.268 43.409-36.519 0-21.25-13.635-35.101-40.277-35.101-25.072 0-43.25 13.381-44.975 36.046h-32.909C123.262 26.031 154.135.685 198.326.685c46.074 0 74.44 25.346 74.44 59.188 0 28.492-19.903 47.538-47.64 53.361v.787c33.222 2.988 55.474 23.296 55.474 55.093zM46.827 38.996h-.439L.234 71.933V37.245L46.518 5.079h34.265v226.997H46.827V38.996z"
                        },
                        {
                          name: 'medium', fill: '#231F20', fillRule: 'evenodd',
                          d: "M516.373 170.207c-34.152 0-56.619-23.578-56.619-62.189 0-38.497 22.581-62.075 56.619-62.075s56.62 23.578 56.62 62.075c0 38.611-22.467 62.189-56.62 62.189zm0-103.988c-19.177 0-31.658 15.262-31.658 41.799 0 26.654 12.481 41.915 31.658 41.915 19.287 0 31.656-15.261 31.656-41.915 0-26.537-12.481-41.799-31.656-41.799zm-72.401 2.389c-15.77 0-25.526 10.594-25.526 27.563v71.758h-24.511V48.107h23.375v20.389h.567c3.971-14.009 14.637-22.324 28.706-22.324 3.519 0 6.583.57 8.396.911v22.893c-1.928-.799-6.24-1.368-11.007-1.368zm-124.03 43.17h-35.177v56.151h-25.416V3.573h61.386c31.77 0 53.894 21.982 53.894 53.988 0 32.118-22.576 54.217-54.687 54.217zM314.041 25.1h-29.276v65.263h29.162c22.126 0 34.719-11.957 34.719-32.688 0-20.728-12.593-32.575-34.605-32.575zm-110.547 97.27c0 28.93-25.188 48.633-59.34 48.633-35.063 0-58.549-19.475-60.136-47.722h24.394c1.246 16.058 15.204 26.424 35.742 26.424 19.968 0 33.358-11.39 33.471-27.335.112-18.794-13.389-29.271-35.289-29.271h-19.854V73.28h19.175c18.72 0 31.429-11.048 31.429-26.425 0-15.376-9.872-25.399-29.161-25.399-18.153 0-31.315 9.683-32.563 26.083H87.534C89.576 18.838 111.929.499 143.925.499c33.359 0 53.896 18.339 53.896 42.826 0 20.616-14.41 34.398-34.492 38.611v.57c24.053 2.162 40.165 16.856 40.165 39.864zM34.235 28.219h-.318L.499 52.052v-25.1L34.011 3.677H58.82v164.251H34.235V28.219z"
                        },
                        { 
                          name: 'small', fill: '#231F20', fillRule: 'evenodd',
                          d: "M252.746 83.927c-16.727 0-27.731-11.564-27.731-30.5 0-18.88 11.06-30.444 27.731-30.444s27.731 11.564 27.731 30.444c0 18.936-11.004 30.5-27.731 30.5zm0-51c-9.393 0-15.506 7.485-15.506 20.5 0 13.072 6.113 20.557 15.506 20.557 9.446 0 15.504-7.485 15.504-20.557 0-13.015-6.113-20.5-15.504-20.5zm-47.963 14.69V82.81h-12.005V24.044h11.448v10h.278c1.945-6.871 7.169-10.948 14.06-10.948 1.723 0 3.224.279 4.112.446V34.77c-.944-.392-3.056-.671-5.391-.671-7.724 0-12.502 5.195-12.502 13.518zm-48.246 7.654h-17.228V82.81H126.86V2.203h30.066c15.56 0 26.396 10.781 26.396 26.478 0 15.752-11.057 26.59-26.785 26.59zm-2.89-42.51h-14.338v32.007h14.282c10.837 0 17.005-5.864 17.005-16.031 0-10.166-6.168-15.976-16.949-15.976zM99.503 60.466c0 14.188-12.336 23.851-29.063 23.851-17.173 0-28.677-9.551-29.454-23.405h11.948c.611 7.876 7.447 12.96 17.506 12.96 9.78 0 16.338-5.586 16.393-13.406.055-9.218-6.557-14.356-17.284-14.356h-9.724v-9.72h9.392c9.168 0 15.393-5.418 15.393-12.96 0-7.541-4.835-12.456-14.282-12.456-8.891 0-15.338 4.749-15.949 12.792H42.708C43.708 9.69 54.656.695 70.328.695c16.338 0 26.397 8.995 26.397 21.004 0 10.111-7.058 16.87-16.894 18.937v.279c11.781 1.06 19.672 8.267 19.672 19.551zm-82.9-46.176h-.155L.08 25.979v-12.31L16.494 2.254h12.151v80.555H16.603V14.29z"
                        }],                
                  ctaType: "cta-list",
                  classArray: {
                    section: "iphone-13-pro-section", 
                    general: "iphone-13-pro", 
                    logo: "overview-iphone-13-pro-logo",
                    hero: "overview-iphone-13-pro-hero"}
                },
                { title: "iPhone 13",
                  logoImgs: {
                      logoSm: Ap_iPhone13LogoSmall, logoSm2x: Ap_iPhone13LogoSmall_2x,
                      logoM: Ap_iPhone13LogoMedium, logoM2x: Ap_iPhone13LogoMedium_2x,
                      logoL: Ap_iPhone13LogoLarge, logoL2x: Ap_iPhone13LogoLarge_2x,},
                  lockupImgs: {
                    heroSm: Ap_iPhone13HeroSmall, heroSm2x: Ap_iPhone13HeroSmall_2x,
                    heroM: Ap_iPhone13HeroMedium, heroM2x: Ap_iPhone13HeroMedium_2x,
                    heroL: Ap_iPhone13HeroLarge, heroL2x: Ap_iPhone13HeroLarge_2x},
                  svgArray: [
                    {
                      name: 'large', fill: '#FFF', fillRule: 'evenodd',
                      d: 'M225.766 112.736v.785c33.349 2.98 55.686 23.239 55.686 54.956 0 39.884-34.921 67.046-82.271 67.046-48.611 0-81.174-26.849-83.374-65.79h33.821c1.728 22.138 21.079 36.429 49.553 36.429 27.685 0 46.25-15.702 46.406-37.685.155-25.909-18.563-40.352-48.926-40.352h-27.526v-27.323h26.585c25.954 0 43.575-15.231 43.575-36.428 0-21.198-13.687-35.015-40.431-35.015-25.168 0-43.416 13.348-45.147 35.957h-33.032C123.516 25.749 154.504.467 198.864.467c46.25 0 74.724 25.282 74.724 59.04 0 28.421-19.979 47.421-47.822 53.229zM46.783 38.68h-.441L.012 71.536V36.934L46.473 4.847h34.396v226.438H46.783V38.68'
                    },
                    {
                      name: 'medium', fill: '#FFF', fillRule: 'evenodd',
                      d: "M164.43 82.183v.569c24.191 2.162 40.395 16.857 40.395 39.866 0 28.931-25.332 48.635-59.68 48.635-35.263 0-58.884-19.476-60.48-47.724h24.534c1.253 16.058 15.291 26.425 35.946 26.425 20.083 0 33.55-11.39 33.663-27.336.112-18.795-13.465-29.272-35.491-29.272h-19.968v-19.82h19.285c18.827 0 31.609-11.049 31.609-26.426 0-15.377-9.928-25.4-29.328-25.4-18.257 0-31.494 9.683-32.75 26.084H88.204C90.257 19.082 112.736.742 144.915.742c33.55 0 54.205 18.34 54.205 42.828 0 20.617-14.493 34.399-34.69 38.613zM34.595 28.462h-.32L.666 52.296V27.195L34.369 3.919h24.952v164.259H34.595V28.462z"
                    },
                    {
                      name: 'small', fill: '#FFF', fillRule: 'evenodd',
                      d: "M79.841 40.468v.278c11.783 1.055 19.676 8.226 19.676 19.454 0 14.118-12.339 23.733-29.069 23.733-17.176 0-28.681-9.504-29.459-23.289h11.95c.611 7.837 7.448 12.896 17.509 12.896 9.782 0 16.341-5.559 16.396-13.34.055-9.172-6.558-14.285-17.286-14.285h-9.726v-9.672h9.393c9.17 0 15.396-5.391 15.396-12.895s-4.836-12.395-14.285-12.395c-8.893 0-15.34 4.725-15.952 12.729H42.713C43.713 9.675 54.662.726 70.336.726c16.341 0 26.402 8.949 26.402 20.9 0 10.06-7.059 16.786-16.897 18.842zm-63.24-26.215h-.156L.075 25.884V13.635L16.491 2.277h12.154v80.156H16.601v-68.18z"
                    }

                  ],
                  ctaType: "cta-list",
                  classArray: {
                    section: "iphone-13-section", 
                    general: "iphone-13", 
                    logo: "overview-iphone-13-logo",
                    hero: "overview-iphone-13-hero"}
                },
              ];

  return (
    <>
    <nav>
      <Nav></Nav>
    </nav>
    <div className="main">
      {heroes.map((hero,i)=>
        <Hero key={i} id={"hero-"+i} title={hero.title} logoImgs={hero.logoImgs} lockupImgs={hero.lockupImgs} svgArray={hero.svgArray} ctaType={hero.ctaType} classArray={hero.classArray}></Hero>
      )}
    </div>
    <Footer cols="5"></Footer>
    </>
  );
}

export default Landing;