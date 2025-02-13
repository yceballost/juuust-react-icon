import React from 'react';
import PropTypes from 'prop-types';

const EcoFilled = props => {
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
        d="M9.269 10.497c-.776-1.437-1.843-2.423-3.174-2.93a.54.54 0 01.387-1.008c1.58.605 2.837 1.756 3.737 3.426l.092.176-.777.822a.455.455 0 01-.069-.11 15.789 15.789 0 00-.196-.376zm.266.493c-.745.567-1.752.86-3.003.86-2.913 0-4.518-1.591-4.518-4.479V4.483c0-.905.737-1.639 1.641-1.639h2.902c1.418 0 2.524.379 3.292 1.124.79.77 1.193 1.907 1.193 3.38 0 1.15-.25 2.09-.731 2.813.913 1.867 1.328 4.13 1.535 6.008.383-1.332.846-2.532 1.377-3.53-.386-.686-.584-1.549-.584-2.57 0-1.474.4-2.611 1.193-3.381.767-.745 1.874-1.124 3.291-1.124h2.905c.905 0 1.639.734 1.642 1.639v2.888c0 2.888-1.606 4.479-4.519 4.479-1.37 0-2.423-.33-3.185-1.011.03-.027.044-.068.06-.11a.574.574 0 01.027-.067c1.079-2.145 2.426-3.378 4.006-3.666a.538.538 0 10-.194-1.062c-1.862.339-3.422 1.68-4.64 3.984l.741.92c-.801 1.655-1.416 3.756-1.828 6.254a.54.54 0 01-1.068.116l-.004-.023-.004-.024c-.053-.324-.08-.802-.116-1.406l-.002-.037-.005-.093c-.107-1.878-.28-4.923-1.404-7.355z"
      ></path>
    </svg>
  );
};

EcoFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EcoFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EcoFilled;
