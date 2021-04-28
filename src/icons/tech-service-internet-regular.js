import React from 'react';
import PropTypes from 'prop-types';

const TechServiceInternetRegular = props => {
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
        d="M5.441 16.948h13.11c1.098 0 1.94-.328 2.504-.973.52-.599.787-1.467.787-2.582V8.455c0-1.115-.264-1.984-.787-2.583-.563-.644-1.406-.972-2.505-.972H5.441c-1.1 0-1.94.328-2.504.972-.52.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.983.787 2.585.563.642 1.406.97 2.504.97zM3.783 6.61c.345-.395.885-.588 1.658-.588l13.11-.003c.77 0 1.313.194 1.658.589.339.389.512 1.01.512 1.846v4.938c0 .835-.173 1.457-.512 1.846-.345.395-.888.588-1.659.588H5.441c-.77 0-1.313-.193-1.658-.588-.339-.39-.513-1.011-.513-1.846V8.455c0-.835.174-1.457.513-1.844zm17.465 12.521H2.744a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h18.504c.308 0 .56.252.56.56 0 .308-.252.56-.56.56zM15.251 7.11c-.294 0-.552.053-.77.154-.342.16-.647.468-.908.916-.107.18-.196.367-.272.563l-.008.008-3.779 1.762h-.011a3.644 3.644 0 00-1.118-.198c-.291 0-.552.053-.77.154-.342.16-.647.467-.908.915-.109.188-.204.381-.28.586a.672.672 0 00.068.622.617.617 0 00.51.26.712.712 0 00.31-.073l.493-.23.314.169-.073.35-.493.23a.664.664 0 00-.403.619c.008.26.185.484.45.582a3.65 3.65 0 001.14.208c.292 0 .553-.054.771-.155.34-.165.644-.473.908-.921.106-.18.196-.367.271-.563l.009-.008 3.781-1.762h.011c.118.042.603.198 1.118.198.294 0 .552-.053.77-.154.342-.16.647-.467.908-.915.11-.188.204-.381.28-.586a.672.672 0 00-.067-.622.617.617 0 00-.51-.26.713.713 0 00-.31.073l-.494.23-.313-.169.072-.35.493-.23c.258-.12.412-.358.4-.619-.01-.26-.181-.482-.45-.582l-.029-.01c-.129-.04-.604-.192-1.111-.192zm0 .56c.476 0 .947.174.947.174.112.042.114.115.008.165l-.552.258a.49.49 0 00-.24.302l-.13.611c-.02.126.037.25.146.314l.55.294c.064.03.136.047.206.045a.437.437 0 00.18-.037l.552-.257a.166.166 0 01.072-.02c.056 0 .079.05.05.132 0 0-.33.916-.896 1.182-.16.075-.347.1-.535.1-.476 0-.946-.173-.946-.173a.525.525 0 00-.174-.028.627.627 0 00-.227.042l-3.82 1.787a.597.597 0 00-.27.294s-.33.916-.896 1.182c-.16.076-.347.101-.535.101-.476 0-.947-.174-.947-.174-.112-.042-.115-.114-.008-.168l.552-.257a.49.49 0 00.24-.303l.13-.61a.31.31 0 00-.146-.314l-.55-.294a.447.447 0 00-.207-.045.437.437 0 00-.179.036l-.552.258a.166.166 0 01-.072.02c-.056 0-.079-.051-.05-.132 0 0 .33-.916.895-1.182.16-.076.348-.101.535-.101.477 0 .947.174.947.174.056.02.115.028.174.028a.625.625 0 00.227-.043l3.82-1.784a.598.598 0 00.27-.294s.33-.916.896-1.182c.16-.073.347-.1.535-.1z"
      ></path>
    </svg>
  );
};

TechServiceInternetRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TechServiceInternetRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TechServiceInternetRegular;
