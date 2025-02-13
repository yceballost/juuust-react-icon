import React from 'react';
import PropTypes from 'prop-types';

const EditPaperRegular = props => {
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
        d="M20.823 2.89c.55.558.858 1.303.863 2.085a2.814 2.814 0 01-.874 2.033c-.1.098-.538.49-1.137 1.026l.008 9.644c0 1.21-.38 2.188-1.128 2.91-.776.748-1.86 1.126-3.219 1.126H6.347c-1.361 0-2.442-.378-3.218-1.129-.75-.72-1.129-1.7-1.129-2.907V7.356c0-2.482 1.706-4.084 4.345-4.087h8.988c.314 0 .625.006.939.017.238-.213.392-.353.434-.395 1.291-1.286 3.106-1.011 4.117 0zm-4.421 5.8a546.914 546.914 0 00-2.887 2.576l-2.65.874.866-2.58.4-.353c1.385-1.221 5.468-4.822 5.768-5.12.63-.628 1.398-.333 1.731 0 .227.23.37.566.367.885 0 .317-.134.619-.37.835-.168.165-1.714 1.54-3.225 2.884zm1.59 8.988c0 .742-.2 1.297-.614 1.697-.448.434-1.137.653-2.045.653H6.345c-.908 0-1.597-.218-2.045-.653-.412-.397-.614-.952-.614-1.694V7.356c0-1.98 1.446-2.398 2.659-2.398h8.05c-1.115.989-2.496 2.207-3.826 3.378-.19.168-.334.384-.415.628l-1.04 3.09a1.444 1.444 0 001.83 1.837l3.112-1.025a1.41 1.41 0 00.496-.286l.424-.375.001-.001c.627-.554 1.85-1.635 3.017-2.669-.002-.003-.002 8.143-.002 8.143z"
      ></path>
    </svg>
  );
};

EditPaperRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EditPaperRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EditPaperRegular;
