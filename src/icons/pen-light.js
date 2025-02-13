import React from 'react';
import PropTypes from 'prop-types';

const PenLight = props => {
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
        d="M20.548 3.527l.083.084c.448.465 2.552 2.922-.117 5.566L9.029 20.592l-.007.003c-.003 0-.005 0-.007.002a.105.105 0 00-.006.01c-.002.005-.004.01-.008.013a.415.415 0 01-.294.12c-.007 0-.014-.002-.021-.004-.007-.002-.014-.004-.021-.004l-6.02 1.103a.41.41 0 01-.485-.465l.959-6.224c0-.005.003-.009.005-.013a.038.038 0 00.006-.01.368.368 0 01.104-.204L14.788 3.491c2.093-2.07 4.26-1.426 5.591-.132.058.056.114.112.169.168zm-1.452 5.894l.83-.824c2.016-1.997.745-3.756.106-4.42l-.11-.11v-.001l-.123-.124c-.652-.633-2.386-1.885-4.422.126l-.847.837 4.566 4.516zM4.34 20.69l-1.073-1.062-.199 1.294 1.272-.232zm1.79-3.49l-2.014-1.995 9.83-9.723 2.013 1.995L6.13 17.2zm-2.709 1.42l1.905 1.888 2.515-.462-4.025-3.98-.395 2.554zm5.286 1.128L6.715 17.78l9.83-9.722 1.969 1.946-9.807 9.745z"
      ></path>
    </svg>
  );
};

PenLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PenLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PenLight;
