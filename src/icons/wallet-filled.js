import React from 'react';
import PropTypes from 'prop-types';

const WalletFilled = props => {
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
        d="M20.246 10.896c.79 0 1.432.659 1.432 1.471v2.888c0 .81-.642 1.468-1.432 1.468h-.086l.002 1.596c0 .678-.255 1.317-.722 1.796a2.42 2.42 0 01-1.748.745l-13.213.006c-.745-.006-1.398-.28-1.846-.768-.445-.487-.661-1.146-.622-1.907V5.422c0-.678.258-1.317.723-1.795a2.427 2.427 0 011.748-.746l12.327-.868c.18-.006.331.048.454.165.123.118.19.28.19.454v1.395a1.502 1.502 0 011.183 1.465v1.443c.341.126.644.319.885.582.445.488.658 1.149.619 1.916l.003 1.465h.103v-.003zM5.031 4.846c-.81 0-1.465.653-1.493 1.462a1.32 1.32 0 01-.32-.851v-.034c0-.347.132-.672.37-.919.238-.246.558-.38.936-.383l11.725-.827v.748l-11.218.804zm-.292 1.849c0 .013-.003.025-.006.036l-.005.023 12.703.002V5.49c0-.148-.131-.271-.291-.271l-.286.022h-.005L5.07 6.084c-.202.003-.333.126-.333.272v.339h.002zm15.732 8.557v-2.888c0-.126-.101-.23-.225-.23h-7.963c-.84 0-1.527.704-1.527 1.566v.213c0 .863.684 1.566 1.527 1.566h7.963c.124.003.225-.1.225-.227zm-7.023-1.361c0-.552-.434-1-.972-1a.984.984 0 00-.972 1c0 .552.434 1 .972 1s.972-.448.972-1z"
      ></path>
    </svg>
  );
};

WalletFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WalletFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WalletFilled;
