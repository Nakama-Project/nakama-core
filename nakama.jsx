if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready

  });

  Template.home.rendered = function () {
    ReactDOM.render(<App />, document.getElementById("render-target"));
  };

  Template.home.events({
    'click #login': function () {
      Meteor.loginWithGithub({
        requestPermissions: ['user', 'public_repo']
      }, function (err) {
        if (err)
          Session.set('errorMessage', err.reason || 'Unknown error');
      });
    },

    'click #logout': function (e, tmpl) {
      Meteor.logout(function (err) {
        if (err) {
          Session.set('errorMessage', err.reason || 'Unknown error');
        }
        else {
          // do something if the user is logged out successfully
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
