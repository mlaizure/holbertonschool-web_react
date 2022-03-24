import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';

function Footer(props) {
  return (
    <div className={css(props.styles.footer)} data-id="app-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {
	props.isLoggedIn
	  ? <p className={css(props.styles.contactUsStyle)} data-id="contact-us"><a href='#'>Contact Us</a></p>
	: null
      }
    </div>
  );
};

Footer.propTypes = {
  styles: PropTypes.object,
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

Footer.defaultProps = {
  styles: {},
  user: {},
  isLoggedIn: false,
};

function mapStateToProps(state) {
  return {
    user: state.toJS().user,
    isLoggedIn: state.toJS().isUserLoggedIn,
  };
}

const ConnectedFooter = connect(mapStateToProps)(Footer);

export { Footer as default, ConnectedFooter };
