(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[4],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(3);var s=n(6);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},20:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(1),i=n.n(s),o=n(16),c=n(0);var r=function(e){var t=e.formName,n=Object(s.useRef)(null),r=Object(s.useState)([{name:"email",id:t+"-email",value:"",error:"",focused:!1,validate:function(e){var t=new RegExp(/^([A-Z0-9._%+-]+)(@)([A-Z0-9.-]+)(\.)([A-Z]{2,})$/,"i");return e.search(t)>-1?"":"Please enter a valid email."}}]),l=Object(a.a)(r,2),d=l[0],h=l[1],m=t+"-email",j=Object(s.useCallback)((function(e,t){return d.filter((function(t){return t.id===e}))[0][t]}),[d]);return i.a.useEffect((function(){!0===j(m,"focused")&&n.current.focus()}),[j,m]),Object(c.jsxs)("form",{className:"signup-form",children:[Object(c.jsx)("h5",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(c.jsxs)("label",{className:"input_id",placeholder:"email",children:[Object(c.jsx)("input",{id:t+"-email",ref:n,style:j(t+"-email","error")&&j(t+"-email","value")?{outlineOffset:"-1px",outlineColor:"#dc3545"}:j(t+"-email","value")?{outlineOffset:"-1px",outlineColor:"#28a745"}:{outlineOffset:"-1px"},onChange:function(e){return function(e){var t=Object(o.a)(d),n=-1;t.forEach((function(t,a){return t.id===e.target.id?n=a:null}));var a=t[n].validate;t[n].error=a(e.target.value),t[n].value=e.target.value,h(t)}(e)},onFocus:function(e){return function(e){var t=Object(o.a)(d),n=-1;t.forEach((function(t,a){return t.id===e.target.id?n=a:null})),!1===t[n].focused&&(t[n].focused=!0,h(t))}(e)},onBlur:function(e){return function(e){var t=Object(o.a)(d),n=-1;t.forEach((function(t,a){return t.id===e.target.id?n=a:null})),""===t[n].value&&(t[n].focused=!1,h(t))}(e)},type:"email",className:"textfield signup-form-oneline",value:j(t+"-email","value")},t+"-email"),Object(c.jsx)("label",{htmlFor:t+"-email",style:{cursor:"text"},className:!0===j(t+"-email","focused")?"label-visible input-hastext":"label-visible",children:"Email address"})]}),Object(c.jsxs)("button",{className:"btn-large",style:{marginBottom:"10px"},type:"submit",children:[Object(c.jsx)("span",{className:"hero-form",children:"Get Started"}),Object(c.jsx)("span",{className:"chevron-span",children:Object(c.jsxs)("svg",{className:"chevron",viewBox:"0 0 6 12",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("desc",{children:"chevron"}),Object(c.jsx)("path",{d:"M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z",fill:"white",fillRule:"evenodd"})]})})]})]})};var l=function(){return Object(c.jsxs)("div",{className:"hero",id:"hero",children:[Object(c.jsx)("div",{className:"hero-image",id:"hero-image"}),Object(c.jsx)("div",{className:"hero-gradient"}),Object(c.jsxs)("div",{className:"hero-content-wrapper",id:"hero-content-wrapper",children:[Object(c.jsx)("div",{className:"hero-ribbon-area",children:Object(c.jsxs)("div",{className:"hero-ribbon",children:[Object(c.jsx)("div",{className:"hero-ribbon-brand",children:Object(c.jsx)("svg",{viewBox:"0 0 111 30",height:"100%",className:"netflix-logo",focusable:"false",children:Object(c.jsx)("g",{id:"netflix-logo",children:Object(c.jsx)("path",{d:"M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z",id:"Fill-14"})})})}),Object(c.jsx)("div",{className:"hero-ribbon-spacer"}),Object(c.jsxs)("div",{className:"hero-ribbon-options",children:[Object(c.jsx)("div",{className:"lang-selector hero-lang-select",children:Object(c.jsxs)("select",{className:"dropdown-select",id:"language-swapper",tabIndex:"0",defaultValue:"en",children:[Object(c.jsx)("option",{lang:"en",children:"English"}),Object(c.jsx)("option",{lang:"es",value:"es",children:"Espa\xf1ol"})]})}),Object(c.jsx)("div",{className:"btn-container",children:Object(c.jsx)("button",{className:"btn",children:"Sign In"})})]})]})}),Object(c.jsx)("div",{className:"hero-slogan-area",children:Object(c.jsxs)("div",{className:"hero-splash",style:{paddingBottom:0},children:[Object(c.jsxs)("h1",{children:["Unlimited movies, TV",Object(c.jsx)("br",{}),"shows, and more."]}),Object(c.jsx)("h3",{className:"subtitle",children:"Watch anywhere. Cancel anytime."}),Object(c.jsx)(r,{formName:"hero-signup"})]})})]})]})};var d=function(e){var t=e.title,n=e.subtitle,a=e.imageUrl,s=e.animationRowClass,i=e.videoUrl,o=e.animationCardClass,r=e.animationCardContent,l=e.isEven,d="row-block image "+s,h=o?"animation "+o:"animation";return Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:l?"row-content-container even-row":"row-content-container",children:[Object(c.jsxs)("div",{className:"row-block content",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("h3",{children:n})]}),Object(c.jsx)("div",{className:d,children:Object(c.jsxs)("div",{className:"animation-container",children:[Object(c.jsx)("img",{alt:"",style:{borderBottom:"2px solid rgba(0,0,0,0)",borderTop:"2px solid rgba(0,0,0,0)",height:"auto",maxWidth:"100%",position:"relative",zIndex:2},src:a}),Object(c.jsxs)("div",{className:h,children:[i?Object(c.jsx)("video",{className:"animation-video",autostart:"true",autoPlay:!0,playsInline:!0,muted:!0,loop:!0,children:Object(c.jsx)("source",{src:i,type:"video/mp4"})}):null,r]})]})})]})})};function h(e){var t=e.title,n=e.content;return Object(c.jsxs)("li",{className:"accordion-list-item",children:[Object(c.jsxs)("button",{className:"accordion-title",children:[t,Object(c.jsx)("svg",{id:"thin-x",viewBox:"0 0 26 26",height:"80%",className:"x-icon x-icon-closed",focusable:!0,children:Object(c.jsx)("path",{d:"M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"})})]}),Object(c.jsx)("div",{className:"accordian-content closed",children:n})]})}var m=function(){var e=[{title:"What is Netflix?",content:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet- connected devices."}),Object(c.jsx)("p",{children:"You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"})]})},{title:"How much does Netflix cost?",content:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet- connected devices."}),Object(c.jsx)("p",{children:"You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"})]})},{title:"Where can I watch?",content:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet- connected devices."}),Object(c.jsx)("p",{children:"You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"})]})},{title:"How do I cancel?",content:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet- connected devices."}),Object(c.jsx)("p",{children:"You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"})]})},{title:"What can I watch on Netflix?",content:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet- connected devices."}),Object(c.jsx)("p",{children:"You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"})]})},{title:"Is Netflix good for kids?",content:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet- connected devices."}),Object(c.jsx)("p",{children:"You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"})]})}];return Object(c.jsx)("div",{className:"faq-section",children:Object(c.jsxs)("div",{className:"faq",children:[Object(c.jsx)("div",{style:{width:"100%",padding:"0px",flexShrink:0},children:Object(c.jsx)("h1",{style:{textAlign:"center",marginBlockEnd:"8px"},children:"Frequently Asked Questions"})}),Object(c.jsx)("ul",{className:"accordion-list",children:e.map((function(e,t){return Object(c.jsx)(h,{id:t,title:e.title,content:e.content},t)}))}),Object(c.jsx)(r,{formName:"faq-signup"})]})})};var j=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("div",{style:{width:"100%",fontSize:"1rem",paddingBottom:"10px"},children:"Questions? Call 1-844-505-2993"}),Object(c.jsxs)("div",{className:"footer-col-grp",children:[Object(c.jsxs)("div",{className:"footer-column",children:[Object(c.jsx)("p",{className:"footer-link",children:"FAQ"}),Object(c.jsx)("p",{className:"footer-link",children:"Investor Relations"}),Object(c.jsx)("p",{className:"footer-link",children:"Ways to Watch"}),Object(c.jsx)("p",{className:"footer-link",children:"Corporate Information"}),Object(c.jsx)("p",{className:"footer-link",children:"Only on Netflix"})]}),Object(c.jsxs)("div",{className:"footer-column",children:[Object(c.jsx)("p",{className:"footer-link",children:"Help Center"}),Object(c.jsx)("p",{className:"footer-link",children:"Jobs"}),Object(c.jsx)("p",{className:"footer-link",children:"Terms of Use"}),Object(c.jsx)("p",{className:"footer-link",children:"Contact Us"})]})]}),Object(c.jsxs)("div",{className:"footer-col-grp",children:[Object(c.jsxs)("div",{className:"footer-column",children:[Object(c.jsx)("p",{className:"footer-link",children:"Account"}),Object(c.jsx)("p",{className:"footer-link",children:"Redeem Gift Cards"}),Object(c.jsx)("p",{className:"footer-link",children:"Privacy"}),Object(c.jsx)("p",{className:"footer-link",children:"Speed Test"})]}),Object(c.jsxs)("div",{className:"footer-column",children:[Object(c.jsx)("p",{className:"footer-link",children:"Media Center"}),Object(c.jsx)("p",{className:"footer-link",children:"Buy Gift Cards"}),Object(c.jsx)("p",{className:"footer-link",children:"Cookie Preferences"}),Object(c.jsx)("p",{className:"footer-link",children:"Legal Notices"})]})]}),Object(c.jsx)("div",{style:{width:"100%",flexGrow:0,marginTop:"20px"},children:Object(c.jsx)("div",{className:"lang-selector",style:{width:"130px",marginRight:"0px",paddingRight:"0px",borderColor:"rgb(48,48,48)",color:"rgb(117,117,117)"},children:Object(c.jsxs)("select",{className:"dropdown-select",defaultValue:"en",style:{margin:"8px",color:"rgb(117,117,117)",fontSize:"1rem"},id:"language-swapper-footer",tabIndex:"0",children:[Object(c.jsx)("option",{lang:"en",value:"en",children:"English"}),Object(c.jsx)("option",{lang:"es",value:"es",children:"Espa\xf1ol"})]})})})]})},b=n.p+"static/media/nf-tv.0049bc70.png",u=n.p+"static/media/nf-video-tv-0819.053994fc.m4v",x=n.p+"static/media/nf-mobile-0819.063578d5.jpeg",f=n.p+"static/media/nf-boxshot.347f4ee3.png",v=n.p+"static/media/nf-device-pile.8e6539e8.png",w=n.p+"static/media/nf-video-devices.b27bb59e.m4v",p=n.p+"static/media/nf-AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.7e9c0c2f.png";function O(){var e=[{title:"Enjoy on your TV.",subtitle:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",imageUrl:b,animationRowClass:"watchOnTv",videoUrl:u,animationCardClass:"",animationCardContent:""},{title:"Download your shows to watch offline.",subtitle:"Save your favorites easily and always have something to watch.",imageUrl:x,animationRowClass:"downloadAndWatch",videoUrl:"",animationCardClass:"downloading",animationCardContent:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:{marginRight:"1em"},children:Object(c.jsx)("img",{alt:"",style:{height:"4.5em"},src:f})}),Object(c.jsxs)("div",{className:"our-story-card-animation-text",children:[Object(c.jsx)("div",{style:{fontWeight:"bold"},children:"Stranger Things"}),Object(c.jsx)("div",{style:{color:"blue"},children:"Downloading..."})]})]})},{title:"Watch everywhere.",subtitle:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",imageUrl:v,animationRowClass:"watchOnDevice",videoUrl:w,animationCardClass:"",animationCardContent:""},{title:"Create profiles for kids.",subtitle:"Send kids on adventures with their favorite characters in a space made just for them--free with your membership.",imageUrl:p,animationRowClass:"watchOnTv",videoUrl:"",animationCardClass:"",animationCardContent:""}];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"hero-section",children:Object(c.jsx)(l,{})}),Object(c.jsx)("div",{className:"rows-section",children:e.map((function(e,t){return Object(c.jsx)(d,{id:t,title:e.title,subtitle:e.subtitle,imageUrl:e.imageUrl,animationRowClass:e.animationRowClass,videoUrl:e.videoUrl,animationCardClass:e.animationCardClass,animationCardContent:e.animationCardContent,isEven:(t+1)%2===0},t)}))}),Object(c.jsx)("div",{className:"faq-section",children:Object(c.jsx)(m,{})}),Object(c.jsx)("div",{className:"footer-section",children:Object(c.jsx)(j,{cols:"5"})})]})}function g(){return Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsxs)("p",{children:["netflixxxxxx ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})}t.default=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0];return t[1],Object(c.jsxs)("div",{className:"site",children:[!1===n?Object(c.jsx)(O,{}):null,!0===n?Object(c.jsx)(g,{}):null]})}}}]);
//# sourceMappingURL=4.7a05bbc8.chunk.js.map