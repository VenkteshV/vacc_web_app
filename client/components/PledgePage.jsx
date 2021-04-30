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
            otp: '',
            pincode: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleOTPChange = this.handleOTPChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handlePinCodeChange = this.handlePinCodeChange.bind(this);
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
        const payload = {
            'name':this.state.name,
            'phone_no': this.state.phone,
            'pin_code': this.state.pincode
        }
        this.props.persistData(payload);
        event.preventDefault()
    }
    handleLocationChange(event) {
        this.setState({location:event});
    }
    handlePinCodeChange(event) {
        this.setState({pincode:event.target.value});
    }
    render() {
        return (
            <div>
                <div className="CancelCard">
               <div className ="Pledge"><span className="CancelReason"> <ol>
                   <li>I will get vaccinated or I have been vaccinated.</li>
                   <li>I will encourage others to get vaccinated.</li>
                   <li>I will verify any information around vaccinations before sharing.</li></ol></span></div>
                <div className = "Form">
                <form  onSubmit={this.handleSubmit}>
        <div>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={this.state.name}
          className="ReasonText PledgeText"
          onChange={this.handleNameChange}
          required />
        <input
          name="phone"
          placeholder="Mobile (10 digits)"
          pattern="[0-9]{10}" maxLength="10"
          type="text"
          value={this.state.phone}
          className="ReasonText PledgeText"
          onChange={this.handleMobileChange}
          required />
               <input
          name="pincode"
          placeholder="PinCode (6 digits)"
          pattern="[0-9]{6}" maxLength="6"
          type="text"
          value={this.state.pincode}
          className="ReasonText PledgeText"
          onChange={this.handlePinCodeChange}
          required />
                  {/* <input
          name="otp"
          placeholder="OTP"
          type="text"
          value={this.state.otp}
          className="ReasonText PledgeText"
          onChange={this.handleOTPChange}
          required /> */}
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
persistData:PropTypes.func,
};