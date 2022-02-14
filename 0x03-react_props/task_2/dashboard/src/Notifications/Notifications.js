import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';

const Notifications = () => {
  return (
    <div className="Notifications" style = {{ position: 'relative'}}>
      <p>Here is the list of notifications</p>
      <button style={{ position: 'absolute', top: '3px', right: '3px', border:'none', background: 'none'}}
	      aria-label="Close"
	      onClick={() => console.log("Close button has been clicked")}>
	<img src={close_icon} alt="close icon" width="10px" height="10px" />
      </button>
      <ul>
	<NotificationItem type="default" value="New course available" />
	<NotificationItem type="urgent" value="New resume available" />
	<NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
}

export default Notifications;
