"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var authorApi = require('../api/authorApi');
var actionTypes = require('../constant/actionTypes');

var authorActions = {
  createAuthor: function (author) {
    var newAuthor = authorApi.saveAuthor(author);

    // hey dispatcher, go tell all the stores that a new author has just been created
    Dispatcher.dispatch({
      actionType: actionTypes.CREATE_AUTHOR ,
      author: newAuthor
    })
  },

  updateAuthor: function (author) {
    var updatedAuthor = authorApi.saveAuthor(author);
    Dispatcher.dispatch({
      actionType: actionTypes.UPDATE_AUTHOR ,
      author: updatedAuthor
    })
  }
};
module.exports = authorActions;
