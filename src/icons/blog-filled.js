import React from 'react';
import PropTypes from 'prop-types';

const BlogFilled = props => {
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
        d="M20.955 9.63c.465.037.902.238 1.235.566.362.367.566.86.572 1.375a1.85 1.85 0 01-.577 1.328c-.135.132-1.023.925-2.067 1.855v3.165c0 1.14-.314 2.05-.93 2.703-.656.694-1.605 1.045-2.818 1.045H6.75c-1.215 0-2.162-.35-2.817-1.045-.616-.653-.93-1.563-.93-2.703V5.807c0-1.14.314-2.107.93-2.76.655-.694 1.605-1.044 2.818-1.044h9.619c1.213 0 2.162.35 2.818 1.045.616.652.93 1.619.93 2.759v3.96c.266-.112.551-.16.837-.137zM16.37 6.202H6.807a.562.562 0 00-.56.56c0 .308.252.56.56.56h9.563c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56zm-9.563 3.4h9.563c.308 0 .56.252.56.56 0 .309-.252.56-.56.56H6.807a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56zm9.535 3.4H6.807a.562.562 0 00-.56.561c0 .308.252.56.56.56h8.266l1.269-1.12zm-3.404 4.522H6.807a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56h6.507l-.376 1.12zm2.83-.412c2.173-1.922 5.403-4.787 5.63-5.011a.74.74 0 00.24-.538.825.825 0 00-.767-.818.747.747 0 00-.594.241c-.294.295-4.36 3.885-5.511 4.903l-.139.122-.557 1.661 1.697-.56z"
      ></path>
    </svg>
  );
};

BlogFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BlogFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BlogFilled;
