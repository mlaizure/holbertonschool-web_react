import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import { LoginWithLogging } from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from "../utils/utils";
import { defaultUser, AppContext } from './AppContext';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => { this.setState({ user: defaultUser }); },
      listNotifications: [
	{id: 1, type: 'default', value: 'New course available'},
	{id: 2, type: 'urgent', value: 'New resume available'},
	{id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
      ],
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  };

  markNotificationAsRead(id) {
    const newNotifications = this.state.listNotifications.filter(notification => notification.id !== id);
    this.setState({ listNotifications: newNotifications });
  };

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  };

  handleDisplayDrawer() { this.setState({ displayDrawer: true }); };
  handleHideDrawer() { this.setState({ displayDrawer: false }); };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  };

  handleKeydown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.state.logOut();
    }
  };

  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40},
    ];

    const v = { user: this.state.user, logOut: this.state.logOut };
    return (
      <AppContext.Provider value={v}>
	<
	  Notifications
	  listNotifications={this.state.listNotifications}
	  displayDrawer={this.state.displayDrawer}
	  handleDisplayDrawer={this.handleDisplayDrawer}
	  handleHideDrawer={this.handleHideDrawer}
	  markNotificationAsRead={this.markNotificationAsRead}
	/>
	<div className={css(styles.app)}>
	  <Header />
	  <hr className={css(styles.hr)}/>
	  {
	    this.state.user.isLoggedIn ? (
	      <BodySectionWithMarginBottom title="Course list">
		<CourseList listCourses={listCourses} />
	      </BodySectionWithMarginBottom>
	    ) : (
	      <BodySectionWithMarginBottom title="Log in to continue">
		<LoginWithLogging logIn={this.logIn} />
	      </BodySectionWithMarginBottom>
	    )
	  }
	  <BodySection title="News from the School">
	    <p>You are not alone. We've all had our battles with darkness and shadows. I'm here to let you know: It's a pleasure to meet you.</p>
	  </BodySection>
	  <hr className={css(styles.hr)}/>
	  <Footer styles={styles}/>
	</div>
      </AppContext.Provider>
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

function mapStateToProps(state) {
  return { isLoggedIn: state.toJS().isUserLoggedIn };
}
connect(mapStateToProps)(App);

export { App as default, mapStateToProps };
