import React from 'react';
import PropTypes from 'prop-types';

const BuyPlansRegular = props => {
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
        d="M10.476 17.042h6.27c.828 0 1.531-.283 2.089-.84.532-.53.916-1.286 1.182-2.311.117-.457.507-2.02.882-3.533l.412-1.648v-.002l.344-1.375a.562.562 0 00-.543-.697h-3.39V5.45a.42.42 0 00-.123-.297l-3.008-3.008-.003-.003a.42.42 0 00-.297-.123h-4c-.479 0-.787.308-.787.784V6.65a.556.556 0 00-.126-.014H7.1a720.852 720.852 0 00-.44-2.535C6.438 2.882 5.288 2 3.921 2H2.574a.562.562 0 00-.56.56c0 .308.252.56.56.56h1.35c.813 0 1.513.505 1.633 1.177.18 1.017 1.502 8.689 1.633 9.54.163 1.029.547 1.832 1.138 2.39.568.532 1.31.815 2.148.815zm6.41-11.168v6.905H10.352V2.863h3.52V4.08c.004.532.107.936.317 1.236.18.252.533.554 1.194.557h1.501zm3.509 1.882h-2.672v5.087c0 .468-.303.773-.773.773l-.502.003h-6.154c-.487 0-.79-.303-.79-.793V7.742a.557.557 0 01-.126.014H7.292c.43 2.496.928 5.402 1.008 5.908.123.776.389 1.361.798 1.748.359.339.824.51 1.378.51h6.266c.684 0 1.653-.239 2.188-2.311.077-.295.268-1.062.497-1.98l.385-1.541c.216-.869.423-1.7.583-2.334zM9.283 21.255c.291.28.692.423 1.193.423.502 0 .905-.143 1.193-.423.306-.294.46-.706.46-1.23s-.154-.935-.46-1.23c-.29-.28-.694-.423-1.193-.423-.498 0-.902.143-1.193.424-.305.294-.46.705-.46 1.23 0 .523.155.935.46 1.229zm1.193-1.762c-.409 0-.532.123-.532.532 0 .41.123.532.532.532.41 0 .532-.123.532-.532 0-.409-.123-.532-.532-.532zm4.27 1.762c.29.28.69.423 1.192.423s.905-.143 1.194-.423c.305-.294.459-.706.459-1.23s-.157-.935-.46-1.23c-.29-.28-.694-.423-1.193-.423-.498 0-.902.143-1.193.424-.305.294-.46.705-.46 1.23 0 .523.155.935.46 1.229zm1.192-1.762c-.409 0-.532.123-.532.532 0 .41.123.532.532.532.41 0 .533-.123.533-.532 0-.409-.124-.532-.533-.532zM11.311 7.616h4.37a.42.42 0 100-.84h-4.37a.42.42 0 100 .84zm0 1.913h4.37a.42.42 0 100-.84h-4.37a.42.42 0 100 .84zm4.37 1.91h-4.37a.42.42 0 110-.84h4.37a.42.42 0 110 .84zm-.967-7.982v.621c.003.88.32.956.672.956h.902l-1.574-1.577z"
      ></path>
    </svg>
  );
};

BuyPlansRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BuyPlansRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BuyPlansRegular;
