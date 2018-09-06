import React from 'react';

const ButtonPrimaryJumbo  = ({ value, onClickHandler, disabled }) => {
  return (
    <button
      className={'button button-primary button-primary--jumbo'}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default ButtonPrimaryJumbo;
