import React from 'react';
import Notifications from "./Notifications"
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NotificationsContainer extends React.PureComponent {

  componentDidMount () {
    this.props.fetchNotifications()
  }

  render() {
    return <Notifications {...this.props}/>
  }
}

function mapStateToProps(state) {
  return {
    listNotifications: getUnreadNotificationsByType(state.notifications)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotifications: () => { dispatch(fetchNotifications()) },
    markNotificationAsRead: (idx) => {
      dispatch(markAsRead(idx))
    },
    setNotificationFilter: (filter) => {
      dispatch(setNotificationFilter(filter))
    },
  }
}

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

const ConnectedNotificationsContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

export { ConnectedNotificationsContainer as default, NotificationsContainer }
