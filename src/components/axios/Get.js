import React, { Component } from 'react';

// Axios
import Axios from 'axios';

// Components
import Card from './Card';

export default class Get extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      errors: '',
    }
  };

  onChange = e => {
    this.setState({ input: e.target.value })
  }

  onClickBtnOne = () => {
    console.log('One')
  };

  onClickBtnTwo = () => {
    console.log('Two')
  };

  render() {
    console.log(this.state.input)
    const result = (
      <div>
        <p>test</p>
        <span>test</span>
      </div>
    );
    return (
      <div className='get'>
        <Card
          title = 'Get Request'
          subtitle = 'Subtitle  https://jsonplaceholder.typicode.com/ '
          value = {this.state.input}
          onChange = {this.onChange}
          buttonOne = 'Get Todos'
          buttonTwo = 'Clear'
          onClickBtnOne = {this.onClickBtnOne}
          onClickBtnTwo = {this.onClickBtnTwo}
          result = {result}
        />
      </div>
    )
  }
}
