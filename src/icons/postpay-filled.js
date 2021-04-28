import React from 'react';
import PropTypes from 'prop-types';

const PostpayFilled = props => {
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
        d="M20.515 8.053l-2.73-2.73a.562.562 0 00-.396-.166h-.26c-.045-.938-.314-1.644-.815-2.154-.563-.566-1.37-.843-2.468-.843H7.29c-1.109 0-1.916.269-2.47.826C4.266 3.544 4 4.348 4 5.451v13.11c0 1.114.272 1.927.826 2.478.552.547 1.359.813 2.465.813h6.555c1.106 0 1.913-.266 2.465-.813.557-.551.826-1.364.826-2.479v-2.45h2.67c.524 0 .874-.353.874-.877V8.448a.55.55 0 00-.166-.395zm-1.467.115h-.286c-.39 0-.67-.08-.832-.246-.163-.165-.247-.443-.247-.832v-.286l1.365 1.364zM13.58 6.275v8.711c1.033.003 4.924.003 5.98 0v-5.7h-.798c-1.398 0-2.199-.801-2.199-2.199v-.812H13.58zm5.053 4.092a.42.42 0 01-.42.42h-3.286a.42.42 0 110-.84h3.286a.42.42 0 01.42.42zm-.42 2.059a.42.42 0 100-.84h-3.286a.42.42 0 100 .84h3.286zm.42 1.219a.42.42 0 01-.42.42h-3.286a.42.42 0 110-.84h3.286a.42.42 0 01.42.42zm-8.885 5.568c.193.199.479.305.82.305.342 0 .636-.109.827-.305.19-.196.289-.468.289-.81 0-.697-.415-1.114-1.113-1.114-.697 0-1.112.417-1.112 1.115 0 .338.096.61.289.81z"
      ></path>
    </svg>
  );
};

PostpayFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PostpayFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PostpayFilled;
