import React, { Component } from "react";
import Progress from "./Progress.jsx";
import Logo from "../images/baseline-check_circle_outline-24px.svg";
import VaccineImg from "../images/Vaccine_covid.jpg";
import { Button, ProgressBar, Tabs, Tab } from 'react-bootstrap';
import _ from 'lodash';
import Select from 'react-select';
import PropTypes from 'prop-types';


class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 20,
      numberVaccinated:1000000
    };

  }


 




  renderProgress() {
    const totalCount=4000000;
    const uploadProgress = this.state.numberVaccinated;
    const nowProgress = (uploadProgress/totalCount)*100;

      return (
        <div>
            <ProgressBar variant="success" now={nowProgress} label= {`${nowProgress}%`} />
            </div>

      );
  }

  renderActions() {
      return (
        <Button
        className="Register"
          onClick={this.uploadFiles}
        >
          Register
        </Button>
      );
    }

 

  render() {
    return (
      <div>

      <div className = "card_lo"> Chennai Vaccination Pledge

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
      </div>
      <img className="VaccineImg" src={VaccineImg}/>
      <div><span className="Title">Chennai vaccination drive</span></div>
      <div><span className="Verbiage"> At Chennai, we are on a mission to vaccinate 40 Lakh people to break the chain. 
      We need all of your support to reach this milestone. Register and spread the word</span></div>
      <div className="VaccineCard">
        <div className="Card">

          <div className="Upload">
            {/* <div className="Content">
            </div> */}
            <div><span className="Completed">{this.state.numberVaccinated} have signed.</span> <soan className="Verbiage">Let's get to 40,00,000</soan></div>

            <div className="ProgressIndicator">{this.renderProgress()}</div>
            <div className="Actions">{this.renderActions()}</div>
            <div className="Actions"><Button className="Cancel" size="lg"> Not at the moment</Button></div>
          </div>
         </div>
         <Tabs defaultActiveKey="profile" className="FaqTabs" id="uncontrolled-tab-example">
  <Tab eventKey="faq" title="FAQ" className="Faq">
  </Tab>
  <Tab eventKey="Privacy policy" title="Privacy policy" className="Privacy">
  </Tab>
</Tabs>

     
      </div>

      </div>
    );
  }
}
Upload.propTypes = {
  fetchBloomVerbs: PropTypes.func,
};

export default Upload;