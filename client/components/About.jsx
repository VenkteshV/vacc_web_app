import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import FcContainer from '../containers/FcContainer.jsx'
import * as faqs from '../constants/faqs';
import {Panel} from 'react-bootstrap';
import _ from 'lodash';
export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }
  renderHtml(content) {
    const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
    return content.replace(reg, "<a href='$1$2'>$1$2</a>");
  }
  render() {
      console.log("faqs",faqs);
    return (
<div>
<div className="FaqCard">
  <p className="PledgeQuestion">About Us</p>
  <p className = "PledgeAnswer ">Chennai COVID Volunteer Taskforce</p>
  <p className = "PledgeAnswer ">Coordinated by Chennai Tricolor Initiative</p>
  <p className = "PledgeAnswer ">We are coordinating across various NGOs, government officials, and citizens to help fight the biggest crisis we have faced since Indian Independence. We have 9 tasks forces and 200+ volunteers working across various initiatives. <a href="https://www.chennaitricolor.in/covid">Click here to learn more.</a></p>

  <p className="PledgeQuestion">Why PoCoronaPo? </p> 

  <p className = "PledgeAnswer ">Namma Natta Namma Dhaan Kapathanam. PoCoronaPo is a simple promise that all of us take to fight against corona. And it is a call for volunteers who can become part of the Chennai Volunteer Taskforce as the situation evolves.</p>
  <p className = "PledgeAnswer ">Virus a verattunga. Natta Kappathunga.</p>

   <p className="PledgeQuestion">Contributors </p>
   
    <ul className="unordered-list u-margin_below u-color--black">
      <li>Vijay Anand</li>
      <li>Vikram Ravi</li>
      <li>Sachin Narula</li>
      <li>Renuka Jaypal</li>
      <li>Fazil Badrudeen</li>
      <li>Mahadevan Jayaram</li>
      <li>Venkatesh</li>
      <li>Kumaresh Chinnaswamy</li>
      <li>David</li>
      <li>Ashok</li>
      <li>Ratheesh</li>
      <li>Sakthivel Pannerselvam</li>
      <li>Amar Ramesh</li>
      <li>Deepak Dennison</li>      
      <li>Ramki</li>
      <li>Siddharth Ganneriwala</li>
      <li>Ravi Kumar</li>
      <li>Divya Sharma</li>
      <li>Saradha Ramani</li>
      <li>Wilfred Davidar</li>
      <li>Shravan Shankar</li>
      <li>Murshitha Sheeren</li>
      <li>Harshini</li>
      <li>Jayalakshmi Krishnan</li>
    </ul>
   </div>
</div>
        );
}

}

FAQ.propTypes = {
};