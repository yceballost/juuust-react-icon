import React from 'react';
import PropTypes from 'prop-types';

const ApiLight = props => {
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
        d="M21.843 5.825c0-.67-.564-1.216-1.255-1.216H3.41c-.692 0-1.255.547-1.255 1.216v12.333c0 .67.563 1.216 1.255 1.216h17.177c.691 0 1.255-.546 1.255-1.216V5.825zM3.41 5.405a.428.428 0 00-.434.42v2.008h18.045V5.825a.426.426 0 00-.434-.42H3.41zm0 13.174a.426.426 0 01-.434-.42V8.625h18.045v3.622a.865.865 0 00-.423.224l-.426.415c-.148-.056-.3-.101-.46-.14v-.493a.845.845 0 00-.857-.832h-.686a.847.847 0 00-.857.832v.493c-.16.039-.314.084-.46.14l-.425-.412a.908.908 0 00-1.224 0l-.499.485a.814.814 0 00-.255.593c0 .222.09.432.253.591l.422.41a3.414 3.414 0 00-.14.45h-.51a.847.847 0 00-.857.832v.664c0 .46.384.832.858.832h.51c.033.137.078.294.14.448l-.423.41a.786.786 0 00-.213.389H3.41zm17.61-.423c0 .232-.195.42-.433.42v-.003h-5.13l.449-.431a.39.39 0 00.067-.48c-.112-.19-.204-.537-.25-.8a.407.407 0 00-.405-.334l-.883-.036.037-.7h.846c.201 0 .375-.14.406-.334.045-.26.137-.613.25-.801a.387.387 0 00-.068-.476l-.625-.661.563-.485.625.605c.123.12.314.151.473.076.244-.118.53-.202.846-.252a.4.4 0 00.345-.392l.036-.855.723.037v.818c0 .196.143.36.345.392.316.05.585.131.845.255a.418.418 0 00.471-.076l.468-.431v4.944zM6.348 7.228a.563.563 0 01-.572-.551.56.56 0 01.572-.552.56.56 0 01.571.552.56.56 0 01-.571.551zm1.143-.551c0 .302.254.551.571.551a.558.558 0 00.569-.551.558.558 0 00-.569-.552.56.56 0 00-.571.552zm-2.855.551a.563.563 0 01-.571-.551.56.56 0 01.571-.552.56.56 0 01.572.552.56.56 0 01-.572.551zm15.219 8.939c0 .877-.44 1.302-1.345 1.302s-1.344-.425-1.344-1.302.44-1.303 1.344-1.303c.905 0 1.345.426 1.345 1.303zm-1.345-2.101c1.356 0 2.165.784 2.165 2.098 0 1.314-.81 2.098-2.165 2.098-1.356 0-2.165-.784-2.165-2.098 0-1.314.81-2.098 2.165-2.098zm-12.1-2.9H5.5l-1.208 3.611h.785l.28-.907h1.17l.3.907h.883l-1.303-3.61zm-.474.903l.395 1.204h-.782l.376-1.204h.011zm2.199-.902h1.238c.566 0 .924.078 1.157.297.196.179.291.46.291.846 0 .386-.09.675-.269.876-.21.239-.538.348-1.014.348h-.58v1.246h-.823v-3.613zm1.706 1.61c-.104.101-.216.138-.48.138h-.408v-1.152h.386c.255 0 .406.037.507.127.096.09.138.232.138.428 0 .21-.048.364-.143.46zm1.571-1.61h.824v3.61h-.824v-3.61z"
      ></path>
    </svg>
  );
};

ApiLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ApiLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ApiLight;
