import React from 'react';
import PropTypes from 'prop-types';

const SmileySadRegular = props => {
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
        d="M21.686 11.846C21.686 5.14 18.06 2 11.84 2 5.622 2 2 5.14 2 11.846c0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zm-9.846 8.61c5.796 0 8.617-2.817 8.617-8.61 0-5.796-2.818-8.616-8.617-8.616-5.792 0-8.61 2.818-8.61 8.616 0 5.793 2.818 8.61 8.61 8.61zm.09-7.041c3.714.039 5.893 2.414 5.986 2.515a.615.615 0 01-.913.823L17 16.752c-.08-.085-1.977-2.074-5.1-2.107h-.03c-.328 0-3.33.004-5.178 2.07a.616.616 0 01-.919-.818c2.333-2.616 6.003-2.487 6.157-2.481zm-3.073-3.023c-.356 0-.653-.112-.86-.322-.204-.207-.305-.493-.305-.846 0-.723.448-1.17 1.165-1.17.72 0 1.165.447 1.165 1.17 0 .353-.103.639-.305.846-.207.21-.504.322-.86.322zm5.112-.322c.208.21.504.322.86.322s.653-.112.857-.322c.205-.207.308-.493.308-.846 0-.723-.445-1.17-1.165-1.17-.717 0-1.165.447-1.165 1.17 0 .35.1.636.305.846z"
      ></path>
    </svg>
  );
};

SmileySadRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmileySadRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SmileySadRegular;
