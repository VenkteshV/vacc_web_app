import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import FcContainer from '../containers/FcContainer.jsx'
import * as faqs from '../constants/faqs';
export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log("faqs",faqs);
    return (
<div>
    {
        faqs.faqs.map(faq => {
            return (<div><p className="Questions">{faq.question}</p> <p className="Answer">{faq.answer}</p> </div>)
        })
    }
</div>
    );
}

}

FAQ.propTypes = {
};