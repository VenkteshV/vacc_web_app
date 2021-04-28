import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import FcContainer from '../containers/FcContainer.jsx'
import * as faqs from '../constants/faqs';
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
    {
        faqs.faqs.map(faq => {
            let answer = this.renderHtml(faq.answer);
            return (<div><p className="Questions">{faq.question}</p> <p className="Answer" dangerouslySetInnerHTML={{
                __html: answer}}></p> </div>)
        })
    }
</div>
    );
}

}

FAQ.propTypes = {
};