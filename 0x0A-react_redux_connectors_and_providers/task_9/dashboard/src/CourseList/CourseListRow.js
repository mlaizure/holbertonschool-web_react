import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({isChecked, onChangeRow, isHeader, textFirstCell, textSecondCell}) {
  return (
    <tr className={isHeader ? css(styles.headerRowStyle) : css(styles.defaultRowStyle)}>
      {
	isHeader
	  ? textSecondCell
	  ? <>
	      <th className={css(styles.textAlignLeft, styles.thBorderBottom)}>{textFirstCell}</th>
	      <th className={css(styles.textAlignLeft, styles.thBorderBottom)}>{textSecondCell}</th>
	    </>
	: <th colSpan="2" className={css(styles.thBorderBottom)}>{textFirstCell}</th>
	: <>
	    <td className={isChecked ? css(styles.rowChecked) : null}>
	      <input
		type="checkbox"
		name="styleCheckbox"
		onChange={ onChangeRow }
		/> {textFirstCell}
	    </td>
	    <td>{textSecondCell}</td>
	  </>
      }
    </tr>
  );
};

const styles = StyleSheet.create({
  defaultRowStyle: { backgroundColor: '#f5f5f5ab', },

  headerRowStyle: { backgroundColor: '#deb5b545', },

  textAlignLeft: { textAlign: 'left', },

  thBorderBottom: { borderBottom: '2px solid lightgray', },

  rowChecked: { backgroundColor: '#e6e4e4', },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  isChecked: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChangeRow: PropTypes.func,
};

CourseListRow.defaultProps = {
  isHeader: false,
  isChecked: false,
  textSecondCell: null,
  onChangeRow: () => {},
};

export default CourseListRow;
