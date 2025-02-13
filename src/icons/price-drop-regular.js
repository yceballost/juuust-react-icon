import React from 'react';
import PropTypes from 'prop-types';

const PriceDropRegular = props => {
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
        d="M12.05 21.555a.558.558 0 00.76 0l7.103-6.558a.558.558 0 00-.38-.972h-2.718V3.387c0-.855-.532-1.387-1.386-1.387H9.42c-.846 0-1.372.532-1.372 1.387v.256c-1.292.09-2.317.494-3.056 1.206-.877.846-1.32 2.095-1.32 3.714 0 1.62.443 2.866 1.32 3.711.739.713 1.764 1.117 3.056 1.206v.545H5.33a.56.56 0 00-.381.972l7.1 6.558zM9.168 13.48c1.29-.09 2.317-.494 3.056-1.208.874-.843 1.32-2.093 1.32-3.712 0-1.619-.443-2.868-1.32-3.711-.74-.712-1.765-1.117-3.056-1.206v-.256c0-.152.03-.216.042-.227.011-.012.07-.04.21-.04h6.009c.14 0 .204.028.22.045.018.017.046.082.046.222v11.196c0 .308.252.56.56.56H18.1l-5.67 5.235-5.67-5.235h1.847c.308 0 .56-.252.56-.56V13.48zm-.56-8.735c-2.566 0-3.815 1.25-3.815 3.818 0 2.569 1.249 3.818 3.815 3.818s3.815-1.25 3.815-3.818c0-2.569-1.25-3.818-3.815-3.818zm-1.714 5.989c.407.28.876.45 1.364.497v.276a.35.35 0 00.7.003v-.3c.39-.059.718-.199.966-.412.33-.288.507-.692.507-1.17 0-.58-.261-1.297-1.473-1.497v-1.45c.18.042.36.113.543.213l.006.002a.54.54 0 00.238.065.403.403 0 00.404-.404c0-.086-.031-.252-.236-.378a2.47 2.47 0 00-.955-.325v-.288a.35.35 0 00-.7 0v.277c-.882.106-1.437.695-1.437 1.558 0 .566.254 1.273 1.437 1.472v1.538a2.29 2.29 0 01-.877-.366.499.499 0 00-.266-.084.411.411 0 00-.418.409c0 .151.065.272.197.364zm2.711-1.079c0 .373-.24.636-.647.737v-1.41c.561.14.647.403.647.673zM8.258 6.66v1.357c-.61-.165-.61-.487-.61-.653 0-.374.223-.626.61-.704z"
      ></path>
    </svg>
  );
};

PriceDropRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PriceDropRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PriceDropRegular;
