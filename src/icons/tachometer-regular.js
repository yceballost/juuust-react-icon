import React from 'react';
import PropTypes from 'prop-types';

const TachometerRegular = props => {
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
        d="M11.973 5.344c6.432 0 9.83 3.334 9.83 9.64 0 1.417-.177 2.702-.53 3.823a.474.474 0 01-.036.087l-.02.042a.602.602 0 01-.54.33H3.265a.602.602 0 01-.577-.414c-.356-1.132-.538-2.432-.538-3.869 0-6.305 3.398-9.639 9.823-9.639zm8.258 12.74c.244-.919.367-1.96.367-3.1 0-5.612-2.902-8.457-8.622-8.457S3.357 9.37 3.357 14.983c0 1.143.124 2.185.364 3.101h16.51zm-7.375-2.944a1.262 1.262 0 00-.88-.356c-.692.003-1.252.552-1.249 1.23 0 .68.56 1.23 1.252 1.23.586.002 1.095-.4 1.224-.972l6.364-1.83h.005l.002-.002h.002c.31-.093.49-.42.4-.731a.602.602 0 00-.748-.4l-6.372 1.831zm-.894-5.347a.595.595 0 01-.602-.591v-.799c0-.325.269-.59.602-.59.334 0 .603.265.603.59v.799a.595.595 0 01-.603.59zm-4 .361l-.577-.566a.616.616 0 00-.854 0L6.52 9.6c-.224.23-.219.6.011.824l.58.569a.606.606 0 00.851 0l.014-.015a.586.586 0 00-.014-.823zm-2.016 3.591c.333 0 .602.263.602.591a.597.597 0 01-.602.591H5.13a.597.597 0 01-.602-.59c0-.329.269-.592.602-.592h.816zm10.01-2.756a.602.602 0 00.852-.003l.577-.566.011-.011a.583.583 0 00-.01-.824.612.612 0 00-.852 0l-.577.566-.014.014a.586.586 0 00.014.824z"
      ></path>
    </svg>
  );
};

TachometerRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TachometerRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TachometerRegular;
