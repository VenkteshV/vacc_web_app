import React, { Component } from "react";
import Progress from "./Progress.jsx";
import Logo from "../images/baseline-check_circle_outline-24px.svg";
import VaccineImg from "../images/Banner.png";
import ChennaiTricolor from '../images/chennai_tricolor.png';
import { Button, ProgressBar, Tabs, Tab } from 'react-bootstrap';
import FAQ from './FAQ.jsx';
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
      numberVaccinated: { 'number': 10000, 'text': '10,000' },
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
        <div className="PledgeButton"> Take the Oosi Podu Pledge </div>
      </Button>
    );
  }



  render() {
    const FooterClassName = this.state.shouldRenderCancel ? 'FooterTabs': 'Footer';
    console.log("renderfaq", this.state.shouldRenderFaq);
    return (
      <div>



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
        {this.state.shouldRenderPledgeForm ? (<div> <div className="card_lo">
            <i onClick={this.togglePledge} className="fa fa-arrow-left"></i>
            <span className="u-position--center z-index"> The Oosi Podu Pledge</span> </div>
            <PledgePage/>
          </div>) : (this.state.shouldRenderCancel ? (
          <div> <div className="card_lo">
            <i onClick={this.toggleCancel} className="fa fa-arrow-left"></i>
            <span className="u-position--center z-index"> Help us with the reason</span> </div>
            <CancelPage/>
          </div>) : (this.state.shouldRenderFaq ? (<div> <div className="card_lo"> <i onClick={this.toggleFaq} className="fa fa-arrow-left"></i> <span className="faq u-position--center z-index"> FAQ</span> </div>
            {/* <div className="Content">
  </div> */}
            <FAQ />
          </div>) : (<div> <div className="card_lo"> Oosi Podu </div> <div>
            <img className="VaccineImg" src={VaccineImg} />

            <div className="VaccineCard">
              <div className="Card">
                <div className="Upload">
                  <p className="u-text--left u-margin_left u-margin_below--less text-size-14"><span className="Completed">{this.state.numberVaccinated.text} have signed.</span> <span className="Verbiage">Let's get to {this.state.milestoneCount.text}!</span></p>

                  <div className="ProgressIndicator">{this.renderProgress()}</div>

                  <p className="u-text--left u-margin_above u-margin_left text-size-14"><span className="Completed u-margin_left"> Someone signed <span className="u-color-grey-10">two minutes ago</span></span> </p>
                  
                  <div className="u-text--left"><span className="Verbiage Mission"> We are on a mission to vaccinate 40 Lakh people to break the chain. If you have registered to get vaccinated, plan to register or if you have gotten your vaccination, click below to inspire others as well to get vaccinated. </span></div>
                  
                  <div className="Actions">{this.renderActions()}</div>
                  
                  <button type="button" className="Cancel" onClick={this.renderCancel}>  Not at the moment</button>
                </div>
              </div> </div>  </div> </div>)))}
        <div className={`${FooterClassName}`}>
          <Tabs defaultActiveKey="profile" className="FaqTabs" id="uncontrolled-tab-example" onSelect={this.renderFaq}>
            <Tab eventKey="faq" title="FAQ" className="Faq" >
            </Tab>
            {/* <Tab eventKey="Privacy policy" className="Privacy">
  </Tab> */}
          </Tabs>
          <div className="TricolorImage">
            <img className="ChennaiTricolor" src={ChennaiTricolor}></img>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  fetchBloomVerbs: PropTypes.func,
};

export default Landing;