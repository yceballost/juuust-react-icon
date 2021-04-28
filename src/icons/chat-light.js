import React from 'react';
import PropTypes from 'prop-types';

const ChatLight = props => {
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
        d="M5.097 21.27c-.411 0-.77-.341-.77-.728v-3.109a2.324 2.324 0 01-1.501-.767c-.432-.482-.67-1.14-.67-1.852v-9.46A2.64 2.64 0 014.795 2.72h14.373A2.638 2.638 0 0121.8 5.355v9.459a2.64 2.64 0 01-2.636 2.636H8.08c-.418.622-2.219 3.291-2.328 3.45-.21.306-.474.37-.656.37zM4.795 3.283a2.08 2.08 0 00-2.079 2.075v9.457c0 1.202.793 2.076 1.888 2.076.154 0 .28.126.28.28v3.372c0 .065.099.168.21.168.054 0 .118-.014.194-.126.12-.176 2.386-3.537 2.409-3.571a.28.28 0 01.232-.123h11.239a2.076 2.076 0 002.072-2.076v-9.46c0-1.145-.93-2.072-2.075-2.075l-14.37.003zm13.431 4.89H5.733a.28.28 0 01-.28-.28.28.28 0 01.28-.28h12.493c.154 0 .28.126.28.28 0 .154-.126.28-.28.28zm-3.823 4.37h-8.67a.281.281 0 01-.28-.28.28.28 0 01.28-.28h8.67c.154 0 .28.126.28.28 0 .154-.126.28-.28.28z"
      ></path>
    </svg>
  );
};

ChatLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChatLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChatLight;
