import React, {Component} from 'react';
import HomeDisplay from '../Views/HomeDisplay';
import $ from 'jquery';

class HomeContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      info : null
    }
  }

  componentWillMount = () => {this.scrapeInfo()}

  scrapeInfo = () => {
    $.ajax({
      url: '/api',
      method: 'GET'
    }).done((data) => {
      this.setState({info: data})
    })
  }

  render () {
    console.log({"info": this.state.info});
    return (
      <div>
        {this.state.info ? <HomeDisplay info={this.state.info} /> : null}
      </div>
    )
  }
}

export default HomeContainer;
