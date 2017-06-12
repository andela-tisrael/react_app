"use strict";
var React = require('react');
var CourseList = require('./courseList');
var CourseStore = require('../../stores/courseStore');


var Courses = React.createClass({
  getInitialState: function () {
    return {
      courses: CourseStore.getAllCourses()
    };
  },
  _onChange: function () {
    this.setState({courses: CourseStore.getAllCourses()})
  },
  componentWillMount: function(){
    CourseStore.addChangeListener(this._onChange());
  },
  // componentWillUnmount: function(){
  //   CourseStore.removeChangeListener(this._onChange());
  // },
  render: function() {
    return (
    <div>
      <h1>Courses</h1>
      <CourseList courses={this.state.courses}/>
    </div>
    )
  }
});
module.exports = Courses;
