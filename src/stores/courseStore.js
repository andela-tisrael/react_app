"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constant/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _courses = [];

var CourseStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  getAllCourses: function () {
    return _courses;
  }
});
module.exports = CourseStore;
