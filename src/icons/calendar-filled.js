import React from 'react';
import PropTypes from 'prop-types';

const CalendarFilled = props => {
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
        d="M19.062 3.68H4.602a2.599 2.599 0 00-2.594 2.594v11.23a2.599 2.599 0 002.594 2.594H18.98a2.68 2.68 0 002.675-2.675V6.274a2.599 2.599 0 00-2.593-2.593zm-2.846 1.468c.484 0 .812.328.812.816a.811.811 0 01-.218.585.801.801 0 01-.594.23.806.806 0 01-.594-.23c-.104-.104-.219-.286-.219-.585 0-.488.328-.816.813-.816zm-7.942.816c0-.488-.327-.816-.812-.816-.484 0-.812.328-.812.816a.81.81 0 00.218.585c.101.104.289.23.594.23a.801.801 0 00.594-.23.81.81 0 00.219-.585zm5.435 10.851H9.922a.93.93 0 01-.034-.277c0-.364.095-.608.347-.91l1.154-1.407c.661-.798.939-1.19.939-1.683 0-.252-.079-.443-.236-.575-.182-.156-.476-.226-.902-.226-.389.005-.778.042-1.162.112v-.92a6.208 6.208 0 011.38-.164c.853 0 1.415.19 1.78.554.277.278.425.661.425 1.154 0 .74-.33 1.303-1.268 2.328L11.31 15.93h2.398v.885zM3.322 8.605h17.02c.277 0 .501-.182.501-.406 0-.224-.227-.406-.504-.406H3.322c-.277 0-.504.182-.504.406 0 .224.227.406.504.406z"
      ></path>
    </svg>
  );
};

CalendarFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CalendarFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CalendarFilled;
