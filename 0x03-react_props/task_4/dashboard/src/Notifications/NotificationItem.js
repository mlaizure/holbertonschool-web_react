import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({type, html, value}) => {
  if (value) {
    return (<li data-notification-type={type}>{value}</li>);
  }
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }
};

NotificationItem.propTypes = {
  html: PropTypes.exact({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
