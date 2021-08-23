import React from 'react';
import Icon from 'assets/svg/arrow-left.svg';
const Arrow = () => (
  <img
    src={Icon}
    alt="Arrow-Svg"
    style={{
      padding: '.5rem',
      borderRadius: '50%',
      border: '1px solid lightGrey',
    }}
  />
);

export default Arrow;