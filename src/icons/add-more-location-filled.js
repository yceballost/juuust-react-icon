import React from 'react';
import PropTypes from 'prop-types';

const AddMoreLocationFilled = props => {
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
        d="M19.967 4.048c1.232 1.23 1.885 3.028 1.876 5.216-.008 4.613-5.927 11.58-6.77 12.406a.61.61 0 01-.431.176.592.592 0 01-.432-.176c-.423-.41-1.37-1.51-2.47-3.037-1.272 1.614-3.353 1.802-4.037 1.807-.098.008-.21.008-.316.008h-.171c-1.062-.014-5.056-.394-5.056-5.246 0-4.838 3.955-5.199 5.014-5.207h.367a4.998 4.998 0 01-.048-.782c0-2.176.661-3.977 1.908-5.199 1.25-1.221 3.09-1.848 5.294-1.854 2.207.008 4.034.658 5.272 1.888zm-3.112 4.557c0 1.303-.821 2.112-2.143 2.112-1.322 0-2.146-.81-2.146-2.112s.82-2.112 2.146-2.112c1.322 0 2.143.81 2.143 2.112zm-5.32 6.628c0 3.423-2.423 3.977-3.857 4.003-.09.005-.196.005-.291.005H7.23c-1.434-.025-3.849-.571-3.849-4.042 0-3.454 2.381-3.986 3.807-4h.457c1.45.04 3.89.61 3.89 4.034zm-1.437-.63H8.065v-1.98a.605.605 0 00-.61-.603.607.607 0 00-.612.602v1.98H4.815a.607.607 0 00-.61.603c0 .333.271.602.61.602h2.028v2.008c0 .334.272.603.611.603.336 0 .61-.27.61-.602v-2.009h2.034c.336 0 .611-.269.611-.602a.605.605 0 00-.61-.602z"
      ></path>
    </svg>
  );
};

AddMoreLocationFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddMoreLocationFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AddMoreLocationFilled;
