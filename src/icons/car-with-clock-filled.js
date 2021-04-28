import React from 'react';
import PropTypes from 'prop-types';

const CarWithClockFilled = props => {
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
        d="M20.098 14.112c.367.356.72.798 1.014 1.359 1.356 2.577-.064 3.969-.123 4.025a.616.616 0 01-.426.17h-2.378c-.23 1.261-1.168 2.017-2.566 2.017s-2.336-.756-2.557-2.016H9.644c-.23 1.252-1.168 2.008-2.566 2.008-1.397 0-2.338-.756-2.565-2.008H2.798a.617.617 0 01-.596-.485c-.01-.046-.238-1.11-.157-2.7-.009-1.244.753-3.4 2.445-5.112.712-.726 1.773-1.55 3.202-2-.009-.098-.009-.205-.009-.303C7.683 4.51 10.177 2 14.695 2c4.526 0 7.02 2.51 7.02 7.064 0 2.157-.547 3.855-1.617 5.048zm.163 4.322c.187-.32.442-1.104-.239-2.386-1.044-1.986-3.056-2.124-3.072-2.124a.614.614 0 01-.507-.322c-.073-.131-1.914-3.35-6.415-3.35-2.238 0-3.773 1.079-4.672 1.983-1.364 1.381-2.093 3.236-2.084 4.272-.042.84 0 1.507.056 1.927h1.176c.222-1.269 1.168-2.033 2.574-2.033 1.407 0 2.353.767 2.575 2.033h3.406c.213-1.269 1.154-2.025 2.557-2.025 1.406 0 2.353.76 2.566 2.025h2.079zm-3.244.616v-.008c0-.947-.457-1.398-1.398-1.398-.938 0-1.39.454-1.39 1.398v.008c0 .939.449 1.401 1.39 1.401.938 0 1.398-.462 1.398-1.4zm-8.54-.016v.016c-.01.939-.466 1.393-1.399 1.393-.94 0-1.397-.463-1.397-1.41 0-.946.456-1.4 1.397-1.4.942 0 1.398.454 1.398 1.4zm8.321-8.972a.615.615 0 01-.434.179.624.624 0 01-.431-.182l-1.729-1.74a.621.621 0 01-.179-.437V5.527a.614.614 0 111.227 0v2.1l1.546 1.56a.624.624 0 010 .875z"
      ></path>
    </svg>
  );
};

CarWithClockFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CarWithClockFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CarWithClockFilled;
