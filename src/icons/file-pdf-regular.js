import React from 'react';
import PropTypes from 'prop-types';

const FilePdfRegular = props => {
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
        d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.095c-.75 0-1.409-.647-1.409-1.383l.034-2.77h-2.3A2.427 2.427 0 012 15.133V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.725.673-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.3 5.132c.11.106.174.243.219.386zM20.277 20.5c.098 0 .194-.096.194-.168V8.896H18.16c-1.014 0-1.891-.33-2.535-.952-.65-.627-.995-1.487-.995-2.482V3.244H8.095c-.073 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.095a2.427 2.427 0 01-2.42 2.426h-6.33l-.034 2.779c0 .05.1.16.193.16h12.182zM3.213 15.135c0 .666.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.096c0-.666-.54-1.21-1.207-1.21H4.42a1.21 1.21 0 00-1.207 1.21v4.095zm16.745-7.457l.003.003v-.003h-.003zm0 0l-4.112-3.983v1.764c0 .659.216 1.213.622 1.608.414.4.997.61 1.692.61h1.798zM5.933 11.297H4.66V15h.84v-1.277h.597c.487 0 .824-.115 1.04-.359.184-.204.277-.504.277-.899s-.096-.68-.297-.865c-.238-.222-.605-.303-1.185-.303zm.482 1.653c-.11.1-.222.14-.493.14v.002h-.418V11.91H5.9c.26 0 .418.037.521.13.098.092.14.24.14.439 0 .216-.047.373-.145.47zm1.602-1.653H9.16c.703 0 1.17.11 1.479.417.296.292.45.754.45 1.42 0 .673-.145 1.138-.45 1.451-.278.283-.703.418-1.365.418H8.017v-3.706zm1.997 2.759c-.146.216-.417.33-.796.33H8.86v-2.47h.26c.412 0 .661.064.83.244.179.193.26.442.26.974 0 .457-.05.706-.196.922zm1.72-2.76h2.442l-.064.612H12.58v.899h1.213v.633H12.58V15h-.846v-3.703z"
      ></path>
    </svg>
  );
};

FilePdfRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilePdfRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilePdfRegular;
