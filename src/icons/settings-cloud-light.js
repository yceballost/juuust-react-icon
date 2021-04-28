import React from 'react';
import PropTypes from 'prop-types';

const SettingsCloudLight = props => {
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
        d="M21.843 13.852c0-4.216-3.28-4.922-4.698-5.028-1.176-3.605-5.26-3.793-6.084-3.793-1.059 0-6.291.286-6.403 5.877-1.05.381-2.502 1.364-2.502 3.885 0 3.084 2.185 4.182 4.23 4.182l10.286-.056c.862 0 5.17-.244 5.17-5.067zm-.824-.003c0 3.947-3.328 4.252-4.35 4.252l-10.291.056c-1.023 0-3.404-.327-3.404-3.367 0-1.705.742-2.781 2.207-3.196.18-.047.3-.21.3-.392l-.005-.112c0-4.865 4.271-5.244 5.582-5.244.74 0 4.485.168 5.376 3.474a.413.413 0 00.386.302c1.263.034 4.199.518 4.199 4.227zm-9.02-.246c.765 0 1.12-.353 1.12-1.112 0-.76-.355-1.115-1.12-1.115-.764 0-1.12.353-1.12 1.115 0 .756.356 1.112 1.12 1.112zm1.942-1.115c0-1.207-.726-1.93-1.942-1.93-1.215 0-1.94.723-1.94 1.93 0 1.207.725 1.93 1.94 1.93 1.216 0 1.942-.723 1.942-1.93zm.843.277h.736l-.022-.574-.714.022a.41.41 0 01-.407-.344 2.484 2.484 0 00-.22-.714.405.405 0 01.078-.471l.546-.54-.437-.412-.524.54a.418.418 0 01-.473.079 2.42 2.42 0 00-.723-.222.41.41 0 01-.347-.403v-.731l-.577.022.02.712a.407.407 0 01-.348.403 2.523 2.523 0 00-.72.219.41.41 0 01-.473-.079l-.547-.54-.414.434.543.518c.132.129.16.33.068.49-.079.143-.166.423-.21.7a.407.407 0 01-.407.342h-.736l.02.574.713-.02a.41.41 0 01.407.345c.044.275.128.558.21.7.09.16.061.362-.068.49l-.543.541.437.412.521-.54a.414.414 0 01.473-.079c.21.104.451.18.72.221a.41.41 0 01.348.404v.73l.557-.019v-.72a.41.41 0 01.347-.403c.272-.042.502-.115.723-.221a.42.42 0 01.474.078l.546.54.414-.433-.546-.521a.405.405 0 01-.078-.471c.103-.204.176-.445.22-.714a.42.42 0 01.413-.345zm1.537-.574a.798.798 0 00-.8-.796v-.005h-.404a4.126 4.126 0 00-.106-.33l.347-.345a.797.797 0 000-1.132l-.437-.434a.808.808 0 00-1.14 0l-.347.344a3.09 3.09 0 00-.334-.106v-.4a.798.798 0 00-.8-.796h-.598a.8.8 0 00-.8.795v.401a3.088 3.088 0 00-.334.104l-.347-.345a.799.799 0 00-.569-.235h-.003a.805.805 0 00-.571.235l-.437.434a.797.797 0 000 1.132l.344.342a3.185 3.185 0 00-.1.336H8.48a.8.8 0 00-.8.795v.594a.8.8 0 00.8.796h.404a3 3 0 00.1.336l-.341.341a.797.797 0 00-.003 1.135l.437.434a.799.799 0 00.571.236h.003a.8.8 0 00.569-.236l.347-.344c.107.039.219.072.333.103v.4c0 .44.359.796.802.796h.596a.798.798 0 00.801-.795v-.398a3.09 3.09 0 00.334-.106l.347.344a.808.808 0 001.14 0l.437-.434a.797.797 0 000-1.132l-.347-.344c.042-.104.075-.216.106-.33h.403a.798.798 0 00.802-.796v-.594z"
      ></path>
    </svg>
  );
};

SettingsCloudLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SettingsCloudLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SettingsCloudLight;
