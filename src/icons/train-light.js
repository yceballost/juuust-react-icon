import React from 'react';
import PropTypes from 'prop-types';

const TrainLight = props => {
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
        d="M2.17 14.444l.001-.005.002-.006v-2.96c0-.002 0-.004-.002-.005l-.001-.004V5.063c0-.131.042-.257.12-.35a.372.372 0 01.289-.143h10.536c.196-.001 3.42-.028 7.187 4.51 1.112 1.339 1.616 2.711 1.501 4.081-.165 1.955-1.552 3.328-2.361 3.97-.311.246-.67.378-1.042.378h-.014c-1.062-.012-4.726-.031-15.804-.031-.227 0-.41-.222-.41-.493v-2.532l-.002-.009zm.818-8.888h10.134c.003.003.017.003.034 0v5.989c0 .274.182.493.409.493h7.35c.076.345.107.686.076 1.022-.028.317-.107.611-.21.894l-.009-.001a.035.035 0 00-.008-.002H2.99v-1.994h8.927c.227 0 .409-.219.409-.493V7.018c0-.271-.182-.493-.41-.493h-8.93v-.969zm17.576 5.493l.001.003v-.003h-.001zm0 0a6.544 6.544 0 00-.842-1.272c-2.44-2.938-4.605-3.829-5.748-4.1v5.372h6.59zm-1.576 5.258c.308-.244.84-.726 1.283-1.373H2.99v1.555c10.764 0 14.35.022 15.4.03a.87.87 0 00.597-.212zM5.375 10.97H2.99V7.51h2.384v3.46zm.817 0h2.28V7.51h-2.28v3.46zm5.317 0H9.29V7.51h2.219v3.46zm10.347 7.958c0-.272-.182-.493-.409-.493H2.58c-.227 0-.409.221-.409.493s.182.493.409.493h18.868c.227 0 .41-.221.41-.493z"
      ></path>
    </svg>
  );
};

TrainLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrainLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrainLight;
