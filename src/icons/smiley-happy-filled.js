import React from 'react';
import PropTypes from 'prop-types';

const SmileyHappyFilled = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.686 11.846C21.686 5.14 18.06 2 11.84 2 5.622 2 2 5.14 2 11.846c0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zm-4.689 1.77l.003-.003a.613.613 0 11.913.821c-.09.101-2.269 2.474-6.003 2.516H11.89l-.133.002c-.736 0-3.893-.143-5.983-2.481a.613.613 0 11.916-.818c1.918 2.146 5.044 2.073 5.183 2.07h.005c3.143-.033 5.04-2.022 5.12-2.107zm-8.14-3.224c.356 0 .653-.112.86-.322.205-.207.305-.493.305-.846 0-.723-.448-1.17-1.165-1.17-.72 0-1.165.447-1.165 1.17 0 .353.104.639.305.846.207.207.504.322.86.322zm6.832-.325c-.207.213-.504.325-.86.325s-.652-.115-.857-.325c-.204-.207-.308-.493-.308-.846 0-.722.445-1.17 1.165-1.17.717 0 1.165.448 1.165 1.17 0 .353-.103.639-.305.846z"
      ></path>
    </svg>
  );
};

SmileyHappyFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmileyHappyFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SmileyHappyFilled;
