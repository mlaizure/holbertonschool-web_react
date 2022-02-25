import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead } = this.props;
    if (value) {
      return (<li className={type === 'default' ? css(styles.defaultNotificationStyle, styles.itemSmallScreen) : css(styles.urgentNotificationStyle, styles.itemSmallScreen)} data-notification-type={type} onClick={markAsRead}>{value}</li>);
    }
    if (html) {
      return (
	<li className={type === 'default' ? css(styles.defaultNotificationStyle, styles.itemSmallScreen) : css(styles.urgentNotificationStyle, styles.itemSmallScreen)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}></li>
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

  itemSmallScreen: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: 'solid black 1px',
      fontSize: 20,
      padding: '10px 8px',
      listStyleType: 'none',
      margin: 0,
    },
  },
});

export default NotificationItem;
