import React from 'react';
import PropTypes from 'prop-types';

const DataDataSereyeFilled = props => {
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
        d="M7.908 3.134c.112.314.532.586 1.226.788.732.212 1.692.33 2.723.333 1.023 0 1.983-.118 2.714-.33.678-.197 1.093-.46 1.216-.763 0-.005.006-.01.006-.01-.093-.328-.502-.609-1.227-.819-.726-.213-1.692-.33-2.717-.33-1.026 0-1.992.117-2.723.33-.689.2-1.11.477-1.221.793.003.003.003.003.003.008zM21.683 19.27l.003.176c-.014 1.034-.658 2.238-2.417 2.238-1.76 0-2.395-1.198-2.406-2.227v-.19c.022-.893.515-1.921 1.79-2.176v-1.252H5.025l.006 1.252c1.28.249 1.773 1.28 1.79 2.179l.003.18c-.02 1.033-.662 2.237-2.418 2.237-1.759 0-2.395-1.199-2.406-2.227 0-.061 0-.131.003-.19.022-.894.515-1.919 1.784-2.174l-.008-1.857a.576.576 0 01.182-.426.627.627 0 01.442-.176h6.79c-.001-.011-.004-.021-.006-.032a.154.154 0 01-.008-.041v-1.274c-.767-.04-1.482-.146-2.053-.309-.832-.243-1.255-.571-1.255-.974V9.975c.277.201.658.375 1.11.51.778.226 1.798.35 2.87.35 1.079 0 2.098-.124 2.872-.35a3.346 3.346 0 001.095-.516v2.034c0 .403-.423.73-1.255.975-.591.17-1.336.277-2.137.313v1.27a.157.157 0 01-.01.046.33.33 0 00-.007.026h6.868c.345 0 .622.269.622.602v1.857c1.28.25 1.77 1.278 1.784 2.177zM4.417 18.235c.942 0 1.149.575 1.16 1.056v.135c-.011.697-.406 1.053-1.17 1.053-.763 0-1.155-.347-1.16-1.037v-.002l.002-.14c.011-.485.224-1.065 1.168-1.065zm16.023 1.196c-.009.7-.404 1.053-1.171 1.053-.762 0-1.154-.35-1.163-1.042V19.3c.012-.48.222-1.042 1.13-1.062.006 0 .012.002.019.004.006.002.012.004.02.004.006 0 .013-.002.02-.004a.075.075 0 01.021-.004c.908.017 1.113.58 1.12 1.053l.004.14zM9.134 6.95c-.65-.19-1.12-.48-1.263-.768V3.9c.266.207.636.384 1.11.516.778.226 1.798.35 2.87.35 1.073 0 2.09-.124 2.872-.35.462-.135.826-.3 1.095-.505v2.266c-.135.244-.53.563-1.25.774-.725.212-1.691.324-2.714.324-1.028 0-1.988-.112-2.72-.324zM7.871 9.22c.143.294.614.577 1.263.768.732.213 1.692.33 2.72.33 1.023 0 1.99-.117 2.715-.33.72-.213 1.114-.532 1.249-.773V6.927c-.286.21-.658.387-1.095.51-.774.227-1.796.35-2.872.35-1.072 0-2.092-.123-2.87-.35-.452-.129-.827-.303-1.11-.504V9.22z"
      ></path>
    </svg>
  );
};

DataDataSereyeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DataDataSereyeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DataDataSereyeFilled;
