import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import FcContainer from '../containers/FcContainer.jsx'
import * as faqs from '../constants/faqs';
import {FieldGroup,FormGroup,FormControl,ControlLabel, Button} from 'react-bootstrap';
import _ from 'lodash';
export default class CancelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reason:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

      }

    handleChange(event) {
        this.setState({reason:event.target.value});
    }
    handleSubmit(event) {
        this.setState({reason:event.target.value});
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <div className="CancelCard">
               <div><span className="CancelReason"> Enter the reason why you do not want to get vaccinated. It will help us serve you better.</span></div>
                <div className = "Form">
                <form  onSubmit={this.handleSubmit}>
        <div>
        <input
          name="reason"
          type="text"
          value={this.state.reason}
          className="ReasonText"
          onChange={this.handleChange}
          required />

    <Button className="Submit" type="submit">  <div className="PledgeButton">Submit</div></Button>
    </div>
  </form>
  </div>
  </div>
  </div>


        );
    }
}
CancelPage.propTypes = {

};