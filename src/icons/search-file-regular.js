import React from 'react';
import PropTypes from 'prop-types';

const SearchFileRegular = props => {
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
        d="M19.608 21.661H9.118c-.712 0-1.154-.445-1.154-1.16v-4.115a5.791 5.791 0 01-1.75-.987l-3.248 3.374a.56.56 0 11-.807-.779l3.261-3.386A5.803 5.803 0 017.963 5.44V3.157c0-.706.443-1.146 1.152-1.149h6.51a.55.55 0 01.395.166l5.462 5.462a.55.55 0 01.165.395v12.495c0 .687-.445 1.13-1.129 1.132-.302.003-.604.003-.91.003zm-9.714-4.947c-.275 0-.545-.019-.81-.056v3.883h11.44V8.594h-2.168c-.955 0-1.779-.317-2.376-.916-.596-.6-.916-1.42-.916-2.376v-2.17h-5.98v2.036a5.8 5.8 0 014.91 9.846 5.759 5.759 0 01-4.1 1.7zm6.709-12.37l-.418-.42v1.378c0 .653.202 1.2.585 1.586.384.386.933.588 1.583.588h1.378l-3.128-3.133zM5.216 10.915a4.678 4.678 0 014.678-4.684 4.646 4.646 0 013.31 1.37A4.682 4.682 0 019.9 15.594a4.678 4.678 0 01-4.683-4.678z"
      ></path>
    </svg>
  );
};

SearchFileRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchFileRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchFileRegular;
