import React from 'react';
import { css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer(props) {
  return (
    <div className={css(props.styles)} data-id="app-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  );
};

export default Footer;
