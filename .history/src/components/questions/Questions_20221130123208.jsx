import React from 'react';
import './questions.css';
import lineFAQ from '../../assets/images/line1.png';
import sun from '../../assets/images/sun.png';
import zigzag from '../../assets/images/zigzag.png';
import star2 from '../../assets/images/star2.png';
import star3 from '../../assets/images/star3.png';
import eye from '../../assets/images/eye.png';
import arrowleft from '../../assets/images/arrowleft.png';
import sun2 from '../../assets/images/sun.png';
import arrows from '../../assets/images/arrows.png';
import questionsbg from '../../assets//images/questionsbg.png';
import bigFade13 from '../../assets/images/bigFade13.png';

const Questions = () => {
  console.log(window.innerWidth);

  return (
    <section className="questions">
      <h2 className="questions-title">
        <span className="FAQ">FAQ</span>
        <img src={lineFAQ} className="lineFAQ" alt="lineFAQ" />
        <span style={{ paddingLeft: '10px' }}>HAVE</span>
        <img src={sun} className="sun" alt="sun" />
        ANY QUESTIONS?
        <img />
      </h2>
        <div className="questions__grid">
          <div className="g1">
            <h4>How many?</h4>
            <p>Our genesis land NFT collection will comprise</p>
            <span>5555 NFTs.</span>
          </div>
          <div className="g2">
            <h4>WHEN mint?</h4>
            <p>
              We are targeting a release<span> in mid May.</span>
            </p>
          </div>
          <div className="g3">
            <h4>Which blockchain?</h4>
            <p>
              Dusktopia will be built on the <span>Ethereum blockchain.</span>
            </p>
          </div>
          <div className="g4">
            <img src={zigzag} className="zigzag" alt="zigzag" />
          </div>
          <div className="g5">
            <img src={star2} className="star2" alt="star2" />
            <img src={star2} className="star2" alt="star2" />
            <img src={star2} className="star2" alt="star2" />
          </div>
          <div className="g6">
            <img src={eye} className="eye" alt="eye" />
            <img src={arrowleft} className="arrowleft" alt="arrowleft" />
            <img src={eye} className="eye" alt="eye" />
          </div>
          <div className="g7">
            <h4>Maximum mintable?</h4>
            <p>
              For Dusklist: <span>1 per wallet.</span>
            </p>
            <p>
              For public sale: <span>2 per transaction.</span>
            </p>
          </div>
          <div className="g8">
            <h4>What is the utility?</h4>
            <p>
              Owning a genesis land NFT sets you up for the rest of our ecosystem. The land collection
              is the foundation of Dusktopia - holders will be rewarded in the short term through the
              staking mechanism. In the long term, they will be able to build on that genesis land
              with various properties and avatars we will be releasing.
            </p>
          </div>
          <div className="g9">
            <h4>How DO I Get Dusklist?</h4>
            <p>
              Get engaged and active with the community. The earlier you are and more sGet engaged and
              active with the community. The earlier you are and more support you bring, the higher
              your chances.upport you bring, the higher your chances.
            </p>
          </div>
          <div className="g10">
            <h4>When is staking?</h4>
            <p>Staking with the EON Corporation will go live in the month after mint.</p>
          </div>
          <div className="g11">
           <h4>Future mints?</h4>
            <p>
              Immediately after mint, we are planning for a limited secondary land release for
              holders, claimable with $DAWN. Subsequently, we will release a Properties collection, as
              well as PFP avatars which will serve as your in-game role.
            </p>
          </div>
          <div className="g12">
            <img src={sun2} className="sun2" alt="sun2" />
          </div>
          <div className="g13">
            <h4>HOW MUCH?</h4>
            <p>
              Each genesis land NFT will be priced at <span>0.12eth + gas fees.</span>
            </p>
          </div>
          <div className="g14">
            <img src={arrows} className="arrows-grid" alt="arrows" />
            <img src={star3} className="star3" alt="star3" />
            <img src={arrows} className="arrows-grid" alt="arrows" />
            <img src={arrows} className="arrows-grid" alt="arrows" />
          </div> 
      </div>
      
    //   <div className="questions__grid">
    //   <div className="g1">
    //   <h4>How many?</h4>
    //   <p>Our genesis land NFT collection will comprise</p>
    //   <span>5555 NFTs.</span>
    // </div>
    // <div className="g4">
    //   <img src={zigzag} className="zigzag" alt="zigzag" />
    // </div>
    // <div className="g5">
    //   <img src={star2} className="star2" alt="star2" />
    //   <img src={star2} className="star2" alt="star2" />
    //   <img src={star2} className="star2" alt="star2" />
    // </div>
    // <div className="g6">
    //   <img src={eye} className="eye" alt="eye" />
    //   <img src={arrowleft} className="arrowleft" alt="arrowleft" />
    //   <img src={eye} className="eye" alt="eye" />
    // </div>
    // <div className="g3">
    //   <h4>Which blockchain?</h4>
    //   <p>
    //     Dusktopia will be built on the <span>Ethereum blockchain.</span>
    //   </p>
    // </div>
    // <div className="g13">
    //   <h4>HOW MUCH?</h4>
    //   <p>
    //     Each genesis land NFT will be priced at <span>0.12eth + gas fees.</span>
    //   </p>
    // </div>
    // <div className="g7">
    //   <h4>Maximum mintable?</h4>
    //   <p>
    //     For Dusklist: <span>1 per wallet.</span>
    //   </p>
    //   <p>
    //     For public sale: <span>2 per transaction.</span>
    //   </p>
    // </div>
    // <div className="g11">
    //   <h4>Future mints?</h4>
    //   <p>
    //     Immediately after mint, we are planning for a limited secondary land release for
    //     holders, claimable with $DAWN. Subsequently, we will release a Properties collection, as
    //     well as PFP avatars which will serve as your in-game role.
    //   </p>
    // </div>
    // <div className="g12">
    //   <img src={sun2} className="sun2" alt="sun2" />
    // </div>
    // <div className="g14">
    //   <img src={arrows} className="arrows-grid" alt="arrows" />
    //   <img src={star3} className="star3" alt="star3" />
    //   <img src={arrows} className="arrows-grid" alt="arrows" />
    //   <img src={arrows} className="arrows-grid" alt="arrows" />
    // </div>
    // </div>
      
      
       
      </div>
      <img src={questionsbg} className="questionsbg" alt="questionsbg" />
      <img src={bigFade13} className="bigFade13" alt="fade" />
    </section>
  );
};

export default Questions;
