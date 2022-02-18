import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      { displayDrawer
	? <div className="Notifications" style = {{ position: 'relative'}}>
	    <button style={{ position: 'absolute', top: '3px', right: '3px', border:'none', background: 'none'}}
		    aria-label="Close"
		    onClick={() => console.log("Close button has been clicked")}>
	      <img src={close_icon} alt="close icon" width="10px" height="10px" />
	    </button>
	    { listNotifications.length > 0
	      ?
		<>
		  <p id="notifIntro">Here is the list of notifications</p>
		  <ul>
		    { listNotifications.map((notification) =>
		      (<NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />)
		    )}
		  </ul>
		</>
		: <ul id="noNotif"><NotificationItem value="No new notification for now" /></ul>
	    }
	  </div>
	: null
      }
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
