import React from 'react';
import PropTypes from 'prop-types';

const UmbrellaFilled = props => {
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
        d="M11.31 3.18c.002.005.004.01.004.016h1.227l.003-.012c.002-.008.004-.015.002-.024v-.55a.616.616 0 00-.619-.61.616.616 0 00-.619.61v.552a.07.07 0 00.003.017zm10.382 7.515c.073.417-.042.86-.317 1.204a1.58 1.58 0 01-1.198.558l-1.527-.003a.62.62 0 00.014-.19c-.804-6.382-4.706-8.583-6.104-9.068 2.913.126 5.196 1.011 6.804 2.653 1.205 1.23 1.989 2.863 2.328 4.846zm-4.258 1.717c-.644-5.115-3.49-7.275-4.877-7.897 0 0-.002 7.922-.005 7.92l4.893.013c0-.006-.002-.012-.005-.019-.002-.005-.005-.011-.006-.017zm-6.137-7.866c-1.443.734-4.39 3.101-5.154 7.874l5.16.014-.006-7.888zm-6.412 7.866c.9-6.104 5.05-8.639 6.406-9.213-2.932.095-5.246.966-6.87 2.605C3.2 7.022 2.402 8.647 2.05 10.63c-.079.429.041.874.344 1.241.104.12.224.227.361.311.247.149.527.227.815.233l1.314.002v-.005zm10.348 6.423a.616.616 0 01.618.61c0 1.236-1.02 2.241-2.271 2.241-1.236 0-2.247-.977-2.272-2.19l-.003-.042v-7.02h1.238v7.011c0 .56.463 1.02 1.034 1.02.569 0 1.03-.457 1.03-1.02a.624.624 0 01.626-.61z"
      ></path>
    </svg>
  );
};

UmbrellaFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UmbrellaFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UmbrellaFilled;
