import React from 'react';
import PropTypes from 'prop-types';

const SportBallLight = props => {
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
        d="M2.156 12c0-5.432 4.412-9.844 9.843-9.844 5.432 0 9.844 4.412 9.844 9.843 0 5.429-4.412 9.844-9.844 9.844-5.431 0-9.843-4.415-9.843-9.844zm6.776-.46h2.658V2.985A8.995 8.995 0 006.963 4.51c1.216 1.824 1.922 4.35 1.97 7.031zm8.07-7.045a8.907 8.907 0 00-4.594-1.51v8.555h2.603c.056-2.697.77-5.224 1.991-7.045zm.765 14.434c-1.149-1.633-1.863-4.036-1.936-6.571h5.185a9.03 9.03 0 01-3.25 6.571zm-5.359 2.084v-8.652h2.6c.073 2.706.846 5.291 2.109 7.061a8.954 8.954 0 01-4.709 1.591zm8.605-9.473h-5.182c.056-2.518.723-4.871 1.83-6.555a9.014 9.014 0 013.352 6.555zm-9.423 9.473h-.002v-8.655H8.929c-.086 2.692-.851 5.266-2.09 7.04a8.978 8.978 0 004.749 1.615h.002zM8.11 12.361H2.983a9.034 9.034 0 003.207 6.537c1.132-1.633 1.837-4.027 1.919-6.537zm-1.81-7.35C7.414 6.7 8.064 9.039 8.111 11.54H2.985A9.043 9.043 0 016.3 5.01z"
      ></path>
    </svg>
  );
};

SportBallLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SportBallLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SportBallLight;
