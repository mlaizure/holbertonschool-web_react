import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    const { type, value, html, markAsRead } = this.props;
    if (value) {
      return (<li data-notification-type={type} onClick={markAsRead}>{value}</li>);
    }
    if (html) {
      return (
	<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}></li>
      );
    }
  };
};

NotificationItem.propTypes = {
  html: PropTypes.exact({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
