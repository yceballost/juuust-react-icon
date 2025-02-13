import React from 'react';
import PropTypes from 'prop-types';

const SportBallRegular = props => {
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
        d="M2 11.843C2 6.423 6.415 2 11.843 2c5.429 0 9.843 4.423 9.843 9.843 0 5.429-4.414 9.843-9.843 9.843C6.415 21.686 2 17.272 2 11.843zm9.24-8.552v7.883H9.07c-.084-2.488-.74-4.824-1.835-6.56a8.441 8.441 0 014.006-1.323zm-3.428 7.883c-.08-2.21-.644-4.272-1.582-5.804a8.547 8.547 0 00-2.939 5.804h4.521zm-4.53 1.255h4.522c-.107 2.213-.72 4.296-1.684 5.804a8.597 8.597 0 01-2.837-5.804zm7.959 0H9.06c-.117 2.523-.803 4.851-1.949 6.577a8.603 8.603 0 004.129 1.397V12.43zm1.255 7.966v-7.966h2.075c.118 2.512.821 4.89 1.953 6.602a8.417 8.417 0 01-4.028 1.364zm5.028-2.126c-.972-1.507-1.583-3.602-1.692-5.838h4.566a8.547 8.547 0 01-2.874 5.838zm-5.025-7.095h2.075c.084-2.496.745-4.835 1.852-6.575a8.47 8.47 0 00-3.927-1.308v7.883zm7.899 0h-4.566c.084-2.196.664-4.306 1.602-5.83a8.575 8.575 0 012.964 5.83z"
      ></path>
    </svg>
  );
};

SportBallRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SportBallRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SportBallRegular;
