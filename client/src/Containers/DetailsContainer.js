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
    console.log(this.props.params.detailId);
    $.ajax({
      url: '/api/details/'+this.props.params.detailId,
      method: 'GET'
    }).done((data) => {
      this.setState({detailInfo: data})
      console.log(this.state);
    })
  }
  render () {
    console.log(this.props);
    console.log(this.state.detailInfo);

    return (
      <div>
         {(this.state.detailInfo !== null) ? <DetailsDisplay detailInfo={this.state.detailInfo}/> : <span> detail Id is null</span>}
      </div>
    )
  }
}

export default ResultsContainer;
