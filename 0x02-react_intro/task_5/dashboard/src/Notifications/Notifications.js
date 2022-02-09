import React from 'react';
import './Notifications.css';
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
	<li data-priority="default">New course available</li>
	<li data-priority="urgent">New resume available</li>
	<li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
