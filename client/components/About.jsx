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
   <p className="PledgeQuestion"> We already know we need to get vaccinated, so why this pledge?  </p> 

<p className = "PledgeAnswer"> While several of us are in the process or have registered to get vaccinations, there are still a lot of people who are thinking twice about getting vaccinated. By taking this simple pledge and sharing with your friends, you are helping build a conversation around getting vaccinated and encouraging more people to get vaccinated.
While we are already hearing this from our government, health experts, and news media... the Oosi Podu pledge hopes to use the power of friendship and social media to help reach 40 Lakh vaccinations in our city. 
    </p>
   </div>
</div>
        );
}

}

FAQ.propTypes = {
};