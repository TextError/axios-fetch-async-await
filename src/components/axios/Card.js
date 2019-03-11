import React from 'react';
import PropTypes from 'prop-types';


const Card = ({
  title,
  buttonOne,
  buttonTwo,
  result,
  onClickBtnOne,
  onClickBtnTwo,
}) => {

  return (
    <div className="card">
      <div className="card-header">
        <h5>{title}</h5>
      </div>
      <div className="card-body">
        <div>
          <button 
            className='btn btn-primary'
            onClick={onClickBtnOne}
          >{buttonOne}</button>
          <button 
            className='btn btn-secondary'
            onClick={onClickBtnTwo}
          >{buttonTwo}</button>
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
  buttonOne: PropTypes.string.isRequired,
  buttonTwo: PropTypes.string,
  onClickBtnOne: PropTypes.func.isRequired,
  onClickBtnTwo: PropTypes.func,
  result: PropTypes.object.isRequired,
};

export default Card;