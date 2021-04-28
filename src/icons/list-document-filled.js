import React from 'react';
import PropTypes from 'prop-types';

const ListDocumentFilled = props => {
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
        d="M5.992 2.15h11.983c.729 0 1.392.759 1.39 1.59v16.508c0 .863-.639 1.59-1.392 1.59l-11.98-.002c-.754 0-1.393-.731-1.393-1.59V3.737c0-.832.664-1.588 1.392-1.588zM8.197 7.14c.442 0 .804.359.806.802a.802.802 0 01-.806.8.803.803 0 01-.804-.8c0-.443.361-.802.804-.802zm8.297.258H10.93a.604.604 0 00-.605.602.605.605 0 00.604.603h5.564A.604.604 0 0017.099 8a.604.604 0 00-.605-.602zm.08 5.233H11.01a.606.606 0 01-.605-.603c0-.33.272-.602.605-.602h5.566c.333 0 .605.27.605.602 0 .331-.272.603-.605.603zm0 4.01H11.01a.606.606 0 01-.605-.601c0-.334.272-.603.605-.603h5.566c.333 0 .605.27.605.603 0 .33-.272.6-.605.602zm-8.369-3.809a.803.803 0 11-.001-1.603.803.803 0 01.001 1.603zm-.804 3.208a.803.803 0 001.608 0 .803.803 0 00-1.608 0z"
      ></path>
    </svg>
  );
};

ListDocumentFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ListDocumentFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ListDocumentFilled;
