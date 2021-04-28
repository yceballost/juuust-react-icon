import React from 'react';
import PropTypes from 'prop-types';

const TravelBagLight = props => {
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
        d="M16.637 6.069c.546 0 1.043.56 1.043 1.17v12.64c0 .625-.485 1.171-1.043 1.171H15.57a.17.17 0 00.001.023l.002.022c0 .718-.582.775-.73.775h-.07c-.153-.003-.729-.06-.729-.78l.002-.022a.16.16 0 00.001-.02H9.875c0 .008.001.015.003.022a.102.102 0 01.003.022c0 .719-.585.775-.73.775H9.08c-.154-.003-.73-.06-.73-.78l.002-.021.001-.022H7.243c-.555 0-1.043-.548-1.043-1.17V7.242c0-.613.497-1.17 1.043-1.17H8.88v-3.38c0-.367.34-.692.733-.692h4.651c.39 0 .733.322.733.693v3.376h1.64zm-6.9-.006V2.83h4.413v3.234H9.736zM16.83 7.24v12.64c0 .2-.145.341-.193.339h-9.39c-.052-.003-.194-.139-.194-.343V7.236c0-.18.142-.33.193-.341h9.385c.057.014.199.164.199.345zM14.26 17.55c0 .07-.012.14-.036.209H9.664a.607.607 0 01-.036-.21v-5.211h4.633v5.211zM9.664 9.467a.628.628 0 00-.04.21v1.829h4.631v-1.83a.571.571 0 00-.039-.21H9.664zm5.447.212c0-.509-.277-1.038-.744-1.038H9.519c-.467 0-.744.526-.744 1.038v7.87c0 .503.262 1.037.744 1.037h4.848c.482 0 .744-.534.744-1.038V9.68z"
      ></path>
    </svg>
  );
};

TravelBagLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TravelBagLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TravelBagLight;
