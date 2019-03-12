import React, { Component } from 'react';

// Axios
import axios from 'axios'

// Components
import Card from './Card';

export default class Get extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      response: {},
      errors: '',
    }
  };

  onChange = (e) => {
    this.setState({ input : e.target.value })
  }

  onClickBtnOne = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err))
  };

  onClickBtnTwo = () => {
    console.log('Two')
  };

  render() {

    const { response } = this.state;

    const result = Object.entries(response).map(i => <p>{i}</p>);
    console.log(result)
    return (
      <div className='get'>
        <Card
          title = 'Get Request'
          subtitle = 'Subtitle  https://jsonplaceholder.typicode.com/ '
          name = 'get'
          value = {this.state.input}
          onChange = {this.onChange}
          buttonOne = 'Get Todos'
          buttonTwo = 'Clear'
          onClickBtnOne = {this.onClickBtnOne}
          onClickBtnTwo = {this.onClickBtnTwo}
          result = {result}
          error = {this.state.errors}
        />
      </div>
    )
  }
}
