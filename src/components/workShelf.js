import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

import sharedStyles from '../shared/sharedStyles';

import ProjectScreenshot from './projectScreenshot';

import SectionHeading from "./sectionHeading";

import carl from '../assets/smartmockups_jn9ef17i.jpg';
import reebok1 from '../assets/work/reebok1.jpg';
import buffalo1 from '../assets/work/buffalo7-1.png';
import federal1 from '../assets/work/federal1.jpg';
import openmarket1 from '../assets/work/openmarket1.jpg';
import jamie1 from '../assets/work/jamie1.jpg';
import festivalofyou1 from '../assets/work/festivalofyou1.jpg';
import mercury1 from '../assets/work/mercury1.jpg';

import DottedCircle from './decorations/dottedCircle';
import Circle from './decorations/circle';
import Triangle from './decorations/triangle';

class WorkShelf extends React.Component {

  componentDidMount(){

    if(typeof window !== "undefined"){

      const ScrollMagic = require('ScrollMagic');
      typeof window !== 'undefined' && require('animation.gsap');
      // require('debug.addIndicators');
      const TimelineMax = require('TimelineMax');

      const controller = new ScrollMagic.Controller();

      const tween = new TimelineMax();

      tween.add([
        TweenMax.to("#featured-image", 1, {x: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-image", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.5, triggerElement: "#work-section", duration: 200})
              .setTween(tween)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);

      const tween2 = new TimelineMax();

      tween2.add([
        TweenMax.to("#featured-info", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-info", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.4, triggerElement: "#work-section", duration: 200})
              .setTween(tween2)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);

      const tweenWorkProjects = new TimelineMax();

      tweenWorkProjects.add([
        TweenMax.to("#featured-info", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-info", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.4, triggerElement: "#work-section", duration: 200})
              .setTween(tweenWorkProjects)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);
    }


  }

  render(){

    const { allMarkdownRemark } = this.props.data;
    const { edges } = allMarkdownRemark;

    console.log("edges", edges);

    // <div id="project1" style={styles.screenshot}><Link to="/buffalo7-infographic"><ProjectScreenshot screenshotURL={buffalo1} description="Buffalo 7" /></Link></div>
    // <div id="project2" style={styles.screenshot}><Link to="/federal-menu"><ProjectScreenshot screenshotURL={federal1} description="Menu Design: Federal Caf&eacute;" /></Link></div>
    // <div id="project3" style={styles.screenshot}><Link to="/open-market-presentation"><ProjectScreenshot screenshotURL={openmarket1} description="Open Market" /></Link></div>
    // <div id="project4" style={styles.screenshot}><Link to="/jamie-veg-patch"><ProjectScreenshot screenshotURL={jamie1} description="Jamie's Veg Patch" /></Link></div>
    // <div id="project5" style={styles.screenshot}><Link to="/festival-of-you"><ProjectScreenshot screenshotURL={festivalofyou1} description="Festival Of You" /></Link></div>
    // <div id="project6" style={styles.screenshot}><Link to="/mercury"><ProjectScreenshot screenshotURL={mercury1} description="Mercury Logistics" /></Link></div>

    return (<section id="work-section" className="diagonal clockwise" style={styles.section}>
      <SectionHeading title="Some Of Our Work" smallText="Have a look at" />

      <div className="container-fluid" style={styles.container}>
        <div className="row no-gutters">
          <div className="col-sm-6">
            <div id="featured-image" style={styles.shadowImage}>
              <span style={styles.imageBefore}></span>
              <a href="http://staging-investor.carlfinance.de" target="_blank" rel="noopener noreferrer"><img src={carl} style={styles.featuredImage} /></a>
            </div>
          </div>
          <div id="featured-info" className="col-sm-6" style={styles.rightHalf}>
            <a href="http://staging-investor.carlfinance.de" target="_blank" rel="noopener noreferrer" className="specialHeading" style={{fontSize: "18px"}}>FEATURED: Carl Finance</a>
            <p style={styles.p}>Developed a fully responsive onboarding tool based on react. Features such as internationalization and input validations were implemented with ease.</p>
            <p style={styles.p}>Click the link to see the tool in action.</p>
          </div>
        </div>
      </div>

    </section>);
  }

}


var styles = {};

styles.section = {
  background: "white",
  position: "relative"
}

styles.container = {
  marginTop: "3%",
  padding: 0,
  marginBottom: "7%"
}

styles.featuredImage = {
  width: "100%",
  position: "relative",
  zIndex: 1
}

styles.shadowImage = {
  position: "relative",
  left: "-100px",
  opacity: 0
}

styles.imageBefore = {
  position: "absolute",
  width: "102%",
  height: "92%",
  top: "-6%",
  left: 0,
  background: "#a8c4e4",
  zIndex: -1
}

styles.rightHalf = {
  padding: "3% 6%",
  position: "relative",
  top: "-100px",
  opacity: 0
}

styles.projectsLink = {
  textAlign: "center",
  marginTop: "3%",
  fontSize: "3vh"
}

styles.p = {
  fontFamily: "Apercu-Regular",
  fontSize: "20px",
  color: "#b2b1b8",
  lineHeight: "1.7"
}

styles.projectsContainer = {
  width: "100%",
  position: "relative",
  paddingBottom: "8%"
}

// styles.projectsFlex = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "center"
// }

// styles.screenshot = {
//   display: "inline-block",
//   width: "100%",
//   "@media screen and (min-width: 768px)": {
//     width: "calc(33.3333%)"
//   }
// }

export default Radium(WorkShelf);
