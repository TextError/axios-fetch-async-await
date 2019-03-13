import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from '../common/isEmpty';


const Card = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  onClickBtnOne,
  onClickBtnTwo,
  onChange,
  value,
  response,
  error,
  type,
}) => {
  let result;
  
  if (!isEmpty(response)) {
    result = Object.entries(response).map(([key, value]) => <p key={key}>{key} - {value}</p> )
  }


  const input = (
    <div className='form-group'>
      <h5>Enter an ID number from 1 - 500</h5>
      <div className='row'>
        <div className='col-3'>
          <input
            type = {type}
            className={classnames('form-control form-control-xsm', {'is-invalid' : error})}
            value = {value}
            onChange = {onChange}
          />
        </div>
      </div>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )

  const btnOne = (
    <button 
      className='btn btn-primary'
      onClick={onClickBtnOne}
    >{buttonOne}</button>
  );
  const btnTwo = (
    <button 
      className='btn btn-secondary'
      onClick={onClickBtnTwo}
    >{buttonTwo}</button>
  );

  return (
    <div className="card">
      <div className="card-header">
        <h5>{title}</h5>
        <p className="card-text">{subtitle}</p>
      </div>
      <div className="card-body">
        <div>
          {input}
        </div>
        <div>
          {btnOne}
          {btnTwo}
        </div>
      </div>
      <div className='card-footer'>
        <div>
          {result}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonOne: PropTypes.string.isRequired,
  onClickBtnOne: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  buttonTwo: PropTypes.string,
  onClickBtnTwo: PropTypes.func,
  response: PropTypes.object,
  error: PropTypes.string
};

Card.defaultProps = {
  type: 'text'
};

export default Card;