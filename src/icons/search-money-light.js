import React from 'react';
import PropTypes from 'prop-types';

const SearchMoneyLight = props => {
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
        d="M9.966 17.788A7.809 7.809 0 014.442 4.457 7.808 7.808 0 0115.677 15.3l6.087 6.084a.28.28 0 01-.196.479.28.28 0 01-.199-.084l-6.087-6.084a7.747 7.747 0 01-5.316 2.093zm0-15.056a7.248 7.248 0 105.123 2.123 7.195 7.195 0 00-5.123-2.123zm.498 10.561v.649c0 .154-.126.28-.28.28a.281.281 0 01-.28-.28v-.632a3.73 3.73 0 01-1.947-.654.434.434 0 01-.204-.375.414.414 0 01.42-.41c.1.003.196.034.28.09.481.32.969.502 1.451.543V10.15c-.91-.117-1.986-.539-1.986-1.864 0-1.137.774-1.89 1.986-1.966v-.367a.28.28 0 01.28-.28c.154 0 .28.126.28.28v.377c.526.047 1.011.198 1.398.438.16.098.25.235.25.387 0 .22-.18.397-.401.4a.547.547 0 01-.255-.073l-.003-.003a2.936 2.936 0 00-.989-.34v2.249c.667.084 1.175.288 1.516.607.341.32.515.753.515 1.286 0 1.135-.765 1.88-2.03 2.012zm0-3.065v2.263c.325-.044.6-.15.804-.314.264-.21.4-.507.4-.857 0-.434-.148-.9-1.204-1.092zm-.56-3.108c-.72.06-1.16.476-1.16 1.119 0 .4.14.872 1.16 1.068V7.12z"
      ></path>
    </svg>
  );
};

SearchMoneyLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchMoneyLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchMoneyLight;
