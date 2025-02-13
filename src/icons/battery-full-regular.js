import React from 'react';
import PropTypes from 'prop-types';

const BatteryFullRegular = props => {
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
        d="M17.8 7.544c0-1.053-.275-1.832-.84-2.384-.566-.555-1.373-.824-2.46-.824h-.188V3.67c0-.474-.134-.849-.406-1.112-.269-.266-.655-.398-1.146-.398h-2.224c-.487 0-.874.134-1.142.406-.27.263-.407.636-.407 1.104v.666H8.8c-1.079 0-1.883.275-2.457.84-.568.558-.843 1.331-.843 2.368v11.092c0 1.065.277 1.849.849 2.398.566.546 1.367.812 2.448.812h5.706c1.081 0 1.882-.266 2.448-.812.571-.55.849-1.333.849-2.398V7.544zM9.853 3.67v.666h3.591V3.67c0-.364-.113-.478-.15-.515h-.001c-.037-.037-.151-.15-.53-.15H10.54c-.372 0-.49.116-.53.155-.038.036-.156.151-.156.51zm7.078 14.966V7.544c0-.818-.193-1.404-.588-1.787-.395-.387-.997-.575-1.84-.575H8.797c-.835 0-1.434.194-1.838.589-.397.392-.59.969-.59 1.773v11.092c0 .826.193 1.415.59 1.796.395.38.995.566 1.838.566h5.706c.84 0 1.442-.185 1.837-.566.395-.381.589-.97.591-1.796zM15.211 18V7.463H8.085V18c0 .661.552 1.2 1.233 1.2h4.661c.678 0 1.232-.539 1.232-1.2zm.869-10.96a.427.427 0 00-.434-.423H7.648a.429.429 0 00-.434.423V18c0 1.13.944 2.045 2.104 2.045h4.658c1.163 0 2.104-.916 2.104-2.045V7.04z"
      ></path>
    </svg>
  );
};

BatteryFullRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryFullRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryFullRegular;
