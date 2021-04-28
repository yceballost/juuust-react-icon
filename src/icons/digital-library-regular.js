import React from 'react';
import PropTypes from 'prop-types';

const DigitalLibraryRegular = props => {
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
        d="M20.89 14.607c-.554.59-1.347.89-2.355.89l-4.067.003v.776h6.616a.61.61 0 01.602.62.61.61 0 01-.602.618h-6.616v.77a.61.61 0 01-.602.62c-2.997 0-5.254 1.175-5.35 1.225a.573.573 0 01-.238.06.082.082 0 00-.018.007c-.008.003-.017.007-.028.007a.575.575 0 01-.28-.071c-.092-.048-2.366-1.226-5.35-1.226A.61.61 0 012 18.288v-8.33c0-.322.244-.594.555-.62.067-.005.89-.066 2.03.057V7.033c0-1 .272-1.79.804-2.353.552-.58 1.342-.874 2.353-.874l10.79-.006c1.011 0 1.801.294 2.353.874.532.56.804 1.35.804 2.35v5.224c0 .997-.269 1.793-.798 2.359zM5.79 7.03c0-.664.157-1.163.462-1.485.317-.33.818-.501 1.49-.501l10.79-.006c.672 0 1.177.168 1.49.502.306.322.46.82.46 1.484v5.224c0 .667-.154 1.171-.462 1.499-.317.339-.818.51-1.488.51l-4.064.002V9.954a.614.614 0 00-.555-.619h-.007c-.207-.014-3.106-.21-5.674 1.079a9.926 9.926 0 00-2.442-.832V7.03zm1.846 4.456c-1.667-.812-3.524-.927-4.429-.93v7.12c1.925.09 3.504.592 4.429.959v-7.149zm1.202 7.149a13.948 13.948 0 014.428-.958v-7.12c-.905.002-2.767.12-4.428.93v7.148z"
      ></path>
    </svg>
  );
};

DigitalLibraryRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DigitalLibraryRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DigitalLibraryRegular;
