import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import { LoginWithLogging } from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  };

  handleKeydown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40},
    ];

    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
    ];

    return (
      <>
	<Notifications listNotifications={listNotifications} />
	<div className="App">
	  <Header />
	  <hr />
	  {
	    this.props.isLoggedIn ? (
	      <BodySectionWithMarginBottom title="Course list">
		<CourseList listCourses={listCourses} />
	      </BodySectionWithMarginBottom>
	    ) : (
	      <BodySectionWithMarginBottom title="Log in to continue">
		<LoginWithLogging />
	      </BodySectionWithMarginBottom>
	    )
	  }
	  <BodySection title="News from the School">
	    <p>You are not alone. We've all had our battles with darkness and shadows. I'm here to let you know: It's a pleasure to meet you.</p>
	  </BodySection>
	  <hr />
	  <Footer />
	</div>
      </>
    );
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { return }
};

export default App;
