import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead } = this.props;
    if (value) {
      return (<li className={type === 'default' ? css(styles.defaultNotificationStyle) : css(styles.urgentNotificationStyle)} data-notification-type={type} onClick={markAsRead}>{value}</li>);
    }
    if (html) {
      return (
	<li className={type === 'default' ? css(styles.defaultNotificationStyle) : css(styles.urgentNotificationStyle)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}></li>
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

const styles = StyleSheet.create({
  defaultNotificationStyle: { color: 'blue', },
  urgentNotificationStyle: { color: 'red', },
});

export default NotificationItem;
