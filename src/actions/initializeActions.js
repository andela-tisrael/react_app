"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var authorApi = require('../api/authorApi');
var courseApi = require('../api/courseApi');
var actionTypes = require('../constant/actionTypes');

var InitializeActions = {
  initApp: function(){
    Dispatcher.dispatch({
      actionType: actionTypes.INITIALIZE,
      initialData: {
        authors: authorApi.getAllAuthors(),
      }
    });
  },
  initCourse: function () {
    Dispatcher.dispatch({
      actionType: actionTypes.INITIALIZE_COURSES,
      initialData: {
        courses: courseApi.getAllCourses(),
      }
    });
  }
};

module.exports = InitializeActions;
