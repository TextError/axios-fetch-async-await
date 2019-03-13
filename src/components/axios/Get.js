import React, { Component } from 'react';

// Axios
import axios from 'axios'

// Components
import Card from './Card';

// Common
import validateAxiosInput from '../validator/axios';

export default class Get extends Component {
  constructor() {
    super();
    this.state = {
      id: '1',
      response: {},
      errors: '',
    }
  };

  onChange = (e) => {
    this.setState({ id : e.target.value })
  }

  onClickBtnOne = () => {
    const { id } = this.state;

    // Validation
    const { errors, isValid } = validateAxiosInput(id);

    // Check Validation
    if (!isValid) {
      // Set Errors
      this.setState({ errors })
    } else {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => this.setState({ response: res.data }))
        .catch(err => console.log(err))
    }

  };

  onClickBtnTwo = () => {
    this.setState({ response: {} })
  };

  render() {
    
    const { response } = this.state;

    console.log(this.state.errors)

    return (
      <div className='get'>
        <Card
          title = 'Get Request'
          subtitle = 'https://jsonplaceholder.typicode.com/comments/id'
          buttonOne = 'Get Todos'
          buttonTwo = 'Clear'
          onClickBtnOne = {this.onClickBtnOne}
          onClickBtnTwo = {this.onClickBtnTwo}
          onChange = {this.onChange}
          value = {this.state.input}
          response = {response}
          error = {this.state.errors}
        />
      </div>
    )
  }
}
