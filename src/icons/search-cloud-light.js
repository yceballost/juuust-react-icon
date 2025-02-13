import React from 'react';
import PropTypes from 'prop-types';

const SearchCloudLight = props => {
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
        d="M21.843 11.111c0 4.9-4.309 5.146-5.171 5.146h-.39a4.583 4.583 0 01-.815 1.451l3.398 3.429c.16.162.16.423 0 .585l-.003.003a.408.408 0 01-.577-.003l-3.4-3.431a4.489 4.489 0 01-2.886 1.047c-1.974 0-3.65-1.274-4.271-3.053l-1.824.003c-1.157-.118-3.748-.756-3.748-4.221 0-2.56 1.454-3.558 2.502-3.942.114-5.677 5.344-5.969 6.403-5.969.823 0 4.91.188 6.081 3.852 1.418.106 4.7.823 4.7 5.103zM5.946 15.464c-1.353-.14-2.969-.843-2.969-3.397 0-1.734.745-2.827 2.21-3.247.177-.05.3-.213.297-.398l-.006-.114c0-4.944 4.275-5.328 5.583-5.328.742 0 4.485.17 5.378 3.526a.415.415 0 00.387.309c1.263.036 4.201.523 4.201 4.294 0 4.005-3.33 4.316-4.353 4.316h-.193c.034-.218.053-.44.053-.664 0-2.526-2.028-4.574-4.532-4.574S7.47 12.235 7.47 14.76c0 .235.022.467.056.694l-1.58.011zM12 18.51c-2.047 0-3.711-1.68-3.711-3.745 0-2.064 1.664-3.745 3.711-3.745 2.048 0 3.715 1.68 3.715 3.745 0 2.064-1.667 3.745-3.715 3.745z"
      ></path>
    </svg>
  );
};

SearchCloudLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchCloudLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchCloudLight;
