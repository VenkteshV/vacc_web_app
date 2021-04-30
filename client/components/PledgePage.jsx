import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import FcContainer from '../containers/FcContainer.jsx'
import * as faqs from '../constants/faqs';
import {FieldGroup,FormGroup,FormControl,ControlLabel, Button} from 'react-bootstrap';
import Select from'react-select';
import _ from 'lodash';
export default class PledgePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            phone:'',
            location:'',
            otp: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleOTPChange = this.handleOTPChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
      }

      handleNameChange(event) {
        this.setState({name:event.target.value});
    }
    handleMobileChange(event) {
        this.setState({phone:event.target.value});
    }
    handleOTPChange(event) {
        this.setState({otp:event.target.value});
    }
    handleSubmit(event) {
        this.setState({reason:event.target.value});
        event.preventDefault()
    }
    handleLocationChange(event) {
        this.setState({location:event});
    }
    render() {
        return (
            <div>
                <div className="CancelCard">
               <div>
                   <span className="CancelReason"> 
                        <ol className="ordered-list">
                            <li>I will get vaccinated or I have been vaccinated.</li>
                            <li>I will encourage others to get vaccinated.</li>
                            <li>I will verify any information around vaccinations before sharing.</li>
                        </ol>
                    </span>
                </div>
                <div className = "Form">
                <form  onSubmit={this.handleSubmit}>
        <div>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={this.state.reason}
          className="ReasonText PledgeText"
          onChange={this.handleNameChange}
          required />
           <Select key={_.uniqueId()} className="Location"
           placeholder="Location"
              options={[{ "label": "Adyar", "value": "Adyar" },
              { "label": "Alandur", "value": "Alandur" },
              { "label": "Ambattur", "value": "Ambattur" },
              { "label": "Anna Nagar", "value": "very difficult" },
              { "label": "Kodambakkam", "value": "Kodambakkam" },
              { "label": "Madhavaram", "value": "Madhavaram" },
              { "label": "Manali", "value": "Manali" }]}
              value={this.state.location}
              onChange={this.handleLocationChange}
            />
                     <Select key={_.uniqueId()} className="Location"
           placeholder="Age Group"
              options={[{ "label": "Adyar", "value": "Adyar" },
              { "label": "Alandur", "value": "Alandur" },
              { "label": "Ambattur", "value": "Ambattur" },
              { "label": "Anna Nagar", "value": "very difficult" },
              { "label": "Kodambakkam", "value": "Kodambakkam" },
              { "label": "Madhavaram", "value": "Madhavaram" },
              { "label": "Manali", "value": "Manali" }]}
              value={this.state.location}
              onChange={this.handleLocationChange}
            />
        <input
          name="phone"
          placeholder="Mobile"
          type="text"
          value={this.state.phone}
          className="ReasonText PledgeText"
          onChange={this.handleMobileChange}
          required />
                  <input
          name="otp"
          placeholder="OTP"
          type="text"
          value={this.state.otp}
          className="ReasonText PledgeText"
          onChange={this.handleOTPChange}
          required />
    <Button className="PledgeSubmit" type="submit">  <div className="PledgeButton">I take the Pledge</div></Button>
    </div>
  </form>
  </div>
  </div>
  </div>


        );
    }
}
PledgePage.propTypes = {

};