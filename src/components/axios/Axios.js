import React, { Component } from 'react';

// Components
import Get from './Get';

export default class Axios extends Component {
  render() {
    return (
      <div className='axios'>
        <div className='row'>
          <div className='col'>
            <h5>Axios by Savin Raul-Calin</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div class="card">
              <div class="card-body">
                This is some text within a card body about axios.
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Get />
          </div>
        </div>
      </div>
    )
  }
}
