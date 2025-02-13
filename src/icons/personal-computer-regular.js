import React from 'react';
import PropTypes from 'prop-types';

const PersonalComputerRegular = props => {
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
        d="M2.171 13.268c0 1.59.916 2.5 2.513 2.5h2.11l-.549.574-3.536.001a.55.55 0 000 1.098l13.11-.005a.55.55 0 000-1.099l-3.622.002-.557-.574 2.204-.002c1.596 0 2.512-.913 2.512-2.501v-4.28c0-.776-.213-1.387-.636-1.815-.434-.443-1.067-.667-1.877-.667l-9.16.006c-.809 0-1.442.224-1.876.666-.423.429-.636 1.04-.636 1.815v4.28zm7.941 2.498h-1.8l-.548.575 2.905-.001-.557-.574zM4.684 7.58l9.16-.005c1.008 0 1.437.42 1.437 1.406v4.28c0 1-.43 1.426-1.438 1.426l-9.16.005c-1.005 0-1.436-.425-1.436-1.425v-4.28c0-.987.428-1.407 1.437-1.407zm13.683 9.838h1.997c.435 0 1.449-.196 1.449-2.017l-.003-6.88c0-1.82-1.014-2.016-1.448-2.016h-1.997c-.474 0-.872.218-1.121.61-.216.34-.32.799-.32 1.406l.006 6.88c0 .608.104 1.067.317 1.406.25.395.647.61 1.12.61zm-.003-9.852c-.126 0-.176.04-.22.115-.06.093-.155.322-.155.84l.003 6.88c0 .518.095.748.154.84.048.076.095.115.221.115h1.997c.13 0 .18-.042.23-.117.059-.093.157-.323.157-.835l-.003-6.88c0-.515-.098-.745-.157-.837-.047-.076-.1-.118-.23-.118h-1.997v-.003z"
      ></path>
    </svg>
  );
};

PersonalComputerRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PersonalComputerRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PersonalComputerRegular;
