import React from 'react';
import PropTypes from 'prop-types';

const PendriveRegular = props => {
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
        d="M21.846 9.649c-.02-.984-.812-1.782-1.765-1.782h-.84v.003h-.678c-.204-.941-1.028-1.65-2.01-1.65H7.475c-3.428.11-5.316 2.146-5.316 5.734 0 3.582 1.888 5.624 5.336 5.75h9.07c.997 0 1.832-.73 2.02-1.694h1.51c.966 0 1.75-.807 1.75-1.796V9.65zm-5.28 6.829c.47 0 .852-.395.852-.88V15.4h-.014V8.33c0-.484-.381-.88-.852-.88H7.496c-2.734.088-4.129 1.606-4.129 4.508s1.395 4.423 4.149 4.52h9.05zm4.073-6.813v4.552a.56.56 0 01-.543.569h-1.482V9.1h1.515c.28.025.504.274.51.565zm-13.202 2.4c0-.632-.361-.926-.918-.926-.555 0-.92.294-.92.927 0 .305.085.53.233.683.16.166.398.247.687.247.288 0 .523-.081.686-.247.148-.154.232-.378.232-.683z"
      ></path>
    </svg>
  );
};

PendriveRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PendriveRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PendriveRegular;
