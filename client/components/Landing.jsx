import React, { Component } from "react";
import Progress from "./Progress.jsx";
import Logo from "../images/baseline-check_circle_outline-24px.svg";
import VaccineImg from "../images/Banner.png";
import VisitAgainImg from "../images/visit_again.png"
import ChennaiTricolor from '../images/chennai_tricolor.png';
import { Button, ProgressBar, Tabs, Tab } from 'react-bootstrap';
import FAQ from './FAQ.jsx';
import About from './About.jsx';
import _ from 'lodash';
import Select from 'react-select';
import PropTypes from 'prop-types';
import CancelPage from './CancelPage.jsx';
import PledgePage from './PledgePage.jsx';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 20,
      milsestones: [
        { 'number': 10000, 'text': '10,000' },
        { 'number': 25000, 'text': '25,000' },
        { 'number': 50000, 'text': '50,000' },
        { 'number': 100000, 'text': '1,00,000' },
        { 'number': 250000, 'text': '2,50,000' },
        { 'number': 500000, 'text': '5,00,000' },
        { 'number': 750000, 'text': '7,50,000' },
        { 'number': 1000000, 'text': '10,00,000' },
        { 'number': 2500000, 'text': '25,00,000' },
        { 'number': 4000000, 'text': '40,00,000' }],
      milestoneCount: { 'number': 5000, 'text': '5,000' },
      numberVaccinated: { 'number': props.config.progressData.response.count, 'text': props.config.progressData.response.count },
      shouldRenderFaq: false,
      shouldRenderCancel: false,
      shouldRenderPledgeForm: false
    };
    this.renderFaq = this.renderFaq.bind(this);
    this.toggleFaq = this.toggleFaq.bind(this);
    this.renderCancel = this.renderCancel.bind(this);
    this.toggleCancel = this.toggleCancel.bind(this);
    this.renderPledgeForm = this.renderPledgeForm.bind(this);
    this.togglePledge = this.togglePledge.bind(this);
    this.shareBadge = this.shareBadge.bind(this);
  }



  shareBadge() {

    let canvas = document.createElement('canvas');
    canvas.height = 640;
    canvas.width  = 360;
    var ctx = canvas.getContext('2d');

    var vacImg = document.getElementsByClassName("VaccineImg")[0];
    ctx.drawImage(vacImg, 0, 0);

    ctx.textAlign = 'center';
    var x = canvas.width / 2;
    ctx.font = "16pt 'Baloo Thambi 2'";
    ctx.fillStyle = 'white';
    ctx.fillText("Thank you", x, 70);
    ctx.fillText("for joining the drive to", x, 174);
    ctx.fillText("flatten the curve", x, 201);
    ctx.font = "bold 28pt 'Baloo Thambi 2'";
    ctx.fillText(this.props.latestUser, x, 118);

    x = (canvas.width / 10) * 2;
    ctx.textAlign = "left";
    ctx.font = "bold 16pt 'Baloo Thambi 2'";
    ctx.fillStyle = '#040100';
    ctx.fillText("PoCoronaPo.in", x, 450);

    // ctx.fillStyle = 'blue';
    // ctx.fillRect(0,0,450,450);
    // ctx.fillStyle = 'white';
    // ctx.font = '50px serif';
    // ctx.fillText('Share', 50, 90);
    canvas.toBlob(function(blob) {
      var badgefile = new File([blob], "badge.png", {type: 'image/png'});
      var fileArray = [badgefile];
        console.log(blob);
        const shareData = {
          files: fileArray,
          title: 'Po Corona Po',
          text: 'Virus Verattunga Natta Kappathunga',
          url: 'https://pocoronapo.in',
        };
        navigator.share(shareData);
    });


    
    
  }


  renderCancel() {
    this.setState({ shouldRenderCancel: true });
  }

  renderPledgeForm() {
    this.setState({ shouldRenderPledgeForm: true });

  }
  toggleCancel() {
    this.setState({ shouldRenderCancel: false });

  }
  togglePledge() {
    this.setState({shouldRenderPledgeForm:false})
  }
   numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  renderProgress() {
    if (this.state.numberVaccinated.number > this.state.milestoneCount.number) {
      let newMilestone = this.state.milsestones.find((mile) => {
        if (this.state.numberVaccinated.number < mile.number) {
          return mile
        }
      })
      this.setState({ milestoneCount: newMilestone })
    }
    const totalCount = this.state.milestoneCount.number;
    console.log("totalCount", totalCount)
    const uploadProgress = this.state.numberVaccinated.number;
    const nowProgress = (uploadProgress / totalCount) * 100;
    if (nowProgress == 100) {
      let nextMilestone = _.clone(this.state.milsestones);
      let newMilestone = nextMilestone.find((mile) => {
        if (uploadProgress < mile.number) {
          return mile
        }
      });
      console.log("newMilestone", newMilestone)
      let deleted = nextMilestone.splice(0, _.findIndex(nextMilestone, newMilestone))
      this.setState({ milestoneCount: newMilestone, milsestones: nextMilestone })
    }

    return (
      <div>
        <ProgressBar variant="success" now={nowProgress} label={`${nowProgress}%`} />
      </div>

    );
  }

  renderFaq(key) {
    if (key == "faq") {
      console.log("here")
      this.setState({ shouldRenderFaq: !this.state.shouldRenderFaq });
      this.setState({ shouldRenderCancel: false });
      this.setState({ shouldRenderPledgeForm: false });


    }
  }

  toggleFaq() {
    this.setState({ shouldRenderFaq: !this.state.shouldRenderFaq });

  }
  renderActions() {
    return (
      <Button
        className="Register"
        onClick={this.renderPledgeForm}
      >
        <div className="PledgeButton"> Virus a verattunga </div>
      </Button>
    );
  }



  render() {
    const now_date = new Date();
    let time_diff1 = now_date - (new Date(this.props.config.progressData.response.recents[0].timestamp));
    let time_diff2 = now_date - (new Date(this.props.config.progressData.response.recents[1].timestamp));
    let minutesDifference1 = Math.floor(time_diff1/1000/60);
    let minutesDifference2= Math.floor(time_diff2/1000/60);

    const FooterClassName = this.state.shouldRenderCancel ? 'FooterTabs': 'Footer';
    console.log("renderfaq", this.props.renderBadge);
    return (
      <div className="BadgeWrapper">



        {/* {!_.isEmpty(this.state.learningObj["rankedlo"]) ? (
          <div>
            <span className="Title">Relevant Learning Objectives</span>
            <ul>
              {rankedlo.map(verb => (
                <li key={_.uniqueId()}>
                  <div>{verb[0]}</div>
                  <div className="confidence">{verb[1][0]}</div>
                </li>
              ))}
            </ul> </div>) : (null)} */}
        {this.props.renderBadge ? (<div><img className="VaccineImgCover" src={VisitAgainImg}></img>
          <div class="BadgeContent u-text--right">
            <p className="BadgeText"> Thank you <br /> <span className="BadgeUser">{this.props.latestUser} <br />  </span></p>
            <p className="BadgeConclusion">for joining the drive to <br /> flatten the curve.</p>
          </div>

          <div class="BadgeContent">  
            <p className="Badgebottom">Oosi Podu pledge <br/></p> 
            <p className="BadgeMiddle">Virus a verattunga. Natta Kappathunga.<br/> </p> 
            <p className="BadgeBottomConclusion">Visit oosipodu.in</p>
          </div>  
          <Button
        className="Share"
        onClick={this.shareBadge}
      >
        <div className="PledgeButton"> Share </div>
      </Button>
           </div>
        ) :(this.state.shouldRenderPledgeForm ? (<div> <div className="card_lo">
              <svg onClick={this.togglePledge} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10C20 9.30964 19.4404 8.75 18.75 8.75H4.81263L10.9062 2.6564C11.4043 2.15835 11.3971 1.34869 10.8904 0.859505C10.3961 0.38238 9.61069 0.389309 9.12492 0.87508L0.0990063 9.90099C0.0443264 9.95567 0.0443268 10.0443 0.0990067 10.099L9.12306 19.1231C9.60738 19.6074 10.3926 19.6074 10.8769 19.123C11.3596 18.6403 11.3614 17.8581 10.8808 17.3732L4.81263 11.25H18.75C19.4404 11.25 20 10.6904 20 10Z" fill="white"/>
            </svg>
            <span className="u-position--center z-index"> Po Corona Po</span> </div>
            <PledgePage persistData ={this.props.persistData}/>
          </div>) : (this.state.shouldRenderCancel ? (
          <div> <div className="card_lo">            
            <svg onClick={this.toggleCancel} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10C20 9.30964 19.4404 8.75 18.75 8.75H4.81263L10.9062 2.6564C11.4043 2.15835 11.3971 1.34869 10.8904 0.859505C10.3961 0.38238 9.61069 0.389309 9.12492 0.87508L0.0990063 9.90099C0.0443264 9.95567 0.0443268 10.0443 0.0990067 10.099L9.12306 19.1231C9.60738 19.6074 10.3926 19.6074 10.8769 19.123C11.3596 18.6403 11.3614 17.8581 10.8808 17.3732L4.81263 11.25H18.75C19.4404 11.25 20 10.6904 20 10Z" fill="white"/>
            </svg>
            <span className="u-position--center z-index"> Help us with the reason</span> </div>
            <CancelPage triggerExcuse={this.props.triggerExcuse}/>
          </div>) : (this.state.shouldRenderFaq ? (<div> <div className="card_lo">             
             <svg onClick={this.toggleFaq} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10C20 9.30964 19.4404 8.75 18.75 8.75H4.81263L10.9062 2.6564C11.4043 2.15835 11.3971 1.34869 10.8904 0.859505C10.3961 0.38238 9.61069 0.389309 9.12492 0.87508L0.0990063 9.90099C0.0443264 9.95567 0.0443268 10.0443 0.0990067 10.099L9.12306 19.1231C9.60738 19.6074 10.3926 19.6074 10.8769 19.123C11.3596 18.6403 11.3614 17.8581 10.8808 17.3732L4.81263 11.25H18.75C19.4404 11.25 20 10.6904 20 10Z" fill="white"/>
            </svg>
             <span className="faq u-position--center z-index"> About Us</span> </div>
            {/* <div className="Content">
  </div> */}
            <About />
          </div>) : (<div> <div className="card_lo"> Po Corona Po </div> <div>
            <img className="VaccineImg" src={VaccineImg} />

            <div className="VaccineCard">
              <div className="Card">
                <div className="Upload">
                  <p className="u-text--left u-margin_left u-margin_below--less text-size-14"><span className="Completed">{this.numberWithCommas(this.state.numberVaccinated.text)} have signed.</span> <span className="Verbiage">Let's get to {this.state.milestoneCount.text}!</span></p>

                  <div className="ProgressIndicator">{this.renderProgress()}</div>

                  <p className="u-text--left u-margin_above u-margin_left text-size-14">
                  <span className="Completed u-margin_left"> {this.props.config.progressData.response.recents[0].name}
                  <span className="u-color-grey-10"> signed {minutesDifference1} minutes ago</span></span> </p>
                  <p className="u-text--left u-margin_above u-margin_left text-size-14">
                  <span className="Completed u-margin_left"> {this.props.config.progressData.response.recents[1].name}
                  <span className="u-color-grey-10"> signed {minutesDifference2} minutes ago</span></span> </p>
                  <div className="u-text--left"><span className="Verbiage Mission"> Namma Natta Namma Dhaan Kapathanam. Let’s all sign this to start a movement that will inspire everyone to follow all the basic prevention against corona to fight the virus.  </span></div>
                  
                  <div className="Actions">{this.renderActions()}</div>
                  
                  {/* <button type="button" className="Cancel" onClick={this.renderCancel}>  Not at the moment</button> */}
                </div>
              </div> </div>  </div> </div>))))}
        { this.props.renderBadge ? (null) : (
        <div className={`${FooterClassName}`}>
          <Tabs defaultActiveKey="profile" className="FaqTabs" id="uncontrolled-tab-example" onSelect={this.renderFaq}>
            <Tab eventKey="faq" title="About Us" className="Faq" >
            </Tab>
            {/* <Tab eventKey="Privacy policy" className="Privacy">
  </Tab> */}
          </Tabs>
          <div className="TricolorImage">
            <img className="ChennaiTricolor" src={ChennaiTricolor}></img>
          </div>
        </div>)
        }
      </div>
    );
  }
}
Landing.propTypes = {
  persistData: PropTypes.func,
  triggerExcuse: PropTypes.func,
  renderBadge: PropTypes.bool,
  latestUser: PropTypes.string,
  progressData: PropTypes.object
};

export default Landing;