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
  <p className="PledgeQuestion">What is the Oosi Podu Pledge? </p> 

   <p className = "PledgeAnswer "> While several of us are in the process or have registered to get vaccinations, there are still a lot of people who are thinking twice about getting vaccinated. By taking this simple pledge and sharing with your friends, you are helping build a conversation around getting vaccinated and encouraging more people to get vaccinated.</p>
   <ol className="ordered-list u-color--black u-margin_below"><li>I will get vaccinated or I have been vaccinated.</li>
   <li> I will encourage others to get vaccinated.</li>
   <li>I will verify any information around vaccinations before sharing.</li>
   </ol>
   <p className="PledgeQuestion"> We already know we need to get vaccinated, so why this pledge?  </p> 

<p className = "PledgeAnswer"> While several of us are in the process or have registered to get vaccinations, there are still a lot of people who are thinking twice about getting vaccinated. By taking this simple pledge and sharing with your friends, you are helping build a conversation around getting vaccinated and encouraging more people to get vaccinated.
While we are already hearing this from our government, health experts, and news media... the Oosi Podu pledge hopes to use the power of friendship and social media to help reach 40 Lakh vaccinations in our city. 
    </p>
   </div>

<div className="Panel">
  <Panel className = "CollapsablePanel">
  <Panel.Heading>
          <Panel.Title>
           <div className="QuestionBlock"> <p className = "Header">Below are FAQs around getting the vaccinations</p></div>
          </Panel.Title>
        </Panel.Heading>
  </Panel>
  
    { faqs.faqs.map((faq,index) => {
        let answer = this.renderHtml(faq.answer);
        return (
        <Panel className = "CollapsablePanel">
        <Panel.Heading>
          <Panel.Title toggle>
           <div className="QuestionBlock"><p className="Questions">{faq.question}</p> <i className ="fa fa-angle-down"></i> </div>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
          <p className="Answer" dangerouslySetInnerHTML={{
                __html: answer}}></p>
          </Panel.Body>
        </Panel.Collapse>
        </Panel> )

        })
    }
</div>
</div>
    );
}

}

FAQ.propTypes = {
};