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
  <p className="PledgeQuestion">Why PoCoronaPo? </p> 

   <p className = "PledgeAnswer "> Namma Natta Namma Dhaan Kapathanam. PoCoronaPo is a simple promise that all of us take to fight against corona. </p>
   <ol className="ordered-list u-color--black u-margin_below">
   <li> Masku Podu. Oosi Podu.</li>
   <li>Unverified Messages Forward Pannadhe. </li>
   <li>Konjam Thalli Nillu</li>
   </ol>
   <p className = "PledgeAnswer ">Idha Ellam Therunjavannukum. Theriyadha Vannukum Sollu.  </p>
    <p className="PledgeQuestion">Virus a verattunga. Natta Kappathunga.</p>

   <p className="PledgeQuestion">Contributors </p>
   <p className="PledgeAnswer">We are coordinating across various NGOs, government officials, and citizens to help fight the biggest crisis we have faced since Indian Independence.</p>

    <p className="PledgeQuestion Volunteers">200+ volunteers.</p>
    <p className="PledgeQuestion Volunteers"> 9 Volunteer Taskforces</p>

    <p className="TaskForce">Chennai COVID Volunteer Taskforce </p>
    <p className="TaskForce">COVID19 Help - Chennai</p>

    <ul className="unordered-list">
    <li>Vijay Anand, Chennai Tricolor Initiative</li>
<li>Vikram Ravi, Chennai Tricolor Initiative</li>
<li>Renuka Jaypal, Chennai Tricolor Initiative</li>
<li>Fazil Badrudeen, Chennai Tricolor Initiative</li>
<li>Mahadevan Jayaram, Chennai Tricolor Initiative </li>
<li>Siddharth, Chennai Tricolor Initiative </li>
<li>Ravi Kumar, Chennai Tricolor Initiative </li>
<li>Divya Sharma, Chennai Tricolor Initiative </li>
<li>Venktesh, Tech For Cities</li>
<li>Kumaresh Chinnaswamy, Tech For Cities </li>
<li>Siddharth, Tech For Cities </li>
<li>David, Tech For Cities </li>
<li>Ashok, Tech For Cities </li>
<li>Ratheesh, SPI Edge Team </li>
<li>Sakthivel Pannerselvam, the6.in </li>
<li>Amar Ramesh, Studio A </li>
<li>Deepak, Prayogshala</li>
<li>Sachin, Falcon.io </li>
<li>Ramki, Thoughtworks </li>
<li>Saradha Ramani, Rotary</li>
<li>Wilfred Davidar, IAS Retd </li>

<li>Shravan Shankar, AtWorks (The Binary Workshop) </li>
<li>Murshitha Sheeren </li>
<li>Harshini </li>
<li>Jayalakshmi Krishnan</li>
<li>Petsfamilia</li>

 
















    </ul>
   </div>
</div>
        );
}

}

FAQ.propTypes = {
};