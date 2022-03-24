import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import { ConntectedHeader as Header } from '../Header/Header';
import { LoginWithLogging } from '../Login/Login';
import { ConnectedFooter as Footer } from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from "../utils/utils";
import { connect } from 'react-redux';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: [
	{id: 1, type: 'default', value: 'New course available'},
	{id: 2, type: 'urgent', value: 'New resume available'},
	{id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
      ],
    };
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  };

  markNotificationAsRead(id) {
    const newNotifications = this.state.listNotifications.filter(notification => notification.id !== id);
    this.setState({ listNotifications: newNotifications });
  };

  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40},
    ];

    return (
      <
	Notifications
	listNotifications={this.state.listNotifications}
	displayDrawer={this.props.displayDrawer}
	handleDisplayDrawer={this.props.displayNotificationDrawer}
	handleHideDrawer={this.props.hideNotificationDrawer}
	markNotificationAsRead={this.markNotificationAsRead}
      />
      <div className={css(styles.app)}>
	<Header />
	<hr className={css(styles.hr)}/>
	{
	  this.props.isLoggedIn ? (
	    <BodySectionWithMarginBottom title="Course list">
	      <CourseList listCourses={listCourses} />
	    </BodySectionWithMarginBottom>
	  ) : (
	    <BodySectionWithMarginBottom title="Log in to continue">
	      <LoginWithLogging logIn={this.props.login} />
	    </BodySectionWithMarginBottom>
	  )
	}
	<BodySection title="News from the School">
	  <p>You are not alone. We've all had our battles with darkness and shadows. I'm here to let you know: It's a pleasure to meet you.</p>
	</BodySection>
	<hr className={css(styles.hr)}/>
	<Footer styles={styles}/>
      </div>
    );
  };
};

const styles = StyleSheet.create({
  app: { fontFamily: 'Arial' },

  hr: {
    height: '2px',
    backgroundColor: '#E0344B',
    border: 'none',
  },

  footer: {
    fontStyle: 'italic',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactUsStyle: {
    marginTop: '0',
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
}

function mapDispatchToProps(dispatch) {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    login: (...args) => dispatch(loginRequest(...args)),
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.toJS().isUserLoggedIn,
    displayDrawer: state.toJS().isNotificationDrawerVisible,
  };
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { App as default, ConnectedApp, mapStateToProps }
