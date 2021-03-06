import React from "react";
import PropTypes from "prop-types";

import Timestamp from "react-timestamp";

class Article extends React.Component {
  componentDidMount(){
    var self = this;
    this._timer = setInterval(() => {
      self.forceUpdate
    })
  }

  componentWillMount(){
    if(this._timer){
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">{this.props.description}</div>
        <div className="article-meta-details">
            <small>
              Created by: {this.props.author}, <Timestamp time={this.props.createdAt} precision={3} />, last updated: <Timestamp time={this.props.updatedAt} precision={3} /> 
            </small>  
          </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

export default Article;
