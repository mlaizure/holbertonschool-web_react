import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  };

  render() {
    return (
      <>
	<div className={css(styles.menuItemStyle)} data-id="menu-item">Your notifications</div>
	{ this.props.displayDrawer
	  ? <div className={css(styles.notificationStyle)} style = {{ position: 'relative'}} data-id="app-notifications">
	      <button style={{ position: 'absolute', top: '3px', right: '3px', border:'none', background: 'none'}}
		      aria-label="Close"
		      onClick={() => console.log("Close button has been clicked")}>
		<img src={close_icon} alt="close icon" width="10px" height="10px" />
	      </button>
	      { this.props.listNotifications.length > 0
		?
		<>
		  <p id="notifIntro">Here is the list of notifications</p>
		  <ul className={css(styles.ulSmallScreen)}>
		    { this.props.listNotifications.map((notification) =>
		      (<NotificationItem
			 key={notification.id}
			 type={notification.type}
			 value={notification.value}
			 html={notification.html}
			 markAsRead={() => {this.markAsRead(notification.id)}}
		       />)
		    )}
		  </ul>
		</>
		: <ul id="noNotif" className={css(styles.ulSmallScreen)}><NotificationItem value="No new notification for now" /></ul>
	      }
	    </div>
	  : null
	}
      </>
    );
  };
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

const styles = StyleSheet.create({
  notificationStyle: {
    border: '1px #E0344B dashed',
    padding: '0.3rem',
    width: '30%',
    float: 'right',
    '@media (max-width: 900px)': {
      border: 'none',
      padding: 0,
      width: '100%',
      height: '100%',
      float: 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'white',
      fontSize: 20,
    },
  },

  menuItemStyle: {
    textAlign: 'right',
    margin: '0.3rem',
  },

  ulSmallScreen: {
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
});

export default Notifications;
