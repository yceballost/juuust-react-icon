import React from 'react';
import PropTypes from 'prop-types';

const GroupLight = props => {
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
        d="M9.166 11.04c.652.639 1.6.964 2.812.964 1.213 0 2.16-.322 2.818-.964.683-.664 1.03-1.65 1.03-2.932 0-1.283-.347-2.272-1.03-2.939-.658-.641-1.608-.969-2.818-.969s-2.157.328-2.812.972c-.678.664-1.023 1.655-1.023 2.936 0 1.282.345 2.268 1.023 2.932zm-.241-2.932c0-1.06.263-1.855.784-2.365.501-.495 1.266-.745 2.272-.745 1 0 1.764.25 2.271.745.524.513.788 1.308.788 2.365 0 1.056-.264 1.848-.787 2.358-.508.493-1.272.742-2.275.742s-1.768-.249-2.269-.742c-.521-.507-.784-1.302-.784-2.358zm-3.656 2.58c-.21.204-.316.548-.316 1.019 0 .47.106.812.313 1.017.202.199.533.3.978.3.448 0 .779-.101.983-.3.21-.205.317-.546.317-1.014 0-.47-.107-.813-.317-1.017-.204-.199-.535-.303-.983-.303-.443-.002-.77.098-.975.297zm-.546 2.61c.356.345.868.521 1.524.521.658 0 1.174-.177 1.526-.524.37-.361.558-.896.558-1.59 0-.693-.188-1.23-.558-1.592-.355-.347-.868-.524-1.526-.524-.656 0-1.168.18-1.524.527-.367.361-.555.896-.555 1.591s.188 1.23.555 1.591zm12.056-2.625c-.21.205-.317.55-.317 1.02 0 .468.107.81.317 1.014.204.199.535.3.983.3.448 0 .776-.101.98-.3.208-.205.314-.546.314-1.014 0-.47-.106-.812-.316-1.02-.202-.198-.532-.3-.978-.3-.448 0-.779.102-.983.3zm-1.1 1.02c0 .695.187 1.23.557 1.591.355.345.868.521 1.526.518.659 0 1.171-.173 1.527-.52.37-.362.554-.897.554-1.59 0-.694-.187-1.232-.554-1.593-.356-.347-.869-.524-1.527-.524-.658 0-1.17.177-1.526.527-.37.361-.558.896-.558 1.59zm5.383 5.933v-.55c0-.565-.165-1.044-.487-1.38-.353-.376-.888-.566-1.547-.566h-1.207c.563.653.894 1.507.966 2.496h2.275zm-3.045.42v.941H5.942v-.941c0-1.03.305-1.9.885-2.513.636-.67 1.602-1.028 2.81-1.028h4.677c1.207 0 2.182.359 2.818 1.028.58.617.885 1.485.885 2.513zm-12.843-.404c.07-.988.395-1.843.958-2.495H4.978c-.658 0-1.193.193-1.546.566-.314.333-.488.812-.488 1.378v.551h2.23zm16.672-.565c0-.773-.243-1.443-.706-1.93-.504-.535-1.232-.813-2.109-.815h-2.165c-.698-.415-1.56-.622-2.55-.622H9.64c-.997 0-1.868.215-2.566.638H4.978c-.88 0-1.608.28-2.112.804-.462.496-.706 1.166-.706 1.939v.706a.638.638 0 00.636.641h2.361v.91c.003.244.2.44.44.44h12.765c.243 0 .44-.196.44-.44v-.924h2.417a.634.634 0 00.627-.639v-.708z"
      ></path>
    </svg>
  );
};

GroupLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GroupLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default GroupLight;
