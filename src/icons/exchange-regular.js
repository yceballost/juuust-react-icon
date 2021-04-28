import React from 'react';
import PropTypes from 'prop-types';

const ExchangeRegular = props => {
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
        d="M19.158 3.955l2.518 2.535a.766.766 0 01.106.787.724.724 0 01-.66.42l-.824.009c-.16 1.005-.68 2.947-2.359 4.482 3.56 2.134 3.602 6.09 3.602 6.131 0 .972-.792 1.765-1.764 1.765a1.77 1.77 0 01-1.765-1.753c-.008-.583-.277-3.3-4.137-3.832l-.002.002-.004.006c-.434.415-1.061.625-1.862.625-.802 0-1.43-.21-1.86-.628-.004-.002-.007-.006-.009-.01a.024.024 0 00-.003-.004c-4.056.538-4.243 3.485-4.249 3.849a1.774 1.774 0 01-1.765 1.742 1.77 1.77 0 01-1.764-1.759c0-.045.044-4.033 3.675-6.16-1.639-1.518-2.154-3.406-2.314-4.456L2.892 7.7a.723.723 0 01-.653-.417.748.748 0 01.092-.79l2.56-2.585c.076-.101.247-.2.44-.222a.729.729 0 01.538.154l.12.12 2.46 2.485c.219.27.255.577.132.838a.732.732 0 01-.661.417l-.636.006c.23.905.93 2.255 3.02 2.854.422-.328.983-.504 1.694-.504.712 0 1.277.176 1.7.507 2.09-.6 2.79-1.952 3.023-2.857l-.642-.006a.723.723 0 01-.652-.414.749.749 0 01.09-.79l2.627-2.659a.73.73 0 011.014.118zm-.026 3.107l.037-.572.787-.003-1.364-1.375-1.356 1.375.815.009-.002.647c-.045.63-.43 3.344-3.65 4.46a3.532 3.532 0 01.059 1.756c4.548.831 4.764 4.498 4.77 4.963a.542.542 0 101.081.003c-.003-.151-.095-3.838-3.745-5.465l-.995-.44.897-.619c2.35-1.63 2.633-4.235 2.666-4.74zM4.11 18.862c.297 0 .538-.24.544-.537.005-.468.226-4.171 4.885-4.98a3.592 3.592 0 01-.082-.746c0-.372.054-.7.146-.997-3.224-1.117-3.605-3.829-3.65-4.456l-.045-.653.86-.003-1.361-1.375L4.046 6.49l.728.006.095.566c.031.504.32 3.098 2.625 4.722l.89.628-.997.434c-3.72 1.613-3.812 5.328-3.815 5.485 0 .288.241.529.538.532zm9.207-6.263c0 .241-.025.449-.075.617a.888.888 0 01-.23.411c-.25.239-.689.286-1.017.286-.325 0-.767-.047-1.01-.283a.896.896 0 01-.23-.414 2.167 2.167 0 01-.076-.614c0-.28.036-.507.103-.692a.852.852 0 01.202-.339c.247-.238.686-.288 1.011-.288.325 0 .768.05 1.014.288a.895.895 0 01.202.34c.07.184.106.408.106.688z"
      ></path>
    </svg>
  );
};

ExchangeRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ExchangeRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ExchangeRegular;
