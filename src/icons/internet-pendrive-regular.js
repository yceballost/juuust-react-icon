import React from 'react';
import PropTypes from 'prop-types';

const InternetPendriveRegular = props => {
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
        d="M3.23 15.291c0-5.874 2.795-8.73 8.549-8.73.33 0 .602-.275.6-.614a.61.61 0 00-.603-.614c-6.378 0-9.75 3.443-9.75 9.958 0 .34.268.614.601.614a.607.607 0 00.603-.614zm9.199.09c0-.513-.292-.75-.74-.75s-.74.237-.74.75c0 .246.068.428.188.552.13.134.32.199.552.199.233 0 .423-.065.552-.2.12-.123.188-.305.188-.551zm-.068-6.118a.607.607 0 01-.602.614c-3.59 0-5.336 1.784-5.336 5.45a.607.607 0 01-.602.614.61.61 0 01-.603-.613c0-4.37 2.261-6.678 6.541-6.678.333 0 .602.274.602.613zm8.152 4.603v2.94c0 .085-.062.152-.135.152h-.74v-3.241h.748a.161.161 0 01.127.149zm-2.404 4.184a.35.35 0 00.336-.35v-.129h-.008v-4.566c0-.19-.154-.35-.336-.35h-5.82c-1.637.054-2.44.933-2.44 2.695 0 1.756.803 2.641 2.459 2.703h5.81v-.003zm3.605-4.196c-.014-.753-.619-1.364-1.347-1.364h-.812a1.543 1.543 0 00-1.454-1.064h-5.84c-2.303.075-3.622 1.504-3.622 3.921 0 2.412 1.316 3.846 3.619 3.93h5.851c.684 0 1.263-.46 1.462-1.092h.804c.737 0 1.34-.62 1.34-1.378v-2.953z"
      ></path>
    </svg>
  );
};

InternetPendriveRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InternetPendriveRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InternetPendriveRegular;
