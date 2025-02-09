import React from 'react';
import PropTypes from 'prop-types';

const PersonalComputerLight = props => {
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
        d="M2.156 13.444c0 1.53.83 2.37 2.336 2.37h2.544l-1.058 1.085-3.544.002a.276.276 0 00-.278.277c0 .154.123.278.278.278l9.868-.004a.277.277 0 00.096 0l3.697-.002a.276.276 0 00.277-.277.276.276 0 00-.277-.278l-3.633.002-1.07-1.085h2.644c1.507 0 2.336-.844 2.336-2.37v-4.56c0-.746-.196-1.326-.58-1.726-.398-.415-.989-.625-1.756-.625l-9.544.006c-.767 0-1.358.21-1.756.625-.384.4-.58.98-.58 1.725v4.557zm8.46 2.368l-2.805.001L6.753 16.9l4.93-.002-1.05-1.066a.289.289 0 01-.017-.019zM4.492 7.094l9.544-.005c.61 0 1.067.15 1.353.453.283.292.426.743.426 1.34v4.56c0 1.22-.583 1.815-1.782 1.815l-9.543.005c-1.2 0-1.782-.594-1.782-1.815v-4.56c0-.594.143-1.045.426-1.339.291-.3.748-.454 1.358-.454zM18.23 17.458h2.283c.496 0 1.328-.238 1.328-1.843l-.003-7.24c0-1.606-.832-1.844-1.328-1.844h-2.283c-.493 0-1.316.241-1.316 1.843l.003 7.241c0 1.605.823 1.843 1.316 1.843zm-.003-10.367c-.207 0-.756 0-.756 1.283l.003 7.241c0 1.283.549 1.283.756 1.283h2.283c.19 0 .767 0 .767-1.283l-.005-7.24c0-1.284-.577-1.284-.768-1.284h-2.28z"
      ></path>
    </svg>
  );
};

PersonalComputerLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PersonalComputerLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PersonalComputerLight;
