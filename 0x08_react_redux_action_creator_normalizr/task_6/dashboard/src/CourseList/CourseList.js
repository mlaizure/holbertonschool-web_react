import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.courseListStyle)}>
      <thead>
	<CourseListRow isHeader={true} textFirstCell="Available courses" />
	<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
	{listCourses.length === 0 ? (
	  <CourseListRow textFirstCell="No course available yet" />
	) : (
	  listCourses.map((course) => (
	    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
	  ))
	)}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

const styles = StyleSheet.create({
  courseListStyle: {
    border: '2px solid lightgray',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default CourseList;
