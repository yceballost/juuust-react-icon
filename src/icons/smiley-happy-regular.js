import React from 'react';
import PropTypes from 'prop-types';

const SmileyHappyRegular = props => {
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
        d="M21.686 11.846C21.686 5.14 18.06 2 11.84 2 5.622 2 2 5.14 2 11.846c0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zm-9.846 8.61c5.796 0 8.616-2.817 8.616-8.61 0-5.796-2.817-8.614-8.616-8.614-5.792 0-8.61 2.818-8.61 8.614 0 5.793 2.818 8.61 8.61 8.61zM17 13.613a.614.614 0 01.913.823c-.092.102-2.269 2.474-6.003 2.516h-.021c-.026.002-.07.003-.133.003-.736 0-3.893-.143-5.983-2.482a.613.613 0 11.916-.818c1.918 2.144 5.046 2.074 5.183 2.07h.005c3.143-.038 5.04-2.025 5.12-2.109l.003-.003zm-8.143-3.22c-.356 0-.653-.113-.86-.323-.204-.207-.305-.493-.305-.846 0-.723.448-1.17 1.165-1.17.72 0 1.165.447 1.165 1.17 0 .356-.103.639-.305.846-.207.207-.504.322-.86.322zm5.112-.323c.207.21.504.322.86.322s.653-.115.857-.322c.202-.207.306-.493.306-.846 0-.723-.446-1.17-1.166-1.17-.717 0-1.165.447-1.165 1.17 0 .353.104.639.308.846z"
      ></path>
    </svg>
  );
};

SmileyHappyRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmileyHappyRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SmileyHappyRegular;
