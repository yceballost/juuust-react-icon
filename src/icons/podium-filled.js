import React from 'react';
import PropTypes from 'prop-types';

const PodiumFilled = props => {
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
        d="M8.824 6.056l.683.695-.157.997A1.276 1.276 0 009.866 9a1.242 1.242 0 001.305.076l.605-.333.21-.115.21.115.608.333a1.24 1.24 0 001.572-.333c.215-.275.31-.63.252-.995l-.163-.991.684-.698c.339-.344.454-.843.302-1.308a1.255 1.255 0 00-1-.849l-.921-.137-.42-.885a1.235 1.235 0 00-1.124-.72c-.484 0-.916.277-1.126.72l-.417.882-.922.14c-.462.07-.846.395-.994.846-.157.462-.042.96.297 1.308zm2.075-1.123l-1.196.182.888.986c.138.14.208.364.174.558l-.21 1.282 1.129-.557a.626.626 0 01.622.014l1.084.594.002.003s.003 0 .006-.003l-.196-1.333a.675.675 0 01.193-.575l.877-.89-1.244-.267a.643.643 0 01-.47-.344L12 3.403l-.585 1.169a.638.638 0 01-.515.361zm4.796 6.882c0-.549-.501-1.028-1.073-1.028v.006H9.387c-.572 0-1.073.479-1.073 1.025v10.028h7.381v-10.03zM2.16 14.72c0-.555.557-.899 1.073-.899h3.851v8.02H3.233c-.591 0-1.073-.423-1.073-.92v-6.2zm18.613 1.48c.622 0 1.073.335 1.073.797v4.023c0 .47-.442.82-1.075.82h-3.852V16.2h3.854z"
      ></path>
    </svg>
  );
};

PodiumFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PodiumFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PodiumFilled;
