import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import { connect } from 'react-redux';
import { selectCourse, unSelectCourse, fetchCourses } from '../actions/courseActionCreators';
import { getCourses } from "../selectors/courseSelector"


class CourseList extends React.Component {

  componentDidMount() {
    this.props.fetchCourses()
  }

  render() {
    const onChangeRow = (id, checked) => {
      console.log("DID CHANGE ROW?")
      if (checked)
        this.props.selectCourse(id)
      else
        this.props.unSelectCourse(id)
    }

    const { fetchCourses, listCourses } = this.props
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
        <CourseListRow
          isChecked={ course.isSelected }
          onChangeRow={ () => { onChangeRow(course.id, !course.isSelected) } }
          key={course.id}
          textFirstCell={course.name}
          textSecondCell={course.credit}
        />
      ))
    )}
        </tbody>
      </table>
    );
  };
}

CourseList.propTypes = {
  listCourses: PropTypes.array,
};

CourseList.defaultProps = {
  listCourses: [ ],
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

const styles = StyleSheet.create({
  courseListStyle: {
    border: '2px solid lightgray',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
    selectCourse: (index) => dispatch(selectCourse(index)),
    unSelectCourse: (index) => dispatch(unSelectCourse(index)),
  };
}

function mapStateToProps (state) {
  return {
    listCourses: getCourses(state.courses).toJS()
  };
}

const ConnectedCourseList = connect(mapStateToProps, mapDispatchToProps)(CourseList);

export { CourseList as default, ConnectedCourseList };
