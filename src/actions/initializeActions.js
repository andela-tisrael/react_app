"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var authorApi = require('../api/authorApi');
var actionTypes = require('../constant/actionTypes');

var InitializeActions = {
  initApp: function(){
    Dispatcher.dispatch({
      actionType: actionTypes.INITIALIZE,
      initialData: {
        authors: authorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitializeActions;
