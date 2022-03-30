import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import close_icon from '../assets/close-icon.png';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';

function Notifications (props) {
    return (
      <>
	{ props.displayDrawer
	  ? <div className={css(styles.notificationStyle)} style = {{ position: 'relative'}} data-id="app-notifications">
	      <button style={{ position: 'absolute', top: '3px', right: '3px', border:'none', background: 'none', cursor: 'pointer'}}
		      aria-label="Close"
		      data-id="close-notifications"
		      onClick={() => props.handleHideDrawer()}>
		<img src={close_icon} alt="close icon" width="10px" height="10px" />
	      </button>
	      { props.listNotifications.length > 0
		?
		<>
		  <p id="notifIntro">Here is the list of notifications</p>
		  <button
		    onClick={() => props.setNotificationFilter('URGENT')}
		  data-id='urgent-notif'>
		    !!
		  </button>
		  <button
		    onClick={() => props.setNotificationFilter('DEFAULT')}
		  data-id='default-notif'>
		    💠
		  </button>
		  <ul className={css(styles.ulSmallScreen)}>
		    { props.listNotifications.map((notification) =>
		      (<NotificationItem
			 key={notification.guid}
			 type={notification.type}
			 value={notification.value}
			 html={notification.html}
			 markNotificationAsRead={() => {
			   props.markNotificationAsRead(notification.guid)
			 }}
		       />)
		    )}
		  </ul>
		</>
		: <ul id="noNotif" className={css(styles.ulSmallScreen)}><NotificationItem value="No new notification for now" /></ul>
	      }
	    </div>
	  : <
	      div className={css(styles.menuItemStyle)}
	      data-id="menu-item"
	      onClick={() => props.handleDisplayDrawer()}
	    >
	    Your notifications</div>
	}
      </>
    );
  };

const opacityKeyframes = {
  'from': { opacity: 0.5, },
  'to': { opacity: 1, },
};

const transformKeyframes = {
  '0%': { transform: 'translateY(0)', },
  '50%': { transform: 'translateY(-5px)', },
  '100%': { transform: 'translateY(5px)', },
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
      fontSize: 20,
      backgroundColor: 'white',
    },
  },

  menuItemStyle: {
    float: 'right',
    margin: '0.3rem',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, transformKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },

  ulSmallScreen: {
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.array,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  listNotifications: [],
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  markNotificationAsRead: () => {},
  setNotificationFilter: () => {},
};

export default Notifications
