import React from 'react';
import PropTypes from 'prop-types';

const FilePsdRegular = props => {
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
        d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.095c-.75 0-1.409-.647-1.409-1.383l.034-2.774h-2.3A2.427 2.427 0 012 15.132v-4.096a2.427 2.427 0 012.42-2.425h2.266V3.409c0-.725.673-1.384 1.41-1.384h7.414a.86.86 0 01.613.25L21.42 7.4a.893.893 0 01.219.386zM20.277 20.5c.098 0 .194-.096.194-.168V8.896h-2.314c-1.014 0-1.891-.33-2.535-.952-.65-.63-.995-1.487-.995-2.482V3.244H8.092c-.072 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.095a2.427 2.427 0 01-2.42 2.426h-6.33l-.034 2.779c0 .05.101.16.193.16h12.185zM3.213 15.135c0 .666.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.096c0-.666-.54-1.21-1.207-1.21H4.42a1.21 1.21 0 00-1.207 1.21v4.095zM15.846 3.697L19.96 7.68H18.16c-.695 0-1.278-.21-1.692-.61-.406-.396-.622-.95-.622-1.609V3.698zM7.818 14.896l.129-.644c.325.115.75.185 1.022.185.499 0 .731-.129.731-.47 0-.283-.314-.367-.687-.466-.54-.143-1.2-.319-1.2-1.179 0-.75.59-1.081 1.377-1.081.359 0 .748.053 1.034.151l-.129.628a3.617 3.617 0 00-.888-.13c-.454 0-.6.163-.6.396 0 .3.325.39.706.497.536.149 1.183.329 1.183 1.175 0 .33-.115.594-.308.779-.26.243-.611.353-1.143.353a3.628 3.628 0 01-1.227-.194zm-1.944-3.585H4.602v3.703h.843v-1.277h.594c.488 0 .824-.115 1.04-.359.184-.207.277-.504.277-.899s-.098-.68-.297-.865c-.238-.222-.605-.303-1.185-.303zm.482 1.65c-.11.1-.222.14-.493.14v.003h-.418v-1.18h.398c.258 0 .415.037.518.13.098.089.14.237.14.436 0 .216-.047.373-.145.47zm5.93-1.65H11.143v3.703h1.255c.66 0 1.087-.137 1.364-.417.302-.314.448-.78.448-1.451 0-.667-.151-1.126-.448-1.418-.308-.308-.773-.417-1.476-.417zm.061 3.084c.378 0 .65-.115.796-.33.146-.216.196-.466.196-.92 0-.529-.081-.778-.26-.974-.169-.18-.418-.244-.83-.244h-.26v2.468h.358z"
      ></path>
    </svg>
  );
};

FilePsdRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilePsdRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilePsdRegular;
