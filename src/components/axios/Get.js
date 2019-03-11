import React, { Component } from 'react'

export default class Get extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-header">
            <h5>GET Request</h5>
          </div>
          <div class="card-body">
            <div>
              <button className='btn btn-primary'>Get Todo</button>
              <button className='btn btn-secondary'>Clear</button>
            </div>
          </div>
          <div className='card-footer'>
            <div>
              <p>result here</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
