import React, { Component } from "react";
import Progress from "./Progress.jsx";
import Logo from "../images/baseline-check_circle_outline-24px.svg";
import VaccineImg from "../images/Vaccine_covid.jpg";
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import Select from 'react-select';
import PropTypes from 'prop-types';


class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: {},
    };

  }


 

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file, false));
    });
    try {
      await Promise.all(promises);

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }


  async expandConcepts() {
    const promises = [];

    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file, true));
    });
    try {
      await Promise.all(promises);

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }



  sendRequest(file, isExpand) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      let response = {};

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      let self = this;

      req.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          response = this.responseText
        }
        self.setState({ result: response })
        console.log("fnskjfkf", self.state.result);

      };




      const formData = new FormData();
      formData.append("document", file, file.name);


      req.open("POST", "http://localhost:5000/recommendtaxonomy");
      req.send(formData);
    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src={Logo}
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
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
      <div><span className="Verbiage"> Our goal is to reach vaccination count of 40 Lakh people to break the chain. Please support to reach this milestone. Register and spread the word</span></div>
      <div className="VaccineCard">
        <div className="Card">

          <div className="Upload">
            <div className="Content">
            </div>
            <div className="Actions">{this.renderActions()}</div>
            <div className="Actions"><Button className="Cancel"> Not at the moment</Button></div>
          </div>
         </div>

     
      </div>

      </div>
    );
  }
}
Upload.propTypes = {
  fetchBloomVerbs: PropTypes.func,
};

export default Upload;