import React, {useState, useRef} from 'react'
import './Articles.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import Article1Main from '../../assets/images/articles/article1_main.jpg'
import Article1End from '../../assets/images/articles/article1_end.jpg'
import { CSSTransition } from 'react-transition-group'

const Articles = () => {
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  const nodeRef = useRef(null)

  const toggleArticle = () => {
    window.scrollTo(0, 0);
    setIsArticleOpen(!isArticleOpen);
  };
  return (
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <Logo />
        <div className='property-header-wrapper'>
          <p className='property-header'>Articles</p>
        </div>
      </div>
      <div className='articles-container'>
        <div className='article-card'>
          <img className='card-img' src={Article1Main} alt='articleOne' />
          <div className='card-title'>10 Reasons Why you Really Need a Property Manager in Abu Dhabi</div>
          <div><i>Published on September 27, 2023</i></div>
        </div>
        <CSSTransition
          nodeRef={nodeRef}
          in={isArticleOpen}
          timeout={200}
          classNames='article'
          unmountOnExit
        >
         <div ref={nodeRef} className={`article-body ${isArticleOpen ? 'open' : ''}`}>
          <h3>10 Reasons Why You Really Need a Property Manager in Abu Dhabi</h3>
          <p>
            Owning property is like having a gold mine. It can bring in money without you lifting a finger, especially if you think long-term. But managing that property? 
            That's a full-time job, especially in Abu Dhabi. This is where a property manager can be your hero.
          </p>
          <p>Here's why:</p>
          <h3>1. Get Your Place Rented Faster:</h3>
          <p>
            Thinking anyone can rent out a property? Many owners simply hope for the best, but time is money. Every vacant week costs you 1.9% of potential return—that's almost 8% in a month! 
            A savvy property manager uses their market knowledge and broad connections to find tenants fast. Choose one who values your property and collaborates with external leasing agents.
          </p>
          <h3>2. Pick the Right Tenants:</h3>
          <p>
            You want tenants who respect your property and pay on time. 
            A seasoned property manager checks potential renters properly and will have procedure in place to minimize risks. This means you're more likely to have tenants who won't give you headaches.
          </p>
          <h3>3. Get Your Rent On Time:</h3>
          <p>
            Chasing rent isn't fun. A property manager takes care of this, ensuring you get your money regularly. If there are delays, they handle it, so you don't have to.
          </p>
          <h3>4. Find Reliable Maintenance Solutions for You:</h3>
          <p>
            In Abu Dhabi, fixing things isn't always a walk in the park. You'll encounter structural issues, the challenge of sourcing parts, and the task of finding trustworthy technicians. Property managers come equipped with a trusted network of technicians and an in-house maintenance team ready to tackle these issues. 
            Having faced many "mysterious maintenance problems" in the past, they handle repairs efficiently. And the best part? You don't have to shoulder the stress of frustrated renters.
          </p>
          <h3>5. Stay On the Right Side of the Law:</h3>
          <p>
            Laws and regulations, especially those related to renting in Abu Dhabi, are frequently changing. It's all too easy to overlook a detail or find yourself stuck, not knowing the next step. (The process of obtaining Tawtheeq, especially for overseas landlords, is a prime example.) 
            Property managers stay current with these updates. Armed with their expertise, they navigate these complexities, ensuring both you and your property remain compliant.
          </p>
          <h3>6. Emergencies? We've Got You Covered:</h3>
          <p>
            It feels like emergencies always strike at the worst times, doesn't it? Whether it's late at night or on a public holiday, unexpected issues like plumbing malfunctions, AC breakdowns, or power outages can arise. But with a property manager on your side, you're shielded from those frantic midnight calls and pressing repairs.
          </p>
          <h3>7. Stay Informed About Your Finances:</h3>
          <p>
            Your property manager provides you with consistent updates on the income and expenses for your property. 
            This clear insight ensures you're always up-to-date on your financial position and saves you time on filing your tax returns.
          </p>
          <h3>8. All Your Paperwork Sorted:</h3>
          <p>
            Managing a property means keeping track of countless details. It's frustrating when you need specific information, like a tenancy agreement, move-in inspection report, or Tawtheeq, and just can't find it. We've seen many owners in this predicament. 
            But with a diligent property manager, all essential documents are organized and ready. When you need something, they've got your back - ensuring you're never left in the lurch.
          </p>
          <h3>9. Stress Reduction:</h3>
          <p>
            Perhaps the most significant benefit is the peace of mind you receive. Knowing that a professional is handling the day-to-day challenges allows you to enjoy the rewards of your investment without the associated stress. 
            Plus, not having to deal with tenants can greatly relieve your stress.
          </p>
          <h3>10. Navigating Difficult Tenants and Situations with Expertise:</h3>
          <p>
            Navigating challenging tenant scenarios or complex rental situations is part of the course for seasoned property managers. 
            With their vast experience, they guide you through potential legal complications and offer efficient resolutions, ensuring minimal disruption. Leveraging their expertise can be instrumental in safeguarding your time, resources, and investment.
          </p>
          <p className='quote'>
            "Chasing rent isn't fun. A property manager takes care of this, ensuring you get your money regularly"
          </p>
          <p>
            In conclusion, you can try doing it all on your own, but it won't be easy. Most property owners either lack the know-how or the time. A property manager bridges that gap, ensuring smooth sailing for your property without you having to worry about it. 
            Our advice? Choose a good property manager who is professional, integral, and proactive, and truly understands your property's needs. Trust us, it will be a game-changer for you.
          </p>
          <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'}}>
            <img src={Article1End} className='review-card-img' alt='articleOne' />
            <div style={{'color': 'gray', 'marginTop': '0.5em'}}>www.transparentpm.ae</div>
          </div>
          <p>
            If you want to see whether we'll be able to help you, give us a call or WhatsApp here at <b>+971-56-442-0883</b>
          </p>
        </div>
        </CSSTransition>
        <div>
          <button className='review-expand' type='button' onClick={toggleArticle}>{isArticleOpen ? 'Close' : 'Read more'}</button>
        </div>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default Articles


// @import '../../index.scss';

// .articles-container {
//     display: flex;
//     //flex-wrap: wrap;
//     flex-direction: column;
//     width: 70%;
//     justify-content: center;
//     align-items: center;

//     .article-card {
//         width: 720px;
//         .card-img {
//             background-image: url('../../assets/images/articles/article1_main.jpg');
//             background-size: center;
//             background-repeat: no-repeat;
//             background-position: center;
//             height: 230px;
//             width: 720px;
//         }
//         .card-title {
//             font-size: 285%;
//             font-weight: bold;
//         }
//     }


// .article-enter {
//     opacity: 0;
//   }
  
//   .article-enter-active {
//     opacity: 1;
//     transition: opacity 0.5s;
//   }
  
//   .article-exit {
//     opacity: 1;
//   }
  
//   .article-exit-active {
//     opacity: 0;
//     transition: opacity 0.5s;
//   }


//     .article-body {
//         width: 720px;
//     }

//     .review-card-img {
//         width: 720px;
//     }

//     .review-expand {
//         @include reset-button-style;
//         width: 720px;
//         background: rgb(255,255,255);
//         background: linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(57,165,175,1) 100%);
//     }
// }