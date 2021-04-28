import React from 'react';
import PropTypes from 'prop-types';

const ThumbDownRegular = props => {
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
        d="M21.846 10.165c0 .606-.168 1.06-.38 1.393.21.347.38.832.383 1.501 0 1.53-1.18 2.283-2.384 2.347h-3.411l-2.07.062c.002.826.005 2.356.005 3.613l.006.132.003.098c0 1.588-.936 2.535-2.5 2.535-.817 0-1.484-.252-1.926-.728-.294-.32-.636-.9-.569-1.849l.02-.23.001-.015c.008-.076.016-.148.018-.245l.003-.042c.025-1.112.04-2.515-.07-3.639-.118-1.232-1.336-1.994-1.885-2.274-.247.19-.552.308-.885.308H3.614a1.457 1.457 0 01-1.454-1.457V4.081c0-.803.653-1.456 1.454-1.456h2.59c.34.003.667.123.928.342l.06-.016c.043-.012.087-.024.133-.024l2.804-.036c.16 0 .415-.073.731-.165l.208-.06c.77-.226 1.728-.506 3.986-.506 3.613 0 4.512.33 5.075 1.854a.487.487 0 01.031.11c.076.456.081.848.011 1.196.737.462 1.149 1.142 1.149 1.93 0 .49-.096.873-.222 1.168.485.484.748 1.092.748 1.748zm-1.622 1.813a.62.62 0 01.031-.874c.241-.224.364-.538.359-.936 0-.428-.224-.8-.664-1.103a.628.628 0 01-.26-.429.62.62 0 01.142-.479c.165-.196.255-.507.255-.902 0-.563-.496-.89-.91-1.061a.617.617 0 01-.302-.863c.083-.151.165-.395.08-.941-.246-.664-.462-.998-3.901-.998-2.071 0-2.9.242-3.628.454l-.011.003-.216.062c-.409.117-.734.21-1.061.21l-2.477.033v7.521a.13.13 0 01-.002.024.13.13 0 00-.003.024v.008c.759.39 2.367 1.429 2.54 3.25.115 1.21.098 2.694.073 3.851a.544.544 0 01-.005.067c-.006.093-.013.17-.021.249l-.002.015-.017.19c-.028.412.054.723.244.927.258.28.7.336 1.028.336.89 0 1.272-.389 1.269-1.364l-.006-.12c-.005-1.418-.008-2.838-.008-4.255a.613.613 0 01.597-.619l2.686-.078h3.392c.359-.02 1.19-.168 1.19-1.118 0-.473-.125-.838-.358-1.05l-.034-.034zM5.65 10.294c0 .448-.314.762-.762.762-.45 0-.762-.31-.762-.762 0-.448.314-.762.762-.762s.762.314.762.762zm.555-6.44c.12 0 .216.099.224.216v7.62a.225.225 0 01-.224.215H3.614a.228.228 0 01-.227-.23v-7.59c0-.127.104-.228.227-.228l2.59-.002z"
      ></path>
    </svg>
  );
};

ThumbDownRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThumbDownRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThumbDownRegular;
