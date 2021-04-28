import React from 'react';
import PropTypes from 'prop-types';

const BicycleBikeFilled = props => {
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
        d="M6.978 11.667l1.257-2.563-.857-1.827h-.812a.54.54 0 01-.53-.552c0-.305.238-.551.53-.551h2.736a.54.54 0 01.53.551.541.541 0 01-.53.552h-.745L9.16 8.56h5.156V5.994c0-.26.174-.484.418-.54.154-.037 1.538-.33 2.353.353.255.213.56.613.56 1.305a.541.541 0 01-.53.552.542.542 0 01-.532-.552c0-.272-.087-.378-.165-.443-.23-.193-.68-.22-1.042-.193V8.98l1.336 2.7s-.35.135-.476.188c-.12.05-.51.23-.51.23l-.882-1.782-1.97 3.956c.306.285.48.714.48 1.263 0 .731-.303 1.25-.827 1.493l.317.658h.482c.294 0 .53.25.53.555a.541.541 0 01-.53.552h-.81a.522.522 0 01-.473-.306l-.639-1.33c-.652-.112-1.073-.546-1.193-1.216H9.47s.014-.21.014-.552a12.712 12.712 0 00-.014-.551h.002v-.003h.816c.08-.23.21-.418.372-.569l-1.846-3.924-.846 1.728s-.39-.18-.52-.232a16.474 16.474 0 00-.412-.15l-.06-.021zm0 0l-1.7 3.473a.577.577 0 00.019.54.53.53 0 00.454.264h3.722c-.19 2.137-1.507 3.361-3.706 3.361-2.378 0-3.742-1.42-3.742-3.899s1.364-3.9 3.742-3.9c.446 0 .84.065 1.21.16zm2.495 3.168c-.12-1.265-.633-2.214-1.501-2.762l-1.353 2.764h2.852v-.002h.002zm2.364-.948c-.023-.002-.046-.005-.07-.005a.59.59 0 00-.066.005.95.95 0 01-.037.004L9.678 9.667h4.297l-2.101 4.224a1.35 1.35 0 01-.037-.004zm-.07 1.102c-.403 0-.526.129-.526.549 0 .417.129.549.527.549.406 0 .526-.13.526-.55 0-.422-.12-.548-.527-.548zm9.947.417c0-2.476-1.364-3.9-3.742-3.9-.462 0-.874.071-1.252.172l1.709 3.46a.565.565 0 01-.23.744.516.516 0 01-.244.062.53.53 0 01-.473-.3l-1.754-3.546c-.972.636-1.498 1.768-1.498 3.308 0 2.48 1.364 3.9 3.742 3.9s3.742-1.42 3.742-3.9z"
      ></path>
    </svg>
  );
};

BicycleBikeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BicycleBikeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BicycleBikeFilled;
