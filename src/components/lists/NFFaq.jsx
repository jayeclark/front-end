import '../../styles/nf.css';
import SignupForm from '../forms/NFSignupForm.jsx';

export function FAQ() {

    const list = [{
                    title: "What is Netflix?",
                    content: <>
                                <p>
                                    Netflix is a streaming service that offers a wide 
                                    variety of award-winning TV shows, movies, anime, 
                                    documentaries, and more on thousands of internet-
                                    connected devices.
                                </p>
                                <p>
                                    You can watch as much as you want, whenever you want 
                                    without a single commercial – all for one low monthly 
                                    price. There's always something new to discover and 
                                    new TV shows and movies are added every week!
                                </p>
                             </>
                  },
                  {
                    title: "How much does Netflix cost?",
                    content: <>
                                <p>
                                    Netflix is a streaming service that offers a wide 
                                    variety of award-winning TV shows, movies, anime, 
                                    documentaries, and more on thousands of internet-
                                    connected devices.
                                </p>
                                <p>
                                    You can watch as much as you want, whenever you want 
                                    without a single commercial – all for one low monthly 
                                    price. There's always something new to discover and 
                                    new TV shows and movies are added every week!
                                </p>
                             </>
                  },
                  {
                    title: "Where can I watch?",
                    content: <>
                                <p>
                                    Netflix is a streaming service that offers a wide 
                                    variety of award-winning TV shows, movies, anime, 
                                    documentaries, and more on thousands of internet-
                                    connected devices.
                                </p>
                                <p>
                                    You can watch as much as you want, whenever you want 
                                    without a single commercial – all for one low monthly 
                                    price. There's always something new to discover and 
                                    new TV shows and movies are added every week!
                                </p>
                             </>
                  },
                  {
                    title: "How do I cancel?",
                    content: <>
                                <p>
                                    Netflix is a streaming service that offers a wide 
                                    variety of award-winning TV shows, movies, anime, 
                                    documentaries, and more on thousands of internet-
                                    connected devices.
                                </p>
                                <p>
                                    You can watch as much as you want, whenever you want 
                                    without a single commercial – all for one low monthly 
                                    price. There's always something new to discover and 
                                    new TV shows and movies are added every week!
                                </p>
                             </>
                  },
                  {
                    title: "What can I watch on Netflix?",
                    content: <>
                                <p>
                                    Netflix is a streaming service that offers a wide 
                                    variety of award-winning TV shows, movies, anime, 
                                    documentaries, and more on thousands of internet-
                                    connected devices.
                                </p>
                                <p>
                                    You can watch as much as you want, whenever you want 
                                    without a single commercial – all for one low monthly 
                                    price. There's always something new to discover and 
                                    new TV shows and movies are added every week!
                                </p>
                             </>
                  },
                  {
                    title: "Is Netflix good for kids?",
                    content: <>
                                <p>
                                    Netflix is a streaming service that offers a wide 
                                    variety of award-winning TV shows, movies, anime, 
                                    documentaries, and more on thousands of internet-
                                    connected devices.
                                </p>
                                <p>
                                    You can watch as much as you want, whenever you want 
                                    without a single commercial – all for one low monthly 
                                    price. There's always something new to discover and 
                                    new TV shows and movies are added every week!
                                </p>
                             </>
                  },
                ]

    return (
        <div className="faq-section">
            <div className="faq">
                <div style={{width:"100%",padding:"0px",flexShrink:0}}><h1 style={{textAlign:"center",marginBlockEnd:"8px"}}>Frequently Asked Questions</h1></div>
                <ul className="accordion-list">
                {list.map((x,i) => <FAQItem id={i} key={i} title={x.title} content={x.content}></FAQItem>)}
                </ul>
                <SignupForm formName="faq-signup"></SignupForm>
            </div>
        </div>
    )
}

function FAQItem({title,content}) {

    return (

        <li className="accordion-list-item">
        <button className="accordion-title">
          {title}
          <svg id="thin-x" viewBox="0 0 26 26" height="80%" className="x-icon x-icon-closed" focusable={true}><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
        </button>
        <div className="accordian-content closed">
          {content}
        </div>
      </li>

    )
}

export default FAQ;