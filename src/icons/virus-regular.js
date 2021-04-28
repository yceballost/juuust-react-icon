import React from 'react';
import PropTypes from 'prop-types';

const VirusRegular = props => {
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
        d="M21.658 14.798a.62.62 0 00-.412-.773l-.957-.291a3.973 3.973 0 00-.297-1.291l.635-.082a.616.616 0 00.536-.692.615.615 0 00-.684-.535l-1.095.14a12.788 12.788 0 00-.793-1.117l.857-.426a.616.616 0 00.28-.823.628.628 0 00-.832-.28l-1.112.557a37.011 37.011 0 00-1.17-1.25l.84-.84a.606.606 0 000-.87.624.624 0 00-.874 0l-.84.845a25.203 25.203 0 00-1.253-1.168l.56-1.11a.624.624 0 00-.271-.831.612.612 0 00-.832.272l-.437.862a11.06 11.06 0 00-1.112-.781l.14-1.101A.622.622 0 0012 2.521a.627.627 0 00-.692.535l-.081.65a7.88 7.88 0 00-.33-.115 3.548 3.548 0 00-.956-.165l-.305-.989a.622.622 0 00-.776-.403.612.612 0 00-.403.773l.263.849c-.28.114-.521.271-.734.437l-.653-.65a.624.624 0 00-.874 0 .62.62 0 000 .87l.645.65c-.166.205-.33.452-.446.732l-.832-.255a.614.614 0 00-.776.403.61.61 0 00.404.773l.955.306a3.485 3.485 0 00.185 1.016c.03.09.061.184.103.278l-.627.081a.614.614 0 00-.535.683c.042.311.305.544.61.544h.082l1.064-.132c.166.266.345.535.56.824.051.07.102.135.154.202l.068.086-.824.42a.617.617 0 00.552 1.104l1.081-.543c.356.403.743.82 1.18 1.266l-.816.815a.62.62 0 000 .871c.115.115.28.182.437.182a.65.65 0 00.437-.182l.816-.815c.437.428.865.823 1.26 1.168l-.543 1.078a.615.615 0 00.551.897c.222 0 .446-.12.552-.336l.42-.832c.395.313.765.577 1.12.798l-.13 1.053c-.051.34.195.65.534.692h.073a.61.61 0 00.61-.535l.074-.616.11.043c.085.033.165.065.245.088.345.113.667.163.955.171l.297.93a.61.61 0 00.586.426.726.726 0 00.19-.025.622.622 0 00.404-.773l-.247-.799c.289-.117.544-.28.76-.453l.618.616c.124.118.28.182.437.182a.65.65 0 00.437-.182.62.62 0 000-.871l-.627-.628c.19-.246.347-.501.445-.764l.815.255a.52.52 0 00.182.03.626.626 0 00.594-.437zm-4.756 1.25c.692 0 1.081-.387 1.426-.731.832-.83 1.972-1.967-3-6.939-2.084-2.081-3.653-3.257-4.799-3.61a2.33 2.33 0 00-.686-.115c-.518 0-.972.23-1.468.734-.708.7-.882 1.3-.619 2.145.356 1.146 1.54 2.709 3.62 4.79 2.938 2.922 4.537 3.726 5.526 3.726zm-6.317.028a.62.62 0 00-.773-.412l-.932.294a2.724 2.724 0 00-.642-.882l.42-.799a.63.63 0 00-.255-.84.627.627 0 00-.84.263l-.429.816a2.947 2.947 0 00-.619-.073c-.173 0-.322.017-.462.033l-.288-.947a.63.63 0 00-.776-.403.613.613 0 00-.412.765l.289.938a3 3 0 00-.883.644l-.798-.428a.619.619 0 00-.835.263.61.61 0 00.258.832l.798.429a2.88 2.88 0 00-.008 1.078c-.004.004-.007.004-.009.004-.002 0-.004 0-.008.005l-.941.288a.62.62 0 00-.412.773c.084.264.33.434.594.434a.488.488 0 00.182-.03l.938-.289c.009 0 .009-.008.009-.008.182.378.397.666.636.88l-.429.814a.621.621 0 00.546.905.62.62 0 00.544-.33l.437-.816c.215.048.428.073.627.073.165 0 .314-.017.454-.033l.288.938a.626.626 0 00.773.412.624.624 0 00.412-.773l-.288-.939c.263-.14.594-.344.874-.641l.806.426c.09.05.19.067.289.067.224 0 .44-.118.546-.33a.61.61 0 00-.258-.833l-.792-.42c.075-.314.092-.675.025-1.095l.933-.289a.61.61 0 00.411-.764zm-2.653.832c.118.395.466 1.566-1.016 2.047-.064.023-.14.048-.213.07-.081.031-.322.09-.594.09-.479 0-1.064-.137-1.403-1.241l-.006-.021c-.119-.41-.453-1.567.99-2.03a2.78 2.78 0 01.22-.067c.09-.025.322-.08.603-.08.479 0 1.078.14 1.417 1.223l.002.009z"
      ></path>
    </svg>
  );
};

VirusRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VirusRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VirusRegular;
