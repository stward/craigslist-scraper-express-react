import React, {Component} from 'react';
import $ from 'jquery';
import DetailsDisplay from '../Views/DetailsDisplay';

class ResultsContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      detailInfo : null,
    }
  }

  componentWillMount = () => {
      this.detailsScrapeInfo()
  }

  detailsScrapeInfo = () => {
    $.ajax({
      url: '/api/details?link=' + this.props.location.query.link,
      method: 'GET'
    }).done((data) => {
      this.setState({detailInfo: data})
      console.log(this.state);
    })
  }
  render () {
    console.log(this.props);
    console.log({detailInfo: this.state.detailInfo});

    return (
      <div>
         {(this.state.detailInfo !== null) ? <DetailsDisplay detailInfo={this.state.detailInfo}/> : <span> detail Id is null</span>}
      </div>
    )
  }
}

export default ResultsContainer;
