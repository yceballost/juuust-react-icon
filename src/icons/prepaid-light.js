import React from 'react';
import PropTypes from 'prop-types';

const PrepaidLight = props => {
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
        d="M17.732 21.834H10.63c-1.028 0-1.77-.238-2.266-.731-.502-.496-.745-1.244-.745-2.28v-4.094c-1.347-.046-2.4-.428-3.138-1.139-.817-.787-1.232-1.966-1.232-3.507 0-1.54.415-2.72 1.232-3.507.737-.71 1.791-1.091 3.135-1.138v-.27c0-1.009.244-1.746.742-2.25.51-.512 1.252-.762 2.272-.762h7.1c1.032 0 1.774.244 2.272.745.5.502.74 1.241.74 2.266v13.656c0 1.036-.244 1.781-.745 2.28-.496.493-1.238.731-2.266.731zM8.177 5.438v-.27c0-.855.19-1.463.583-1.858.398-.4 1.008-.594 1.871-.594h7.1c.875 0 1.491.194 1.877.58.387.387.575 1 .575 1.871v13.656c0 1.742-.709 2.45-2.451 2.45H10.63c-1.74 0-2.451-.708-2.451-2.45v-4.094c1.345-.046 2.4-.428 3.137-1.139.818-.787 1.233-1.966 1.233-3.507 0-1.54-.415-2.72-1.233-3.507-.737-.71-1.794-1.092-3.14-1.138zM7.9 14.173c1.332 0 2.348-.331 3.025-.986.703-.678 1.059-1.723 1.059-3.104 0-1.38-.356-2.425-1.059-3.103-.675-.656-1.695-.986-3.025-.986-1.33 0-2.35.33-3.031.986-.703.678-1.062 1.722-1.062 3.103 0 1.381.356 2.426 1.06 3.104.677.655 1.697.986 3.03.986H7.9zm-.28-1.078c0 .154.126.28.28.28a.28.28 0 00.28-.28v-.42c.926-.107 1.487-.661 1.487-1.496 0-1-.802-1.321-1.487-1.416V8.107c.236.037.464.119.703.248l.003.003a.429.429 0 00.193.056.306.306 0 00.305-.305c0-.115-.067-.219-.187-.294A2.388 2.388 0 008.18 7.49v-.404a.28.28 0 00-.28-.28.28.28 0 00-.28.28v.405c-.837.096-1.364.648-1.364 1.46 0 .53.24 1.19 1.364 1.377v1.738a2.359 2.359 0 01-.958-.389.393.393 0 00-.213-.07.316.316 0 00-.32.311c0 .12.051.213.155.286.398.272.857.439 1.336.48v.41zm0-3.42V8.104c-.46.077-.737.373-.737.809 0 .28.09.604.737.762zm.56.733v1.658c.535-.081.857-.394.857-.86 0-.317-.107-.653-.857-.798zm5.174 8.252c0-.568.327-.834.832-.834.504 0 .832.266.832.834 0 .275-.076.477-.21.614-.146.148-.362.221-.622.221s-.477-.073-.622-.221c-.135-.137-.21-.339-.21-.614z"
      ></path>
    </svg>
  );
};

PrepaidLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PrepaidLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PrepaidLight;
