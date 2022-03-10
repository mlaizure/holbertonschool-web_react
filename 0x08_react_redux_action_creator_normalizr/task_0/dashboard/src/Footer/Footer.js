import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

function Footer(props) {
  return (
    <AppContext.Consumer>
      {(value) => (
	<div className={css(props.styles.footer)} data-id="app-footer">
	  <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
	  {
	    value.user.isLoggedIn
	      ? <p className={css(props.styles.contactUsStyle)} data-id="contact-us"><a href='#'>Contact Us</a></p>
	      : null
	  }
	</div>
      )}
    </AppContext.Consumer>
  );
};

Footer.propTypes = {
  styles: PropTypes.object,
};

Footer.defaultProps = {
  styles: {},
};

export default Footer;
