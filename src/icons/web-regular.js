import React from 'react';
import PropTypes from 'prop-types';

const WebRegular = props => {
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
        d="M20.23 4.525c.804 0 1.456.63 1.456 1.404v11.955c0 .776-.655 1.403-1.456 1.403H3.46c-.805 0-1.46-.63-1.46-1.403V5.929c0-.776.655-1.404 1.46-1.404h16.77zm.227 1.404v1.73H3.23V5.93c0-.124.103-.222.23-.222h16.77c.123 0 .227.101.227.222zm0 2.913v9.042c0 .12-.104.221-.227.218H3.46a.225.225 0 01-.23-.218V8.842h17.227zM5.776 15.449a.579.579 0 00-.034.838c.12.126.286.19.448.19.149 0 .3-.05.418-.156l2.779-2.474a.578.578 0 00-.003-.874l-2.779-2.428a.628.628 0 00-.868.039.576.576 0 00.042.838l2.283 1.994-2.286 2.034zm5.129-1.422a.606.606 0 01-.616-.591c0-.328.274-.591.616-.591h6.588c.339 0 .616.266.616.59a.602.602 0 01-.616.591h-6.588zM6.787 6.654a.56.56 0 00-.569-.549.556.556 0 00-.568.549c0 .303.252.549.568.549a.56.56 0 00.57-.549zm1.14-.549c.317 0 .569.246.569.549a.56.56 0 01-.569.549.56.56 0 01-.568-.549c0-.305.254-.549.568-.549zm-2.851.549a.558.558 0 00-.569-.549.558.558 0 00-.569.549c0 .303.252.549.569.549a.56.56 0 00.569-.549z"
      ></path>
    </svg>
  );
};

WebRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WebRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WebRegular;
