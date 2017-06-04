"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation

  ],
  statics: {
    willTransitionFrom: function (transition, component) {
      if (component.state.dirty && !confirm('Leave without saving!')) {
        transition.abort();
      }
    }
  },
  getInitialState: function () {
    return {
      author: { id: '', firstName: '', lastName: '' },
      errors: {},
      dirty: false
    };
  },
  componentWillMount: function () {
    var authorId = this.props.params.id

    if(authorId){
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }
  },
  setAuthorState: function (event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    console.log(this.state);
    return this.setState({ author: this.state.author});
  },
  authorFormIsValid: function(){
    var formIsValid = true;
    this.state.errors = {}; //clears previous errors

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'This field should contain more than 3 characters';
      formIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'This field should contain more than 3 characters';
      formIsValid = false;
    }
    this.setState({errors: this.state.errors});
    return formIsValid;
  },
  saveAuthor: function (event) {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      toastr.error('an error occurred!');
      return;
    };
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    }
    AuthorActions.createAuthor(this.state.author);
    this.setState({dirty: false});
    toastr.success('Author Saved!');
    this.transitionTo('authors');
  },
  render: function() {
    return (
      <div>

        <AuthorForm
          author={this.state.author}
          onChange = {this.setAuthorState}
          onSave = {this.saveAuthor}
          errors = {this.state.errors}
        />
      </div>
    );
  }
});
module.exports = ManageAuthorPage;
