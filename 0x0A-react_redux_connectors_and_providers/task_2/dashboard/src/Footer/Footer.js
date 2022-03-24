import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer(props) {
  return (
    <div className={css(props.styles.footer)} data-id="app-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {
	props.user.isLoggedIn
	  ? <p className={css(props.styles.contactUsStyle)} data-id="contact-us"><a href='#'>Contact Us</a></p>
	: null
      }
    </div>
  );
};

Footer.propTypes = {
  styles: PropTypes.object,
  user: PropTypes.object,
};

Footer.defaultProps = {
  styles: {},
  user: {},
};

function mapStateToProps(state) {
  return {
    user: state.toJS().user,
  };
}

const ConnectedFooter = connect(mapStateToProps)(Footer);

export { Footer as default, ConnectedFooter };
